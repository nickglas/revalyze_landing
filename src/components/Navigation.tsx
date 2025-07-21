import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
}

export const Navigation = ({ className }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#about", label: "Contact" },
  ];

  return (
    <nav className={cn("relative z-50 bg-transparent", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="text-xl font-bold hero-gradient-text">
              Revalyze
            </span>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    const targetId = item.href.substring(1);
                    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA - Pricing & Login */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="/login">Login</a>
            </Button>
            <Button variant="glow" size="sm" asChild>
              <a href="#pricing" onClick={(e) => {
                e.preventDefault();
                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
              }}>View Pricing</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-surface-elevated/95 backdrop-blur-lg border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  const targetId = item.href.substring(1);
                  document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 pb-2 border-t border-border space-y-2">
              <Button variant="ghost" className="w-full" asChild>
                <a href="/login">Login</a>
              </Button>
              <Button variant="glow" className="w-full" asChild>
                <a href="#pricing" onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                }}>View Pricing</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};