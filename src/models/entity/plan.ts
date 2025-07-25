export interface BillingOption {
  interval: "month" | "year"; // Could be extended if needed
  stripePriceId: string;
  amount: number; // Amount in smallest currency unit, e.g. cents
  tier: number;
}

export interface PlanMetadata {
  allowedReviews: string; // They are strings in the response
  allowedTranscripts: string;
  allowedUsers: string;
}

export interface Plan {
  _id: string;
  name: string;
  stripeProductId: string;
  currency: string; // e.g. "eur"
  billingOptions: BillingOption[];
  allowedUsers: number;
  allowedTranscripts: number;
  allowedReviews: number;
  isActive: boolean;
  isVisible: boolean;
  features: any[]; // empty array in response, could be typed if known
  metadata: PlanMetadata;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number; // version key from MongoDB
}
