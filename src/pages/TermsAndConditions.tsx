import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing and using TaskTeddy, you accept and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our service.",
  },
  {
    title: "2. Description of Service",
    content:
      "TaskTeddy provides a productivity and task management platform that helps users organize, track, and manage their daily tasks and projects. We reserve the right to modify, suspend, or discontinue any part of the service at any time.",
  },
  {
    title: "3. User Accounts",
    content:
      "You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized use. You must be at least 13 years old to create an account.",
  },
  {
    title: "4. User Conduct",
    content:
      "You agree not to use the service for any unlawful purpose, to harass or harm others, to distribute spam or malicious content, or to attempt to gain unauthorized access to other accounts or systems.",
  },
  {
    title: "5. Intellectual Property",
    content:
      "All content, features, and functionality of TaskTeddy — including text, graphics, logos, and software — are owned by TaskTeddy and protected by international copyright, trademark, and other intellectual property laws.",
  },
  {
    title: "6. Payment & Subscriptions",
    content:
      "Certain features may require a paid subscription. Prices are subject to change with notice. Refunds are handled on a case-by-case basis. You may cancel your subscription at any time through your account settings.",
  },
  {
    title: "7. Limitation of Liability",
    content:
      "TaskTeddy shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use or inability to use the service, even if we have been advised of the possibility of such damages.",
  },
  {
    title: "8. Termination",
    content:
      "We may terminate or suspend your account at our sole discretion, without prior notice, for conduct that we determine violates these Terms or is harmful to other users, us, or third parties.",
  },
  {
    title: "9. Changes to Terms",
    content:
      "We reserve the right to update these Terms at any time. Continued use of the service after changes constitutes acceptance. We will notify users of significant changes via email or in-app notification.",
  },
  {
    title: "10. Contact Us",
    content:
      "If you have questions about these Terms & Conditions, please reach out to us at legal@taskteddy.com.",
  },
];

const TermsAndConditions: React.FC = () => (
  <div className="min-h-screen bg-background">
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-10"
      >
        <ArrowLeft size={16} />
        Back to home
      </Link>

      <h1 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-3 tracking-tight">
        Terms &amp; Conditions
      </h1>
      <p className="text-muted-foreground mb-12">Last updated: March 19, 2026</p>

      <div className="space-y-10">
        {sections.map((s) => (
          <section key={s.title}>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">{s.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{s.content}</p>
          </section>
        ))}
      </div>
    </div>
  </div>
);

export default TermsAndConditions;
