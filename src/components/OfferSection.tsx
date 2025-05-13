
import { Button } from './ui/button';
import { Clock, CheckCircle, ArrowRight } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from './ui/table';

const OfferSection = () => {
  const handleBookCall = () => {
    window.open('https://cal.com/alignagentsai/intro-call', '_blank');
  };

  const services = [
    {
      name: "AI Lead Qualification Setup",
      description: "Smart scoring & routing system that prioritizes high-converting leads",
      price: "$1,200"
    },
    {
      name: "Email Auto-Responder Suite",
      description: "Automated AI email follow-ups that respond instantly and nurture over time",
      price: "$950"
    },
    {
      name: "CRM Integration & Sync",
      description: "Seamless connection with your CRM for automated syncing & workflows",
      price: "$1,100"
    },
    {
      name: "Custom Reporting Dashboard",
      description: "Real-time KPI dashboards to track leads, agents, and conversion performance",
      price: "$1,000"
    },
    {
      name: "Strategy & Training Call",
      description: "Personalized training session + playbook to get your team onboarded fast",
      price: "$500"
    }
  ];

  return (
    <section id="offer" className="py-16 bg-card relative overflow-hidden">
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

            <div className="space-y-6">
              <h3 className="text-xl font-bold">Standalone Workflow Pricing (Mid-Tier Value)</h3>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Service</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead className="text-right">Standalone Price (USD)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {services.map((service, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{service.name}</TableCell>
                        <TableCell>{service.description}</TableCell>
                        <TableCell className="text-right text-primary font-medium">{service.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-8">
                <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
                  <div>
                    <p className="font-medium mb-2">Total if purchased separately: <span className="font-semibold">$5,750</span></p>
                    <p className="text-xl font-bold">Bundle Price: <span className="text-primary">$4,500</span> — Save 22%</p>
                    <p className="text-sm text-foreground/70 mt-1">Complete AI automation suite with all services included</p>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
