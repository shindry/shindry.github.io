import { motion } from "framer-motion";
import { Globe, Figma, Gauge, Layers } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "WordPress Development",
    description: "Custom WordPress themes and plugins built with clean code, optimized for performance and scalability.",
    features: ["Custom Themes", "Plugin Development", "WooCommerce", "Elementor"],
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive, engaging experiences driving conversions and delight.",
    features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
  },
  {
    icon: Figma,
    title: "Figma Design",
    description: "High-fidelity mockups and design systems in Figma, ready for seamless developer handoff.",
    features: ["Design Systems", "Component Libraries", "Interactive Prototypes", "Responsive Layouts"],
  },
  {
    icon: Gauge,
    title: "Website Optimization",
    description: "Speed and SEO optimization to ensure your website ranks higher and loads faster.",
    features: ["Core Web Vitals", "SEO Audit", "Performance Tuning", "Accessibility"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 gradient-warm relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="font-body text-sm font-semibold text-primary uppercase tracking-widest">What I Do</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Services That Elevate Your Brand
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed">
            From concept to launch, I provide end-to-end solutions to help your business thrive online.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-3xl p-8 shadow-card border border-border/50 hover:shadow-elevated hover:border-primary/20 transition-all duration-500"
            >
              <div className="w-14 h-14 gradient-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="bg-muted text-muted-foreground px-3 py-1.5 rounded-full text-xs font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
