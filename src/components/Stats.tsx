import { Users, Heart, HandHeart, TrendingUp, Cloud } from "lucide-react";
import CloudDecoration from "@/components/CloudDecoration";

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: "1 in 10",
      label: "Babies are born premature worldwide",
      color: "text-primary",
    },
    {
      icon: Heart,
      number: "850+",
      label: "Families supported this year",
      color: "text-secondary",
    },
    {
      icon: HandHeart,
      number: "€250,000",
      label: "In aid provided",
      color: "text-accent",
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Success rate with proper support",
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
            Making a Real Difference
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Together, we're changing lives and giving every premature baby the best chance to thrive.
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
              Our Strength is Their Courage
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Every premature baby faces unique challenges. With dedicated medical teams, 
              compassionate support, and community generosity, we ensure these tiny fighters 
              have everything they need to grow strong and healthy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
