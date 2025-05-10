
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Pricing = () => {
  const handleBookCall = () => {
    window.open('https://cal.com/alignagentsai/intro-call', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        <section className="py-16 bg-background relative overflow-hidden">
          {/* Background effects similar to offer section */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                <Clock className="mr-1 h-3 w-3" />
                Pricing Plans
              </div>
              <h1 className="text-4xl font-bold mb-4">Pricing That Grows With Your Real Estate Business</h1>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Choose the plan that best fits your needs. All plans include a free discovery call.
              </p>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Starter Plan */}
                <Card className="border border-border/50 shadow-lg">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">Starter</h3>
                    <div className="text-4xl font-bold mb-6">$499<span className="text-lg text-foreground/70">/mo</span></div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/70">Basic lead automation</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/70">1 AI chatbot</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/70">Calendar sync</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/70">Email integration</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/70">Basic reporting</span>
                      </div>
                    </div>
                    
                    <Button className="w-full" variant="outline" onClick={handleBookCall}>
                      Book Free Trial
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>

                {/* Pro Plan - Recommended */}
                <Card className="border border-primary shadow-lg relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                      Recommended
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">Pro</h3>
                    <div className="text-4xl font-bold mb-6">$999<span className="text-lg text-foreground/70">/mo</span></div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/70">All Starter features</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/70">CRM sync</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/70">Advanced follow-ups</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/70">Custom dashboard</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/70">Priority support</span>
                      </div>
                    </div>
                    
                    <Button className="w-full" onClick={handleBookCall}>
                      Book Free Trial
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>

                {/* Elite Plan */}
                <Card className="border border-border/50 shadow-lg">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">Elite</h3>
                    <div className="text-4xl font-bold mb-6">$1499<span className="text-lg text-foreground/70">/mo</span></div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/70">All Pro features</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/70">Team training</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/70">Full integration suite</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/70">Custom AI models</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/70">Dedicated support</span>
                      </div>
                    </div>
                    
                    <Button className="w-full" variant="outline" onClick={handleBookCall}>
                      Book Free Trial
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              </div>
              
              {/* Full Automation Package */}
              <div className="mt-16 bg-background border border-border/50 rounded-2xl p-8 md:p-10 lg:p-12 shadow-xl">
                <div className="text-center mb-10">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">Full Automation Package</h2>
                  <p className="text-foreground/80 max-w-2xl mx-auto">
                    Supercharge your lead management with done-for-you AI systems built for real estate teams.
                  </p>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                  <div className="md:w-3/5">
                    <h3 className="text-xl font-bold mb-6">What's Included in the Full Automation Suite</h3>
                    
                    <div className="space-y-5 mb-8">
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
                    
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-8">
                      <div className="flex flex-wrap gap-4 justify-between items-center">
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
                        <h3 className="text-xl font-bold mb-4">Optional Add-Ons</h3>
                        
                        <div className="space-y-4 mb-6">
                          <div className="flex items-center justify-between pb-3 border-b border-border/30">
                            <span>AI SMS Responder Integration</span>
                            <span className="text-primary font-medium">$700</span>
                          </div>
                          <div className="flex items-center justify-between pb-3 border-b border-border/30">
                            <span>Chatbot Setup for Real Estate Website</span>
                            <span className="text-primary font-medium">$900</span>
                          </div>
                          <div className="flex items-center justify-between pb-3 border-b border-border/30">
                            <span>Lead Source Analytics Setup</span>
                            <span className="text-primary font-medium">$600</span>
                          </div>
                          <div className="flex items-center justify-between pb-3 border-b border-border/30">
                            <span>Monthly Performance Review & Reporting</span>
                            <span className="text-primary font-medium">$350/month</span>
                          </div>
                        </div>
                        
                        <div className="mt-6">
                          <h4 className="font-bold text-lg mb-2">Ready to Automate Your Real Estate Business?</h4>
                          <p className="text-sm text-foreground/70 mb-4">
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
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
