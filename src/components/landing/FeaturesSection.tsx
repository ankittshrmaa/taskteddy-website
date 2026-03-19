import React, { memo } from "react";
import { CheckCircle, Clock, Users, BarChart3, Bell, Shield } from "lucide-react";

const features = [
  { icon: CheckCircle, title: "Smart Task Lists", desc: "Organize tasks with tags, priorities, and due dates. Everything in one clean view." },
  { icon: Clock, title: "Time Tracking", desc: "Track time spent on every task automatically. Know exactly where your hours go." },
  { icon: Users, title: "Team Collaboration", desc: "Share tasks and work together in real time. Assign, comment, and stay synced." },
  { icon: BarChart3, title: "Analytics Dashboard", desc: "Visual reports to boost your productivity. Spot trends and improve daily." },
  { icon: Bell, title: "Smart Reminders", desc: "Never miss a deadline with intelligent alerts that adapt to your schedule." },
  { icon: Shield, title: "Secure & Private", desc: "End-to-end encryption keeps your data safe. Your tasks, your privacy." },
] as const;

const FeatureCard: React.FC<{ icon: React.ElementType; title: string; desc: string }> = memo(
  ({ icon: Icon, title, desc }) => (
    <div className="group rounded-3xl bg-card border border-border p-7 hover:shadow-card-hover transition-all duration-300 text-left hover:-translate-y-1">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl gradient-primary text-primary-foreground shadow-md">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="mt-5 font-display text-lg font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  )
);
FeatureCard.displayName = "FeatureCard";

const FeaturesSection: React.FC = memo(() => (
  <section id="features" className="py-20 bg-accent/30 section-divider">
    <div className="container mx-auto px-4 text-center">
      <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold tracking-wide uppercase">
        Why TaskTeddy
      </span>
      <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-foreground">
        Everything you need to stay on track
      </h2>
      <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
        Powerful features wrapped in a simple, delightful experience
      </p>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map(({ icon, title, desc }) => (
          <FeatureCard key={title} icon={icon} title={title} desc={desc} />
        ))}
      </div>
    </div>
  </section>
));

FeaturesSection.displayName = "FeaturesSection";
export default FeaturesSection;
