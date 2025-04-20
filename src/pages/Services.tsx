
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Link, Check, Mail } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Lead Qualification & Response Automation",
      description: "Automate how you respond to new leads with AI that answers questions, books calls, and gathers key info.",
      icon: Check,
    },
    {
      title: "AI Appointment Scheduling",
      description: "Never miss a meeting. Our AI links to your calendar and schedules with leads in real-time.",
      icon: Calendar,
    },
    {
      title: "CRM Integration + Data Sync",
      description: "We connect your tools like Follow Up Boss, HubSpot, Salesforce, etc. so everything stays up to date.",
      icon: Link,
    },
    {
      title: "Follow-Up Email & SMS Automation",
      description: "Personalized message flows triggered by lead behavior, written by AI, optimized for conversion.",
      icon: Mail,
    },
    {
      title: "Client Nurturing Campaigns",
      description: "For cold leads, we send timely reminders and soft nudges until they're ready to buy/sell.",
      icon: Mail,
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
              <Card key={index} className="border border-border/50">
                <CardHeader>
                  <service.icon className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>{service.title}</CardTitle>
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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
