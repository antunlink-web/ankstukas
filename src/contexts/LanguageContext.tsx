import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "lt";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.help": "How to Help",
    "nav.contact": "Contact",
    "nav.donate": "Donate",
    "nav.siteName": "Ankstukas",
    
    // Hero
    "hero.title": "Every Little Life Deserves Our Greatest Support",
    "hero.subtitle": "Sometimes the smallest fighters need the biggest help. Together, we provide hope, care, and support for premature babies and their families.",
    "hero.cta.support": "Support Our Fighters",
    "hero.cta.learn": "Learn More",
    
    // Stats
    "stats.title": "Making a Real Difference",
    "stats.subtitle": "Together, we're changing lives and giving every premature baby the best chance to thrive.",
    "stats.stat1.number": "1 in 10",
    "stats.stat1.label": "Babies are born premature worldwide",
    "stats.stat2.number": "850+",
    "stats.stat2.label": "Families supported this year",
    "stats.stat3.number": "€250,000",
    "stats.stat3.label": "In aid provided",
    "stats.stat4.number": "95%",
    "stats.stat4.label": "Success rate with proper support",
    "stats.card.title": "Our Strength is Their Courage",
    "stats.card.text": "Every premature baby faces unique challenges. With dedicated medical teams, compassionate support, and community generosity, we ensure these tiny fighters have everything they need to grow strong and healthy.",
    
    // How to Help
    "help.title": "How You Can Help",
    "help.subtitle": "Every contribution, big or small, brings hope to families and helps premature babies thrive.",
    "help.monthly.title": "Monthly Donation",
    "help.monthly.desc": "Provide consistent support with a recurring donation that helps us plan for the future.",
    "help.monthly.action": "Start Monthly Giving",
    "help.onetime.title": "One-Time Gift",
    "help.onetime.desc": "Make an immediate impact with a one-time contribution of any amount.",
    "help.onetime.action": "Donate Now",
    "help.equipment.title": "Donate Equipment",
    "help.equipment.desc": "Help us provide essential medical equipment and supplies for NICU care.",
    "help.equipment.action": "See Wish List",
    "help.volunteer.title": "Volunteer",
    "help.volunteer.desc": "Join our community of volunteers supporting families through difficult times.",
    "help.volunteer.action": "Get Involved",
    "help.corporate.text": "We work with businesses to create meaningful partnerships that support families in need.",
    "help.corporate.action": "Partner With Us",
    
    // Stories
    "stories.title": "Stories of Hope",
    "stories.subtitle": "Read about the families we've helped and the community making a difference every day.",
    "stories.viewAll": "View All Stories",
    "stories.category.success": "Success Story",
    "stories.category.news": "News",
    "stories.category.community": "Community",
    
    // Footer
    "footer.about": "Supporting premature babies and their families with compassionate care, resources, and hope. Together, we make miracles happen every day.",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact",
  },
  lt: {
    // Navigation
    "nav.home": "Pradžia",
    "nav.about": "Apie mus",
    "nav.help": "Kaip padėti",
    "nav.contact": "Kontaktai",
    "nav.donate": "Paremti",
    "nav.siteName": "Ankstukas",
    
    // Hero
    "hero.title": "Kiekviena Maža Gyvybė Nusipelno Didžiausios Mūsų Paramos",
    "hero.subtitle": "Kartais patys mažiausi kovotojai reikalauja didžiausios pagalbos. Kartu mes teikiame viltį, rūpestį ir paramą anksčiau laiko gimusių kūdikių šeimoms.",
    "hero.cta.support": "Paremkite Mūsų Kovotojus",
    "hero.cta.learn": "Sužinoti Daugiau",
    
    // Stats
    "stats.title": "Darome Tikrą Pokytį",
    "stats.subtitle": "Kartu mes keičiame gyvenimus ir suteikiame kiekvienam anksčiau laiko gimusiam kūdikiui geriausią galimybę klestėti.",
    "stats.stat1.number": "1 iš 10",
    "stats.stat1.label": "Kūdikių gimsta anksčiau laiko visame pasaulyje",
    "stats.stat2.number": "850+",
    "stats.stat2.label": "Šeimų sulaukė paramos šiais metais",
    "stats.stat3.number": "250 000 €",
    "stats.stat3.label": "Suteikta paramos",
    "stats.stat4.number": "95%",
    "stats.stat4.label": "Sėkmės rodiklis su tinkama parama",
    "stats.card.title": "Mūsų Jėga yra Jų Drąsa",
    "stats.card.text": "Kiekvienas anksčiau laiko gimęs kūdikis susiduria su unikaliomis problemomis. Su atsidavusiomis medicininėmis komandomis, užjaučiančia parama ir bendruomenės dosnumu, užtikriname, kad šie mažieji kovotojai turėtų viską, ko reikia, kad augtų stiprūs ir sveiki.",
    
    // How to Help
    "help.title": "Kaip Galite Padėti",
    "help.subtitle": "Kiekvienas įnašas, didelis ar mažas, suteikia vilties šeimoms ir padeda anksčiau laiko gimusiems kūdikiams klestėti.",
    "help.monthly.title": "Mėnesinis Pavedimas",
    "help.monthly.desc": "Suteikite nuolatinę paramą su pasikartojančiu pavedimu, kuris padeda mums planuoti ateitį.",
    "help.monthly.action": "Pradėti Mėnesinį Rėmimą",
    "help.onetime.title": "Vienkartinė Auka",
    "help.onetime.desc": "Padarykite betarpišką poveikį su vienkartine bet kokio dydžio auka.",
    "help.onetime.action": "Paaukoti Dabar",
    "help.equipment.title": "Paaukoti Įrangą",
    "help.equipment.desc": "Padėkite mums suteikti būtiną medicininę įrangą ir priemones intensyvios terapijos skyriams.",
    "help.equipment.action": "Žiūrėti Pageidavimų Sąrašą",
    "help.volunteer.title": "Savanoriauti",
    "help.volunteer.desc": "Prisijunkite prie mūsų savanorių bendruomenės, palaikančios šeimas sunkiais laikais.",
    "help.volunteer.action": "Įsitraukti",
    "help.corporate.text": "Dirbame su verslu kurdami prasmingą partnerystę, kuri palaiko šeimas, kurioms reikia pagalbos.",
    "help.corporate.action": "Tapti Partneriu",
    
    // Stories
    "stories.title": "Vilties Istorijos",
    "stories.subtitle": "Skaitykite apie šeimas, kurioms padėjome, ir bendruomenę, kuriančią skirtumą kiekvieną dieną.",
    "stories.viewAll": "Žiūrėti Visas Istorijas",
    "stories.category.success": "Sėkmės Istorija",
    "stories.category.news": "Naujienos",
    "stories.category.community": "Bendruomenė",
    
    // Footer
    "footer.about": "Palaikome anksčiau laiko gimusius kūdikius ir jų šeimas su užjaučiančia globa, resursais ir viltimi. Kartu mes kuriame stebuklus kiekvieną dieną.",
    "footer.quickLinks": "Nuorodos",
    "footer.contact": "Kontaktai",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("lt"); // Default to Lithuanian

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
