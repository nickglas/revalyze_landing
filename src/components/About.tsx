import { Users, Target, Eye } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent animate-pulse-glow" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-6">
            {t('about.title')}
          </h2>
        </div>

        {/* Founders */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20 animate-fade-in [animation-delay:0.2s]">
          {/* Gijs */}
          <div className="text-center group">
            <div className="relative mb-4">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden hover-scale transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Users className="h-10 w-10 text-primary-foreground animate-float" />
                </div>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-1 transition-colors duration-300 group-hover:text-primary">Gijs</h3>
            <p className="text-muted-foreground text-sm">Co-founder</p>
          </div>

          {/* Nick */}
          <div className="text-center group">
            <div className="relative mb-4">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden hover-scale transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent/20">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Target className="h-10 w-10 text-primary-foreground animate-float [animation-delay:0.5s]" />
                </div>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-1 transition-colors duration-300 group-hover:text-accent">Nick</h3>
            <p className="text-muted-foreground text-sm">Co-founder</p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto animate-fade-in [animation-delay:0.4s]">
          {/* Mission */}
          <div className="card-elevated p-8 group hover:shadow-xl transition-all duration-500 hover:bg-surface-elevated/80 hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="feature-icon mr-3 group-hover:animate-pulse-glow">
                <Target className="h-6 w-6 text-primary-foreground transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-primary">2025 Mission & Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground/80">
              {t('about.content')}
            </p>
          </div>

          {/* Vision */}
          <div className="card-elevated p-8 group hover:shadow-xl transition-all duration-500 hover:bg-surface-elevated/80 hover:-translate-y-1 [animation-delay:0.2s]">
            <div className="flex items-center mb-4">
              <div className="feature-icon mr-3 group-hover:animate-pulse-glow">
                <Eye className="h-6 w-6 text-primary-foreground transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-accent">Our Vision for the Future</h3>
            </div>
            <div className="text-muted-foreground leading-relaxed space-y-4 transition-colors duration-300 group-hover:text-foreground/80">
              <p>
                To create a future where every customer interaction is understood, valued, and improved through intelligent automation. We envision a world where businesses no longer guess how their teams perform or how customers feel. Instead, they gain instant, objective insight through AI, helping every team deliver more human, more effective service.
              </p>
              <p>
                At Revalyze, we believe that truly understanding your customers starts with listening, not just hearing. Our vision is to make performance, empathy, and customer satisfaction measurable through intelligent, AI-powered review systems. We aim to empower companies with actionable insights that help their teams grow, improve, and consistently deliver better service, one conversation at a time.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-16 animate-fade-in [animation-delay:0.6s]">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-surface-elevated/50 px-6 py-3 text-sm font-medium text-muted-foreground backdrop-blur-sm hover:bg-surface-elevated/70 hover:border-primary/40 hover:text-foreground transition-all duration-300 hover:scale-105">
            <Users className="mr-2 h-4 w-4 text-primary animate-float [animation-delay:1s]" />
            Have questions? We'd love to hear from you.
          </div>
        </div>
      </div>
    </section>
  );
};