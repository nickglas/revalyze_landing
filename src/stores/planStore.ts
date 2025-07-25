import { create } from "zustand";
import axios from "axios";
import { Plan } from "../models/entity/plan";
import { sortPlansByTier } from "@/lib/utils";

interface PlanState {
  plans: Plan[];
  loading: boolean;
  error: string | null;
  loadPlans: () => Promise<void>;
}

export const usePlanStore = create<PlanState>((set) => ({
  plans: [],
  loading: false,
  error: null,

  loadPlans: async () => {
    set({ loading: true });
    try {
      const res = await axios.get<Plan[]>(
        "http://localhost:4500/api/v1/subscriptions"
      );
      const sortedPlans = sortPlansByTier(res.data, "month");
      set({ plans: sortedPlans, loading: false });
    } catch (error) {
      set({ error: "Failed to load plans", loading: false });
    }
  },
}));
