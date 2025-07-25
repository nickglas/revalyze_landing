import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "nl";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Translation dictionaries
const translations = {
  en: {
    // Navigation
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "nav.login": "Login",
    "nav.viewPricing": "Pricing",

    // Hero section
    "hero.title": "Transform Your Business with Data-Driven Insights",
    "hero.subtitle":
      "Unlock the power of analytics to drive growth, optimize performance, and make informed decisions that propel your business forward.",
    "hero.cta": "Start Free Trial",
    "hero.learnMore": "Learn More",

    // Features section
    "features.title": "Powerful Features for Data-Driven Success",
    "features.subtitle":
      "Everything you need to analyze, understand, and grow your business",
    "features.analytics.title": "Advanced Analytics",
    "features.analytics.desc":
      "Deep insights into your business performance with real-time data visualization and comprehensive reporting.",
    "features.dashboard.title": "Intuitive Dashboard",
    "features.dashboard.desc":
      "User-friendly interface that makes complex data simple to understand and act upon.",
    "features.integration.title": "Seamless Integration",
    "features.integration.desc":
      "Connect with your existing tools and platforms for a unified data experience.",
    "features.cta": "Start Free Trial",

    // Pricing section
    "pricing.title": "Choose Your Plan",
    "pricing.subtitle": "Select the perfect plan for your business needs",
    "pricing.starter.title": "Starter Plan",
    "pricing.starter.price": "€49",
    "pricing.starter.period": "/month",
    "pricing.starter.desc":
      "Perfect for small businesses getting started with data analytics",
    "pricing.pro.title": "Pro Plan",
    "pricing.pro.price": "€149",
    "pricing.pro.period": "/month",
    "pricing.pro.desc":
      "Advanced features for growing businesses that need deeper insights",
    "pricing.business.title": "Business Plan",
    "pricing.business.price": "€499",
    "pricing.business.period": "/month",
    "pricing.business.desc":
      "Enterprise-grade solution for large organizations",
    "pricing.subscribe": "Subscribe",
    "pricing.feature.dashboards": "Custom Dashboards",
    "pricing.feature.reports": "Advanced Reports",
    "pricing.feature.integrations": "API Integrations",
    "pricing.feature.support": "24/7 Support",
    "pricing.feature.users": "Unlimited Users",
    "pricing.feature.storage": "Unlimited Storage",

    // About section
    "about.title": "About Revalyze",
    "about.content":
      "We are passionate about helping businesses unlock the power of their data. Our team of experts has developed cutting-edge analytics solutions that transform raw data into actionable insights.",

    // Footer
    "footer.company": "Company",
    "footer.product": "Product",
    "footer.support": "Support",
    "footer.about": "About",
    "footer.careers": "Careers",
    "footer.press": "Press",
    "footer.features": "Features",
    "footer.pricing": "Pricing",
    "footer.api": "API",
    "footer.help": "Help Center",
    "footer.documentation": "Documentation",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",

    // Register page
    "register.title": "Create Your Account",
    "register.subtitle": "Join thousands of businesses already using Revalyze",
    "register.fullName": "Full Name",
    "register.companyName": "Company Name",
    "register.email": "Email Address",
    "register.password": "Password",
    "register.confirmPassword": "Confirm Password",
    "register.selectPlan": "Select Plan",
    "register.terms": "I agree to the Terms & Conditions",
    "register.createAccount": "Create Account",
    "register.haveAccount": "Already have an account?",
    "register.loginHere": "Login here",

    // Language dropdown
    "language.english": "English",
    "language.dutch": "Dutch",
  },
  nl: {
    // Navigation
    "nav.features": "Functies",
    "nav.pricing": "Prijzen",
    "nav.contact": "Contact",
    "nav.login": "Inloggen",
    "nav.viewPricing": "Bekijk Prijzen",

    // Hero section
    "hero.title": "Transformeer Uw Bedrijf met Data-Gedreven Inzichten",
    "hero.subtitle":
      "Ontgrendel de kracht van analytics om groei te stimuleren, prestaties te optimaliseren en weloverwogen beslissingen te nemen die uw bedrijf vooruit helpen.",
    "hero.cta": "Start Gratis Proefperiode",
    "hero.learnMore": "Meer Informatie",

    // Features section
    "features.title": "Krachtige Functies voor Data-Gedreven Succes",
    "features.subtitle":
      "Alles wat u nodig heeft om uw bedrijf te analyseren, begrijpen en laten groeien",
    "features.analytics.title": "Geavanceerde Analytics",
    "features.analytics.desc":
      "Diepgaande inzichten in uw bedrijfsprestaties met real-time datavisualisatie en uitgebreide rapportage.",
    "features.dashboard.title": "Intuïtief Dashboard",
    "features.dashboard.desc":
      "Gebruiksvriendelijke interface die complexe data eenvoudig maakt om te begrijpen en er actie op te ondernemen.",
    "features.integration.title": "Naadloze Integratie",
    "features.integration.desc":
      "Verbind met uw bestaande tools en platforms voor een uniforme data-ervaring.",
    "features.cta": "Start Gratis Proefperiode",

    // Pricing section
    "pricing.title": "Kies Uw Plan",
    "pricing.subtitle": "Selecteer het perfecte plan voor uw bedrijfsbehoeften",
    "pricing.starter.title": "Starter Plan",
    "pricing.starter.price": "€49",
    "pricing.starter.period": "/maand",
    "pricing.starter.desc":
      "Perfect voor kleine bedrijven die beginnen met data-analytics",
    "pricing.pro.title": "Pro Plan",
    "pricing.pro.price": "€149",
    "pricing.pro.period": "/maand",
    "pricing.pro.desc":
      "Geavanceerde functies voor groeiende bedrijven die diepere inzichten nodig hebben",
    "pricing.business.title": "Business Plan",
    "pricing.business.price": "€499",
    "pricing.business.period": "/maand",
    "pricing.business.desc":
      "Enterprise-grade oplossing voor grote organisaties",
    "pricing.subscribe": "Abonneren",
    "pricing.feature.dashboards": "Aangepaste Dashboards",
    "pricing.feature.reports": "Geavanceerde Rapporten",
    "pricing.feature.integrations": "API Integraties",
    "pricing.feature.support": "24/7 Ondersteuning",
    "pricing.feature.users": "Onbeperkt Gebruikers",
    "pricing.feature.storage": "Onbeperkte Opslag",

    // About section
    "about.title": "Over Revalyze",
    "about.content":
      "Wij zijn gepassioneerd over het helpen van bedrijven om de kracht van hun data te ontgrendelen. Ons team van experts heeft geavanceerde analytics-oplossingen ontwikkeld die ruwe data transformeren in bruikbare inzichten.",

    // Footer
    "footer.company": "Bedrijf",
    "footer.product": "Product",
    "footer.support": "Ondersteuning",
    "footer.about": "Over",
    "footer.careers": "Carrières",
    "footer.press": "Pers",
    "footer.features": "Functies",
    "footer.pricing": "Prijzen",
    "footer.api": "API",
    "footer.help": "Helpcentrum",
    "footer.documentation": "Documentatie",
    "footer.contact": "Contact",
    "footer.rights": "Alle rechten voorbehouden.",

    // Register page
    "register.title": "Maak Uw Account Aan",
    "register.subtitle":
      "Sluit u aan bij duizenden bedrijven die al Revalyze gebruiken",
    "register.fullName": "Volledige Naam",
    "register.companyName": "Bedrijfsnaam",
    "register.email": "E-mailadres",
    "register.password": "Wachtwoord",
    "register.confirmPassword": "Bevestig Wachtwoord",
    "register.selectPlan": "Selecteer Plan",
    "register.terms": "Ik ga akkoord met de Algemene Voorwaarden",
    "register.createAccount": "Account Aanmaken",
    "register.haveAccount": "Heeft u al een account?",
    "register.loginHere": "Log hier in",

    // Language dropdown
    "language.english": "Engels",
    "language.dutch": "Nederlands",
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "nl")) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
