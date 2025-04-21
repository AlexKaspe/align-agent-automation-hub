
import { Check } from 'lucide-react';

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
    <section id="comparison" className="py-20 relative overflow-hidden bg-card/50">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in" style={{ animationDelay: '0.12s' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Top Real Estate Agents Choose Align Agents AI
          </h2>
        </div>

        <div className="max-w-4xl mx-auto animate-fade-in-soft" style={{ animationDelay: '0.22s' }}>
          <div className="grid grid-cols-3 gap-4 p-6 rounded-lg bg-card border border-border/50">
            <div className="font-semibold">Feature</div>
            <div className="font-semibold text-center">Manual Workflows</div>
            <div className="font-semibold text-center">Align Agents AI</div>
            
            {features.map((feature, index) => (
              <React.Fragment key={feature.label}>
                <div className="py-4 border-t border-border/30">
                  {feature.label}
                </div>
                <div className="py-4 border-t border-border/30 text-center text-foreground/70">
                  {feature.manual}
                </div>
                <div className="py-4 border-t border-border/30 text-center text-primary font-medium flex items-center justify-center gap-2">
                  <Check className="w-4 h-4" />
                  {feature.automated}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
