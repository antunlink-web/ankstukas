import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroBaby from "@/assets/hero-baby.jpg";

const News = () => {
  const { t } = useLanguage();

  const newsItems = [
    {
      id: 1,
      titleKey: "news.item1.title",
      excerptKey: "news.item1.excerpt",
      date: "2024-12-15",
      category: "news.category.events",
      image: "https://images.unsplash.com/photo-1559650656-5f5a7e5a5c7e?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      titleKey: "news.item2.title",
      excerptKey: "news.item2.excerpt",
      date: "2024-12-10",
      category: "news.category.support",
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      titleKey: "news.item3.title",
      excerptKey: "news.item3.excerpt",
      date: "2024-12-05",
      category: "news.category.community",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      titleKey: "news.item4.title",
      excerptKey: "news.item4.excerpt",
      date: "2024-11-28",
      category: "news.category.medical",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      titleKey: "news.item5.title",
      excerptKey: "news.item5.excerpt",
      date: "2024-11-20",
      category: "news.category.events",
      image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=400&h=300&fit=crop",
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("lt-LT", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Header */}
      <div 
        className="relative h-64 md:h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBaby})` }}
      >
        <div className="absolute inset-0 bg-primary/70" />
        <div className="absolute inset-0 flex flex-col justify-center items-start container mx-auto px-4">
          <div className="text-primary-foreground/80 text-sm mb-2">
            <Link to="/" className="hover:text-primary-foreground transition-smooth">
              {t("nav.siteName")}
            </Link>
            <span className="mx-2">›</span>
            <span>{t("nav.news")}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">
            {t("nav.news")}
          </h1>
        </div>
      </div>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {newsItems.map((item) => (
              <article 
                key={item.id} 
                className="bg-card rounded-2xl overflow-hidden shadow-card hover-lift flex flex-col md:flex-row"
              >
                {/* Image */}
                <div className="md:w-64 lg:w-80 flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={t(item.titleKey)}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1 p-6">
                  <h2 className="text-xl lg:text-2xl font-heading font-bold text-secondary hover:text-secondary/80 transition-smooth mb-3">
                    {t(item.titleKey)}
                  </h2>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <span className="font-medium">{t("news.published")}:</span>
                    <span>{formatDate(item.date)}</span>
                  </div>
                  
                  <p className="text-foreground/80 mb-4 line-clamp-3">
                    {t(item.excerptKey)}
                  </p>
                  
                  <Button 
                    variant="default"
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-lg"
                  >
                    {t("news.readMore")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default News;
