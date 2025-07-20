import { Check, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "per month",
    description: "Perfect for small teams getting started with conversation analysis",
    features: [
      "Up to 5 team members",
      "100 conversations/month",
      "Basic sentiment analysis",
      "Standard reporting",
      "Email support",
      "Data retention: 3 months"
    ],
    popular: false,
    cta: "Start Free Trial"
  },
  {
    name: "Professional",
    price: "$149",
    period: "per month",
    description: "Advanced features for growing teams and enhanced insights",
    features: [
      "Up to 25 team members",
      "1,000 conversations/month",
      "Advanced AI analysis",
      "Custom dashboards",
      "Performance scoring",
      "Priority support",
      "Data retention: 12 months",
      "API access",
      "Custom integrations"
    ],
    popular: true,
    cta: "Start Free Trial"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "Tailored solution with unlimited scale and premium support",
    features: [
      "Unlimited team members",
      "Unlimited conversations",
      "White-label solution",
      "Advanced security & compliance",
      "Dedicated account manager",
      "24/7 phone support",
      "Custom data retention",
      "On-premise deployment",
      "Custom AI models",
      "SLA guarantees"
    ],
    popular: false,
    cta: "Contact Sales"
  }
];

export const Pricing = () => {
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
            Choose the perfect{" "}
            <span className="hero-gradient-text">
              plan
            </span>{" "}
            for your team
          </h2>
          
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Start with our free trial and scale as you grow. All plans include our core features 
            with no hidden fees or setup costs.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-2xl p-8 transition-all duration-300",
                plan.popular
                  ? "card-elevated border-primary/20 scale-105 lg:scale-110"
                  : "card-elevated"
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="inline-flex items-center rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1.5 text-sm font-medium text-primary-foreground">
                    <Star className="mr-1 h-4 w-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">/{plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.popular ? "hero" : plan.name === "Enterprise" ? "premium" : "outline"}
                className="w-full"
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
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