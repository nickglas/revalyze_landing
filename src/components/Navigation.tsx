import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap, ChevronDown } from "lucide-react";
import { IoEarth } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavigationProps {
  className?: string;
}

export const Navigation = ({ className }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { href: "#features", label: t('nav.features') },
    { href: "#pricing", label: t('nav.pricing') },
    { href: "#about", label: t('nav.contact') },
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

          {/* Desktop CTA - Language, Pricing & Login */}
          <div className="hidden md:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <IoEarth className="h-4 w-4" />
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem 
                  onClick={() => setLanguage('en')}
                  className={language === 'en' ? 'bg-muted' : ''}
                >
                  {t('language.english')}
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLanguage('nl')}
                  className={language === 'nl' ? 'bg-muted' : ''}
                >
                  {t('language.dutch')}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="sm" asChild>
              <a href="/login">{t('nav.login')}</a>
            </Button>
            <Button variant="glow" size="sm" asChild>
              <a href="#pricing" onClick={(e) => {
                e.preventDefault();
                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
              }}>{t('nav.viewPricing')}</a>
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
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="w-full justify-between">
                    <div className="flex items-center gap-2">
                      <IoEarth className="h-4 w-4" />
                      <span>{language === 'en' ? t('language.english') : t('language.dutch')}</span>
                    </div>
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuItem 
                    onClick={() => setLanguage('en')}
                    className={language === 'en' ? 'bg-muted' : ''}
                  >
                    {t('language.english')}
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => setLanguage('nl')}
                    className={language === 'nl' ? 'bg-muted' : ''}
                  >
                    {t('language.dutch')}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="ghost" className="w-full" asChild>
                <a href="/login">{t('nav.login')}</a>
              </Button>
              <Button variant="glow" className="w-full" asChild>
                <a href="#pricing" onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                }}>{t('nav.viewPricing')}</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};