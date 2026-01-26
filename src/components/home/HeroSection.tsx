import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { FloatingShapes } from "@/components/ui/FloatingShapes";
import { ArrowRight, Zap, DollarSign, Bot, Euro, PoundSterling, IndianRupee } from "lucide-react";

const currencyIcons = [DollarSign, Euro, PoundSterling, IndianRupee];

function SpeedIcon({ isHovered }: { isHovered: boolean }) {
  return (
    <motion.div
      animate={isHovered ? { x: [0, 8, 0], scale: [1, 1.2, 1] } : {}}
      transition={{ duration: 0.3, repeat: isHovered ? Infinity : 0, repeatDelay: 0.1 }}
    >
      <Zap className="h-6 w-6 text-cyan" />
    </motion.div>
  );
}

function CurrencyIcon({ isHovered }: { isHovered: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isHovered) {
      setCurrentIndex(0);
      return;
    }
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % currencyIcons.length);
    }, 400);
    return () => clearInterval(interval);
  }, [isHovered]);

  const Icon = currencyIcons[currentIndex];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.15 }}
      >
        <Icon className="h-6 w-6 text-accent" />
      </motion.div>
    </AnimatePresence>
  );
}

function AIIcon({ isHovered }: { isHovered: boolean }) {
  return (
    <motion.div
      animate={isHovered ? { opacity: [1, 0.3, 1] } : {}}
      transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
    >
      <Bot className="h-6 w-6 text-primary" />
    </motion.div>
  );
}

export function HeroSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    { 
      IconComponent: SpeedIcon, 
      title: "Speed", 
      desc: "7-21 day delivery", 
      color: "cyan" 
    },
    { 
      IconComponent: CurrencyIcon, 
      title: "Affordability", 
      desc: "From ₦79,999/mo ($53/mo)", 
      color: "accent" 
    },
    { 
      IconComponent: AIIcon, 
      title: "AI-Powered", 
      desc: "Latest technology", 
      color: "primary" 
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-cyan/5 min-h-[90vh] flex items-center">
      {/* Animated background shapes */}
      <FloatingShapes variant="hero" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="py-20 md:py-28 lg:py-36"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6 backdrop-blur-sm border border-primary/20">
                <motion.span 
                  className="w-2 h-2 bg-cyan rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Trusted by 50+ African Businesses
              </div>
            </motion.div>

            {/* Main headline */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transform Your Business in{" "}
              <motion.span 
                className="text-primary relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Days
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-cyan to-primary rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </motion.span>
              , Not Months
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              We are AI Experts/Consultants that builds websites, automates customer service, and creates
              content — while you focus on what you do best
            </motion.p>

            {/* CTA buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 shadow-lg btn-glow"
                >
                  <Link to="/web-solutions">
                    Explore Our Solutions
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.span>
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/5 px-8"
                >
                  <Link to="/contact">Book Free Consultation</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Animated stat */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-xl shadow-lg border border-border backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px -15px rgba(0,0,0,0.15)",
                }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="text-2xl md:text-3xl font-bold text-accent">
                  <AnimatedCounter end={45} prefix="₦" suffix="M+" />
                </span>
                <span className="text-muted-foreground">
                  (<AnimatedCounter end={30} prefix="$" suffix="k+" />) Revenue Generated for Clients
                </span>
              </motion.div>
            </motion.div>

            {/* Geographic note */}
            <motion.p 
              className="text-sm text-muted-foreground mt-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Serving businesses across Nigeria, Ghana, Kenya, and South Africa
            </motion.p>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            {features.map((feature, index) => {
              const { IconComponent, title, desc, color } = feature;
              const bgColor = color === "cyan" ? "bg-cyan/10" : color === "accent" ? "bg-accent/10" : "bg-primary/10";
              const isHovered = hoveredIndex === index;
              
              return (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border backdrop-blur-sm cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.15 }}
                  whileHover={{ 
                    y: -4,
                    boxShadow: "0 15px 30px -10px rgba(0,0,0,0.1)",
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  <div className={`p-2 ${bgColor} rounded-lg`}>
                    <IconComponent isHovered={isHovered} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{title}</p>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
