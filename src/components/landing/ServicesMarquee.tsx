import React, { useEffect, useRef, useState, memo } from "react";
import { ListChecks } from "lucide-react";

import frame01 from "@/assets/services/frame-01.jpg";
import frame02 from "@/assets/services/frame-02.jpg";
import frame03 from "@/assets/services/frame-03.jpg";
import frame04 from "@/assets/services/frame-04.jpg";
import frame05 from "@/assets/services/frame-05.jpg";
import frame06 from "@/assets/services/frame-06.jpg";

const frames = [
  { src: frame01, label: "Task Lists" },
  { src: frame02, label: "Scheduling" },
  { src: frame03, label: "Time Tracking" },
  { src: frame04, label: "Projects" },
  { src: frame05, label: "Analytics" },
  { src: frame06, label: "Team Boards" },
];

const ServicesMarquee: React.FC = memo(() => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      // How far we've scrolled into the section (0 at top, 1 at bottom)
      const scrolled = (viewportHeight - rect.top) / (sectionHeight + viewportHeight);
      const clamped = Math.max(0, Math.min(1, scrolled));
      const index = Math.min(
        frames.length - 1,
        Math.floor(clamped * frames.length)
      );
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-background"
      style={{ height: `${frames.length * 80}vh` }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Header */}
        <div className="text-center mb-8 px-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold tracking-wide uppercase">
            <ListChecks className="w-3.5 h-3.5" />
            Our Services
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-foreground">
            Everything to manage your work
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            From daily tasks to team projects, TaskTeddy's got you covered
          </p>
        </div>

        {/* Flipbook image */}
        <div className="relative w-full max-w-4xl mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden shadow-card-hover border border-border bg-card aspect-video">
            {frames.map((frame, i) => (
              <img
                key={frame.label}
                src={frame.src}
                alt={frame.label}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                style={{ opacity: i === activeIndex ? 1 : 0 }}
                loading={i === 0 ? "eager" : "lazy"}
              />
            ))}
          </div>

          {/* Label pill */}
          <div className="mt-6 flex justify-center">
            <span className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-md transition-all duration-300">
              {frames[activeIndex].label}
            </span>
          </div>

          {/* Dot indicators */}
          <div className="mt-4 flex justify-center gap-2">
            {frames.map((frame, i) => (
              <div
                key={frame.label}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

ServicesMarquee.displayName = "ServicesMarquee";
export default ServicesMarquee;
