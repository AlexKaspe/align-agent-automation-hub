import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X, Calendar } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBookCall = () => {
    window.open('https://cal.com/alignagentsai/intro-call', '_blank');
  };

  return (
    <header className={`hero-section sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent font-heading">
                Align Agents AI
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-8">
            <Link
              to="/services"
              className="text-foreground/80 hover:text-primary transition-colors px-1 py-2 text-sm font-medium"
            >
              Services
            </Link>
            <Link
              to="/pricing"
              className="text-foreground/80 hover:text-primary transition-colors px-1 py-2 text-sm font-medium"
            >
              Pricing
            </Link>
            <Link
              to="/case-studies"
              className="text-foreground/80 hover:text-primary transition-colors px-1 py-2 text-sm font-medium"
            >
              Case Studies
            </Link>
            <Link
              to="/contact"
              className="text-foreground/80 hover:text-primary transition-colors px-1 py-2 text-sm font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button 
              className="font-medium"
              onClick={handleBookCall}
              aria-label="Book a Call"
            >
              <span className="flex items-center">
                Book a Call
                <Calendar className="ml-2 h-4 w-4" />
              </span>
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
            <Link
              to="/services"
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/pricing"
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/case-studies"
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Case Studies
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2">
              <Button 
                className="w-full font-medium"
                onClick={() => {
                  setIsMenuOpen(false);
                  handleBookCall();
                }}
                aria-label="Book a Call"
              >
                <span className="flex items-center justify-center w-full">
                  Book a Call
                  <Calendar className="ml-2 h-4 w-4" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
