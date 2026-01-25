import { Globe, Users, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "Built for Africa, Priced for Africa",
    description:
      "Fair pricing, local support, market understanding across Nigeria, Kenya, Ghana, South Africa",
  },
  {
    icon: Users,
    title: "AI + Human Expertise",
    description:
      "Not just AI output, every project refined by experts who understand your business",
  },
  {
    icon: TrendingUp,
    title: "Scale As You Grow",
    description:
      "Start small, upgrade when ready, no forced contracts or unnecessary upsells",
  },
];

export function WhyChooseSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Why African Businesses Trust AI Now Now
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center p-6">
                <div className="inline-flex p-4 bg-cyan/10 rounded-full mb-4">
                  <Icon className="h-8 w-8 text-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
