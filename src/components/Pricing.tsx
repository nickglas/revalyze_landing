import { useEffect, useState } from "react";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Skeleton } from "@/components/ui/skeleton";
import { calculateMaxAnnualSavings, cn, formatPrice } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePlanStore } from "@/stores/planStore";
import { useShallow } from "zustand/react/shallow";

import { motion, AnimatePresence } from "framer-motion";

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();

  const { selectPlan, selectedPlan } = usePlanStore();

  const { plans, loading, error, loadPlans } = usePlanStore(
    useShallow((state) => ({
      plans: state.plans,
      loading: state.loading,
      error: state.error,
      loadPlans: state.loadPlans,
    }))
  );

  // Fetch plans on component mount
  useEffect(() => {
    loadPlans();
  }, [loadPlans]);

  const maxAnnualSavings = calculateMaxAnnualSavings(plans);

  const handleSubscribe = (plan: (typeof plans)[0]) => {
    const selectedBillingOption = plan.billingOptions.find(
      (x) => x.interval === (isYearly ? "year" : "month")
    );
    selectPlan({ plan, selectedOption: selectedBillingOption });
    navigate(`/register`);
  };

  return (
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
                ? `Save up to ${maxAnnualSavings}% with annual billing`
                : `Switch to yearly for ${maxAnnualSavings}% savings`}
            </div>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {loading
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
            : plans.map((plan) => {
                const monthlyOption = plan.billingOptions.find(
                  (b) => b.interval === "month"
                );
                const yearlyOption = plan.billingOptions.find(
                  (b) => b.interval === "year"
                );

                const price = isYearly
                  ? yearlyOption?.amount! / 100
                  : monthlyOption?.amount! / 100;

                const savingsPercent = isYearly
                  ? monthlyOption
                    ? Math.round(
                        ((monthlyOption.amount * 12 - yearlyOption!.amount) /
                          (monthlyOption.amount * 12)) *
                          100
                      )
                    : 0
                  : 0;

                const formattedPrice = formatPrice(
                  price,
                  plan.currency.toUpperCase()
                );

                return (
                  <div
                    key={plan._id}
                    className={cn(
                      "relative rounded-2xl p-8 transition-all duration-300 cursor-pointer hover:scale-[1.02] card-elevated"
                    )}
                    onClick={() => handleSubscribe(plan)}
                  >
                    {/* Plan Header */}
                    <div className="text-center mb-4">
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <div className="mb-4 relative inline-block h-[56px]">
                        <AnimatePresence mode="wait" initial={false}>
                          <motion.span
                            key={
                              isYearly
                                ? yearlyOption?.amount
                                : monthlyOption?.amount
                            }
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="text-4xl font-bold block"
                          >
                            <div className="flex flex-row items-end">
                              {formattedPrice}
                              <span className="text-muted-foreground ml-1 text-sm">
                                /{isYearly ? "year" : "month"}
                              </span>
                            </div>
                          </motion.span>
                        </AnimatePresence>

                        {isYearly && savingsPercent > 0 && (
                          <div className="text-sm text-success mt-1">
                            Save {savingsPercent}% annually
                          </div>
                        )}
                      </div>
                      {/* <p className="text-muted-foreground min-h-20">
                        {plan.features.length > 0
                          ? plan.features.join(", ")
                          : "No extra features"}
                      </p> */}
                    </div>

                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                        <span className="text-sm text-muted-foreground">
                          {plan.allowedUsers > 100
                            ? "Unlimited users"
                            : `Up to ${plan.allowedUsers} users`}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                        <span className="text-sm text-muted-foreground">
                          {plan.allowedReviews} reviews per month
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                        <span className="text-sm text-muted-foreground">
                          {plan.allowedTranscripts} transcripts
                        </span>
                      </li>
                    </ul>

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
                      variant="outline"
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
  );
};
