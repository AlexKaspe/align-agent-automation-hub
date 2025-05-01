
import { Button } from './ui/button';
import { Clock, CheckCircle, ArrowRight } from 'lucide-react';

const OfferSection = () => {
  return (
    <section id="offer" className="py-16 bg-card relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-background border border-border/50 rounded-2xl p-8 md:p-10 lg:p-12 shadow-xl max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="md:w-3/5">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                <Clock className="mr-1 h-3 w-3" />
                Limited-Time Offer
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-heading">
                30 Days Free + Done-For-You Setup
              </h2>
              
              <p className="text-foreground/80 mb-6">
                Get your first 5 workflows set up by our team. No tech skills needed. No strings attached.
              </p>
              
              <p className="text-sm text-primary font-semibold mb-6">
                *Only 11 spots left this month. Don't miss out
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0" />
                  <span>Complete setup of 5 custom automation workflows</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0" />
                  <span>Integration with your existing CRM & tools</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0" />
                  <span>30 days unlimited access to all premium features</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0" />
                  <span>1-on-1 strategy call with our automation experts</span>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="font-medium w-full sm:w-auto"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Claim Your Free Setup
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="md:w-2/5">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent opacity-70 blur-xl"></div>
                <div className="relative bg-card border border-border/50 rounded-xl p-6 shadow-lg">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-1">What You'll Get</h3>
                    <p className="text-sm text-foreground/60">
                      Value: <span className="line-through">$1,997</span> <span className="text-primary font-semibold">FREE</span>
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-border/30">
                      <span className="text-sm">AI Lead Qualification Setup</span>
                      <span className="text-primary font-medium">$497 value</span>
                    </div>
                    <div className="flex items-center justify-between pb-3 border-b border-border/30">
                      <span className="text-sm">Email Auto-Responder Suite</span>
                      <span className="text-primary font-medium">$397 value</span>
                    </div>
                    <div className="flex items-center justify-between pb-3 border-b border-border/30">
                      <span className="text-sm">CRM Integration & Sync</span>
                      <span className="text-primary font-medium">$297 value</span>
                    </div>
                    <div className="flex items-center justify-between pb-3 border-b border-border/30">
                      <span className="text-sm">Custom Reporting Dashboard</span>
                      <span className="text-primary font-medium">$397 value</span>
                    </div>
                    <div className="flex items-center justify-between pb-3 border-b border-border/30">
                      <span className="text-sm">Strategy & Training Call</span>
                      <span className="text-primary font-medium">$397 value</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-2">
                    <p className="text-xs text-foreground/60 italic text-center">
                      No credit card required. Zero obligation to continue after 30 days.
                    </p>
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

export default OfferSection;
