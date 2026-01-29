import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { Check, ArrowRight, Phone } from "lucide-react";

const packages = [
  {
    name: "After-Hours Hero",
    badge: "Perfect for: Small Businesses (1-10 employees)",
    setup: { naira: 899999, usd: 599 },
    monthly: { naira: 89999, usd: 59 },
    delivery: "1 week setup",
    features: [
      "After-hours coverage only (6pm-8am + weekends)",
      "Takes detailed messages",
      "SMS/email alerts for urgent calls",
      "Answers 10-15 common FAQs",
      "Monthly performance report",
      "Works with existing phone number",
    ],
  },
  {
    name: "Office Assistant",
    badge: "Perfect for: Growing Businesses (10-50 employees)",
    popular: true,
    setup: { naira: 1649999, usd: 1099 },
    monthly: { naira: 299999, usd: 199 },
    delivery: "2 weeks setup",
    features: [
      "24/7/30 days call answering",
      "Intelligent department routing",
      "Appointment booking + calendar sync",
      "Handles FAQs",
      "Lead capturing across 2 several platform",
      "Call recording + transcripts",
      "By Weekly Reporting",
    ],
  },
  {
    name: "Full Time Assitant",
    badge: "Perfect for: Established Companies (50+ employees)",
    setup: { naira: 14999999, usd: 9999 },
    monthly: { naira: 1498499, usd: 999 },
    delivery: "4 weeks setup",
    features: [
      "24/7/180 days call answering",
      "CRM integration(logs every lead + call)",
      "Handles FAQs",
      "Intelligent Routing",
      "Weekly Reports",
      "Calc + Transcript",
      "Staff Training",
      "Custom AI Personality Training",
    ],
  },
];

const VoiceAI = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-cyan/5 via-background to-primary/5">
        <div className="container-custom text-center">
          <div className="inline-flex p-4 bg-cyan/10 rounded-full mb-6">
            <Phone className="h-10 w-10 text-cyan" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Never Miss Another Call. Ever.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            24/7 AI Voice Assistant that answers calls, routes customers, books appointments, and takes messages — even while you sleep
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-bold text-center mb-12">Choose Your Voice AI Package</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`flex flex-col p-6 bg-card rounded-xl border-2 ${pkg.popular ? 'border-accent' : 'border-border'} hover-lift`}>
                {pkg.popular && <span className="badge-popular self-start mb-3">MOST POPULAR</span>}
                <span className="text-xs text-muted-foreground mb-2">{pkg.badge}</span>
                <h3 className="text-xl font-bold text-foreground mb-4">{pkg.name}</h3>
                
                <div className="mb-2">
                  <span className="text-sm text-muted-foreground">Setup: </span>
                  <PriceDisplay naira={pkg.setup.naira} usd={pkg.setup.usd} size="sm" />
                </div>
                <div className="mb-4">
                  <span className="text-sm text-muted-foreground">Monthly: </span>
                  <PriceDisplay naira={pkg.monthly.naira} usd={pkg.monthly.usd} period="/month" size="sm" />
                </div>
                
                <p className="text-sm text-cyan font-medium mb-4">Delivery: {pkg.delivery}</p>
                
                <ul className="space-y-2 mb-6 flex-1">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-cyan flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button asChild className={pkg.popular ? "bg-accent hover:bg-accent/90 btn-glow" : ""}>
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Stop Missing Calls Today</h2>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
            <Link to="/contact">Book Free Demo <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default VoiceAI;
