import React, { lazy, Suspense } from "react";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";

// Lazy-load below-the-fold sections for faster initial render
const StatsSection = lazy(() => import("@/components/landing/StatsSection"));
const ServicesMarquee = lazy(() => import("@/components/landing/ServicesMarquee"));
const FeaturesSection = lazy(() => import("@/components/landing/FeaturesSection"));
const HowItWorksSection = lazy(() => import("@/components/landing/HowItWorksSection"));
const TestimonialsSection = lazy(() => import("@/components/landing/TestimonialsSection"));
const FAQSection = lazy(() => import("@/components/landing/FAQSection"));
const ContactSection = lazy(() => import("@/components/landing/ContactSection"));
const CTASection = lazy(() => import("@/components/landing/CTASection"));
const Footer = lazy(() => import("@/components/landing/Footer"));

const LazyFallback = () => <div className="py-20" />;

const Index: React.FC = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <Suspense fallback={<LazyFallback />}>
        <StatsSection />
        <ServicesMarquee />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <CTASection />
      </Suspense>
    </main>
    <Suspense fallback={null}>
      <Footer />
    </Suspense>
  </>
);

export default Index;
