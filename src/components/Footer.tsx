import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-2xl">💙</span>
              </div>
              <span className="text-2xl font-heading font-bold">Little Fighters</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Supporting premature babies and their families with compassionate care, 
              resources, and hope. Together, we make miracles happen every day.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary transition-smooth flex items-center justify-center">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary transition-smooth flex items-center justify-center">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-primary-foreground/80 hover:text-secondary transition-smooth">About Us</a></li>
              <li><a href="#help" className="text-primary-foreground/80 hover:text-secondary transition-smooth">How to Help</a></li>
              <li><a href="#stories" className="text-primary-foreground/80 hover:text-secondary transition-smooth">Stories</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-smooth">Resources</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>123 Care Street<br />Medical District<br />City, 12345</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Phone size={18} className="flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Mail size={18} className="flex-shrink-0" />
                <span>info@littlefighters.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 Little Fighters. All rights reserved. | Registered Charity</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
