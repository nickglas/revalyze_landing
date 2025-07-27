import { create } from "zustand";
import axios from "axios";
import { BillingOption, Plan } from "../models/entity/plan";
import { sortPlansByTier } from "@/lib/utils";

export interface PlanOption {
  plan: Plan;
  selectedOption: BillingOption;
}

interface PlanState {
  plans: Plan[];
  selectedPlan: PlanOption | null;
  loading: boolean;
  error: string | null;
  loadPlans: () => Promise<void>;
  selectPlan: (planOption: PlanOption) => void;
}

export const usePlanStore = create<PlanState>((set) => ({
  plans: [],
  loading: false,
  error: null,
  selectedPlan: null,

  selectPlan(plan: PlanOption) {
    set({ selectedPlan: plan });
  },

  loadPlans: async () => {
    set({ loading: true });
    try {
      const res = await axios.get<Plan[]>("/api/v1/subscriptions");
      const sortedPlans = sortPlansByTier(res.data, "month");
      set({ plans: sortedPlans, loading: false });
    } catch (error) {
      set({ error: "Failed to load plans", loading: false });
    }
  },
}));
