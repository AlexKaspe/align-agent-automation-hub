
import { Button } from './ui/button';
import { Clock, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import ParallaxSection from './ParallaxSection';

const OfferSection = () => {
  const handleBookCall = () => {
    window.open('https://cal.com/alignagentsai/intro-call', '_blank');
  };

  return (
    <section id="offer" className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-background backdrop-blur-sm border border-border/30 rounded-3xl p-10 md:p-14 shadow-2xl max-w-5xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3 opacity-60"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px]"></div>
          
          <ParallaxSection speed={0.08} className="relative z-10">
            <div className="flex flex-col gap-10">
              <div className="text-center">
                <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6 shadow-sm">
                  <Sparkles className="mr-2 h-3.5 w-3.5" />
                  Premium AI Automation Package
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                  Supercharge your lead management with done-for-you AI systems
                </h2>
                
                <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
                  Built specifically for real estate teams who want to save time, generate more leads, and close more deals.
                </p>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 text-center">What's Included in the Full Automation Suite</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20 group">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <span className="font-bold block text-lg mb-1">AI Lead Qualification Setup 
                          <span className="text-primary ml-2">$1,200</span>
                        </span>
                        <span className="text-foreground/70">Smart scoring & routing system that prioritizes high-converting leads</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20 group">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <span className="font-bold block text-lg mb-1">Email Auto-Responder Suite 
                          <span className="text-primary ml-2">$950</span>
                        </span>
                        <span className="text-foreground/70">Automated AI email follow-ups that respond instantly and nurture over time</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20 group">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <span className="font-bold block text-lg mb-1">CRM Integration & Sync 
                          <span className="text-primary ml-2">$1,100</span>
                        </span>
                        <span className="text-foreground/70">Seamless connection with your CRM for automated syncing & workflows</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20 group">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <span className="font-bold block text-lg mb-1">Custom Reporting Dashboard 
                          <span className="text-primary ml-2">$1,000</span>
                        </span>
                        <span className="text-foreground/70">Real-time KPI dashboards to track leads, agents, and conversion performance</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20 group">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <span className="font-bold block text-lg mb-1">Strategy & Training Call 
                          <span className="text-primary ml-2">$500</span>
                        </span>
                        <span className="text-foreground/70">Personalized training session + playbook to get your team onboarded fast</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-8 md:col-span-2 lg:col-span-1 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col gap-4">
                      <div className="flex justify-between items-center">
                        <p className="font-medium text-lg">Total Value:</p>
                        <p className="line-through text-foreground/60 font-bold text-lg">$5,750</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="font-bold text-xl">Your Price:</p> 
                        <div className="flex flex-col items-end">
                          <p className="text-2xl font-bold text-primary">$4,500</p>
                          <p className="text-foreground/70">— Save $1,250 when bundled</p>
                        </div>
                      </div>
                      <Button 
                        size="lg" 
                        className="font-medium mt-4 px-8 py-6 text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                        onClick={handleBookCall}
                      >
                        Book Discovery Call
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ParallaxSection>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
