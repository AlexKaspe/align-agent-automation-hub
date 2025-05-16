
import { Bot, Calendar, MessageSquare, RefreshCcw, BarChart3, Mail } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import ParallaxSection from './ParallaxSection';

const ServicesSection = () => {
  const services = [
    {
      icon: Bot,
      title: "Lead Capture & Qualification Bots",
      description: "Qualify leads in real-time using AI"
    },
    {
      icon: Calendar,
      title: "Appointment Booking Automation",
      description: "Syncs with your calendar seamlessly"
    },
    {
      icon: RefreshCcw,
      title: "CRM + Email Integration",
      description: "Keep your pipeline flowing automatically"
    },
    {
      icon: MessageSquare,
      title: "Custom Property Inquiry Chatbots",
      description: "Never miss a prospect's question"
    },
    {
      icon: Mail,
      title: "AI Follow-Up Campaigns",
      description: "Personalized, timed messages that convert"
    },
    {
      icon: BarChart3,
      title: "Performance Reporting Dashboards",
      description: "Always know what's working"
    }
  ];

  return (
    <section id="services-features" className="py-24 md:py-32 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-primary/5 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 blur-[100px]"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-secondary/10 blur-[100px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ParallaxSection speed={0.1} className="mb-16">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <div className="inline-block mb-3">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                Our Services
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Tailored AI Automation Services for Real Estate Professionals
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Everything you need to grow your business with less work and more results.
            </p>
          </div>
        </ParallaxSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="animate-fade-in-soft group"
              style={{ animationDelay: `${0.16 + index * 0.11}s` }}
            >
              <Card className="relative group overflow-hidden hover:shadow-xl transition-all duration-500 border-border/30 hover:border-primary/30 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 z-10 relative">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 shadow-sm transform group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-foreground/70 group-hover:text-foreground/90 transition-colors">{service.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
