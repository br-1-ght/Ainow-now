import { motion } from "framer-motion";

interface FloatingShapesProps {
  variant?: "hero" | "section" | "minimal";
}

export function FloatingShapes({ variant = "section" }: FloatingShapesProps) {
  const shapes = {
    hero: [
      { type: "circle", size: 300, x: "85%", y: "10%", color: "cyan", delay: 0 },
      { type: "circle", size: 200, x: "-5%", y: "60%", color: "accent", delay: 0.5 },
      { type: "square", size: 80, x: "75%", y: "70%", color: "primary", delay: 1 },
      { type: "triangle", size: 60, x: "10%", y: "20%", color: "cyan", delay: 1.5 },
      { type: "dots", size: 150, x: "90%", y: "80%", color: "primary", delay: 0.8 },
    ],
    section: [
      { type: "circle", size: 180, x: "90%", y: "20%", color: "cyan", delay: 0 },
      { type: "square", size: 50, x: "5%", y: "80%", color: "accent", delay: 0.3 },
    ],
    minimal: [
      { type: "circle", size: 100, x: "95%", y: "10%", color: "primary", delay: 0 },
    ],
  };

  const selectedShapes = shapes[variant];

  const getColorClass = (color: string) => {
    switch (color) {
      case "cyan":
        return "bg-cyan/10";
      case "accent":
        return "bg-accent/10";
      case "primary":
        return "bg-primary/10";
      default:
        return "bg-primary/10";
    }
  };

  const getBorderColor = (color: string) => {
    switch (color) {
      case "cyan":
        return "border-cyan/20";
      case "accent":
        return "border-accent/20";
      case "primary":
        return "border-primary/20";
      default:
        return "border-primary/20";
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {selectedShapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -20, 0],
            rotate: shape.type === "square" ? [0, 45, 0] : 0,
          }}
          transition={{
            opacity: { duration: 0.8, delay: shape.delay },
            scale: { duration: 0.8, delay: shape.delay },
            y: { 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: shape.delay 
            },
            rotate: {
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }
          }}
        >
          {shape.type === "circle" && (
            <div
              className={`w-full h-full rounded-full ${getColorClass(shape.color)} blur-3xl`}
            />
          )}
          {shape.type === "square" && (
            <div
              className={`w-full h-full rounded-lg ${getColorClass(shape.color)} border-2 ${getBorderColor(shape.color)}`}
            />
          )}
          {shape.type === "triangle" && (
            <div
              className={`w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[52px] ${
                shape.color === "cyan" ? "border-b-cyan/20" : 
                shape.color === "accent" ? "border-b-accent/20" : 
                "border-b-primary/20"
              }`}
            />
          )}
          {shape.type === "dots" && (
            <div className="grid grid-cols-4 gap-2">
              {[...Array(16)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`w-2 h-2 rounded-full ${getColorClass(shape.color)}`}
                  animate={{ 
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
