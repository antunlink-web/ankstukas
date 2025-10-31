import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, CreditCard, Gift, Users, Cloud, Sparkles } from "lucide-react";
import AngelDecoration from "@/components/AngelDecoration";
import { useLanguage } from "@/contexts/LanguageContext";

const HowToHelp = () => {
  const { t } = useLanguage();
  
  const ways = [
    {
      icon: Heart,
      title: t("help.monthly.title"),
      description: t("help.monthly.desc"),
      action: t("help.monthly.action"),
      color: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: CreditCard,
      title: t("help.onetime.title"),
      description: t("help.onetime.desc"),
      action: t("help.onetime.action"),
      color: "bg-secondary/20",
      iconColor: "text-secondary",
    },
    {
      icon: Gift,
      title: t("help.equipment.title"),
      description: t("help.equipment.desc"),
      action: t("help.equipment.action"),
      color: "bg-accent/20",
      iconColor: "text-accent",
    },
    {
      icon: Users,
      title: t("help.volunteer.title"),
      description: t("help.volunteer.desc"),
      action: t("help.volunteer.action"),
      color: "bg-primary-light/20",
      iconColor: "text-primary-light",
    },
  ];

  return (
    <section id="help" className="relative py-20 bg-background overflow-hidden">
      {/* Celestial decorations */}
      <AngelDecoration className="top-20 right-[8%]" />
      <div className="absolute top-40 left-[12%] text-secondary opacity-20 animate-float">
        <Sparkles size={28} />
      </div>
      <div className="absolute bottom-32 right-[15%] text-accent opacity-25 animate-float" style={{ animationDelay: "1s" }}>
        <Cloud size={44} />
      </div>
      <div className="absolute top-60 right-[20%] text-secondary-light opacity-15 animate-float" style={{ animationDelay: "2s" }}>
        <Sparkles size={24} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            {t("help.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("help.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {ways.map((way, index) => (
            <Card 
              key={index} 
              className="border-2 hover-lift animate-scale-in shadow-soft"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${way.color} ${way.iconColor} mb-4`}>
                  <way.icon size={28} />
                </div>
                <CardTitle className="text-2xl font-heading">{way.title}</CardTitle>
                <CardDescription className="text-base">{way.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-primary hover:bg-primary-light transition-smooth">
                  {way.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <div className="inline-block bg-secondary-light/30 rounded-2xl p-8 max-w-2xl">
            <p className="text-lg text-foreground/80 mb-4">
              <strong className="text-primary font-heading">{t("help.corporate.text")}</strong>
            </p>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 transition-smooth">
              {t("help.corporate.action")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;
