
import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent font-heading">
                Align Agents AI
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-8">
            <a
              href="#features"
              className="text-foreground/80 hover:text-primary transition-colors px-1 py-2 text-sm font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-foreground/80 hover:text-primary transition-colors px-1 py-2 text-sm font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Testimonials
            </a>
            <a
              href="#offer"
              className="text-foreground/80 hover:text-primary transition-colors px-1 py-2 text-sm font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Special Offer
            </a>
            <a
              href="#contact"
              className="text-foreground/80 hover:text-primary transition-colors px-1 py-2 text-sm font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button 
              className="font-medium"
              onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Free Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border/50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#features"
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#offer"
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Special Offer
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="pt-2">
              <Button 
                className="w-full font-medium"
                onClick={() => {
                  setIsMenuOpen(false);
                  document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Free Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
