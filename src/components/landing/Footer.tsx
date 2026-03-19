import React, { memo } from "react";
import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import mascotIcon from "@/assets/taskteddy-mascot.png";
import instagramIcon from "@/assets/social/instagram.svg";
import facebookIcon from "@/assets/social/facebook.svg";
import linkedinIcon from "@/assets/social/linkedin.svg";

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
  { label: "Instagram", href: "#", icon: instagramIcon },
  { label: "Facebook", href: "#", icon: facebookIcon },
  { label: "LinkedIn", href: "#", icon: linkedinIcon },
] as const;

const Footer: React.FC = memo(() => (
  <footer className="py-14 border-t border-border bg-muted/20">
    <div className="container mx-auto px-4">
      {/* Top: Brand + Columns */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <img src={mascotIcon} alt="TaskTeddy" className="h-9 w-9" width={36} height={36} loading="lazy" />
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
          <div className="flex gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <img src={s.icon} alt={s.label} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground mx-auto">© 2026 TaskTeddy. All rights reserved.</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          Back to Top
          <ArrowUp size={14} />
        </button>
      </div>
    </div>
  </footer>
));

Footer.displayName = "Footer";
export default Footer;
