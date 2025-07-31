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
        "Revalyze is a platform where you upload transcripts of conversations between you/your team/employees and your clients. Clients can be individual customers, like someone contacting your support team, or contacts from companies your business works with. You decide which criteria are important, such as: customer satisfaction, helpfulness, or problem solving. Our AI analyzes each conversation based on those criteria and inputs. The results are consistent and objective reviews. The dashboard shows clear performance insights per employee, per client and per company, so you can track and improve where it matters.",
    },
    {
      question: "How do I get started with my free trial?",
      answer:
        "Click 'Start Free Trial', create your account, and you're in. You’ll get full access to all features of the Starter plan for 7 days, no credit card required. After the trial ends, your data will be deleted unless you choose a paid plan.",
    },
    {
      question: "Can I create my own review criteria?",
      answer:
        "Yes, that’s a core part of Revalyze. You can define custom criteria to review conversations, track sentiment, and measure quality across your team or external partners.",
    },
    {
      question: "Is my data secure with Revalyze?",
      answer:
        "Yes. Revalyze takes data security and privacy seriously. Here's how we handle your data: Revalyze uses the OpenAI API to analyze conversations. Transcripts are temporarily sent to OpenAI for processing. This data is stored for a maximum of 30 days for abuse monitoring and security purposes, and is never used to train models. It is only accessible to authorized OpenAI personnel and is permanently deleted after that. By default, Revalyze has no access to your data. In rare cases, such as support requests, technical issues, or audits, authorized Revalyze staff may be granted temporary access, strictly limited to what is necessary. Our infrastructure is hosted in Germany, within the European Economic Area (EEA), by an ISO 27001-certified provider. All customer data is treated as confidential. Information is only shared with staff or processors who need access and are bound by strict confidentiality agreements. If Revalyze processes personal data on your behalf, our Data Processing Addendum (DPA) applies. This document is part of our terms and governs how we handle data under the GDPR.",
    },
    {
      question: "Can I customize the analytics dashboard?",
      answer:
        "No, the dashboard layout is fixed, designed for clarity and speed. You can filter by company, contact, criteria, and timeframe, but full customization isn’t supported (yet).",
    },
    {
      question: "What happens after my trial ends?",
      answer:
        "If you don’t upgrade to a paid plan after 7 days, your account and all related data will be deleted automatically. This helps keep our system clean and secure.",
    },
    {
      question: "How does account setup and user access work?",
      answer:
        "When you create a Revalyze account, you're also registering your company. That first account is automatically set as the Admin. From there, you can invite other team members as regular users, they’ll get their own dashboard but won’t have admin permissions like managing users or changing review settings.",
    },
    {
      question: "Does Revalyze support multiple roles?",
      answer:
        "Yes. There are two main roles: Admins (who manage everything) and Employees (who see their own performance and feedback).",
    },
    {
    question: "Who is Revalyze for?",
    answer:
      "Revalyze is built for teams that handle a lot of customer interaction like customer service teams, sales departments, agencies, or insurance companies. It’s especially useful for organizations that want to give structured feedback, spot trends, and improve conversations over time."
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
