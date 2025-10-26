import { Users, Target, Eye, MapPin, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { IoMdPerson } from "react-icons/io";

export const About = () => {
  const { t } = useLanguage();

  return (
    <>
      <section id="about" className="py-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent animate-pulse-glow" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-6">
              {t("about.title")}
            </h2>
          </AnimatedSection>

          {/* Meet the Team Section */}
          <AnimatedSection delay={0.2} className="mb-20">
            <h3 className="text-2xl font-bold text-center mb-12">
              Meet the Team
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* Gijs Profile */}
              <div className="card-elevated p-8 group hover:shadow-xl transition-all duration-500 hover:bg-surface-elevated/80 hover:-translate-y-2">
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto flex items-center justify-center rounded-full overflow-hidden ring-4 ring-accent/20 group-hover:ring-accent/40 transition-all duration-300">
                      <IoMdPerson className="w-2/3 h-2/3 text-gray-400 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    Gijs
                  </h3>
                  <p className="text-lg text-primary font-semibold mb-4">
                    Co-founder
                  </p>

                  <div className="text-muted-foreground leading-relaxed mb-6 space-y-3">
                    <p>
                      With a background in marketing and a deep interest in tech
                      and AI, I work at the intersection of strategy, brand and
                      growth. I make sure Revalyze doesn't just look good, but
                      is clearly positioned and delivers real value to the
                      people using it.
                    </p>
                    <p className="text-sm italic">
                      "AI isn’t the answer, it’s the tool. The answer comes from
                      how you use it."
                    </p>
                  </div>

                  <a
                    href="https://linkedin.com/in/gijs-example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors group-hover:scale-105 transform duration-200"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>

              {/* Nick Profile */}
              <div className="card-elevated p-8 group hover:shadow-xl transition-all duration-500 hover:bg-surface-elevated/80 hover:-translate-y-2">
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto flex items-center justify-center rounded-full overflow-hidden ring-4 ring-accent/20 group-hover:ring-accent/40 transition-all duration-300">
                      <IoMdPerson className="w-2/3 h-2/3 text-gray-400 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                    Nick
                  </h3>
                  <p className="text-lg text-accent font-semibold mb-4">
                    Co-founder
                  </p>

                  <div className="text-muted-foreground leading-relaxed mb-6 space-y-3">
                    <p>
                      I lead everything on the technical and product side, from
                      system architecture to AI implementation. My background is
                      in scalable software and applied machine learning, and I
                      focus on building tools that are fast, reliable, and
                      genuinely useful.
                    </p>
                    <p className="text-sm italic">
                      "Every line of code should earn its place."
                    </p>
                  </div>

                  <a
                    href="https://linkedin.com/in/nick-example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors group-hover:scale-105 transform duration-200"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Mission & Vision with Icons */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Mission */}
            <AnimatedSection
              delay={0.4}
              className="card-elevated p-8 group hover:shadow-xl transition-all duration-500 hover:bg-surface-elevated/80 hover:-translate-y-1"
            >
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary-foreground animate-float" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-primary">
                  Our Mission
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-center transition-colors duration-300 group-hover:text-foreground/80">
                {t("about.content")}
              </p>
            </AnimatedSection>

            {/* Vision */}
            <AnimatedSection
              delay={0.6}
              className="card-elevated p-8 group hover:shadow-xl transition-all duration-500 hover:bg-surface-elevated/80 hover:-translate-y-1"
            >
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                    <Eye className="h-6 w-6 text-primary-foreground animate-float [animation-delay:0.5s]" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-accent">
                  Our Vision
                </h3>
              </div>
              <div className="text-muted-foreground leading-relaxed space-y-4 text-center transition-colors duration-300 group-hover:text-foreground/80">
                <p>
                  To create a future where every customer interaction is
                  understood, valued, and improved through intelligent
                  automation. We envision a world where businesses no longer
                  guess how their teams perform or how customers feel. Instead,
                  they gain instant, objective insight through AI, helping every
                  team deliver more human, more effective service.
                </p>
                <p>
                  At Revalyze, we believe that truly understanding your
                  customers starts with listening, not just hearing. Our vision
                  is to make performance, empathy, and customer satisfaction
                  measurable through intelligent, AI-powered review systems. We
                  aim to empower companies with actionable insights that help
                  their teams grow, improve, and consistently deliver better
                  service, one conversation at a time.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Contact Info */}
          <AnimatedSection delay={0.8} className="text-center mt-16">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-surface-elevated/50 px-6 py-3 text-sm font-medium text-muted-foreground backdrop-blur-sm hover:bg-surface-elevated/70 hover:border-primary/40 hover:text-foreground transition-all duration-300 hover:scale-105">
              <Users className="mr-2 h-4 w-4 text-primary animate-float [animation-delay:1s]" />
              Have questions? We'd love to hear from you.
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};
