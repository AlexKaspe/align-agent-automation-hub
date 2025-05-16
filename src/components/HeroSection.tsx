
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Calendar, ArrowRight, ChevronDown } from 'lucide-react';
import ParallaxSection from './ParallaxSection';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleBookCall = () => {
    // Use a more reliable approach for opening links
    window.open('https://cal.com/alignagentsai/intro-call', '_blank', 'noopener,noreferrer');
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      const headerOffset = 100; // Adjust based on your header height
      const elementPosition = servicesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28 overflow-hidden min-h-[90vh] flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background"></div>
        <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"></div>
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-0 -right-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-[pulse_15s_ease-in-out_infinite]"></div>
          <div className="absolute top-1/4 -left-24 w-[600px] h-[600px] bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-[pulse_20s_ease-in-out_infinite_2s]"></div>
          <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-[pulse_18s_ease-in-out_infinite_1s]"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="lg:col-span-6 space-y-8 relative">
            {/* Subtle fade-in from bottom */}
            <div className={`space-y-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4 backdrop-blur-sm border border-primary/20">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                  AI-Powered Real Estate Automation
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight bg-gradient-to-br from-foreground via-foreground/95 to-foreground/80 bg-clip-text">
                <span className="block">Revolutionize Your</span>
                <span className="block bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">Real Estate Business</span>
                <span className="block">with AI Automation</span>
              </h1>
              
              <p className="text-lg md:text-xl text-foreground/80 mt-6 max-w-xl leading-relaxed">
                Automate tasks, generate more leads, and close deals faster — all while saving hours every week.
              </p>
            </div>

            <div className={`flex flex-col sm:flex-row items-center sm:items-start gap-4 pt-4 transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
              <Button 
                size="lg"
                className="text-md font-medium px-10 py-7 text-lg bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-2xl hover:shadow-primary/20 shadow-primary/10 w-full sm:w-auto relative z-20 pointer-events-auto group overflow-hidden transition-all duration-300"
                onClick={handleBookCall}
                type="button"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/0 via-primary/0 to-white/10 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-32 transition-all duration-1000"></span>
                <span className="flex items-center justify-center w-full relative z-10">
                  Book a Demo Call
                  <Calendar className="ml-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                </span>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="text-md font-medium px-8 py-7 text-lg border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300 w-full sm:w-auto relative z-20 pointer-events-auto"
                onClick={scrollToServices}
                type="button"
              >
                <span className="flex items-center justify-center w-full">
                  Explore Solutions
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </div>
            
            <div className={`hidden md:flex justify-center lg:justify-start pt-8 transition-opacity duration-1000 ease-out delay-500 ${isVisible ? 'opacity-60' : 'opacity-0'}`}>
              <button 
                onClick={scrollToServices}
                className="flex flex-col items-center text-foreground/60 hover:text-primary transition-colors"
                aria-label="Scroll to learn more"
              >
                <span className="text-sm mb-2">Scroll to learn more</span>
                <ChevronDown className="h-6 w-6 animate-bounce" />
              </button>
            </div>
          </div>

          {/* Right content */}
          <div className="lg:col-span-6 relative">
            {/* Parallax section with enhanced visuals */}
            <ParallaxSection speed={0.15} className="relative">
              <div className={`relative rounded-2xl overflow-hidden aspect-[4/3] transition-all duration-1000 ease-out delay-150 ${isVisible ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-16 translate-y-8'}`}>
                {/* Glass card effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-card/80 via-card/70 to-card/50 backdrop-blur-sm border border-border/30 shadow-2xl z-10"></div>
                
                {/* Background image with overlay */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src="/lovable-uploads/0f824cc1-d259-45c5-b0b7-aa41b5c015c7.png" 
                    alt="AI-Powered Real Estate Automation Dashboard" 
                    className="w-full h-full object-cover object-center mix-blend-overlay opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 mix-blend-multiply"></div>
                </div>
                
                {/* Enhanced floating elements with better design */}
                <div className="absolute top-10 left-8 max-w-[240px] bg-card/60 backdrop-blur-md rounded-xl p-4 border border-white/10 text-sm font-medium shadow-xl animate-float pointer-events-none z-20">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <div className="h-6 w-6 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center">
                        <span className="text-background text-xs font-bold">24/7</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Instant Lead Response</p>
                      <p className="text-xs text-foreground/70 mt-1">AI responds to inquiries within seconds</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-1/3 right-8 max-w-[240px] bg-card/60 backdrop-blur-md rounded-xl p-4 border border-white/10 text-sm font-medium shadow-xl animate-float pointer-events-none z-20" style={{animationDelay: '0.5s'}}>
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary/20 p-3 rounded-lg">
                      <div className="h-6 w-6 bg-gradient-to-br from-secondary to-secondary/60 rounded-lg flex items-center justify-center">
                        <span className="text-background text-xs font-bold">CRM</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Smart CRM Integration</p>
                      <p className="text-xs text-foreground/70 mt-1">Seamless data sync with your tools</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 max-w-[240px] bg-card/60 backdrop-blur-md rounded-xl p-4 border border-white/10 text-sm font-medium shadow-xl animate-float pointer-events-none z-20" style={{animationDelay: '1s'}}>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <div className="h-6 w-6 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center">
                        <span className="text-background text-xs font-bold">AI</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Intelligent Follow-ups</p>
                      <p className="text-xs text-foreground/70 mt-1">Personalized lead nurturing</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-10 left-10 max-w-[240px] bg-card/60 backdrop-blur-md rounded-xl p-4 border border-white/10 text-sm font-medium shadow-xl animate-float pointer-events-none z-20" style={{animationDelay: '1.5s'}}>
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary/20 p-3 rounded-lg">
                      <div className="h-6 w-6 bg-gradient-to-br from-secondary to-secondary/60 rounded-lg flex items-center justify-center">
                        <span className="text-background text-xs font-bold">KPI</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Real-time Analytics</p>
                      <p className="text-xs text-foreground/70 mt-1">Track conversions and performance</p>
                    </div>
                  </div>
                </div>

                {/* Glowing accent points */}
                <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50 animate-pulse z-20"></div>
                <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-secondary rounded-full shadow-lg shadow-secondary/50 animate-pulse z-20" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-2/3 right-1/3 w-4 h-4 bg-primary/70 rounded-full shadow-lg shadow-primary/30 animate-pulse z-20" style={{animationDelay: '1s'}}></div>

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none z-30"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-transparent pointer-events-none z-30"></div>
              </div>
            </ParallaxSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
