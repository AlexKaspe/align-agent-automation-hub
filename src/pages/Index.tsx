
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import ServicesSection from "@/components/ServicesSection";
import ComparisonSection from "@/components/ComparisonSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import OfferSection from "@/components/OfferSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <FeatureSection />
        <ServicesSection />
        <ComparisonSection />
        <TestimonialsSection />
        <SuccessStoriesSection />
        <OfferSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
