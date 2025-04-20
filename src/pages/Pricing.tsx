
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingTier = ({ name, price, features, recommended = false }) => (
  <div className={`relative p-6 bg-card rounded-xl border ${recommended ? 'border-primary' : 'border-border/50'} shadow-lg`}>
    {recommended && (
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
        <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
          Recommended
        </span>
      </div>
    )}
    <div className="text-center mb-6">
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <div className="text-4xl font-bold mb-4">${price}<span className="text-lg text-foreground/70">/mo</span></div>
    </div>
    <ul className="space-y-3 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-2">
          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <span className="text-foreground/70">{feature}</span>
        </li>
      ))}
    </ul>
    <Button className="w-full" variant={recommended ? "default" : "outline"}>
      Start Free Trial
    </Button>
  </div>
);

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: 499,
      features: [
        "Basic lead automation",
        "1 AI chatbot",
        "Calendar sync",
        "Email integration",
        "Basic reporting"
      ]
    },
    {
      name: "Pro",
      price: 999,
      features: [
        "All Starter features",
        "CRM sync",
        "Advanced follow-ups",
        "Custom dashboard",
        "Priority support"
      ],
      recommended: true
    },
    {
      name: "Elite",
      price: 1499,
      features: [
        "All Pro features",
        "Team training",
        "Full integration suite",
        "Custom AI models",
        "Dedicated support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Pricing That Grows With Your Real Estate Business</h1>
            <p className="text-lg text-foreground/70">
              Choose the plan that best fits your needs. All plans include a free trial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <PricingTier key={index} {...plan} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
