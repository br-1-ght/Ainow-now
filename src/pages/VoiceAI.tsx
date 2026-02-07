import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { Check, ArrowRight, Phone, Clock } from "lucide-react";

const packages = [
  {
    name: "After-Hours Hero",
    tier: "TIER 1",
    badge: "Perfect for: Small Businesses (1–10 employees)",
    positioning: "Your business still answers calls — even when you're offline.",
    setup: { naira: 1499999, usd: 1000 },
    monthly: { naira: 149999, usd: 100 },
    delivery: "7 days",
    features: [
      "After-hours coverage (6pm–8am + weekends)",
      "Takes detailed caller messages",
      "SMS + email alerts for urgent calls",
      "Answers 10–15 FAQs",
      "Monthly call performance report",
      "Works with your existing phone number",
    ],
  },
  {
    name: "Full-Time Assistant",
    tier: "TIER 2",
    badge: "Perfect for: Growing Businesses (10–50 employees)",
    positioning: "Your AI receptionist — 24/7, no breaks, no excuses.",
    popular: true,
    setup: { naira: 2999999, usd: 2000 },
    monthly: { naira: 499999, usd: 333 },
    delivery: "2 weeks",
    features: [
      "Everything in After-Hours Hero, plus:",
      "24/7/365 call answering",
      "Intelligent department routing",
      "Appointment booking + calendar sync",
      "Handles 50+ FAQs",
      "CRM integration (every call logged)",
      "Call recordings + transcripts",
      "Weekly analytics dashboard",
    ],
  },
  {
    name: "Business Voice OS",
    tier: "TIER 3",
    badge: "Perfect for: Established Companies (50+ employees)",
    positioning: "Your entire phone system — automated, intelligent, scalable.",
    setup: { naira: 14999999, usd: 9999 },
    monthly: { naira: 1499999, usd: 999 },
    delivery: "4 weeks",
    features: [
      "Everything in Full-Time Assistant, plus:",
      "Multi-location support",
      "Custom AI personality training",
      "Advanced call routing logic",
      "Escalation protocols (VIP, emergency, priority)",
      "Staff onboarding & training",
      "Dedicated account manager",
    ],
  },
  {
    name: "Enterprise Voice Infrastructure",
    tier: "ENTERPRISE",
    badge: "Perfect for: Corporates, Call-Heavy Businesses, Franchises",
    positioning: "Enterprise-grade AI voice infrastructure.",
    setup: { naira: "From ₦299,999,999", usd: "From $199,999" },
    monthly: { naira: "Custom", usd: "Custom" },
    delivery: "4–6 weeks",
    features: [
      "Everything in Business Voice OS, plus:",
      "Custom AI agents per department",
      "Multi-language & accent support",
      "Advanced analytics & reporting",
      "Infrastructure & load planning",
      "Security & compliance setup",
      "Ongoing optimization & SLA",
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
        <div className="container-custom max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">Choose Your Voice AI Package</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Select the tier that matches your business size and needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className={`relative flex flex-col p-6 bg-card rounded-2xl border-2 transition-shadow duration-300 ${
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
                
                <div className="mb-4">
                  <span className="text-xs font-bold tracking-wider text-cyan">{pkg.tier}</span>
                  <h3 className="text-xl font-bold text-foreground mt-1">{pkg.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{pkg.badge}</p>
                </div>
                
                <p className="text-sm text-foreground/80 italic mb-4">{pkg.positioning}</p>
                
                <div className="space-y-1 mb-4 pb-4 border-b border-border">
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">Setup</span>
                    <PriceDisplay naira={pkg.setup.naira} usd={pkg.setup.usd} size="sm" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">Monthly</span>
                    <PriceDisplay naira={pkg.monthly.naira} usd={pkg.monthly.usd} period="/monthly" size="sm" />
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-cyan mb-4">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm font-medium">{pkg.delivery}</span>
                </div>
                
                <ul className="space-y-2 mb-6 flex-1">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-cyan flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  asChild 
                  className={pkg.popular ? "bg-accent hover:bg-accent/90" : ""}
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
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Stop Missing Calls Today</h2>
          <p className="text-lg opacity-90 mb-8">Book a free demo to see your AI receptionist in action.</p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
            <Link to="/contact">Book Free Demo <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default VoiceAI;
