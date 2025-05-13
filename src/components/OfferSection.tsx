
import { Button } from './ui/button';
import { Clock, CheckCircle, ArrowRight, Zap } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const OfferSection = () => {
  const handleBookCall = () => {
    window.open('https://cal.com/alignagentsai/intro-call', '_blank');
  };

  return (
    <section id="offer" className="py-20 bg-card relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-background border border-border/50 rounded-2xl p-8 md:p-10 lg:p-12 shadow-xl max-w-4xl mx-auto">
          <div className="flex flex-col gap-8">
            <div className="text-center">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                <Clock className="mr-1 h-3 w-3" />
                AI Automation for Real Estate
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-heading">
                Supercharge your lead management with done-for-you AI systems
              </h2>
              
              <p className="text-foreground/80 max-w-2xl mx-auto mb-8">
                Built specifically for real estate teams who want to save time, generate more leads, and close more deals.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-5">What's Included in the Full Automation Suite</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block">AI Lead Qualification Setup</span>
                      <span className="text-sm text-foreground/70">Smart scoring & routing system that ensures no lead falls through the cracks</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block">Email Auto-Responder Suite</span>
                      <span className="text-sm text-foreground/70">Automated AI follow-ups personalized to each prospect's interests</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block">CRM Integration & Sync</span>
                      <span className="text-sm text-foreground/70">Seamless connection with your existing systems for unified workflows</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block">Custom Reporting Dashboard</span>
                      <span className="text-sm text-foreground/70">Real-time KPI tracking with customizable metrics that matter to you</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-border pt-8">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Client Success Guarantee
                </h3>
                <p className="text-foreground/80 mb-6">
                  Our systems typically help agents save 15+ hours per week while increasing conversion rates by an average of 27%. We'll work with you until you see results or your money back.
                </p>
              </div>
              
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <div className="flex flex-wrap gap-4 justify-between items-center">
                  <div>
                    <p className="font-medium mb-1">Total Value: <span className="line-through text-foreground/60">$5,750</span></p>
                    <p className="text-lg font-bold">Your Price: <span className="text-primary">$4,500</span> — Save $1,250</p>
                    <p className="text-sm text-foreground/70 mt-1">One-time setup fee, then just $349/month</p>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
