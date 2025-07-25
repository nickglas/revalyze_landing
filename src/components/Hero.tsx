import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Play,
  TrendingUp,
  Users,
  BarChart3,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export const Hero = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleStartTrial = () => {
    navigate("/register");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/15 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Score Metrics - Positioned around the content */}
          <div className="absolute opacity-30 hidden md:block md:-top-32 md:left-6">
            <div className="card-elevated p-4 max-w-sm">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse-glow" />
                <span className="text-sm font-medium">Sentiment Score</span>
              </div>
              <div className="mt-2 text-2xl font-bold text-success">87%</div>
              <div className="mt-1 h-2 bg-muted rounded-full">
                <div className="h-full w-[87%] bg-gradient-to-r from-primary to-success rounded-full" />
              </div>
            </div>
          </div>

          <div className="absolute opacity-30 hidden md:block md:-top-44 md:right-6">
            <div className="card-elevated p-4 max-w-sm">
              <div className="flex items-center gap-3">
                <BarChart3 className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Performance Score</span>
              </div>
              <div className="mt-2 text-2xl font-bold text-primary">94%</div>
              <div className="mt-1 h-2 bg-muted rounded-full">
                <div className="h-full w-[94%] bg-gradient-to-r from-accent to-primary rounded-full" />
              </div>
            </div>
          </div>

          <div className="absolute opacity-25 hidden md:block md:-bottom-20 md:left-6">
            <div className="card-elevated p-3 max-w-xs">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-accent" />
                <span className="text-xs font-medium">Client Satisfaction</span>
              </div>
              <div className="mt-1 text-lg font-bold text-accent">96.5%</div>
            </div>
          </div>

          <div className="absolute opacity-25 hidden md:block md:-bottom-28 md:right-6">
            <div className="card-elevated p-3 max-w-xs">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <span className="text-xs font-medium">Active Users</span>
              </div>
              <div className="mt-1 text-lg font-bold text-primary">2,847</div>
            </div>
          </div>

          {/* Main Content - Centered with proper spacing */}
          <div className="text-center py-20 px-4 sm:px-8 lg:px-16 xl:px-24 flex">
            <div className="mx-auto max-w-4xl">
              {/* Badge */}
              <div className="hidden lg:inline-flex items-center rounded-full border border-primary/20 bg-surface-elevated/50 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm mb-8">
                <TrendingUp className="mr-2 h-4 w-4 text-primary" />
                AI-Powered Interaction Analysis
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-7xl mb-6">
                Transform Customer{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-pulse">
                  Interactions
                </span>{" "}
                Into Actionable{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-pulse">
                  Insights
                </span>
              </h1>

              {/* Subheadline */}
              <p className="mx-auto max-w-2xl text-md text-muted-foreground lg:text-2xl mb-10 leading-relaxed">
                {t("hero.subtitle")}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Button
                  variant="hero"
                  size="xl"
                  className="min-w-[200px] w-[250px]"
                  onClick={handleStartTrial}
                >
                  {t("hero.cta")}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="premium"
                  size="xl"
                  className="min-w-[200px] w-[250px]"
                >
                  <Play className="mr-2 h-5 w-5" />
                  {t("hero.learnMore")}
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span>500+ Teams Trust Revalyze</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-primary" />
                  <span>99.9% Uptime Guaranteed</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span>40% Increase in Performance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
