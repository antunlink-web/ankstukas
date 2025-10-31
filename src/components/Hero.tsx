import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import heroImage from "@/assets/hero-baby.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-50" />
        <img
          src={heroImage}
          alt="Supporting premature babies"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Decorative cloud shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-secondary-light rounded-full blur-3xl opacity-30 animate-float" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-slow">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary mb-6 leading-tight">
            Every Little Life Deserves Our Greatest Support
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed">
            Sometimes the smallest fighters need the biggest help. Together, we provide hope, 
            care, and support for premature babies and their families.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary-light transition-smooth text-lg px-8 py-6 shadow-card">
              <Heart className="mr-2 h-5 w-5" />
              Support Our Fighters
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 transition-smooth text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-background" style={{ 
        clipPath: "ellipse(100% 100% at 50% 100%)"
      }} />
    </section>
  );
};

export default Hero;
