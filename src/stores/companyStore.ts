import { create } from "zustand";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";

interface RegisterCompanyData {
  companyName: string;
  companyMainEmail: string;
  companyPhone: string;
  address: string;
  priceId: string;
  adminName: string;
  adminEmail: string;
  password: string;
  passwordConfirm: string;
}

interface CompanyState {
  loading: boolean;
  error: string | null;
  registerCompany: (data: RegisterCompanyData) => Promise<string>;
}

export const useCompanyStore = create<CompanyState>((set) => ({
  loading: false,
  error: null,

  registerCompany: async (data: RegisterCompanyData) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post("/api/v1/companies", data);
      const checkoutUrl = response.data?.checkoutUrl;

      if (!checkoutUrl) {
        throw new Error("Checkout URL missing in response");
      }

      return checkoutUrl;
    } catch (error: any) {
      const message =
        error?.response?.data?.message || "Failed to register company";
      toast({ title: "Error", description: message, variant: "destructive" });
      set({ error: message });
      return null;
    } finally {
      set({ loading: false });
    }
  },
}));
