
import { Button } from './ui/button';
import { CheckCircle2, ChevronRight, ArrowRight } from 'lucide-react';
import ParallaxSection from './ParallaxSection';

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-10 md:pt-24 md:pb-14 lg:pt-28 lg:pb-20 overflow-hidden">
      {/* Background elements with enhanced animations */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5 animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute top-0 right-0 w-full h-full max-w-[800px] -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent opacity-60 blur-3xl animate-[pulse_6s_ease-in-out_infinite]"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left content with enhanced animations */}
          <div className="lg:col-span-6 space-y-6">
            <ParallaxSection speed={0.2} className="space-y-2">
              <div className="space-y-2 animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight">
                  <span className="block bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">Automate.</span>
                  <span className="block bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">Accelerate.</span>
                  <span className="block bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">Dominate.</span>
                </h1>
                <p className="text-lg md:text-xl text-foreground/80 mt-4 max-w-lg">
                  AI-Powered Automation for Real Estate Agencies. Cut manual tasks. Generate qualified leads. Close more deals - on autopilot.
                </p>
              </div>
            </ParallaxSection>

            <div className="flex flex-col sm:flex-row gap-3 pt-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button 
                className="text-md font-medium px-6 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl" 
                size="lg"
                onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get a Free Demo
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                className="text-md font-medium px-6 py-6 border-primary/20 hover:border-primary/40 transition-all duration-300" 
                size="lg"
                onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See Real Results
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="pt-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <p className="text-sm text-foreground/60 flex items-center">
                <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                Trusted by top-performing agents & brokers across the country
              </p>
            </div>
          </div>

          {/* Right side content with enhanced animations */}
          <div className="lg:col-span-6 relative">
            <ParallaxSection speed={0.4} className="relative">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-card to-card/50 border border-border/30 shadow-xl animate-fade-in-right">
                <img 
                  src="/lovable-uploads/591b505e-0653-419d-ba1c-54983f3d5dd9.png" 
                  alt="AI Automation for Real Estate" 
                  className="w-full h-full object-cover object-center mix-blend-luminosity opacity-90"
                />
                
                {/* Enhanced floating elements */}
                <div className="absolute top-1/4 -left-10 sm:left-5 max-w-[180px] bg-card/90 backdrop-blur rounded-lg p-3 border border-border/30 text-sm font-medium shadow-lg animate-float">
                  <div className="flex items-center gap-2">
                    <div className="bg-primary/20 p-2 rounded-full">
                      <div className="h-5 w-5 bg-gradient-to-br from-primary to-primary/60 rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Lead Automator</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-1/2 -right-10 sm:right-5 max-w-[180px] bg-card/90 backdrop-blur rounded-lg p-3 border border-border/30 text-sm font-medium shadow-lg animate-float" style={{animationDelay: '1s'}}>
                  <div className="flex items-center gap-2">
                    <div className="bg-secondary/20 p-2 rounded-full">
                      <div className="h-5 w-5 bg-gradient-to-br from-secondary to-secondary/60 rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">CRM Sync</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 max-w-[180px] bg-card/90 backdrop-blur rounded-lg p-3 border border-border/30 text-sm font-medium shadow-lg animate-float" style={{animationDelay: '2s'}}>
                  <div className="flex items-center gap-2">
                    <div className="bg-primary/20 p-2 rounded-full">
                      <div className="h-5 w-5 bg-gradient-to-br from-primary to-primary/60 rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Auto Responses</p>
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
