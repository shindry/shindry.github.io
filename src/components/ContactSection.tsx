import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, Instagram, Linkedin, Twitter, Dribbble } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socials = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Dribbble, label: "Dribbble", href: "#" },
  ];

  return (
    <section id="contact" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blush/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-lavender/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="font-body text-sm font-semibold text-primary uppercase tracking-widest">Get in Touch</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Let's Create Something Beautiful
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed">
            Ready to grow your business online? I'd love to hear about your project and show you what's possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Contact Info</h3>
              <div className="space-y-5">
                {[
                  { icon: Mail, label: "hello@sarah.dev" },
                  { icon: Phone, label: "+1 (555) 123-4567" },
                  { icon: MapPin, label: "New York, NY" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-11 h-11 gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <span className="font-body text-sm text-muted-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-heading text-lg font-bold text-foreground mb-4">Follow Me</h4>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-11 h-11 bg-muted rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-muted-foreground"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-muted/30 rounded-3xl p-8 border border-border/50"
          >
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-2 block">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className="w-full bg-card border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  required
                />
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-2 block">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  className="w-full bg-card border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  required
                />
              </div>
            </div>
            <div className="mb-5">
              <label className="font-body text-sm font-medium text-foreground mb-2 block">Subject</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-card border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                required
              >
                <option value="">Select a service...</option>
                <option value="wordpress">WordPress Development</option>
                <option value="uiux">UI/UX Design</option>
                <option value="figma">Figma Design</option>
                <option value="optimization">Website Optimization</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="font-body text-sm font-medium text-foreground mb-2 block">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={5}
                className="w-full bg-card border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="gradient-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity shadow-soft w-full sm:w-auto justify-center"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
