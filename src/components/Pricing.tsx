import { useState } from "react";
import { Check, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

// Pricing data based on the provided subscription information
const plans = [
  {
    name: "Starter Plan",
    stripeProductId: "prod_ShzDJ2EVmk7wIB",
    currency: "eur",
    monthlyPrice: 49,
    yearlyPrice: 490,
    monthlyPriceId: "price_1RmZF9FNTWq4w3FpZZUWNKmN",
    yearlyPriceId: "price_1RmZFAFNTWq4w3FpZ9DlJCvd",
    allowedUsers: 3,
    allowedTranscripts: 500,
    allowedReviews: 250,
    description:
      "Perfect for small teams getting started with conversation analysis",
    features: [
      "Up to 3 users",
      "250 reviews per month",
      "500 transcripts",
      "Basic sentiment analysis",
      "Standard reporting",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Pro Plan",
    stripeProductId: "prod_ShzDJQAG8E7Ff4",
    currency: "eur",
    monthlyPrice: 149,
    yearlyPrice: 1490,
    monthlyPriceId: "price_1RmZF9FNTWq4w3FpeudE29Jy",
    yearlyPriceId: "price_1RmZF9FNTWq4w3FpTyyY4kUX",
    allowedUsers: 10,
    allowedTranscripts: 2000,
    allowedReviews: 1000,
    description: "Advanced features for growing teams and enhanced insights",
    features: [
      "Up to 10 users",
      "1,000 reviews per month",
      "2,000 transcripts",
      "Basic sentiment analysis",
      "Standard reporting",
      "Email support",
    ],
    popular: true,
  },
  {
    name: "Business Plan",
    stripeProductId: "prod_ShzDZYGXvHiArf",
    currency: "eur",
    monthlyPrice: 499,
    yearlyPrice: 4990,
    monthlyPriceId: "price_1RmZF8FNTWq4w3FpqSXBD732",
    yearlyPriceId: "price_1RmZF8FNTWq4w3FpuQpKn4NW",
    allowedUsers: 999999,
    allowedTranscripts: 20000,
    allowedReviews: 10000,
    description:
      "Enterprise solution for large organizations with unlimited scale",
    features: [
      "Up to 100 users",
      "10,000 reviews per month",
      "20,000 transcripts",
      "Basic sentiment analysis",
      "Standard reporting",
      "Email support",
    ],
    popular: false,
  },
];

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleSubscribe = (plan: (typeof plans)[0]) => {
    console.log("Plan button clicked:", plan.name);
    const planValue = plan.name.toLowerCase().replace(" plan", "");
    console.log("Navigating to:", `/register?plan=${planValue}`);
    navigate(`/register?plan=${planValue}`);
  };

  return (
    <>
      <section id="pricing" className="py-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-surface-elevated/50 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm mb-6">
              <Zap className="mr-2 h-4 w-4 text-primary" />
              Simple Pricing
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-6">
              {t("pricing.title")}
            </h2>

            <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
              {t("pricing.subtitle")}
            </p>

            {/* Billing Toggle */}
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="flex items-center justify-center gap-4">
                <span
                  className={cn(
                    "text-sm font-medium",
                    !isYearly ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  Monthly
                </span>
                <Switch
                  checked={isYearly}
                  onCheckedChange={setIsYearly}
                  className="data-[state=checked]:bg-switch-checked"
                />
                <span
                  className={cn(
                    "text-sm font-medium",
                    isYearly ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  Yearly
                </span>
              </div>
              <div
                className={cn(
                  "text-xs font-medium transition-all duration-200",
                  isYearly ? "text-success" : "text-muted-foreground/50"
                )}
              >
                {isYearly
                  ? "Saved 17% with annual billing"
                  : "Switch to yearly for 17% savings"}
              </div>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {isLoading
              ? // Skeleton Loaders
                Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="card-elevated rounded-2xl p-8">
                    <div className="text-center mb-8">
                      <Skeleton className="h-8 w-32 mx-auto mb-4" />
                      <div className="mb-4">
                        <Skeleton className="h-12 w-24 mx-auto mb-2" />
                        <Skeleton className="h-4 w-16 mx-auto" />
                      </div>
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-3/4 mx-auto" />
                    </div>
                    <div className="space-y-4 mb-8">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="flex items-start">
                          <Skeleton className="h-5 w-5 mt-0.5 mr-3 rounded" />
                          <Skeleton className="h-4 flex-1" />
                        </div>
                      ))}
                    </div>
                    <Skeleton className="h-11 w-full rounded-lg" />
                  </div>
                ))
              : plans.map((plan, index) => {
                  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
                  const savings = isYearly
                    ? Math.round(
                        ((plan.monthlyPrice * 12 - plan.yearlyPrice) /
                          (plan.monthlyPrice * 12)) *
                          100
                      )
                    : 0;

                  return (
                    <div
                      key={plan.name}
                      className={cn(
                        "relative rounded-2xl p-8 transition-all duration-300 cursor-pointer hover:scale-[1.02] card-elevated"
                      )}
                      onClick={() => handleSubscribe(plan)}
                    >
                      {/* Plan Header */}
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold mb-2">
                          {t(
                            `pricing.${plan.name
                              .toLowerCase()
                              .replace(" plan", "")}.title`
                          )}
                        </h3>
                        <div className="mb-4">
                          <span className="text-4xl font-bold">€{price}</span>
                          <span className="text-muted-foreground ml-1">
                            /{isYearly ? "year" : "month"}
                          </span>
                          {isYearly && savings > 0 && (
                            <div className="text-sm text-success mt-1">
                              Save {savings}% annually
                            </div>
                          )}
                        </div>
                        <p className="text-muted-foreground">
                          {t(
                            `pricing.${plan.name
                              .toLowerCase()
                              .replace(" plan", "")}.desc`
                          )}
                        </p>
                      </div>

                      {/* Features */}
                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                            <span className="text-sm text-muted-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <Button
                        variant={plan.popular ? "hero" : "outline"}
                        className="w-full"
                        size="lg"
                        onClick={() => handleSubscribe(plan)}
                      >
                        Subscribe to {plan.name}
                      </Button>
                    </div>
                  );
                })}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">
              All plans include a 14-day free trial. No credit card required.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Check className="h-4 w-4 text-primary mr-2" />
                Cancel anytime
              </div>
              <div className="flex items-center">
                <Check className="h-4 w-4 text-primary mr-2" />
                Setup assistance included
              </div>
              <div className="flex items-center">
                <Check className="h-4 w-4 text-primary mr-2" />
                Money-back guarantee
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
