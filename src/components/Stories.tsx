import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Cloud, Star } from "lucide-react";
import CloudDecoration from "@/components/CloudDecoration";

const Stories = () => {
  const stories = [
    {
      date: "December 15, 2024",
      title: "Emma's Journey: From 28 Weeks to Going Home",
      excerpt: "After 10 weeks in NICU, baby Emma is finally strong enough to go home. Her parents share their story of hope and resilience.",
      category: "Success Story",
      categoryColor: "bg-primary/20 text-primary",
    },
    {
      date: "December 8, 2024",
      title: "New NICU Equipment Arrives Thanks to Donors",
      excerpt: "State-of-the-art incubators and monitoring systems are now helping our tiniest patients receive the best care possible.",
      category: "News",
      categoryColor: "bg-secondary/30 text-secondary-foreground",
    },
    {
      date: "November 30, 2024",
      title: "Parent Support Group Celebrates 100 Meetings",
      excerpt: "Our peer support program reaches milestone, providing comfort and guidance to hundreds of families.",
      category: "Community",
      categoryColor: "bg-accent/30 text-accent-foreground",
    },
  ];

  return (
    <section id="stories" className="relative py-20 bg-gradient-soft overflow-hidden">
      {/* Sky decorations */}
      <CloudDecoration position="top" className="opacity-50" />
      
      <div className="absolute top-32 left-[8%] text-accent opacity-20 animate-float">
        <Star size={32} />
      </div>
      <div className="absolute bottom-40 right-[12%] text-secondary opacity-25 animate-float" style={{ animationDelay: "1s" }}>
        <Cloud size={40} />
      </div>
      <div className="absolute top-48 right-[18%] text-secondary-light opacity-15 animate-float" style={{ animationDelay: "1.5s" }}>
        <Star size={24} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Stories of Hope
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Read about the families we've helped and the community making a difference every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stories.map((story, index) => (
            <Card 
              key={index}
              className="hover-lift cursor-pointer shadow-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar size={16} />
                  <span>{story.date}</span>
                </div>
                <Badge className={`mb-3 ${story.categoryColor}`}>
                  {story.category}
                </Badge>
                <h3 className="text-xl font-heading font-bold text-primary mb-3 leading-tight">
                  {story.title}
                </h3>
                <p className="text-muted-foreground">
                  {story.excerpt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <a 
            href="#stories" 
            className="text-primary font-medium hover:text-primary-light transition-smooth inline-flex items-center gap-2"
          >
            View All Stories
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Stories;
