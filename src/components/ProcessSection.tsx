import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery",
    description: "Understanding your brand, goals, audience, and project requirements through in-depth consultation.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design",
    description: "Creating high-fidelity mockups in Figma with a focus on user experience and visual appeal.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Development",
    description: "Building your website with clean, optimized code on WordPress with pixel-perfect precision.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch",
    description: "Rigorous testing, optimization, and a smooth launch with ongoing support and maintenance.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 bg-card relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="font-body text-sm font-semibold text-primary uppercase tracking-widest">My Process</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            How I Bring Ideas to Life
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed">
            A streamlined workflow designed to deliver exceptional results at every stage.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-border" />
              )}

              <div className="w-20 h-20 gradient-accent rounded-3xl flex items-center justify-center mx-auto mb-6 relative">
                <step.icon className="w-8 h-8 text-accent-foreground" />
                <div className="absolute -top-2 -right-2 w-7 h-7 gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-xs font-bold">{step.step}</span>
                </div>
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
