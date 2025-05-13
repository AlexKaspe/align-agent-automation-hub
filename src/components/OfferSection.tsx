
import { Button } from './ui/button';
import { Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const OfferSection = () => {
  const handleBookCall = () => {
    window.open('https://cal.com/alignagentsai/intro-call', '_blank');
  };

  return (
    <section id="offer" className="py-10 bg-card relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-background border border-border/50 rounded-2xl p-6 md:p-8 lg:p-10 shadow-xl max-w-5xl mx-auto">
          <div className="flex flex-col gap-6">
            <div className="text-center">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                <Clock className="mr-1 h-3 w-3" />
                AI Automation for Real Estate
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 font-heading">
                Supercharge your lead management with done-for-you AI systems
              </h2>
              
              <p className="text-foreground/80 max-w-2xl mx-auto mb-5">
                Built specifically for real estate teams who want to save time, generate more leads, and close more deals.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="md:w-3/5">
                <h3 className="text-xl font-bold mb-4">What's Included in the Full Automation Suite</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block">AI Lead Qualification Setup</span>
                      <span className="text-sm text-foreground/70">Smart scoring & routing system that prioritizes high-converting leads</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block">Email Auto-Responder Suite</span>
                      <span className="text-sm text-foreground/70">Automated AI email follow-ups that respond instantly and nurture over time</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block">CRM Integration & Sync</span>
                      <span className="text-sm text-foreground/70">Seamless connection with your CRM for automated syncing & workflows</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block">Custom Reporting Dashboard</span>
                      <span className="text-sm text-foreground/70">Real-time KPI dashboards to track leads, agents, and conversion performance</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block">Strategy & Training Call</span>
                      <span className="text-sm text-foreground/70">Personalized training session + playbook to get your team onboarded fast</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 mb-6">
                  <div className="flex flex-wrap gap-3 justify-between items-center">
                    <div>
                      <p className="font-medium mb-1">Total Value: <span className="line-through text-foreground/60">$5,750</span></p>
                      <p className="text-lg font-bold">Your Price: <span className="text-primary">$4,500</span> — Save $1,250 when bundled</p>
                    </div>
                    <Button 
                      size="lg" 
                      className="font-medium"
                      onClick={handleBookCall}
                    >
                      Book Discovery Call
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/5">
                <Card className="shadow-lg border border-border/50">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-3">Optional Add-Ons</h3>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between pb-2 border-b border-border/30">
                        <span>AI SMS Responder Integration</span>
                        <span className="text-primary font-medium">$700</span>
                      </div>
                      <div className="flex items-center justify-between pb-2 border-b border-border/30">
                        <span>Chatbot Setup for Real Estate Website</span>
                        <span className="text-primary font-medium">$900</span>
                      </div>
                      <div className="flex items-center justify-between pb-2 border-b border-border/30">
                        <span>Lead Source Analytics Setup</span>
                        <span className="text-primary font-medium">$600</span>
                      </div>
                      <div className="flex items-center justify-between pb-2 border-b border-border/30">
                        <span>Monthly Performance Review & Reporting</span>
                        <span className="text-primary font-medium">$350/month</span>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <h4 className="font-bold text-lg mb-2">Ready to Automate Your Real Estate Business?</h4>
                      <p className="text-sm text-foreground/70 mb-3">
                        Book a free discovery call and we'll show you how AI can save time and close more deals — without adding extra work.
                      </p>
                      <Button 
                        className="w-full"
                        onClick={handleBookCall}
                      >
                        Book Free Discovery Call
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
