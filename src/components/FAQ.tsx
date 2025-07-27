import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const FAQ = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      question: "What is Revalyze and how does it work?",
      answer:
        "Revalyze is an advanced analytics platform that helps businesses understand customer sentiment, track performance metrics, and make data-driven decisions. Our AI-powered system analyzes customer feedback across multiple channels to provide actionable insights.",
    },
    {
      question: "How do I get started with my free trial?",
      answer:
        "Getting started is easy! Simply click the 'Start Free Trial' button, create your account, and you'll have immediate access to all Pro features for 14 days. No credit card required during the trial period.",
    },
    {
      question: "What kind of data sources can Revalyze analyze?",
      answer:
        "Revalyze can analyze data from various sources including customer reviews, social media mentions, survey responses, support tickets, and direct feedback. We support integrations with popular platforms like Salesforce, HubSpot, and more.",
    },
    {
      question: "Is my data secure with Revalyze?",
      answer:
        "Absolutely. We use enterprise-grade security measures including end-to-end encryption, SOC 2 compliance, and regular security audits. Your data is stored securely and never shared with third parties without your explicit consent.",
    },
    {
      question: "Can I customize the analytics dashboard?",
      answer:
        "Yes! Our dashboard is fully customizable. You can create custom reports, set up automated alerts, choose your preferred visualizations, and organize metrics according to your business needs.",
    },
    {
      question: "What happens after my trial ends?",
      answer:
        "After your 14-day trial, you can choose to upgrade to one of our paid plans to continue using Revalyze. If you don't upgrade, your account will be paused, but your data will be safely stored for 30 days in case you decide to return.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Yes! We provide 24/7 customer support via chat and email for all users. Pro and Enterprise customers also get priority support and dedicated account management.",
    },
    {
      question: "Can I integrate Revalyze with my existing tools?",
      answer:
        "Revalyze offers robust API access and pre-built integrations with popular business tools including CRM systems, marketing platforms, and customer service software. Our team can also help with custom integrations.",
    },
  ];

  return (
    <motion.section
      id="faq"
      className="py-16 md:py-24 relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Background gradient */}
      <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-transparent via-sky-500/5 to-transparent" />

      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 p-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            {t("Frequently Asked Questions")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              "Find answers to common questions about Revalyze and how it can help your business."
            )}
          </p>
        </motion.div>

        {/* Accordion container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-background/50 backdrop-blur-sm"
              >
                <AccordionTrigger className="text-left hover:no-underline hover:text-primary transition-colors">
                  <span className="font-semibold">{t(faq.question)}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {t(faq.answer)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-muted-foreground mb-4">
            {t("Still have questions?")}
          </p>
          <p className="text-sm text-muted-foreground">
            {t("Contact our support team at")}{" "}
            <a
              href="mailto:support@revalyze.com"
              className="text-primary hover:underline"
            >
              support@revalyze.com
            </a>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export { FAQ };
