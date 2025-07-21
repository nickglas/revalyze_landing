import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Pricing Section */}
      <Pricing />

      {/* About Us Section */}
      <About />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
