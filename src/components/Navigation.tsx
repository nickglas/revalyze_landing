import { useEffect, useState } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { href: "#features", label: t("nav.features") },
    { href: "#pricing", label: t("nav.pricing") },
    { href: "#about", label: t("nav.contact") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "relative z-50 bg-transparent backdrop-blur-sm transition-all duration-300",
        isScrolled && "bg-surface-elevated/80",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}

          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]"
              viewBox="0 0 375 374.999991"
              preserveAspectRatio="xMidYMid meet"
              version="1.2"
            >
              <defs>
                {/* Define gradient */}
                <linearGradient
                  id="primaryGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--primary) / 0)" />
                </linearGradient>

                <clipPath id="ac8a196e76">
                  <path d="M97.773438 96.28125 L299.644531 96.28125 L299.644531 278.445312 L97.773438 278.445312 Z" />
                </clipPath>
                <clipPath id="00b0f4a8ed">
                  <path d="M75 145.886719 L233.726562 145.886719 L233.726562 278.445312 L75 278.445312 Z" />
                </clipPath>
              </defs>

              <g id="d469aabcea">
                <g clipRule="nonzero" clipPath="url(#ac8a196e76)">
                  <path
                    style={{
                      stroke: "none",
                      fill: "url(#primaryGradient)",
                      fillRule: "nonzero",
                    }}
                    d="M249.347656 220.425781 L249.332031 220.429688 C269.644531 209.117188 283.390625 187.425781 283.390625 162.523438 C283.390625 125.9375 253.734375 96.28125 217.148438 96.28125 L97.886719 96.28125 L113.75 114.578125 C121.910156 123.992188 133.761719 129.402344 146.222656 129.402344 L217.148438 129.402344 C235.441406 129.402344 250.269531 144.230469 250.269531 162.523438 C250.269531 180.816406 235.441406 195.644531 217.148438 195.644531 L184.027344 195.644531 L212.742188 228.765625 L242.957031 263.621094 C251.121094 273.039062 262.96875 278.445312 275.429688 278.445312 L299.644531 278.445312 L249.347656 220.425781"
                  />
                </g>

                <g clipRule="nonzero" clipPath="url(#00b0f4a8ed)">
                  <path
                    style={{
                      stroke: "none",
                      fill: "url(#primaryGradient)",
                      fillRule: "nonzero",
                    }}
                    d="M213.503906 179.082031 L197.644531 160.789062 C189.480469 151.371094 177.632812 145.964844 165.171875 145.964844 L75 145.964844 L177 263.621094 C185.164062 273.039062 197.011719 278.445312 209.472656 278.445312 L233.6875 278.445312 L147.546875 179.082031 L213.503906 179.082031"
                  />
                </g>

                <path
                  style={{
                    fill: "none",
                    strokeWidth: 4,
                    stroke: "url(#primaryGradient)",
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 4,
                  }}
                  d="M 0.00000516333 2.002294 L 160.000016 2.002294"
                  transform="matrix(0.75,0,0,0.75,127.499996,108.256092)"
                />
              </g>
            </svg>
          </div>

          {/* <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="text-xl font-bold hero-gradient-text">
              Revalyze
            </span>
          </div> */}

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
                    document
                      .getElementById(targetId)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA - Language, Pricing & Login */}
          <div className="hidden md:flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <IoEarth className="h-4 w-4" />
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => setLanguage("en")}
                  className={language === "en" ? "bg-muted" : ""}
                >
                  {t("language.english")}
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage("nl")}
                  className={language === "nl" ? "bg-muted" : ""}
                >
                  {t("language.dutch")}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="sm" asChild>
              <a href="/login">{t("nav.login")}</a>
            </Button>
            <Button variant="glow" size="sm" asChild>
              <a
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("pricing")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t("nav.viewPricing")}
              </a>
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
                  document
                    .getElementById(targetId)
                    ?.scrollIntoView({ behavior: "smooth" });
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
                      <span>
                        {language === "en"
                          ? t("language.english")
                          : t("language.dutch")}
                      </span>
                    </div>
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuItem
                    onClick={() => setLanguage("en")}
                    className={language === "en" ? "bg-muted" : ""}
                  >
                    {t("language.english")}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setLanguage("nl")}
                    className={language === "nl" ? "bg-muted" : ""}
                  >
                    {t("language.dutch")}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="ghost" className="w-full" asChild>
                <a href="/login">{t("nav.login")}</a>
              </Button>
              <Button variant="glow" className="w-full" asChild>
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    document
                      .getElementById("pricing")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {t("nav.viewPricing")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
