
import { Twitter, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent mb-4 font-heading">
              Align Agents AI
            </h3>
            <p className="text-foreground/70 mb-4 text-sm">
              AI-powered automation solutions specifically designed for real estate agencies.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://twitter.com/alignagentsai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/alignagentsai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@alignagentsai.com"
                className="text-foreground/60 hover:text-primary"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="tel:8001234567"
                className="text-foreground/60 hover:text-primary"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="text-foreground/70 hover:text-primary">
                  Features
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-foreground/70 hover:text-primary">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#offer" className="text-foreground/70 hover:text-primary">
                  Special Offer
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/70 hover:text-primary">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary">
                  GDPR Compliance
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-foreground/70">
                <span className="block">Align Agents AI</span>
                <span className="block">123 Innovation Drive</span>
                <span className="block">Miami, FL 33101</span>
              </li>
              <li>
                <a href="tel:8001234567" className="text-foreground/70 hover:text-primary">
                  (800) 123-4567
                </a>
              </li>
              <li>
                <a href="mailto:info@alignagentsai.com" className="text-foreground/70 hover:text-primary">
                  info@alignagentsai.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Align Agents AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
