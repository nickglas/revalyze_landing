import { Plan } from "@/models/entity/plan";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sortPlansByTier(
  plans: Plan[],
  interval: "month" | "year"
): Plan[] {
  return [...plans].sort((a, b) => {
    const priceA =
      a.billingOptions.find((o) => o.interval === interval)?.tier ?? 0;
    const priceB =
      b.billingOptions.find((o) => o.interval === interval)?.tier ?? 0;
    return priceA - priceB;
  });
}

export function formatPrice(amount: number, currency: string = "EUR") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  }).format(amount);
}

export function calculateMaxAnnualSavings(plans: Plan[]): number {
  let maxSaving = 0;

  plans.forEach((plan) => {
    const monthly =
      plan.billingOptions.find((b) => b.interval === "month")?.amount || 0;
    const yearly =
      plan.billingOptions.find((b) => b.interval === "year")?.amount || 0;

    if (monthly > 0 && yearly > 0) {
      const savingPercent = ((monthly * 12 - yearly) / (monthly * 12)) * 100;
      if (savingPercent > maxSaving) maxSaving = savingPercent;
    }
  });

  return Math.round(maxSaving);
}
