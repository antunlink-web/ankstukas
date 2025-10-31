import { Button } from "@/components/ui/button";
import { Heart, Cloud, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-baby.jpg";
import CloudDecoration from "@/components/CloudDecoration";
import AngelDecoration from "@/components/AngelDecoration";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-50" />
        <img
          src={heroImage}
          alt="Supporting premature babies"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Sky gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-light/20 via-transparent to-transparent" />

      {/* Floating cloud decorations */}
      <CloudDecoration position="top" />
      
      {/* Angel decorations */}
      <AngelDecoration className="top-24 right-12 opacity-10" />
      <AngelDecoration className="bottom-32 left-16 opacity-15" />

      {/* Decorative cloud shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-secondary-light rounded-full blur-3xl opacity-30 animate-float" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: "1s" }} />
      
      {/* Sparkle elements */}
      <div className="absolute top-40 left-[15%] text-secondary opacity-30 animate-float">
        <Sparkles size={24} />
      </div>
      <div className="absolute top-60 right-[25%] text-accent opacity-25 animate-float" style={{ animationDelay: "1.5s" }}>
        <Sparkles size={20} />
      </div>
      <div className="absolute bottom-40 right-[15%] text-secondary-light opacity-30 animate-float" style={{ animationDelay: "2s" }}>
        <Cloud size={32} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-slow">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary mb-6 leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary-light transition-smooth text-lg px-8 py-6 shadow-card">
              <Heart className="mr-2 h-5 w-5" />
              {t("hero.cta.support")}
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 transition-smooth text-lg px-8 py-6">
              {t("hero.cta.learn")}
            </Button>
          </div>
        </div>
      </div>

      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-background" style={{ 
        clipPath: "ellipse(100% 100% at 50% 100%)"
      }} />
    </section>
  );
};

export default Hero;
