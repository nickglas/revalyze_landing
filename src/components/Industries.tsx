import { motion, Variants } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  CheckCircle,
  Headphones,
  Phone,
  Target,
  Building,
  Shield,
  TrendingUp,
} from "lucide-react";

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

// Industry use cases
const industries = [
  {
    icon: Headphones,
    title: "Customer Service Teams",
    description:
      "Track and analyze all past and ongoing customer interactions to accurately and unbiasedly measure customer sentiment and improve response quality and satisfaction.",
  },
  {
    icon: Phone,
    title: "Call Centers",
    description:
      "Monitor conversations in real time and review historical interactions to provide objective coaching and actionable performance insights for sales and support reps.",
  },
  {
    icon: Target,
    title: "Marketing & Sales Agencies",
    description:
      "Keep a clear overview of client communications over time, measuring effectiveness with unbiased AI analysis to optimize conversion strategies.",
  },
  {
    icon: Building,
    title: "B2B Companies",
    description:
      "Manage and follow up on relationships with clients and partner companies by analyzing past conversations and identifying key topics with accurate AI-powered insights.",
  },
  {
    icon: Shield,
    title: "Insurance Companies",
    description:
      "Track and evaluate intermediary performance and claim handling by objectively reviewing all interactions to drive quality and efficiency improvements.",
  },
  {
    icon: TrendingUp,
    title: "Growth-Focused Startups",
    description:
      "Maintain high-quality customer interactions at scale by continuously monitoring and analyzing communication history and performance metrics with precise and unbiased AI measurement.",
  },
];

export const IndustriesSection = () => {
  return (
    <motion.section className="py-16 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Perfect fit for your industry
          </motion.h2>
          <motion.p
            className="text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Revalyze delivers value across diverse business sectors
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 group">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <industry.icon className="h-6 w-6 text-white" />
                  </div>
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{industry.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {industry.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
