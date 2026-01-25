import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { Check, ArrowRight, Video } from "lucide-react";

const packages = [
  {
    name: "Social Starter",
    badge: "Perfect for: Solopreneurs & Small Businesses",
    monthly: { naira: 79999, usd: 53 },
    features: [
      "12 posts per month (3x per week)",
      "Platforms: Instagram + Facebook",
      "Images with captions, carousels, quotes",
      "AI-written copy based on your business",
      "Approve via WhatsApp before posting",
      "Auto-posting on your schedule",
      "Monthly performance report",
    ],
  },
  {
    name: "Content Machine",
    badge: "Perfect for: Growing Businesses",
    popular: true,
    monthly: { naira: 179999, usd: 119 },
    features: [
      "20 posts per month (5x per week)",
      "Platforms: Instagram + Facebook",
      "Everything in Social Starter, plus:",
      "4 short-form videos (15-30 seconds)",
      "2 blog posts (500-800 words)",
      "Email newsletter template",
      "Bi-weekly strategy calls",
    ],
  },
  {
    name: "Brand Dominator",
    badge: "Perfect for: Established Brands",
    monthly: { naira: 399999, usd: 266 },
    features: [
      "40 posts per month (daily + stories)",
      "Platforms: Instagram + Facebook",
      "8 professional videos per month",
      "4 long-form blog posts (1,500+ words)",
      "2 email campaigns per month",
      "Community management",
      "Weekly strategy sessions",
    ],
  },
];

const ContentAutomation = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-accent/5 via-background to-cyan/5">
        <div className="container-custom text-center">
          <div className="inline-flex p-4 bg-accent/10 rounded-full mb-6">
            <Video className="h-10 w-10 text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Your Social Media. On Autopilot.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI creates engaging content + videos for your business and posts automatically. You just approve and watch your followers grow.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-bold text-center mb-12">Choose Your Content Package</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`flex flex-col p-6 bg-card rounded-xl border-2 ${pkg.popular ? 'border-accent' : 'border-border'} hover-lift`}>
                {pkg.popular && <span className="badge-popular self-start mb-3">MOST POPULAR</span>}
                <span className="text-xs text-muted-foreground mb-2">{pkg.badge}</span>
                <h3 className="text-xl font-bold text-foreground mb-4">{pkg.name}</h3>
                
                <PriceDisplay naira={pkg.monthly.naira} usd={pkg.monthly.usd} period="/month" className="mb-6" />
                
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

      {/* Guarantee */}
      <section className="py-12 bg-cyan/10">
        <div className="container-custom text-center">
          <p className="text-lg font-semibold text-foreground">60-Day Engagement Guarantee</p>
          <p className="text-muted-foreground">If you don't see measurable improvement in 60 days, we'll refund one month and revise your strategy for free</p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Ready to Dominate Social Media?</h2>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
            <Link to="/contact">Book Strategy Call <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ContentAutomation;
