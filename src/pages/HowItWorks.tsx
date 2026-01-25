import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, FileText, Search, Settings, Rocket, RefreshCw, HeartHandshake, CheckCircle } from "lucide-react";

const steps = [
  { icon: Calendar, title: "Free Consultation (30 Minutes)", description: "We learn about your business goals and recommend the right solution." },
  { icon: FileText, title: "Proposal & Agreement (1-2 Days)", description: "Custom proposal with scope & pricing. You approve and pay 50% deposit." },
  { icon: Search, title: "Discovery & Planning (3-5 Days)", description: "Kick-off call, audit your setup, create detailed project roadmap." },
  { icon: Settings, title: "AI Development (24-48 Hours)", description: "Our AI creates first draft/version of your solution." },
  { icon: RefreshCw, title: "Expert Refinement (1-4 Weeks)", description: "Our team customizes AI output and adds integrations." },
  { icon: CheckCircle, title: "Your Review & Revisions (3-7 Days)", description: "We present completed work, you provide feedback, we make revisions." },
  { icon: Rocket, title: "Launch (1-3 Days)", description: "Go live with your solution and 48-hour monitoring." },
  { icon: HeartHandshake, title: "Ongoing Support (Forever)", description: "30 days free revisions, monthly reports, continuous optimization." },
];

const HowItWorks = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-cyan/5">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            From First Call to Launch: Here's Exactly How We Work
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent process. Clear timelines. No surprises.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex gap-6 p-6 bg-card rounded-xl border border-border hover-lift">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-6 h-6 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Payment */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-2xl font-display font-bold mb-6">Simple, Fair Payment Terms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="p-4 bg-card rounded-lg border border-border">
              <p className="font-semibold">50% deposit to start</p>
              <p className="text-sm text-muted-foreground">50% on completion (before launch)</p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <p className="font-semibold">We accept:</p>
              <p className="text-sm text-muted-foreground">Bank transfer, Card, Paystack, PayPal, Wise</p>
            </div>
          </div>
          <p className="mt-4 text-muted-foreground">Currencies: ₦ (Naira), $ (USD), £ (GBP), € (EUR), R (ZAR)</p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Ready to Get Started?</h2>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
            <Link to="/contact">Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
