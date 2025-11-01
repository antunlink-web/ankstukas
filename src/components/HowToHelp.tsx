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
    <section id="help" className="relative py-20 bg-gradient-soft overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 left-[12%] text-secondary/10 animate-float">
        <Cloud size={60} />
      </div>
      <div className="absolute bottom-32 right-[15%] text-secondary/10 animate-float" style={{ animationDelay: "1s" }}>
        <Cloud size={50} />
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
              className="border-0 hover-lift animate-scale-in shadow-card rounded-3xl bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${way.color} ${way.iconColor} mb-4`}>
                  <way.icon size={32} />
                </div>
                <CardTitle className="text-2xl font-heading text-primary">{way.title}</CardTitle>
                <CardDescription className="text-base text-muted-foreground">{way.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-primary font-semibold transition-smooth rounded-2xl shadow-soft">
                  {way.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <div className="inline-block bg-primary/5 rounded-3xl p-8 md:p-12 max-w-2xl border border-primary/10">
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              {t("help.corporate.text")}
            </p>
            <Button className="bg-accent hover:bg-accent/90 text-primary font-semibold transition-smooth rounded-2xl px-8 shadow-soft">
              {t("help.corporate.action")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;
