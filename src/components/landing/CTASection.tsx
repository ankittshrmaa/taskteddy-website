import React, { memo } from "react";
import { Button } from "@/components/ui/button";
import mascot from "@/assets/taskteddy-mascot.png";

const CTASection: React.FC = memo(() => (
  <section className="py-20 bg-background section-divider">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto rounded-[2rem] gradient-primary p-12 md:p-16 text-center relative overflow-hidden">
        <img
          src={mascot}
          alt=""
          className="absolute -right-8 -bottom-8 w-40 opacity-15 pointer-events-none select-none"
          aria-hidden="true"
        />
        <img
          src={mascot}
          alt=""
          className="absolute -left-8 -top-8 w-32 opacity-10 pointer-events-none select-none rotate-12"
          aria-hidden="true"
        />
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-primary-foreground leading-tight">
          Ready to get things done?
        </h2>
        <p className="mt-4 text-primary-foreground/80 max-w-md mx-auto text-lg">
          Join 50,000+ users who trust TaskTeddy to manage their work and life.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="rounded-full bg-background text-foreground font-bold px-10 py-6 text-base hover:bg-background/90 transition-colors shadow-xl"
          >
            Start for Free
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-2 border-primary-foreground/40 text-primary-foreground font-bold px-10 py-6 text-base hover:bg-primary-foreground/10 transition-colors"
          >
            Watch Demo
          </Button>
        </div>
      </div>
    </div>
  </section>
));

CTASection.displayName = "CTASection";
export default CTASection;
