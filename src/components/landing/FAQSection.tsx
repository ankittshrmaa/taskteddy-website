import React, { memo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Is TaskTeddy free to use?", a: "Yes! TaskTeddy offers a generous free plan with unlimited tasks. Premium features are available with our Pro plan starting at just $5/month." },
  { q: "Can I collaborate with my team?", a: "Absolutely. Invite team members, assign tasks, and track progress together in real time. No limits on collaborators." },
  { q: "Is my data secure?", a: "Your data is encrypted end-to-end and stored securely. We never share your information with third parties. Period." },
  { q: "What platforms does TaskTeddy support?", a: "TaskTeddy works on web, iOS, and Android. Your tasks sync seamlessly across all devices in real-time." },
  { q: "How do I cancel my subscription?", a: "You can cancel anytime from your account settings. No questions asked, no hidden fees." },
  { q: "Do you offer a money-back guarantee?", a: "Yes! We offer a 30-day money-back guarantee on all paid plans. Try risk-free." },
] as const;

const FAQSection: React.FC = memo(() => (
  <section id="faq" className="py-20 bg-background section-divider">
    <div className="container mx-auto px-4 text-center">
      <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold tracking-wide uppercase">
        FAQs
      </span>
      <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-foreground">
        Frequently asked questions
      </h2>

      <div className="mt-10 max-w-2xl mx-auto text-left">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-2xl border border-border bg-card px-6 shadow-sm data-[state=open]:shadow-card"
            >
              <AccordionTrigger className="text-sm font-bold text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
));

FAQSection.displayName = "FAQSection";
export default FAQSection;
