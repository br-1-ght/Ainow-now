import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { Check, ArrowRight, Lightbulb, Clock } from "lucide-react";

const packages = [
  {
    name: "Idea Validation",
    tier: "STARTUP",
    badge: "Have an idea, nothing built yet",
    setup: { naira: 1499999, usd: 1000 },
    monthly: { naira: 299999, usd: 200 },
    delivery: "5-7 days",
    goal: "Turn raw idea into a testable concept.",
    features: [
      "Strategy discovery session",
      "Problem-solution definition",
      "Target customer profile",
      "Competitive landscape",
      "Monetization model",
      "MVP feature scope",
      "Validation roadmap",
    ],
    deliverables: [
      "Validation document",
      "MVP feature list",
      "Business deck (5-7 slides)",
    ],
    positioning: "Know if your idea is worth building.",
  },
  {
    name: "MVP Launch",
    tier: "GROWTH",
    badge: "Ready to launch",
    popular: true,
    setup: { naira: 5249999, usd: 3500 },
    monthly: { naira: 1049999, usd: 700 },
    delivery: "2-4 weeks",
    goal: "Turn idea into a real product.",
    features: [
      "Everything in Startup, plus:",
      "Brand name & positioning",
      "Landing page / website",
      "Core workflows & CRM",
      "Payment integration",
      "Lead capture & automation",
      "Pitch deck",
    ],
    deliverables: [
      "Live website & MVP",
      "CRM system",
      "Pitch deck",
      "Admin access",
    ],
    positioning: "Launch your business fast.",
  },
  {
    name: "Venture Build",
    tier: "SCALE",
    badge: "Serious founders & investors",
    setup: { naira: 14999999, usd: 10000 },
    monthly: { naira: 2999999, usd: 2000 },
    delivery: "Ongoing",
    goal: "Co-build and scale together.",
    features: [
      "Everything in Growth, plus:",
      "Deep market research",
      "Financial model",
      "Growth strategy",
      "Custom AI agents",
      "Advanced analytics",
      "Infrastructure planning",
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
        <div className="container-custom text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex p-4 bg-accent/10 rounded-full mb-6">
              <Lightbulb className="h-10 w-10 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
              From Idea to Execution
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We take your idea from concept to a working business — fast, structured, and automated.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding">
        <div className="container-custom max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Choose Your Package
          </motion.h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Select the tier that matches your stage and ambition.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className={`relative flex flex-col p-8 bg-card rounded-2xl border-2 transition-shadow duration-300 ${
                  pkg.popular 
                    ? 'border-accent shadow-lg shadow-accent/10' 
                    : 'border-border hover:shadow-lg hover:shadow-primary/5'
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                    MOST POPULAR
                  </span>
                )}
                
                <div className="mb-6">
                  <span className="text-xs font-bold tracking-wider text-primary">{pkg.tier}</span>
                  <h3 className="text-2xl font-bold text-foreground mt-1">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{pkg.badge}</p>
                </div>
                
                <div className="space-y-2 mb-6 pb-6 border-b border-border">
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">Setup</span>
                    <PriceDisplay naira={pkg.setup.naira} usd={pkg.setup.usd} size="md" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">Monthly</span>
                    <PriceDisplay naira={pkg.monthly.naira} usd={pkg.monthly.usd} period="/mo" size="sm" />
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-cyan mb-4">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm font-medium">{pkg.delivery}</span>
                </div>
                
                <p className="text-foreground font-medium mb-6">{pkg.goal}</p>
                
                <div className="flex-1 space-y-4 mb-6">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Includes</p>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-cyan flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Deliverables</p>
                    <ul className="space-y-2">
                      {pkg.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground font-medium">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <Button 
                  asChild 
                  size="lg"
                  className={`w-full ${pkg.popular ? "bg-accent hover:bg-accent/90" : ""}`}
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Ready to Build?</h2>
            <p className="text-lg opacity-90 mb-8">
              Book a free discovery call to find the right package for you.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link to="/contact">
                Book Discovery Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ContentAutomation;
