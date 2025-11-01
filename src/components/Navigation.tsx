import { useState } from "react";
import { Menu, X, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.help"), href: "#help" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "lt" : "en");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-secondary/20 rounded-2xl flex items-center justify-center overflow-hidden">
              <img src={logo} alt="Ankstukas logo" className="w-9 h-9 object-contain" />
            </div>
            <span className="text-xl font-heading font-bold text-primary">{t("nav.siteName")}</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-secondary transition-smooth font-medium"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-foreground hover:text-secondary transition-smooth font-medium"
              aria-label="Toggle language"
            >
              <Languages size={20} />
              <span className="uppercase">{language}</span>
            </button>
            <Button 
              onClick={() => document.getElementById('help')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth rounded-2xl px-6 shadow-soft"
            >
              {t("nav.donate")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-foreground hover:text-primary transition-smooth font-medium"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => {
                toggleLanguage();
                setIsOpen(false);
              }}
              className="flex items-center gap-2 py-3 text-foreground hover:text-primary transition-smooth font-medium"
            >
              <Languages size={20} />
              <span>{language === "en" ? "Lietuvių kalba" : "English"}</span>
            </button>
            <Button 
              onClick={() => {
                setIsOpen(false);
                document.getElementById('help')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth rounded-2xl"
            >
              {t("nav.donate")}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

