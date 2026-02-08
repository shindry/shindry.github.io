import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const projects = [
  {
    image: portfolio1,
    title: "Bloom Studio",
    category: "WordPress Development",
    description: "A premium portfolio website for a creative agency with custom animations and interactions.",
  },
  {
    image: portfolio2,
    title: "Lavende Fashion",
    category: "E-Commerce & UI/UX",
    description: "Full e-commerce solution with WooCommerce, featuring a beautiful product showcase.",
  },
  {
    image: portfolio3,
    title: "Coral Creative",
    category: "Brand & Web Design",
    description: "Complete brand identity and website for a modern creative consultancy.",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-lavender/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="font-body text-sm font-semibold text-primary uppercase tracking-widest">Portfolio</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Selected Work
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed">
            A showcase of recent projects that reflect my passion for design and development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-3xl overflow-hidden mb-5 shadow-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500 flex items-center justify-center">
                  <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100">
                    <ArrowUpRight className="w-5 h-5 text-foreground" />
                  </div>
                </div>
              </div>
              <span className="font-body text-xs font-semibold text-primary uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="font-heading text-xl font-bold text-foreground mt-1 mb-2">{project.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
