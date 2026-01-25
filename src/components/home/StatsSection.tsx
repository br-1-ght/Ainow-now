import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Users, TrendingUp, ThumbsUp, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 50,
    suffix: "+",
    label: "Businesses Served",
  },
  {
    icon: TrendingUp,
    prefix: "₦",
    value: 45,
    suffix: "M+",
    sublabel: "($30k+)",
    label: "Revenue Generated",
  },
  {
    icon: ThumbsUp,
    value: 95,
    suffix: "%",
    label: "Client Satisfaction",
  },
  {
    icon: Clock,
    value: 7,
    label: "Day Average Delivery",
  },
];

export function StatsSection() {
  return (
    <section className="py-12 bg-card border-y border-border">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex p-3 bg-primary/10 rounded-full mb-3">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">
                  <AnimatedCounter
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                  {stat.sublabel && (
                    <span className="text-sm text-muted-foreground ml-1">
                      {stat.sublabel}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
