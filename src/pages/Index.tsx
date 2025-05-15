
import React from "react";
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

const Index = () => {
  const handleBookCall = () => {
    window.open('https://cal.com/alignagentsai/intro-call', '_blank');
  };

  // Case studies section data
  const cases = [
    {
      name: "Sarah T.",
      role: "Realtor",
      location: "Austin, TX",
      quote: "Automated 100+ leads per month, booked 40% more showings.",
      results: [
        "Increased lead response rate by 300%",
        "Saved 15+ hours per week",
        "ROI positive within first month"
      ]
    },
    {
      name: "Jorge R.",
      role: "Broker",
      location: "Miami, FL",
      quote: "My monthly revenue increased by $12,000 within 45 days.",
      results: [
        "Doubled client consultations",
        "Automated 90% of follow-ups",
        "Increased team productivity by 40%"
      ]
    }
  ];

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
        
        {/* Services Section */}
        <section id="services" className="py-16 pt-24 bg-blue-900/10">
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
                <Card key={index} className="border border-border/50">
                  <CardHeader>
                    <service.icon className="h-8 w-8 text-primary mb-4" />
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
        
        {/* Comparison Section - Using the dedicated component */}
        <ComparisonSection />
        
        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-blue-900/10 relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="bg-background border border-border/50 rounded-2xl p-8 md:p-10 lg:p-12 shadow-xl max-w-5xl mx-auto">
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
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                      <div className="flex flex-col gap-2">
                        <p className="font-medium">Total Value: <span className="line-through text-foreground/60">$5,750</span></p>
                        <p className="text-lg font-bold">Your Price: <span className="text-primary">$4,500</span> — Save $1,250 when bundled</p>
                        <Button 
                          size="lg" 
                          className="font-medium mt-2"
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
          </div>
        </section>
        
        {/* Feature Section - Using the dedicated component */}
        <FeatureSection />
        
        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-blue-900/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Clients Are Saying</h2>
              <p className="text-lg text-foreground/70">
                Read success stories from real estate professionals who have transformed their businesses with Align Agents AI.
              </p>
            </div>
          </div>
        </section>
        
        {/* Case Studies Section */}
        <section id="case-studies" className="py-16 bg-blue-950/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Real Results. Real Agents. Real Growth.</h2>
              <p className="text-lg text-foreground/70">
                See how real estate professionals are transforming their businesses with our AI automation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {cases.map((study, index) => (
                <Card key={index} className="border border-border/50">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-start">
                      <span>{study.name}</span>
                      <span className="text-sm text-foreground/70">{study.location}</span>
                    </CardTitle>
                    <CardDescription>{study.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <blockquote className="border-l-4 border-primary pl-4 italic">
                      "{study.quote}"
                    </blockquote>
                    <div className="space-y-2">
                      {study.results.map((result, i) => (
                        <p key={i} className="text-sm text-foreground/70">• {result}</p>
                      ))}
                    </div>
                    <Button className="w-full">View Full Case Study</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Success Stories Section */}
        <section id="success-stories" className="py-16 bg-blue-900/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
              <p className="text-lg text-foreground/70">
                Explore how real estate agents are achieving remarkable results with our AI-powered automation solutions.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-16 bg-blue-950/30 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-lg text-foreground/70">
                Ready to transform your real estate business with AI automation? Contact us today to learn more.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
