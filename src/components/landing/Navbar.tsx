import React, { memo, useState } from "react";
import mascotIcon from "@/assets/taskteddy-mascot.png";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Why TaskTeddy", href: "#features" },
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQs", href: "#faq" },
] as const;

const Navbar: React.FC = memo(() => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-3xl rounded-full border border-border bg-card/85 backdrop-blur-2xl px-4 py-2 shadow-nav">
      <div className="flex items-center justify-between">
        {/* Logo — left side */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <img src={mascotIcon} alt="TaskTeddy" className="h-8 w-8 drop-shadow-sm" width={32} height={32} />
          <span className="font-display text-lg font-extrabold tracking-tight text-primary">
            TaskTeddy
          </span>
        </a>

        {/* Nav links + CTA — right side */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-muted-foreground whitespace-nowrap px-2.5 py-1.5 rounded-full transition-all duration-200 hover:text-primary hover:bg-accent"
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" className="ml-1 rounded-full gradient-primary text-primary-foreground font-semibold px-4 text-xs shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 h-8">
            Get App
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-accent transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5 text-foreground" /> : <Menu className="h-5 w-5 text-foreground" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden mt-3 pb-3 flex flex-col gap-1 border-t border-border pt-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-muted-foreground px-4 py-2.5 rounded-lg transition-all duration-200 hover:text-primary hover:bg-accent"
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" className="mt-2 mx-4 rounded-full gradient-primary text-primary-foreground font-semibold text-xs shadow-md">
            Get App
          </Button>
        </div>
      )}
    </nav>
  );
});

Navbar.displayName = "Navbar";
export default Navbar;
