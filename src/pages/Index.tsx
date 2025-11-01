import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import HowToHelp from "@/components/HowToHelp";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <HowToHelp />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
