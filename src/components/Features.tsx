import {
  Brain,
  BarChart3,
  Users,
  MessageSquare,
  TrendingUp,
  Shield,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, Variant, Variants } from "framer-motion";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Sentiment Analysis",
    description:
      "Advanced natural language processing analyzes emotional tone, satisfaction levels, and customer sentiment in real-time conversations.",
    highlight: "99.2% accuracy rate",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "Comprehensive performance metrics and scoring for each team member with actionable insights and improvement recommendations.",
    highlight: "40% improvement average",
  },
  {
    icon: MessageSquare,
    title: "Conversation Intelligence",
    description:
      "Deep conversation analysis that identifies key topics, pain points, and opportunities across all customer interactions.",
    highlight: "Real-time processing",
  },
  {
    icon: TrendingUp,
    title: "Insights Dashboard",
    description:
      "Beautiful, intuitive dashboards that transform raw conversation data into strategic business insights and trends.",
    highlight: "Custom reporting",
  },
  {
    icon: Users,
    title: "Team Performance Review",
    description:
      "Automated performance reviews based on actual conversation data, helping managers make data-driven decisions.",
    highlight: "Objective scoring",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-grade security with end-to-end encryption, compliance with GDPR, SOX, and industry-specific regulations.",
    highlight: "SOC 2 certified",
  },
];

// Animation variants
const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number], // explicit tuple type
      duration: 0.5,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.25, 0.1, 0.25, 1], // cubic-bezier for easeOut
      duration: 0.4,
    },
  },
};

export const Features = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleStartTrial = () => {
    navigate("/register");
  };

  const handleScheduleDemo = () => {
    // TODO: Implement demo scheduling
    console.log("Schedule demo clicked");
  };

  return (
    <motion.section
      id="features"
      className="py-24 relative overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div className="text-center mb-20" variants={childVariants}>
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-surface-elevated/50 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm mb-6">
            <Brain className="mr-2 h-4 w-4 text-primary" />
            Powerful Features
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-6">
            {t("features.title")}
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t("features.subtitle")}
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={cn("card-elevated p-8 group")}
              style={{ cursor: "default" }}
              variants={childVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              {/* Icon */}
              <div className="feature-icon w-fit mb-6">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {feature.description}
              </p>

              {/* Highlight */}
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <TrendingUp className="mr-1 h-3 w-3" />
                {feature.highlight}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div className="text-center mt-20" variants={childVariants}>
          <div className="card-elevated p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to see Revalyze in action?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join hundreds of teams already using our platform to transform
              their customer interactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="btn-glow px-8 py-3 rounded-lg font-semibold text-primary-foreground"
                onClick={handleStartTrial}
              >
                {t("features.cta")}
              </button>
              <button
                className="px-8 py-3 rounded-lg font-medium border border-primary/20 hover:border-primary/40 transition-colors"
                onClick={handleScheduleDemo}
              >
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
