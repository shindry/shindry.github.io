import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Emily Richardson",
    role: "Founder, Bloom Studio",
    text: "Shindry transformed our online presence completely. Her attention to detail and understanding of our brand was exceptional. Within 3 months of launch, our leads increased by 60%.",
    rating: 5,
  },
  {
    name: "Marcus Chen",
    role: "CEO, TechFlow",
    text: "Working with Shindry was an absolute pleasure. She delivered a beautiful, high-performing website on time and within budget. Our bounce rate dropped by half — she truly understands user experience.",
    rating: 5,
  },
  {
    name: "Sophia Laurent",
    role: "Creative Director, Maison",
    text: "Shindry's design sensibility is truly remarkable. She created a website that perfectly captures our brand's elegance. Our conversions increased by 40% and clients constantly compliment the design.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="font-body text-sm font-semibold text-primary uppercase tracking-widest">Testimonials</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Kind Words From Clients
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed">
            Don't just take my word for it — hear what my clients have to say.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-3xl p-8 shadow-card border border-border/50 relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-muted-foreground leading-relaxed mb-6 text-sm">
                "{testimonial.text}"
              </p>
              <div>
                <div className="font-heading text-sm font-bold text-foreground">{testimonial.name}</div>
                <div className="font-body text-xs text-muted-foreground">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
