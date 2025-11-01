import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer id="contact" className="bg-primary text-primary-foreground pt-16 pb-8 rounded-t-[3rem]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-secondary/20 rounded-2xl flex items-center justify-center overflow-hidden">
                <img src={logo} alt="Ankstukas logo" className="w-9 h-9 object-contain" />
              </div>
              <span className="text-2xl font-heading font-bold text-secondary">{t("nav.siteName")}</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              {t("footer.about")}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-2xl bg-secondary/20 hover:bg-secondary transition-smooth flex items-center justify-center">
                <Facebook size={22} />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-secondary/20 hover:bg-secondary transition-smooth flex items-center justify-center">
                <Instagram size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4 text-secondary">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-primary-foreground/80 hover:text-secondary transition-smooth">{t("nav.about")}</a></li>
              <li><a href="#help" className="text-primary-foreground/80 hover:text-secondary transition-smooth">{t("nav.help")}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4 text-secondary">{t("footer.contact")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-secondary" />
                <span>Pamėnkalnio g. 25-1, Vilnius</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Phone size={18} className="flex-shrink-0 text-secondary" />
                <span>+370 6 300 3280</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Mail size={18} className="flex-shrink-0 text-secondary" />
                <span>info@ankstukas.lt</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2025 Ankstukas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
