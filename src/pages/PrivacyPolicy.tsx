import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const sections = [
  {
    title: "1. Information We Collect",
    content:
      "We collect information you provide directly — such as your name, email address, and account details — as well as usage data like pages visited, features used, and device information collected automatically through cookies and similar technologies.",
  },
  {
    title: "2. How We Use Your Information",
    content:
      "We use your information to provide and improve our services, personalize your experience, communicate with you about updates and promotions, ensure security, and comply with legal obligations.",
  },
  {
    title: "3. Information Sharing",
    content:
      "We do not sell your personal data. We may share information with trusted service providers who assist in operating our platform, or when required by law, to protect our rights, or in connection with a business transfer.",
  },
  {
    title: "4. Data Security",
    content:
      "We implement industry-standard security measures including encryption, secure servers, and regular audits. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    title: "5. Cookies & Tracking",
    content:
      "We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and deliver relevant content. You can manage cookie preferences through your browser settings.",
  },
  {
    title: "6. Your Rights",
    content:
      "Depending on your jurisdiction, you may have the right to access, correct, delete, or port your personal data. You may also opt out of marketing communications at any time by clicking the unsubscribe link in our emails.",
  },
  {
    title: "7. Data Retention",
    content:
      "We retain your data for as long as your account is active or as needed to provide services. After account deletion, we may retain certain data for a limited period to comply with legal obligations.",
  },
  {
    title: "8. Children's Privacy",
    content:
      "TaskTeddy is not intended for children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us immediately.",
  },
  {
    title: "9. Third-Party Links",
    content:
      "Our service may contain links to third-party websites. We are not responsible for the privacy practices of these external sites and encourage you to review their policies independently.",
  },
  {
    title: "10. Changes to This Policy",
    content:
      "We may update this Privacy Policy periodically. We will notify you of material changes via email or in-app notification. Your continued use after changes constitutes acceptance.",
  },
  {
    title: "11. Contact Us",
    content:
      "For questions or concerns about this Privacy Policy, please contact us at privacy@taskteddy.com.",
  },
];

const PrivacyPolicy: React.FC = () => (
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
        Privacy Policy
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

export default PrivacyPolicy;
