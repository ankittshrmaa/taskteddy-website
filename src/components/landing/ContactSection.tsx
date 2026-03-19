import React, { memo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection: React.FC = memo(() => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-accent/30 section-contact">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold tracking-wide uppercase">
            Contact Us
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-foreground">
            Get in touch with us
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Have a question or feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl gradient-primary text-primary-foreground shadow-md shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-foreground">Email</h3>
                <p className="mt-1 text-sm text-muted-foreground">hello@taskteddy.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl gradient-primary text-primary-foreground shadow-md shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-foreground">Phone</h3>
                <p className="mt-1 text-sm text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl gradient-primary text-primary-foreground shadow-md shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-foreground">Office</h3>
                <p className="mt-1 text-sm text-muted-foreground">123 Productivity Lane, San Francisco, CA 94105</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit} className="rounded-3xl bg-card border border-border p-8 shadow-sm space-y-5">
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input placeholder="Your name" required className="rounded-xl" />
              <Input type="email" placeholder="Your email" required className="rounded-xl" />
            </div>
            <Input placeholder="Subject" required className="rounded-xl" />
            <Textarea placeholder="Your message..." required className="rounded-xl min-h-[120px]" />
            <Button type="submit" size="lg" className="w-full rounded-xl gradient-primary text-primary-foreground font-bold shadow-md">
              {submitted ? "Message Sent! ✓" : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";
export default ContactSection;

