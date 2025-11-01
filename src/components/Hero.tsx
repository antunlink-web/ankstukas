import { Button } from "@/components/ui/button";
import { Heart, Cloud, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-baby.jpg";
import CloudDecoration from "@/components/CloudDecoration";
import AngelDecoration from "@/components/AngelDecoration";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section id="home" className="relative min-h-[600px] md:min-h-[700px] bg-background overflow-hidden pt-24 pb-12">
      {/* Decorative clouds in background */}
      <div className="absolute top-20 left-[10%] text-secondary/10 animate-float">
        <Cloud size={80} />
      </div>
      <div className="absolute top-40 right-[15%] text-secondary/10 animate-float" style={{ animationDelay: "2s" }}>
        <Cloud size={60} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main hero card with rounded corners - Ankstukai style */}
        <div className="relative bg-gradient-hero rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-elegant animate-fade-in">
          {/* Wavy bottom decoration */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-background">
            <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0 C300,60 900,60 1200,0 L1200,120 L0,120 Z" fill="hsl(var(--primary))" opacity="1"></path>
            </svg>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-16 relative">
            {/* Left side - Text content */}
            <div className="text-left z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary mb-6 leading-tight">
                {t("hero.title")}
              </h1>
              <div className="mb-8">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold transition-smooth shadow-card rounded-2xl px-8">
                  {t("hero.cta.support")}
                </Button>
              </div>
            </div>
            
            {/* Right side - Image with rounded shape */}
            <div className="relative z-10 animate-scale-in">
              <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-elegant">
                <img 
                  src={heroImage} 
                  alt="Premature baby care" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Supporting text below hero */}
        <div className="mt-12 max-w-3xl mx-auto text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {t("hero.subtitle")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
