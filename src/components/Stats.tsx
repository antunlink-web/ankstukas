import { Users, Heart, HandHeart, TrendingUp, Cloud } from "lucide-react";
import CloudDecoration from "@/components/CloudDecoration";
import { useLanguage } from "@/contexts/LanguageContext";

const Stats = () => {
  const { t } = useLanguage();
  
  const stats = [
    {
      icon: Users,
      number: t("stats.stat1.number"),
      label: t("stats.stat1.label"),
      iconColor: "bg-secondary/20 text-secondary",
    },
    {
      icon: Heart,
      number: t("stats.stat2.number"),
      label: t("stats.stat2.label"),
      iconColor: "bg-primary/10 text-primary",
    },
    {
      icon: HandHeart,
      number: t("stats.stat3.number"),
      label: t("stats.stat3.label"),
      iconColor: "bg-accent/30 text-accent",
    },
    {
      icon: TrendingUp,
      number: t("stats.stat4.number"),
      label: t("stats.stat4.label"),
      iconColor: "bg-secondary/20 text-secondary",
    },
  ];

  return (
    <section id="about" className="relative py-20 bg-background overflow-hidden">
      {/* Floating clouds */}
      <div className="absolute top-20 right-[10%] text-secondary/10 animate-float">
        <Cloud size={70} />
      </div>
      <div className="absolute bottom-32 left-[8%] text-secondary/10 animate-float" style={{ animationDelay: "1.5s" }}>
        <Cloud size={60} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            {t("stats.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("stats.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-3xl bg-card hover-lift animate-scale-in shadow-card border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${stat.iconColor} mb-4`}>
                <stat.icon size={32} />
              </div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-secondary/5 rounded-3xl p-8 md:p-12 border border-secondary/10 shadow-card animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6 text-center">
            {t("stats.card.title")}
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            {t("stats.card.text")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
