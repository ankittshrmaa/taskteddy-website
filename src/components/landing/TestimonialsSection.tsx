import React, { memo } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah J.",
    role: "Product Manager",
    text: "TaskTeddy has completely transformed how I manage my day. The smart reminders are a lifesaver!",
    rating: 5,
  },
  {
    name: "Alex M.",
    role: "Freelance Designer",
    text: "Clean, fast, and fun to use. I love the streak feature — it keeps me motivated every single day.",
    rating: 5,
  },
  {
    name: "Priya K.",
    role: "Engineering Lead",
    text: "Our team switched to TaskTeddy and our sprint completion rate jumped 40%. Highly recommend!",
    rating: 5,
  },
  {
    name: "David R.",
    role: "Startup Founder",
    text: "Great work, my workflow was left organized and fresh. The analytics were thorough. I'll recommend it. 👍🏼",
    rating: 5,
  },
] as const;

const TestimonialCard: React.FC<typeof testimonials[number]> = memo(({ name, role, text, rating }) => (
  <div className="rounded-3xl bg-accent/40 border border-border p-6 text-left relative overflow-hidden group hover:shadow-card-hover transition-all duration-300">
    <Quote className="w-6 h-6 text-primary/30 absolute top-5 right-5" />
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
      ))}
    </div>
    <p className="text-sm text-foreground leading-relaxed">{text}</p>
    <div className="mt-6 flex items-center gap-3">
      <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm shadow-md">
        {name[0]}
      </div>
      <div>
        <p className="text-sm font-bold text-foreground">{name}</p>
        <p className="text-xs text-muted-foreground">{role}</p>
      </div>
    </div>
  </div>
));
TestimonialCard.displayName = "TestimonialCard";

const TestimonialsSection: React.FC = memo(() => (
  <section id="testimonials" className="section-testimonials">

    <div className="container mx-auto px-4 text-center">
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold tracking-wide uppercase">

        Our Testimonials
      </span>
      <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-foreground">
        User reviews and feedback
      </h2>
      <p className="mt-3 text-muted-foreground max-w-md mx-auto">
        See how TaskTeddy has transformed users' experiences through their own words
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
    </div>
  </section>
));

TestimonialsSection.displayName = "TestimonialsSection";
export default TestimonialsSection;
