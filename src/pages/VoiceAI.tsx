import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { Check, ArrowRight, Lightbulb } from "lucide-react";

const packages = [
  {
    name: "Idea Validation",
    tier: "BASIC",
    badge: "Perfect for: People with an idea, nothing built yet",
    setup: { naira: 499999, usd: 333 },
    monthly: null,
    delivery: "5-7 days",
    goal: "Turn raw idea into a clear, testable business concept.",
    features: [
      "1 Strategy Discovery Session",
      "Problem-solution definition",
      "Target customer profile",
      "Value proposition",
      "Competitive landscape snapshot",
      "Monetization model",
      "Feature list (MVP scope)",
      "Validation roadmap",
    ],
    deliverables: [
      "Idea Validation Document",
      "MVP Feature List",
      "Business Summary Deck (5-7 slides)",
    ],
    positioning: "Know if your idea is worth building.",
  },
  {
    name: "MVP Launch",
    tier: "STANDARD",
    badge: "Perfect for: People ready to launch",
    popular: true,
    setup: { naira: 999999, usd: 667 },
    monthly: { naira: 149999, usd: 100 },
    delivery: "2-4 weeks",
    goal: "Turn idea into a real product or service.",
    features: [
      "Everything in BASIC, plus:",
      "Brand name & positioning",
      "Landing page / website",
      "Core workflows",
      "CRM setup",
      "Payment integration",
      "Lead capture",
      "Basic automation",
      "Simple pitch deck",
    ],
    deliverables: [
      "Live website",
      "Working MVP",
      "CRM system",
      "Pitch deck",
      "Admin access",
    ],
    positioning: "Launch your business fast.",
  },
  {
    name: "Business-in-a-Box",
    tier: "PRO",
    badge: "Perfect for: Founders who want systems from day one",
    setup: { naira: 2999999, usd: 2000 },
    monthly: { naira: 299999, usd: 200 },
    delivery: "4-6 weeks",
    goal: "Launch with structure, automation, and scalability.",
    features: [
      "Everything in STANDARD, plus:",
      "Sales pipeline automation",
      "AI receptionist (web + WhatsApp)",
      "Marketing automation",
      "Finance workflow",
      "Basic dashboard",
      "SOP documentation",
      "Staff onboarding system",
    ],
    deliverables: [
      "Fully automated business system",
      "AI agents",
      "SOP library",
      "KPI dashboard",
    ],
    positioning: "Launch with enterprise-level systems.",
  },
  {
    name: "Venture Build Partnership",
    tier: "ELITE",
    badge: "Perfect for: Serious founders & investors",
    setup: { naira: 9999999, usd: 6667 },
    monthly: { naira: 499999, usd: 333 },
    delivery: "Ongoing",
    goal: "Co-build and scale.",
    features: [
      "Everything in PRO, plus:",
      "Deep market research",
      "Financial model",
      "Growth strategy",
      "Custom AI agents",
      "Advanced analytics",
      "Infrastructure planning",
      "Ongoing optimization",
    ],
    deliverables: [
      "Full venture partnership",
      "Scalable infrastructure",
      "Growth roadmap",
      "Investor-ready materials",
    ],
    positioning: "Co-build and scale together.",
  },
];

const ContentAutomation = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-accent/5 via-background to-cyan/5">
        <div className="container-custom text-center">
          <div className="inline-flex p-4 bg-accent/10 rounded-full mb-6">
            <Lightbulb className="h-10 w-10 text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            From Idea to Execution
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We take your idea from concept to a working business — fast, structured, and automated.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-bold text-center mb-12">Choose Your Package</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <div key={index} className={`flex flex-col p-6 bg-card rounded-xl border-2 ${pkg.popular ? 'border-accent' : 'border-border'} hover-lift`}>
                {pkg.popular && <span className="badge-popular self-start mb-3">MOST POPULAR</span>}
                <span className="text-xs font-semibold text-primary mb-1">{pkg.tier}</span>
                <h3 className="text-xl font-bold text-foreground mb-2">{pkg.name}</h3>
                <p className="text-xs text-muted-foreground mb-4">{pkg.badge}</p>
                
                <div className="mb-2">
                  <span className="text-sm text-muted-foreground">Setup: </span>
                  <PriceDisplay naira={pkg.setup.naira} usd={pkg.setup.usd} size="sm" />
                </div>
                {pkg.monthly && (
                  <div className="mb-4">
                    <span className="text-sm text-muted-foreground">Monthly: </span>
                    <PriceDisplay naira={pkg.monthly.naira} usd={pkg.monthly.usd} period="/month" size="sm" />
                  </div>
                )}
                {!pkg.monthly && <div className="mb-4"><span className="text-sm text-cyan font-medium">One-time payment</span></div>}
                
                <p className="text-sm text-cyan font-medium mb-4">Delivery: {pkg.delivery}</p>
                
                <p className="text-sm text-foreground font-medium mb-3">{pkg.goal}</p>
                
                <div className="mb-4 flex-1">
                  <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">Includes:</p>
                  <ul className="space-y-1.5 mb-4">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs">
                        <Check className="h-3 w-3 text-cyan flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">Deliverables:</p>
                  <ul className="space-y-1.5">
                    {pkg.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs">
                        <Check className="h-3 w-3 text-primary flex-shrink-0 mt-0.5" />
                        <span className="font-medium">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <p className="text-sm text-accent font-semibold italic mb-4">"{pkg.positioning}"</p>
                
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
          <h2 className="text-3xl font-display font-bold mb-4">Ready to Build Your Business?</h2>
          <p className="text-lg opacity-90 mb-6 max-w-xl mx-auto">
            Book a free discovery call and let's explore which package is right for your idea.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
            <Link to="/contact">Book Discovery Call <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ContentAutomation;
