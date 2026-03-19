import React, { memo } from "react";

const stats = [
  { value: "250,000", suffix: "+", label: "Tasks Completed" },
  { value: "50,000", suffix: "+", label: "Hours Saved" },
  { value: "1,200", suffix: "+", label: "Active Teams" },
] as const;

const StatsSection: React.FC = memo(() => (
  <section className="py-16 bg-background section-divider">
    <div className="container mx-auto px-4">
      <p className="text-center text-base font-medium text-muted-foreground mb-2">
        On-demand professional task management
      </p>
      <p className="text-center text-sm text-muted-foreground max-w-md mx-auto mb-10">
        No more planning headaches. Our smart tools keep you organized and on track, always.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="relative rounded-2xl bg-accent/60 p-8 text-center overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <p className="font-display text-4xl md:text-5xl font-extrabold text-foreground relative z-10">
              {stat.value}
              <span className="text-primary">{stat.suffix}</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground font-medium relative z-10">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
));

StatsSection.displayName = "StatsSection";
export default StatsSection;
