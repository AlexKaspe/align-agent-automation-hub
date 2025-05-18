
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Calendar } from 'lucide-react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from './ui/navigation-menu';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleBookCall = () => {
    window.open('https://cal.com/alignagentsai/intro-call', '_blank');
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMagneticMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - bounds.left;
    const mouseY = e.clientY - bounds.top;
    const centerX = bounds.width / 2;
    const centerY = bounds.height / 2;
    
    const moveX = (mouseX - centerX) / 10;
    const moveY = (mouseY - centerY) / 10;
    
    e.currentTarget.style.setProperty('--x', `${moveX}px`);
    e.currentTarget.style.setProperty('--y', `${moveY}px`);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
              className="flex items-center gap-2 group"
            >
              <span className={`text-2xl font-bold font-heading transition-all duration-300 ${
                scrolled ? 'text-gradient' : 'text-white text-shadow'
              }`}>
                Align Agents AI
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className={cn(
                      navigationMenuTriggerStyle(), 
                      "bg-transparent",
                      scrolled ? "text-foreground/80 hover:text-primary" : "text-white hover:text-white/80",
                      "transition-colors duration-200 hover:bg-white/10"
                    )}
                    onClick={() => scrollToSection('services')}
                  >
                    Services
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className={cn(
                      navigationMenuTriggerStyle(), 
                      "bg-transparent",
                      scrolled ? "text-foreground/80 hover:text-primary" : "text-white hover:text-white/80",
                      "transition-colors duration-200 hover:bg-white/10"
                    )}
                    onClick={() => scrollToSection('pricing')}
                  >
                    Pricing
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={cn(
                      "bg-transparent",
                      scrolled ? "text-foreground/80 hover:text-primary" : "text-white hover:text-white/80",
                      "transition-colors duration-200 hover:bg-white/10"
                    )}
                    onMouseOver={() => setHoveredItem('resources')}
                    onMouseOut={() => setHoveredItem(null)}
                  >
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/10 to-primary/5 p-6 no-underline outline-none focus:shadow-md"
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              scrollToSection('case-studies');
                            }}
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Case Studies
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Real estate success stories and proven results from our AI automation.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              scrollToSection('features');
                            }}
                          >
                            <div className="text-sm font-medium leading-none">Features</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Our AI automation features for real estate
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              scrollToSection('contact');
                            }}
                          >
                            <div className="text-sm font-medium leading-none">Contact</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Get in touch with our team
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <div 
              className="animate-magnetic-move"
              onMouseMove={handleMagneticMove}
              onMouseLeave={() => {
                const el = document.querySelector('.animate-magnetic-move') as HTMLElement;
                if (el) {
                  el.style.setProperty('--x', '0px');
                  el.style.setProperty('--y', '0px');
                }
              }}
            >
              <Button 
                className={`font-medium relative overflow-hidden group ${
                  scrolled 
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                    : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30'
                }`}
                onClick={handleBookCall}
                aria-label="Book a Call"
              >
                <span className="relative z-10 flex items-center">
                  Book a Call
                  <Calendar className="ml-2 h-4 w-4" />
                </span>
                <span className="absolute inset-0 w-0 bg-primary/20 group-hover:w-full transition-all duration-500 ease-out"></span>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${
                scrolled 
                  ? 'text-foreground hover:text-primary' 
                  : 'text-white hover:text-white/80'
              }`}
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
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection('services')}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary w-full text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary w-full text-left"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('case-studies')}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary w-full text-left"
            >
              Case Studies
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary w-full text-left"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary w-full text-left"
            >
              Contact
            </button>
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
