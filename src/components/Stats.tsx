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
      color: "text-primary",
    },
    {
      icon: Heart,
      number: t("stats.stat2.number"),
      label: t("stats.stat2.label"),
      color: "text-secondary",
    },
    {
      icon: HandHeart,
      number: t("stats.stat3.number"),
      label: t("stats.stat3.label"),
      color: "text-accent",
    },
    {
      icon: TrendingUp,
      number: t("stats.stat4.number"),
      label: t("stats.stat4.label"),
      color: "text-primary-light",
    },
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-soft overflow-hidden">
      {/* Floating clouds in background */}
      <div className="absolute top-10 left-[5%] opacity-20">
        <Cloud size={48} className="text-secondary animate-float" />
      </div>
      <div className="absolute top-32 right-[10%] opacity-15">
        <Cloud size={40} className="text-secondary-light animate-float" style={{ animationDelay: "1s" }} />
      </div>
      <div className="absolute bottom-20 left-[15%] opacity-20">
        <Cloud size={56} className="text-secondary animate-float" style={{ animationDelay: "2s" }} />
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 text-center shadow-card hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4 ${stat.color}`}>
                <stat.icon size={32} />
              </div>
              <div className="text-4xl font-heading font-bold text-primary mb-2">
                {stat.number}
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center animate-fade-in">
          <div className="bg-card rounded-2xl p-8 shadow-card border-2 border-secondary-light">
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">
              {t("stats.card.title")}
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t("stats.card.text")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
