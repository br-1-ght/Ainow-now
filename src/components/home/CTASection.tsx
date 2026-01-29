import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Shield } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary to-primary/90">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          Book a free 30-minute consultation. No pressure, just honest advice.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground btn-glow px-8"
          >
            <Link to="/contact">
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8"
          >
            <a
              href="https://wa.me/2349046089019"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us Now
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 text-primary-foreground/70 text-sm">
          <Shield className="h-4 w-4" />
          <span>No credit card required. No obligations.</span>
        </div>
      </div>
    </section>
  );
}
