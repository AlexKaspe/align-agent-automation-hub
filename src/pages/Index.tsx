
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ComparisonSection from "@/components/ComparisonSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Link, Check, Mail, BarChart3, Bot, Clock, CheckCircle, ArrowRight } from "lucide-react";
import FeatureSection from "@/components/FeatureSection";
import LogoCarousel from "@/components/LogoCarousel";

const Index = () => {
  const handleBookCall = () => {
    window.open('https://cal.com/alignagentsai/intro-call', '_blank');
  };

  // Services section data
  const services = [
    {
      title: "Lead Qualification & Response Automation",
      description: "Automate how you respond to new leads with AI that answers questions, books calls, and gathers key info.",
      icon: Check
    },
    {
      title: "AI Appointment Scheduling",
      description: "Never miss a meeting. Our AI links to your calendar and schedules with leads in real-time.",
      icon: Calendar
    },
    {
      title: "CRM Integration + Data Sync",
      description: "We connect your tools like Follow Up Boss, HubSpot, Salesforce, etc. so everything stays up to date.",
      icon: Link
    },
    {
      title: "Follow-Up Email & SMS Automation",
      description: "Personalized message flows triggered by lead behavior, written by AI, optimized for conversion.",
      icon: Mail
    },
    {
      title: "Performance Analytics Dashboard",
      description: "Real-time tracking of lead quality, response rates, and conversion metrics across all channels.",
      icon: BarChart3
    },
    {
      title: "Strategy & Training Call",
      description: "Personalized training session + playbook to get your team onboarded fast.",
      icon: Bot
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        
        {/* Logo Carousel Section */}
        <LogoCarousel />
        
        {/* Services Section */}
        <section id="services" className="py-16 pt-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Real Estate AI Automation Services That Actually Work</h2>
              <p className="text-lg text-foreground/70">
                Align Agents AI delivers automation systems built for realtors, brokers, and property managers. 
                Automate lead generation, nurturing, communication, and backend operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="border border-border/50 hover-lift group bg-white hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader>
                    <service.icon className="h-8 w-8 text-primary mb-4 group-hover:text-primary/80 transition-colors" />
                    <CardTitle>
                      {service.title}
                    </CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2 text-sm text-foreground/70">
                      <Check className="h-4 w-4 text-primary" />
                      <span>24/7 Availability</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Comparison Section */}
        <ComparisonSection />
        
        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-background relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="bg-white border border-border/50 rounded-2xl p-8 md:p-10 lg:p-12 shadow-xl max-w-5xl mx-auto hover-lift">
              <div className="flex flex-col gap-8">
                <div className="text-center">
                  <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
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

                <div>
                  <h3 className="text-xl font-bold mb-6">What's Included in the Full Automation Suite</h3>
                  
                  <div className="grid md:grid-cols-2 gap-5 mb-8">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold block">AI Lead Qualification Setup <span className="text-primary ml-1">$1,200</span></span>
                        <span className="text-sm text-foreground/70">Smart scoring & routing system that prioritizes high-converting leads</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold block">Email Auto-Responder Suite <span className="text-primary ml-1">$950</span></span>
                        <span className="text-sm text-foreground/70">Automated AI email follow-ups that respond instantly and nurture over time</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold block">CRM Integration & Sync <span className="text-primary ml-1">$1,100</span></span>
                        <span className="text-sm text-foreground/70">Seamless connection with your CRM for automated syncing & workflows</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold block">Custom Reporting Dashboard <span className="text-primary ml-1">$1,000</span></span>
                        <span className="text-sm text-foreground/70">Real-time KPI dashboards to track leads, agents, and conversion performance</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold block">Strategy & Training Call <span className="text-primary ml-1">$500</span></span>
                        <span className="text-sm text-foreground/70">Personalized training session + playbook to get your team onboarded fast</span>
                      </div>
                    </div>
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 transition-all hover:shadow-lg duration-300 hover:border-primary/30">
                      <div className="flex flex-col gap-2">
                        <p className="font-medium">Total Value: <span className="line-through text-foreground/60">$5,750</span></p>
                        <p className="text-lg font-bold">Your Price: <span className="text-primary">$4,500</span> — Save $1,250 when bundled</p>
                        <div className="relative group">
                          <Button 
                            size="lg" 
                            className="font-medium mt-2 w-full relative overflow-hidden z-10 group"
                            onClick={handleBookCall}
                          >
                            <span className="absolute inset-0 w-0 bg-white/20 group-hover:w-full transition-all duration-500 ease-out"></span>
                            <span className="relative z-10 flex items-center justify-center">
                              Book Discovery Call
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </span>
                          </Button>
                          <span className="absolute -inset-1 rounded-lg bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Feature Section */}
        <FeatureSection />
        
        <TestimonialsSection />
        
        <SuccessStoriesSection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
