
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
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ParallaxSection speed={0.09}>
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-soft">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tailored AI Automation Services for Real Estate Professionals
            </h2>
            <p className="text-lg text-foreground/70">
              Everything you need to grow your business with less work.
            </p>
          </div>
        </ParallaxSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ParallaxSection key={service.title} speed={0.11 + (index * 0.03)}>
              <div className="animate-fade-in-soft" style={{animationDelay: `${0.06 + index * 0.07}s`}}>
                <Card className="relative group hover:shadow-lg transition-shadow duration-300 border-border/50 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-foreground/70">{service.description}</p>
                  </CardContent>
                </Card>
              </div>
            </ParallaxSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
