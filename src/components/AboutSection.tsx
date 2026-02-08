import { motion } from "framer-motion";
import { Heart, Code2, Palette } from "lucide-react";
import portrait from "@/assets/portrait.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blush/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img src={portrait} alt="Professional portrait" className="w-full h-auto object-cover aspect-[4/5]" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-5 shadow-card border border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-heading text-lg font-bold text-foreground">Passion-Driven</div>
                  <div className="font-body text-xs text-muted-foreground">Design & Development</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-body text-sm font-semibold text-primary uppercase tracking-widest">About Me</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 leading-tight">
              Turning Ideas Into Beautiful Digital Realities
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              I'm <strong className="text-foreground">Shindry Rihayaty</strong>, a WordPress developer and UI/UX designer with over 5 years of experience creating premium digital experiences. I've helped dozens of startups, SMEs, and business owners launch websites that not only look stunning but also drive real business growth.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              My clients trust me because I treat every project as a partnership — combining strategic thinking with creative design to deliver websites that reflect your brand's unique identity, convert visitors into customers, and stand the test of time.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Code2, title: "Clean Code", desc: "Well-structured & optimized" },
                { icon: Palette, title: "Pixel Perfect", desc: "Attention to every detail" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 bg-muted/50 rounded-2xl p-4">
                  <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="font-heading text-sm font-bold text-foreground">{item.title}</div>
                    <div className="font-body text-xs text-muted-foreground">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
