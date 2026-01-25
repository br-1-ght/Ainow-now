import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionCardProps {
  children: ReactNode;
  index?: number;
  className?: string;
  hoverEffect?: "lift" | "glow" | "scale" | "tilt";
}

export function MotionCard({ 
  children, 
  index = 0, 
  className = "", 
  hoverEffect = "lift" 
}: MotionCardProps) {
  const hoverVariants = {
    lift: {
      y: -8,
      boxShadow: "0 20px 40px -15px rgba(0,0,0,0.15)",
    },
    glow: {
      boxShadow: "0 0 30px rgba(0, 217, 255, 0.3)",
    },
    scale: {
      scale: 1.02,
    },
    tilt: {
      rotateY: 5,
      rotateX: 5,
    },
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={hoverVariants[hoverEffect]}
    >
      {children}
    </motion.div>
  );
}
