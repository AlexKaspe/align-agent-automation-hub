
import { Calendar, MessageSquare, RefreshCcw, Users, Bot, Award } from 'lucide-react';
import ParallaxSection from './ParallaxSection';

const FeatureSection = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Instant Lead Response",
      description: "Never miss a lead with automated instant responses"
    },
    {
      icon: RefreshCcw,
      title: "Smart CRM Syncing",
      description: "Automatically update your CRM with lead interactions"
    },
    {
      icon: Users,
      title: "Automated Client Nurturing",
      description: "Keep leads warm with personalized follow-ups"
    },
    {
      icon: Calendar,
      title: "Calendar + Email Automation",
      description: "Streamline scheduling and communication"
    },
    {
      icon: Bot,
      title: "AI Chatbots",
      description: "24/7 inquiry handling and lead qualification"
    },
    {
      icon: Award,
      title: "Performance Analytics",
      description: "Track ROI and conversion metrics in real-time"
    }
  ];

  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/10 blur-[100px]"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-secondary/10 blur-[100px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ParallaxSection speed={0.1} className="mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-3">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                Features
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Key Features That Drive Results
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Our comprehensive suite of AI-powered tools designed specifically for real estate professionals
            </p>
          </div>
        </ParallaxSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="relative group animate-fade-in-soft"
              style={{ animationDelay: `${0.15 + index * 0.09}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-card border border-border/30 rounded-xl p-8 hover:border-primary/30 transition-all duration-500 group-hover:shadow-xl h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 shadow-sm transform group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-foreground/70 group-hover:text-foreground/90 transition-colors">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
