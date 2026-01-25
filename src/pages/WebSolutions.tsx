import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { Check, ArrowRight } from "lucide-react";

const packages = [
  {
    id: "online-now",
    name: "Online Now",
    badge: "Perfect for: New Businesses",
    priceNaira: 299999,
    priceUsd: 199,
    monthly: { naira: 99999, usd: 66, months: 3 },
    delivery: "7-10 days",
    features: [
      "Professional 5-page website",
      "Mobile responsive design",
      "WhatsApp integration",
      "Google My Business setup",
      "Basic SEO optimization",
      "14 days social media content calendar",
    ],
  },
  {
    id: "visible-now",
    name: "Visible Now",
    badge: "Perfect for: Established Services",
    popular: true,
    priceNaira: 599999,
    priceUsd: 399,
    monthly: { naira: 199999, usd: 133, months: 3 },
    delivery: "14-21 days",
    features: [
      "Everything in Online Now, plus:",
      "5 pages custom website",
      "24/7 AI Chatbot",
      "Payment gateway (Paystack/Flutterwave)",
    ],
  },
  {
    id: "converting-now",
    name: "Converting Now",
    badge: "Perfect for: Growing Businesses",
    priceNaira: 1199999,
    priceUsd: 799,
    monthlyFee: { naira: 149999, usd: 99 },
    delivery: "4-6 weeks",
    features: [
      "Everything in Visible Now, plus:",
      "Full CRM integration",
      "Payment gateway (Paystack/Flutterwave)",
      "Email marketing automation",
      "3 months automated social posting",
      "10 AI video scripts",
    ],
  },
  {
    id: "dominating-now",
    name: "Dominating Now",
    badge: "Perfect for: Enterprises",
    priceNaira: "From ₦2,499,999",
    priceUsd: "$1,666",
    monthlyFee: { naira: 399999, usd: 266 },
    delivery: "8-12 weeks",
    features: [
      "Everything in Converting Now, plus:",
      "24/7 AI Voice Assistant System",
      "Advanced lead qualification",
      "Analytics dashboard",
      "3 months content automation",
    ],
  },
];

const WebSolutions = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-cyan/5">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Professional Websites Built in Days, Not Months
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI-powered development + expert customization = Fast, affordable, high-quality websites
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-bold text-center mb-4">Choose Your Web Solution Package</h2>
          <p className="text-center text-muted-foreground mb-12">Start small, scale up as you grow. No long-term contracts.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.id} id={pkg.id} className={`flex flex-col p-6 bg-card rounded-xl border-2 ${pkg.popular ? 'border-accent' : 'border-border'} hover-lift`}>
                {pkg.popular && (
                  <span className="badge-popular self-start mb-3">MOST POPULAR</span>
                )}
                <span className="text-xs text-muted-foreground mb-2">{pkg.badge}</span>
                <h3 className="text-xl font-bold text-foreground mb-4">{pkg.name}</h3>
                
                {typeof pkg.priceNaira === 'number' ? (
                  <PriceDisplay naira={pkg.priceNaira} usd={pkg.priceUsd as number} className="mb-2" />
                ) : (
                  <div className="text-2xl font-bold mb-2">{pkg.priceNaira} <span className="text-muted-foreground text-base">({pkg.priceUsd})</span></div>
                )}
                
                {pkg.monthly && (
                  <p className="text-sm text-muted-foreground mb-4">Or ₦{pkg.monthly.naira.toLocaleString()}/month (${pkg.monthly.usd}/mo) for {pkg.monthly.months} months</p>
                )}
                {pkg.monthlyFee && (
                  <p className="text-sm text-muted-foreground mb-4">+ ₦{pkg.monthlyFee.naira.toLocaleString()}/month (${pkg.monthlyFee.usd}/mo)</p>
                )}
                
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
                  <Link to="/contact">{pkg.id === 'dominating-now' ? 'Request Custom Quote' : 'Get Started'}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Ready for Your New Website?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link to="/contact">Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WebSolutions;
