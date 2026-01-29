import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    businessType: "",
    currency: "",
    message: "",
    interests: [] as string[],
    contactMethod: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        "service_65740p6",
        "template_l786yb6",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          country: formData.country || "Not specified",
          businessType: formData.businessType || "Not specified",
          currency: formData.currency || "Not specified",
          message: formData.message || "No message provided",
          interests: formData.interests.length > 0 ? formData.interests.join(", ") : "None selected",
          contactMethod: formData.contactMethod || "Not specified",
        },
        "Jqm3VAMKvkPcrtxOf"
      );

      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
      
      setFormData({
        name: "", email: "", phone: "", country: "", businessType: "", 
        currency: "", message: "", interests: [], contactMethod: ""
      });
    } catch (error: unknown) {
      console.error("Error sending message:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-cyan/5">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Let's Talk About Your Business
          </h1>
          <p className="text-lg text-muted-foreground">
            Book a free consultation or reach out directly. We respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} required />
                  </div>
                  <div>
                    <Label>Country *</Label>
                    <Select value={formData.country} onValueChange={v => setFormData({...formData, country: v})}>
                      <SelectTrigger><SelectValue placeholder="Select country" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nigeria">Nigeria</SelectItem>
                        <SelectItem value="kenya">Kenya</SelectItem>
                        <SelectItem value="ghana">Ghana</SelectItem>
                        <SelectItem value="south-africa">South Africa</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Business Type</Label>
                    <Select value={formData.businessType} onValueChange={v => setFormData({...formData, businessType: v})}>
                      <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="medical">Medical</SelectItem>
                        <SelectItem value="legal">Legal</SelectItem>
                        <SelectItem value="restaurant">Restaurant</SelectItem>
                        <SelectItem value="consulting">Consulting</SelectItem>
                        <SelectItem value="ecommerce">E-commerce</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Preferred Currency</Label>
                    <Select value={formData.currency} onValueChange={v => setFormData({...formData, currency: v})}>
                      <SelectTrigger><SelectValue placeholder="Select currency" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ngn">₦ Naira</SelectItem>
                        <SelectItem value="usd">$ USD</SelectItem>
                        <SelectItem value="gbp">£ GBP</SelectItem>
                        <SelectItem value="eur">€ EUR</SelectItem>
                        <SelectItem value="zar">R Rand</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label>I'm Interested In</Label>
                  <div className="flex flex-wrap gap-4 mt-2">
                    {["Web Solutions", "Voice AI", "Content Automation", "Not sure yet"].map(interest => (
                      <div key={interest} className="flex items-center gap-2">
                        <Checkbox id={interest} checked={formData.interests.includes(interest)} onCheckedChange={() => toggleInterest(interest)} />
                        <Label htmlFor={interest} className="text-sm cursor-pointer">{interest}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Tell us about your business challenge</Label>
                  <Textarea id="message" rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
                </div>

                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 btn-glow" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                <p className="text-xs text-muted-foreground text-center">We respect your privacy. Your information is never shared.</p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="p-6 bg-card rounded-xl border border-border">
                <Phone className="h-6 w-6 text-cyan mb-3" />
                <h3 className="font-semibold mb-1">Call Us</h3>
                <p className="text-muted-foreground text-sm">+234 904 608 9019</p>
                <p className="text-xs text-muted-foreground">Sun-Sun, 24/7 WAT</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <Mail className="h-6 w-6 text-cyan mb-3" />
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-muted-foreground text-sm">hello@ainownow.com</p>
                <p className="text-xs text-muted-foreground">24-hour response time</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <MessageCircle className="h-6 w-6 text-cyan mb-3" />
                <h3 className="font-semibold mb-1">WhatsApp</h3>
                <a href="https://wa.me/234XXXXXXXXXX" className="text-accent hover:underline text-sm">Chat with us</a>
                <p className="text-xs text-muted-foreground">Fastest response</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <MapPin className="h-6 w-6 text-cyan mb-3" />
                <h3 className="font-semibold mb-1">Office</h3>
                <p className="text-muted-foreground text-sm">Lagos, Nigeria</p>
                <p className="text-xs text-muted-foreground">Visit by appointment</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
