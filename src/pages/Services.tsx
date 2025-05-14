
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Link, Check, Mail, BarChart3, Bot, TicketPercent } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Lead Qualification & Response Automation",
      description: "Automate how you respond to new leads with AI that answers questions, books calls, and gathers key info.",
      icon: Check,
      price: "$1,200"
    },
    {
      title: "Email Auto-Responder Suite",
      description: "Personalized message flows triggered by lead behavior, written by AI, optimized for conversion.",
      icon: Mail,
      price: "$950"
    },
    {
      title: "CRM Integration + Data Sync",
      description: "We connect your tools like Follow Up Boss, HubSpot, Salesforce, etc. so everything stays up to date.",
      icon: Link,
      price: "$1,100"
    },
    {
      title: "Custom Reporting Dashboard",
      description: "Real-time tracking of lead quality, response rates, and conversion metrics across all channels.",
      icon: BarChart3,
      price: "$1,000"
    },
    {
      title: "Strategy & Training Call",
      description: "Personalized training session + playbook to get your team onboarded fast.",
      icon: Calendar,
      price: "$500"
    },
    {
      title: "AI Appointment Scheduling",
      description: "Never miss a meeting. Our AI links to your calendar and schedules with leads in real-time.",
      icon: Calendar,
      price: "Included with suite"
    },
    {
      title: "Client Nurturing Campaigns",
      description: "For cold leads, we send timely reminders and soft nudges until they're ready to buy/sell.",
      icon: Mail,
      price: "Included with Email Suite"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Real Estate AI Automation Services That Actually Work</h1>
            <p className="text-lg text-foreground/70">
              Align Agents AI delivers automation systems built for realtors, brokers, and property managers. 
              Automate lead generation, nurturing, communication, and backend operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {services.map((service, index) => (
              <Card key={index} className="border border-border/50 flex flex-col">
                <CardHeader>
                  <service.icon className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex items-center space-x-2 text-sm text-foreground/70">
                    <Check className="h-4 w-4 text-primary" />
                    <span>24/7 Availability</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center pt-4 border-t border-border/50">
                  <div className="flex items-center">
                    <TicketPercent className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm font-medium">Bundle & Save</span>
                  </div>
                  <div className="text-primary font-bold">{service.price}</div>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center mt-12 bg-primary/5 p-6 rounded-lg border border-primary/20">
            <h3 className="text-xl font-bold mb-2">Full Automation Suite Bundle</h3>
            <p className="text-lg mb-2">
              <span className="text-foreground/70">Total Value: </span>
              <span className="line-through text-foreground/60">$5,750</span>
            </p>
            <p className="text-2xl font-bold text-primary">Bundle Price: $4,500</p>
            <p className="text-sm text-foreground/70 mt-2">Save $1,250 when you get the complete automation suite</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
