import React, { memo } from "react";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import mascot from "@/assets/taskteddy-mascot.png";

const serviceLinks = [
  { label: "Features", href: "#features" },
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

const legalLinks = [
  { label: "Terms & Conditions", href: "/terms", isRoute: true },
  { label: "Privacy Policy", href: "/privacy", isRoute: true },
  { label: "Cookie Policy", href: "#", isRoute: false },
] as const;

const socialLinks = [
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "LinkedIn", href: "#", icon: Linkedin },
] as const;

const Footer: React.FC = memo(() => (
  <footer className="py-14 border-t border-border bg-muted/20">
    <div className="container mx-auto px-4">
      {/* Top: Brand + Columns */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <img src={mascot} alt="TaskTeddy" className="h-9 w-9" width={36} height={36} loading="lazy" />
            <span className="font-display text-xl font-extrabold text-primary">TaskTeddy</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Your personal task assistant that makes productivity effortless.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-foreground mb-4 text-sm tracking-wide uppercase">Services</h4>
          <ul className="space-y-2.5">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold text-foreground mb-4 text-sm tracking-wide uppercase">Legal</h4>
          <ul className="space-y-2.5">
            {legalLinks.map((link) => (
              <li key={link.label}>
                {link.isRoute ? (
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                ) : (
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="font-semibold text-foreground mb-4 text-sm tracking-wide uppercase">Socials</h4>
          <div className="flex gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-border pt-6 text-center">
        <p className="text-xs text-muted-foreground">© 2026 TaskTeddy. All rights reserved.</p>
      </div>
    </div>
  </footer>
));

Footer.displayName = "Footer";
export default Footer;
