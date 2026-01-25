import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Globe, Video, Users, ArrowRight } from "lucide-react";

const problems = [
  {
    icon: Phone,
    question: "Customers can't reach you after 5pm?",
    link: "/voice-ai",
    color: "cyan",
  },
  {
    icon: Globe,
    question: "Your website takes 3 months to build?",
    link: "/web-solutions",
    color: "accent",
  },
  {
    icon: Video,
    question: "You're invisible on social media?",
    link: "/content-automation",
    color: "primary",
  },
  {
    icon: Users,
    question: "Leads slip through the cracks?",
    link: "/web-solutions",
    color: "cyan",
  },
];

export function ProblemSection() {
  return (
    <section className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div 
        className="absolute -top-20 -right-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute -bottom-20 -left-20 w-60 h-60 bg-cyan/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Is Your Business <span className="text-accent">Losing Money</span> Because...
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            const bgColor =
              problem.color === "cyan"
                ? "bg-cyan/10"
                : problem.color === "accent"
                ? "bg-accent/10"
                : "bg-primary/10";
            const iconColor =
              problem.color === "cyan"
                ? "text-cyan"
                : problem.color === "accent"
                ? "text-accent"
                : "text-primary";
            const borderHover =
              problem.color === "cyan"
                ? "hover:border-cyan/50"
                : problem.color === "accent"
                ? "hover:border-accent/50"
                : "hover:border-primary/50";

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={problem.link}
                  className={`group block p-6 bg-card rounded-xl border border-border ${borderHover} transition-all duration-300 h-full`}
                >
                  <motion.div
                    whileHover={{ 
                      y: -8,
                      boxShadow: "0 20px 40px -15px rgba(0,0,0,0.12)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="h-full"
                  >
                    <motion.div 
                      className={`inline-flex p-3 ${bgColor} rounded-lg mb-4`}
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Icon className={`h-6 w-6 ${iconColor}`} />
                    </motion.div>
                    
                    <p className="text-lg font-medium text-foreground group-hover:text-primary transition-colors mb-3">
                      {problem.question}
                    </p>
                    
                    <motion.span 
                      className="inline-flex items-center text-sm text-muted-foreground group-hover:text-primary transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      Learn how we fix this
                      <motion.span
                        className="ml-1"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </motion.span>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
