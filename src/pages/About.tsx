import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, DollarSign, Handshake, Globe, Wrench, Check } from "lucide-react";

const values = [
  { icon: Target, title: "Speed Without Shortcuts", description: "We move fast because AI lets us, not because we cut corners." },
  { icon: DollarSign, title: "Honest Pricing", description: "No hidden fees. You know exactly what you're paying (in ₦ or $)." },
  { icon: Handshake, title: "Partnership Over Profit", description: "We'd rather help you start small and grow with us." },
  { icon: Globe, title: "Built for Africa", description: "We understand local budgets, accents, and business challenges." },
  { icon: Wrench, title: "AI + Human = Perfect", description: "Every project has expert human oversight from start to finish." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-cyan/5">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            About AI Now Now
          </h1>
          <p className="text-lg text-muted-foreground">Your Business, On Time. Powered by AI.</p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl font-display font-bold mb-6">Our Story</h2>
          <div className="prose prose-lg text-muted-foreground space-y-4">
            <p>We started AI Now Now because we got tired of watching African businesses struggle with the same problems: slow service providers, expensive solutions built for foreign markets, and being left behind while competitors modernize.</p>
            <p>In 2024, our founder experienced something incredible — an AI voice assistant that felt almost human. It routed calls perfectly, understood every word, and took messages at 2am Lagos time.</p>
            <p>That moment sparked a question: <strong className="text-foreground">"Why don't African businesses have access to this?"</strong></p>
            <p>So we built AI Now Now to bridge that gap. We combine cutting-edge AI systems with expert human oversight — delivering what used to take months in just days, at prices African businesses can afford.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <h2 className="text-2xl font-display font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="p-6 bg-card rounded-xl border border-border">
                  <div className="p-3 bg-cyan/10 rounded-lg inline-flex mb-4">
                    <Icon className="h-6 w-6 text-cyan" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-2xl font-display font-bold mb-8">Our Track Record</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "50+ businesses transformed",
              "₦45M+ ($30k+) revenue generated",
              "95% client satisfaction",
              "7-day average delivery",
              "Zero long-term contracts",
              "4+ African countries served",
            ].map((stat, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Check className="h-5 w-5 text-cyan flex-shrink-0" />
                <span className="text-sm text-foreground">{stat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Ready to Transform Your Business?</h2>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
            <Link to="/contact">Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
