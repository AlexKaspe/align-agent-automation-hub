
import React from 'react';
import { Check } from 'lucide-react';
import ParallaxSection from './ParallaxSection';

const ComparisonSection = () => {
  const features = [
    {
      manual: "Hours",
      automated: "Instant (AI)",
      label: "Lead Response Time"
    },
    {
      manual: "Missed/Delayed",
      automated: "Scheduled & Smart",
      label: "Client Follow-Ups"
    },
    {
      manual: "~3-5%",
      automated: "Up to 20%+",
      label: "Lead Conversion Rate"
    },
    {
      manual: "High",
      automated: "Lower via automation",
      label: "Cost Per Lead"
    },
    {
      manual: "Varies",
      automated: "100% Consistent",
      label: "Response Consistency"
    }
  ];

  return (
    <section id="comparison" className="py-24 md:py-32 relative overflow-hidden bg-card/30">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-30"></div>
      <div className="absolute -top-40 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[100px]"></div>
      <div className="absolute -bottom-40 right-1/4 w-96 h-96 rounded-full bg-secondary/10 blur-[100px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ParallaxSection speed={0.12} className="mb-16">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <div className="inline-block mb-3">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Why Top Real Estate Agents Choose Align Agents AI
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              See how our AI-powered automation outperforms traditional manual workflows in every key metric.
            </p>
          </div>
        </ParallaxSection>

        <div className="max-w-4xl mx-auto animate-fade-in-soft" style={{ animationDelay: '0.22s' }}>
          <div className="backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-border/50 bg-card/80">
            <div className="grid grid-cols-3 gap-4 p-8">
              <div className="font-bold text-xl">Feature</div>
              <div className="font-bold text-xl text-center">Manual Workflows</div>
              <div className="font-bold text-xl text-center text-primary">Align Agents AI</div>
              
              {features.map((feature, index) => (
                <React.Fragment key={feature.label}>
                  <div className="py-6 border-t border-border/30 font-medium">
                    {feature.label}
                  </div>
                  <div className="py-6 border-t border-border/30 text-center text-foreground/70">
                    {feature.manual}
                  </div>
                  <div className="py-6 border-t border-border/30 text-center text-primary font-medium flex items-center justify-center gap-2 bg-primary/5 rounded-lg">
                    <Check className="w-5 h-5" />
                    {feature.automated}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
