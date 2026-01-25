import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Dr. Adeyemi",
    role: "Medical Clinic",
    location: "Lagos, Nigeria",
    quote:
      "We went from missing 40% of calls to capturing every single inquiry. Revenue up 25% in 3 months.",
    service: "Voice AI",
    avatar: "DA",
  },
  {
    name: "Chioma O.",
    role: "Law Firm",
    location: "Abuja, Nigeria",
    quote:
      "The AI chatbot on our website books consultations while we sleep. Best investment we've made.",
    service: "Web Solutions",
    avatar: "CO",
  },
  {
    name: "Tunde K.",
    role: "Restaurant Owner",
    location: "Port Harcourt, Nigeria",
    quote:
      "Our social media used to be dead. Now AI posts 3x per week and our bookings doubled.",
    service: "Content Automation",
    avatar: "TK",
  },
  {
    name: "Amina B.",
    role: "Consulting Firm",
    location: "Nairobi, Kenya",
    quote:
      "From zero online presence to fully booked in just 3 weeks. AI Now Now delivered beyond expectations.",
    service: "Web Solutions",
    avatar: "AB",
  },
  {
    name: "Kwame A.",
    role: "Hotel Manager",
    location: "Accra, Ghana",
    quote:
      "The 24/7 voice assistant handles guest inquiries perfectly. Our front desk can focus on in-person service.",
    service: "Voice AI",
    avatar: "KA",
  },
];

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 rounded-full bg-cyan/5"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-accent/5"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="container-custom relative">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Real Results from African Businesses
          </h2>
          <p className="text-muted-foreground">
            Trusted by 50+ businesses across Nigeria, Kenya, Ghana, and South Africa
          </p>
        </motion.div>

        {/* Main slider container */}
        <div 
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation arrows */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 z-10 bg-card/80 backdrop-blur-sm border border-border hover:bg-card shadow-lg"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 z-10 bg-card/80 backdrop-blur-sm border border-border hover:bg-card shadow-lg"
            onClick={() => paginate(1)}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Testimonial card */}
          <div className="relative h-[320px] md:h-[280px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute inset-0 cursor-grab active:cursor-grabbing"
              >
                <div className="h-full p-6 md:p-8 bg-card rounded-2xl border border-border shadow-lg">
                  {/* Quote icon with animation */}
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    <Quote className="h-10 w-10 text-cyan/30 mb-4" />
                  </motion.div>

                  {/* Quote text */}
                  <motion.p 
                    className="text-lg md:text-xl text-foreground mb-6 italic leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    "{currentTestimonial.quote}"
                  </motion.p>

                  {/* Author info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <motion.div 
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-cyan flex items-center justify-center text-primary-foreground font-bold"
                        whileHover={{ scale: 1.1 }}
                      >
                        {currentTestimonial.avatar}
                      </motion.div>
                      <div>
                        <p className="font-semibold text-foreground">
                          {currentTestimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {currentTestimonial.role}, {currentTestimonial.location}
                        </p>
                      </div>
                    </div>

                    {/* Service badge and stars */}
                    <div className="hidden sm:flex flex-col items-end gap-2">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                          >
                            <Star className="h-4 w-4 fill-accent text-accent" />
                          </motion.div>
                        ))}
                      </div>
                      <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        {currentTestimonial.service}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="group p-1"
              >
                <motion.div
                  className={`h-2 rounded-full transition-colors ${
                    index === currentIndex 
                      ? "bg-primary w-8" 
                      : "bg-border w-2 group-hover:bg-primary/50"
                  }`}
                  layout
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              </button>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-4 h-1 bg-border rounded-full overflow-hidden max-w-xs mx-auto">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-cyan"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
              key={currentIndex}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
