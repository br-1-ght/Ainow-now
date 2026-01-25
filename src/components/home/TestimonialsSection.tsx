import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Adeyemi",
    role: "Medical Clinic",
    location: "Lagos, Nigeria",
    quote:
      "We went from missing 40% of calls to capturing every single inquiry. Revenue up 25% in 3 months.",
    service: "Voice AI",
  },
  {
    name: "Chioma O.",
    role: "Law Firm",
    location: "Abuja, Nigeria",
    quote:
      "The AI chatbot on our website books consultations while we sleep. Best investment we've made.",
    service: "Web Solutions",
  },
  {
    name: "Tunde K.",
    role: "Restaurant Owner",
    location: "Port Harcourt, Nigeria",
    quote:
      "Our social media used to be dead. Now AI posts 3x per week and our bookings doubled.",
    service: "Content Automation",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Real Results from African Businesses
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-xl border border-border hover-lift"
            >
              {/* Quote icon */}
              <Quote className="h-8 w-8 text-cyan/30 mb-4" />

              {/* Quote text */}
              <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.location}
                  </p>
                </div>
                <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  {testimonial.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
