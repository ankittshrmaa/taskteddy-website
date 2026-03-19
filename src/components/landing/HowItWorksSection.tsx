import React, { memo } from "react";
import { ListPlus, CalendarCheck, Sparkles } from "lucide-react";
import mockup1 from "@/assets/app-mockup-1.png";
import mockup2 from "@/assets/app-mockup-2.png";

const steps = [
  {
    step: 1,
    icon: ListPlus,
    title: "Pick from a range of task tools",
    desc: "Create tasks quickly with smart input — type, voice, or paste. Everything in one tap.",
    img: mockup1,
  },
  {
    step: 2,
    icon: CalendarCheck,
    title: "Organize into your workflow",
    desc: "Drag tasks into projects, set due dates and priorities. Your way, your rules.",
    img: mockup2,
  },
  {
    step: 3,
    icon: Sparkles,
    title: "Choose instant, scheduled, or recurring. Done!",
    desc: "Track progress, earn streaks, and celebrate every win. Get it done with TaskTeddy.",
    img: mockup1,
  },
] as const;

const HowItWorksSection: React.FC = memo(() => (
  <section id="how-it-works" className="py-20 bg-background section-howitworks">
    <div className="container mx-auto px-4 text-center">
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold tracking-wide uppercase">
        <Sparkles className="w-3.5 h-3.5" />
        How it works
      </span>
      <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-foreground">
        Simple steps to productivity
      </h2>
      <p className="mt-3 text-muted-foreground max-w-md mx-auto">
        Follow these simple steps to supercharge your task management
      </p>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {steps.map(({ step, icon: Icon, title, desc, img }) => (
          <div
            key={step}
            className="relative rounded-3xl bg-accent/50 border border-border p-6 pb-0 overflow-hidden flex flex-col items-center text-center group hover:shadow-card-hover transition-all duration-300"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider mb-4">
              Step {step}
            </span>
            <h3 className="font-display text-base font-bold text-foreground px-2">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed px-2">{desc}</p>
            <div className="mt-6 w-40 sm:w-44 flex-shrink-0">
              <img
                src={img}
                alt={`Step ${step}`}
                className="w-full rounded-t-2xl shadow-xl"
                loading="lazy"
                width={176}
                height={352}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
));

HowItWorksSection.displayName = "HowItWorksSection";
export default HowItWorksSection;

