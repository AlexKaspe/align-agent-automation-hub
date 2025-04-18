
import { Button } from './ui/button';
import { CheckCircle2, ChevronRight, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-10 md:pt-24 md:pb-14 lg:pt-28 lg:pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"></div>
      <div className="absolute top-0 right-0 w-full h-full max-w-[800px] -z-10 bg-gradient-radial from-secondary/5 to-transparent opacity-60"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-6 space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight">
                <span className="block">Automate.</span>
                <span className="block">Accelerate.</span>
                <span className="block">Dominate.</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 mt-4 max-w-lg">
                AI-Powered Automation for Real Estate Agencies. Cut manual tasks. Generate qualified leads. Close more deals - on autopilot.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button 
                className="text-md font-medium px-6 py-6" 
                size="lg"
                onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get a Free Demo
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                className="text-md font-medium px-6 py-6" 
                size="lg"
                onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See Real Results
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="pt-4">
              <p className="text-sm text-foreground/60 flex items-center">
                <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                Trusted by top-performing agents & brokers across the country
              </p>
            </div>
          </div>

          {/* Right side content with image and floating elements */}
          <div className="lg:col-span-6 relative animate-fade-in-right">
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-card to-card/50 border border-border/30 shadow-xl">
              <img 
                src="/lovable-uploads/591b505e-0653-419d-ba1c-54983f3d5dd9.png" 
                alt="AI Automation for Real Estate" 
                className="w-full h-full object-cover object-center mix-blend-luminosity opacity-90"
              />
              
              {/* Floating elements */}
              <div className="absolute top-1/4 -left-10 sm:left-5 max-w-[180px] bg-card/90 backdrop-blur rounded-lg p-3 border border-border/30 text-sm font-medium shadow-lg animate-float">
                <div className="flex items-center gap-2">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 16v-4"></path>
                      <path d="M12 8h.01"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Lead Automator</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/2 -right-10 sm:right-5 max-w-[180px] bg-card/90 backdrop-blur rounded-lg p-3 border border-border/30 text-sm font-medium shadow-lg animate-float" style={{animationDelay: '1s'}}>
                <div className="flex items-center gap-2">
                  <div className="bg-secondary/20 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8m4 0v18M9 9h4M9 3v18"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">CRM Sync</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 max-w-[180px] bg-card/90 backdrop-blur rounded-lg p-3 border border-border/30 text-sm font-medium shadow-lg animate-float" style={{animationDelay: '2s'}}>
                <div className="flex items-center gap-2">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="8"></circle>
                      <path d="M12 2v4"></path>
                      <path d="M12 18v4"></path>
                      <path d="M4.93 4.93l2.83 2.83"></path>
                      <path d="M16.24 16.24l2.83 2.83"></path>
                      <path d="M2 12h4"></path>
                      <path d="M18 12h4"></path>
                      <path d="M4.93 19.07l2.83-2.83"></path>
                      <path d="M16.24 7.76l2.83-2.83"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Auto Responses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
