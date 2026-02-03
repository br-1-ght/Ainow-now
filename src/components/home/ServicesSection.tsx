import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import {
  Globe,
  Phone,
  Lightbulb,
  Check,
  ArrowRight,
  Clock,
  Smartphone,
  CreditCard,
  Bot,
  MessageSquare,
  Share2,
  FileText,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Complete Web Solutions",
    description:
      "Professional websites built in days, not months. From simple online presence to full business automation systems.",
    features: [
      { icon: Clock, text: "7-21 day delivery" },
      { icon: Smartphone, text: "Mobile-responsive design" },
      { icon: CreditCard, text: "Payment integration" },
      { icon: Bot, text: "CRM & automation" },
    ],
    priceNaira: 299999,
    priceUsd: 199,
    priceLabel: "From",
    cta: "Explore Packages",
    link: "/web-solutions",
    badge: "4 Package Options",
    color: "primary",
  },
  {
    icon: Phone,
    title: "24/7 AI Voice Assistant",
    description:
      "Never miss a call again. AI answers phones, routes customers, books appointments, and takes messages — even at 2am.",
    features: [
      { icon: Phone, text: "Works with existing number" },
      { icon: Clock, text: "After-hours coverage" },
      { icon: MessageSquare, text: "Intelligent call routing" },
      { icon: Bot, text: "CRM integration" },
    ],
    priceNaira: 79999,
    priceUsd: 53,
    priceLabel: "From",
    pricePeriod: "/month",
    cta: "Learn More",
    link: "/voice-ai",
    badge: "24/7 Coverage",
    color: "cyan",
  },
  {
    icon: Lightbulb,
    title: "Business Ideation → Execution",
    description:
      "We take your idea from concept to a working business — fast, structured, and automated. From validation to full venture build.",
    features: [
      { icon: FileText, text: "Idea validation & strategy" },
      { icon: Globe, text: "MVP development" },
      { icon: Bot, text: "Full automation systems" },
      { icon: Share2, text: "Growth partnership" },
    ],
    priceNaira: 499999,
    priceUsd: 333,
    priceLabel: "From",
    pricePeriod: "",
    cta: "Explore Packages",
    link: "/content-automation",
    badge: "4 Package Tiers",
    color: "accent",
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Three Ways We <span className="text-primary">Transform</span> Your Business
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine cutting-edge AI systems with expert human oversight to deliver what
            used to take months in just days.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const bgColor =
              service.color === "cyan"
                ? "bg-cyan/10"
                : service.color === "accent"
                ? "bg-accent/10"
                : "bg-primary/10";
            const iconColor =
              service.color === "cyan"
                ? "text-cyan"
                : service.color === "accent"
                ? "text-accent"
                : "text-primary";
            const badgeColor =
              service.color === "cyan"
                ? "bg-cyan/10 text-cyan border-cyan/20"
                : service.color === "accent"
                ? "bg-accent/10 text-accent border-accent/20"
                : "bg-primary/10 text-primary border-primary/20";
            const glowColor =
              service.color === "cyan"
                ? "group-hover:shadow-[0_0_40px_-10px_hsl(var(--cyan))]"
                : service.color === "accent"
                ? "group-hover:shadow-[0_0_40px_-10px_hsl(var(--accent))]"
                : "group-hover:shadow-[0_0_40px_-10px_hsl(var(--primary))]";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className={`flex flex-col h-full p-6 bg-card rounded-xl border border-border transition-all duration-500 ${glowColor}`}>
                  {/* Badge and Icon */}
                  <div className="flex justify-between items-start mb-4">
                    <motion.div 
                      className={`inline-flex p-3 ${bgColor} rounded-lg`}
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Icon className={`h-7 w-7 ${iconColor}`} />
                    </motion.div>
                    <motion.span
                      className={`px-3 py-1 text-xs font-medium rounded-full border ${badgeColor}`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {service.badge}
                    </motion.span>
                  </div>

                  {/* Title and description */}
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  {/* Features with staggered animation */}
                  <ul className="space-y-3 mb-6 flex-1">
                    {service.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                      >
                        <motion.div 
                          className="flex-shrink-0 p-1 bg-muted rounded"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Check className="h-4 w-4 text-cyan" />
                        </motion.div>
                        <span className="text-sm text-foreground">
                          {feature.text}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-sm text-muted-foreground">
                      {service.priceLabel}
                    </span>
                    <PriceDisplay
                      naira={service.priceNaira}
                      usd={service.priceUsd}
                      period={service.pricePeriod}
                    />
                  </div>

                  {/* CTA */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      asChild
                      className={`w-full ${
                        service.color === "accent"
                          ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                          : service.color === "cyan"
                          ? "bg-cyan hover:bg-cyan/90 text-cyan-foreground"
                          : "bg-primary hover:bg-primary/90"
                      }`}
                    >
                      <Link to={service.link} className="flex items-center justify-center">
                        {service.cta}
                        <motion.span
                          className="ml-2"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </motion.span>
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
