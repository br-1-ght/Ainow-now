import { Calendar, Zap, Settings, Rocket } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Calendar,
    title: "Book Free Consultation",
    description: "We understand your business needs (30 mins)",
  },
  {
    number: "2",
    icon: Zap,
    title: "AI Creates First Draft",
    description: "Our AI system builds initial version in 24-48 hours",
  },
  {
    number: "3",
    icon: Settings,
    title: "Expert Refinement",
    description: "Our team customizes and perfects everything",
  },
  {
    number: "4",
    icon: Rocket,
    title: "Launch & Support",
    description: "Go live with ongoing support and training",
  },
];

export function HowItWorksSection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            From Idea to Launch in 4 Simple Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative text-center">
                {/* Connector line (hidden on mobile and last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-primary-foreground/20" />
                )}

                {/* Step circle */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 mb-4 bg-cyan rounded-full text-primary">
                  <Icon className="h-7 w-7" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-accent text-accent-foreground text-sm font-bold rounded-full flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-primary-foreground/70 text-sm">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
