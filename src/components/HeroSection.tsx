import React from 'react';
import { Button } from './ui/button';
import { Calendar } from 'lucide-react';
import ParallaxSection from './ParallaxSection';

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-10 md:pt-24 md:pb-14 lg:pt-28 lg:pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5 animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute top-0 right-0 w-full h-full max-w-[800px] -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent opacity-60 blur-3xl animate-[pulse_6s_ease-in-out_infinite]"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-6 space-y-6">
            {/* Subtle fade-in from bottom */}
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.05s' }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Revolutionize Your Real Estate Business with AI-Powered Automation
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 mt-4 max-w-lg">
                Automate tasks, generate more leads, and close deals faster — all while saving hours every week.
              </p>
            </div>

            <div className="flex flex-col items-center sm:items-start gap-4 pt-6 animate-fade-in" style={{ animationDelay: '0.18s' }}>
              <Button 
                size="lg"
                className="text-md font-medium px-8 py-8 text-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl" 
                onClick={() => window.open('https://cal.com/alignagentsai/intro-call', '_blank')}
              >
                Book a Call
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right content */}
          <div className="lg:col-span-6 relative">
            {/* Parallax section for float/flying tabs and hero image */}
            <ParallaxSection speed={0.19} className="relative">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-card to-card/50 border border-border/30 shadow-xl animate-fade-in-right-soft">
                <img 
                  src="/lovable-uploads/0f824cc1-d259-45c5-b0b7-aa41b5c015c7.png" 
                  alt="AI-Powered Real Estate Automation Dashboard" 
                  className="w-full h-full object-cover object-center mix-blend-luminosity opacity-90"
                />
                
                {/* Floating elements (flying tabs) */}
                <div className="absolute top-1/4 -left-10 sm:left-5 max-w-[180px] bg-card/90 backdrop-blur rounded-lg p-3 border border-border/30 text-sm font-medium shadow-lg animate-card-pop animate-float">
                  <div className="flex items-center gap-2">
                    <div className="bg-primary/20 p-2 rounded-full">
                      <div className="h-5 w-5 bg-gradient-to-br from-primary to-primary/60 rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">24/7 Lead Response</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-1/2 -right-10 sm:right-5 max-w-[180px] bg-card/90 backdrop-blur rounded-lg p-3 border border-border/30 text-sm font-medium shadow-lg animate-card-pop animate-float" style={{animationDelay: '0.3s'}}>
                  <div className="flex items-center gap-2">
                    <div className="bg-secondary/20 p-2 rounded-full">
                      <div className="h-5 w-5 bg-gradient-to-br from-secondary to-secondary/60 rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Smart CRM Sync</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 max-w-[180px] bg-card/90 backdrop-blur rounded-lg p-3 border border-border/30 text-sm font-medium shadow-lg animate-card-pop animate-float" style={{animationDelay: '0.5s'}}>
                  <div className="flex items-center gap-2">
                    <div className="bg-primary/20 p-2 rounded-full">
                      <div className="h-5 w-5 bg-gradient-to-br from-primary to-primary/60 rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">AI Follow-ups</p>
                    </div>
                  </div>
                </div>

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent"></div>
              </div>
            </ParallaxSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
