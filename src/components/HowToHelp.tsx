import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Heart, CreditCard, Cloud } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const HowToHelp = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
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
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: t("contact.error"),
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: t("contact.success"),
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast({
        title: t("contact.error"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

        {/* Contact Form */}
        <div id="contact" className="mt-20 max-w-2xl mx-auto animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-3">
              {t("contact.title")}
            </h3>
            <p className="text-lg text-muted-foreground">
              {t("contact.subtitle")}
            </p>
          </div>
          
          <Card className="border-0 shadow-card rounded-3xl bg-card">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-base font-medium text-foreground">
                    {t("contact.name")}
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2 rounded-xl border-primary/20 focus:border-primary"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-base font-medium text-foreground">
                    {t("contact.email")}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2 rounded-xl border-primary/20 focus:border-primary"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-base font-medium text-foreground">
                    {t("contact.message")}
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-2 rounded-xl border-primary/20 focus:border-primary min-h-[120px]"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-secondary hover:bg-secondary/90 text-primary font-semibold transition-smooth rounded-2xl shadow-soft"
                >
                  {isSubmitting ? t("contact.sending") : t("contact.submit")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;
