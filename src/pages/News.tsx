import { Calendar, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const News = () => {
  const { t } = useLanguage();

  const newsItems = [
    {
      id: 1,
      titleKey: "news.item1.title",
      excerptKey: "news.item1.excerpt",
      date: "2024-12-15",
      category: "news.category.events",
    },
    {
      id: 2,
      titleKey: "news.item2.title",
      excerptKey: "news.item2.excerpt",
      date: "2024-12-10",
      category: "news.category.support",
    },
    {
      id: 3,
      titleKey: "news.item3.title",
      excerptKey: "news.item3.excerpt",
      date: "2024-12-05",
      category: "news.category.community",
    },
    {
      id: 4,
      titleKey: "news.item4.title",
      excerptKey: "news.item4.excerpt",
      date: "2024-11-28",
      category: "news.category.medical",
    },
    {
      id: 5,
      titleKey: "news.item5.title",
      excerptKey: "news.item5.excerpt",
      date: "2024-11-20",
      category: "news.category.events",
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
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back button */}
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth mb-8">
            <ArrowLeft size={20} />
            <span>{t("news.backHome")}</span>
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              {t("news.title")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("news.subtitle")}
            </p>
          </div>

          {/* News Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((item) => (
              <Card 
                key={item.id} 
                className="bg-card border-0 shadow-card hover-lift overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-secondary font-medium mb-3">
                    <span className="px-3 py-1 bg-secondary/10 rounded-full">
                      {t(item.category)}
                    </span>
                  </div>
                  <h2 className="text-xl font-heading font-bold text-foreground mb-3 line-clamp-2">
                    {t(item.titleKey)}
                  </h2>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {t(item.excerptKey)}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={16} />
                    <span>{formatDate(item.date)}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default News;
