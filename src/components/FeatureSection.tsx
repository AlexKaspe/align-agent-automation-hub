
import { Calendar, MessageSquare, RefreshCcw, Users, Bot } from 'lucide-react';

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
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Key Features That Drive Results</h2>
          <p className="text-lg text-foreground/70">
            Our comprehensive suite of AI-powered tools designed specifically for real estate professionals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="relative group animate-fade-in-soft"
              style={{ animationDelay: `${0.15 + index * 0.09}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-card border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
