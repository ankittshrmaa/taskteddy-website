import React, { memo } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const faqs = [
  { q: "Is there a free trial?", a: "Absolutely! Start with our 14-day free trial, no credit card required. Upgrade anytime." },
  { q: "How secure is my data?", a: "Bank-grade encryption with end-to-end security. Your data stays yours, always." },
  { q: "Can I use it on mobile?", a: "Perfect responsive design + native iOS/Android apps coming soon." },
  { q: "Do you offer team plans?", a: "Yes! Team plans start at $12/user/month with unlimited projects and admin controls." },
  { q: "What integrations do you support?", a: "Google Calendar, Slack, GitHub, Zapier + 50+ more. More coming weekly." },
  { q: "Do you offer a money-back guarantee?", a: "Yes! We offer a 30-day money-back guarantee on all paid plans. Try risk-free." },
] as const;

const FAQItem: React.FC<{ q: string; a: string }> = memo(({ q, a }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-full space-y-2 border-b border-border pb-4 last:border-b-0">
      <CollapsibleTrigger asChild>
        <Button variant="ghost" className="h-auto p-0 w-full justify-between text-left hover:bg-transparent hover:underline text-base font-semibold text-foreground">
          {q}
          {open ? <ChevronUp className="ml-2 h-5 w-5 shrink-0 transition-transform duration-200" /> : <ChevronDown className="ml-2 h-5 w-5 shrink-0 transition-transform duration-200" />}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="text-muted-foreground text-sm leading-relaxed mt-2 pl-4 space-y-2">
        {a}
      </CollapsibleContent>
    </Collapsible>
  );
});

FAQItem.displayName = "FAQItem";

const FAQSection: React.FC = memo(() => (
  <section id="faq" className="py-20 bg-background section-faq">
    <div className="container mx-auto px-4 text-center">
      <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold tracking-wide uppercase">
        FAQs
      </span>
      <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-foreground">
        Got questions? We've got answers
      </h2>
      <p className="mt-3 text-muted-foreground max-w-md mx-auto">
        The most common questions we get
      </p>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {faqs.map((faq, i) => (
          <FAQItem key={i} {...faq} />
        ))}
      </div>
    </div>
  </section>
));

FAQSection.displayName = "FAQSection";
export default FAQSection;

