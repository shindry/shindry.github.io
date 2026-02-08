import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const packages = [
  {
    name: "Starter",
    price: "$1,500",
    description: "Perfect for small businesses and personal brands getting started online.",
    features: [
      "5-Page WordPress Website",
      "Responsive Design",
      "Basic SEO Setup",
      "Contact Form Integration",
      "2 Rounds of Revisions",
      "1 Month Support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$3,500",
    description: "Ideal for growing businesses that need a comprehensive online presence.",
    features: [
      "10-Page Custom Website",
      "UI/UX Design in Figma",
      "Advanced SEO & Analytics",
      "WooCommerce Integration",
      "Custom Animations",
      "Unlimited Revisions",
      "3 Months Support",
      "Performance Optimization",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "$6,000+",
    description: "For established brands requiring a full-scale digital solution.",
    features: [
      "Unlimited Pages",
      "Full Brand Identity",
      "Custom Plugin Development",
      "E-Commerce Setup",
      "Multi-language Support",
      "Priority Support (6 Mo)",
      "Monthly Maintenance",
      "Training & Documentation",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 gradient-warm relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="font-body text-sm font-semibold text-primary uppercase tracking-widest">Pricing</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Transparent Pricing Plans
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed">
            Flexible packages tailored to your needs. Every project includes my full creative dedication.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-3xl p-8 relative ${
                pkg.popular
                  ? "bg-foreground text-background shadow-elevated scale-[1.02]"
                  : "bg-card shadow-card border border-border/50"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-primary px-4 py-1.5 rounded-full flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-primary-foreground fill-primary-foreground" />
                  <span className="text-primary-foreground text-xs font-bold">Most Popular</span>
                </div>
              )}

              <h3 className={`font-heading text-xl font-bold ${pkg.popular ? "text-background" : "text-foreground"}`}>
                {pkg.name}
              </h3>
              <div className="mt-4 mb-2">
                <span className={`font-heading text-4xl font-bold ${pkg.popular ? "text-background" : "text-foreground"}`}>
                  {pkg.price}
                </span>
              </div>
              <p className={`font-body text-sm leading-relaxed mb-8 ${pkg.popular ? "text-background/70" : "text-muted-foreground"}`}>
                {pkg.description}
              </p>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${pkg.popular ? "text-background/80" : "text-primary"}`} />
                    <span className={`font-body text-sm ${pkg.popular ? "text-background/80" : "text-muted-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  pkg.popular
                    ? "bg-background text-foreground hover:opacity-90"
                    : "gradient-primary text-primary-foreground hover:opacity-90 shadow-soft"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
