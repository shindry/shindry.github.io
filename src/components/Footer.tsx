import { Heart, Instagram, Linkedin, Twitter, Dribbble, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Dribbble, label: "Dribbble", href: "#" },
  ];

  return (
    <footer className="gradient-hero py-16 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Brand */}
          <a href="#" className="font-heading text-3xl font-bold text-foreground tracking-tight mb-4">
            Shindry<span className="text-primary">.</span>dev
          </a>
          <p className="font-body text-muted-foreground text-sm max-w-md mb-8 leading-relaxed">
            Helping businesses grow with beautiful websites. Premium WordPress development & UI/UX design by Shindry Rihayaty.
          </p>

          {/* Social */}
          <div className="flex gap-3 mb-10">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 bg-card/60 backdrop-blur-sm rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 border border-border/50"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-border/50 mb-8" />

          {/* Bottom */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
            <p className="font-body text-xs text-muted-foreground flex items-center gap-1">
              © 2026 Shindry Rihayaty — Made with <Heart className="w-3 h-3 text-primary fill-primary" /> & Coffee
            </p>
            <div className="flex gap-6">
              <a href="#" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-primary-foreground shadow-soft hover:opacity-90 transition-opacity z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
