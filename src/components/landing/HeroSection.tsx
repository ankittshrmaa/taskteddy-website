import React, { memo } from "react";
import mockup1 from "@/assets/app-mockup-1.png";
import mockup2 from "@/assets/app-mockup-2.png";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = memo(() => (
  <section className="relative gradient-hero pt-32 pb-4 overflow-hidden min-h-[90vh] flex flex-col">
    <div className="container mx-auto px-4 text-center flex-1 flex flex-col justify-center">
      <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-foreground leading-[1.05] animate-fade-in-up">
        Manage your tasks
        <br />
        <span className="text-primary">in minutes!</span>
      </h1>

      <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-lg mx-auto animate-fade-in-up" style={{ animationDelay: "0.12s" }}>
        Download the app now
      </p>

      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.24s" }}>
        <Button size="lg" className="gradient-primary text-primary-foreground rounded-full px-10 py-6 text-base font-bold shadow-lg hover:opacity-90 transition-opacity min-w-[200px]" aria-label="Get Started Free">
          Get Started Free
        </Button>
        <Button size="lg" variant="outline" className="rounded-full px-10 py-6 text-base font-bold border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors min-w-[200px]" aria-label="See How It Works">
          See How It Works
        </Button>
      </div>

      <p className="mt-8 text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.36s" }}>
        Your personal task companion — organized, smart,
        <br className="hidden sm:block" />
        and always on time.
      </p>

      <div className="mt-10 flex items-end justify-center gap-3 md:gap-6 animate-fade-in-up" style={{ animationDelay: "0.48s" }}>
        <img
          src={mockup1}
          alt="TaskTeddy task list view"
          className="w-36 sm:w-48 md:w-56 lg:w-64 drop-shadow-2xl rounded-2xl"
          loading="eager"
          width={256}
          height={512}
        />
        <img
          src={mockup2}
          alt="TaskTeddy schedule view"
          className="w-36 sm:w-48 md:w-56 lg:w-64 drop-shadow-2xl rounded-2xl -mb-6"
          loading="eager"
          width={256}
          height={512}
        />
      </div>
    </div>
  </section>
));

HeroSection.displayName = "HeroSection";
export default HeroSection;
