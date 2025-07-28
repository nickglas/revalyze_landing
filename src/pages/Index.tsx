import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { IndustriesSection } from "@/components/Industries";

const Index = () => {
  return (
    <div className="relative">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navigation />
      </div>

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Industries Section */}
      <IndustriesSection />

      {/* Pricing Section */}
      <Pricing />

      {/* About Us Section */}
      <About />

      <FAQ />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
