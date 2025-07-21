import { Users, Target, Eye } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-6">
            Who <span className="hero-gradient-text">we are</span>
          </h2>
        </div>

        {/* Team Photo Cards */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
          {/* Gijs */}
          <div className="text-center group opacity-0 translate-y-8 animate-fade-in">
            <div className="relative mb-6">
              <div className="w-48 h-48 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-primary/20">
                {/* Photo placeholder - replace with actual photo */}
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Users className="h-16 w-16 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">Gijs</h3>
            <p className="text-muted-foreground">Co-founder & CEO</p>
          </div>

          {/* Nick */}
          <div className="text-center group opacity-0 translate-y-8 animate-fade-in [animation-delay:0.2s]">
            <div className="relative mb-6">
              <div className="w-48 h-48 mx-auto rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 overflow-hidden transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-accent/20">
                {/* Photo placeholder - replace with actual photo */}
                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                    <Target className="h-16 w-16 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-accent">Nick</h3>
            <p className="text-muted-foreground">Co-founder & CTO</p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Mission */}
          <div className="opacity-0 -translate-x-8 animate-fade-in [animation-delay:0.4s] card-elevated p-8 group hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="feature-icon mr-3">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold">2025 Mission & Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To empower companies with AI-driven tools that measure, analyze, and improve communication between employees and customers. Revalyze makes it easy for teams to track performance, understand sentiment, and continuously raise the quality of their service, all with minimal effort and maximum clarity.
            </p>
          </div>

          {/* Vision */}
          <div className="opacity-0 -translate-x-8 animate-fade-in [animation-delay:0.6s] card-elevated p-8 group hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="feature-icon mr-3">
                <Eye className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold">Our Vision for the Future</h3>
            </div>
            <div className="text-muted-foreground leading-relaxed space-y-4">
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
        <div className="text-center mt-16 opacity-0 translate-y-4 animate-fade-in [animation-delay:0.8s]">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-surface-elevated/50 px-6 py-3 text-sm font-medium text-muted-foreground backdrop-blur-sm hover:bg-surface-elevated/70 hover:border-primary/40 hover:text-foreground transition-all duration-300">
            <Users className="mr-2 h-4 w-4 text-primary" />
            Have questions? We'd love to hear from you.
          </div>
        </div>
      </div>
    </section>
  );
};