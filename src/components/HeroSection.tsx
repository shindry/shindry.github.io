import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 gradient-hero opacity-80" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl lg:max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-card/60 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-border/50"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="font-body text-sm font-medium text-muted-foreground">WordPress Developer & UI/UX Designer</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.05] mb-6"
          >
            Helping Businesses
            <br />
            Grow with <span className="text-gradient">Beautiful</span>
            <br />
            Websites
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
          >
            Hi, I'm <strong className="text-foreground">Shindry Rihayaty</strong> — I design and develop premium WordPress websites that help startups and businesses stand out with elegance, purpose, and measurable results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="gradient-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-soft"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#portfolio"
              className="bg-card/80 backdrop-blur-sm text-foreground px-8 py-4 rounded-full text-base font-semibold border border-border hover:border-primary/30 transition-colors text-center"
            >
              View My Work
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex gap-10 mt-16"
          >
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "5+", label: "Years of Trust" },
              { number: "100%", label: "Happy Clients" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-3xl md:text-4xl font-bold text-foreground">{stat.number}</div>
                <div className="font-body text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
