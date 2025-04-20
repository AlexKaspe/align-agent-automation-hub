
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CaseStudies = () => {
  const cases = [
    {
      name: "Sarah T.",
      role: "Realtor",
      location: "Austin, TX",
      quote: "Automated 100+ leads per month, booked 40% more showings.",
      results: [
        "Increased lead response rate by 300%",
        "Saved 15+ hours per week",
        "ROI positive within first month"
      ]
    },
    {
      name: "Jorge R.",
      role: "Broker",
      location: "Miami, FL",
      quote: "My monthly revenue increased by $12,000 within 45 days.",
      results: [
        "Doubled client consultations",
        "Automated 90% of follow-ups",
        "Increased team productivity by 40%"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Real Results. Real Agents. Real Growth.</h1>
            <p className="text-lg text-foreground/70">
              See how real estate professionals are transforming their businesses with our AI automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {cases.map((study, index) => (
              <Card key={index} className="border border-border/50">
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <span>{study.name}</span>
                    <span className="text-sm text-foreground/70">{study.location}</span>
                  </CardTitle>
                  <CardDescription>{study.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <blockquote className="border-l-4 border-primary pl-4 italic">
                    "{study.quote}"
                  </blockquote>
                  <div className="space-y-2">
                    {study.results.map((result, i) => (
                      <p key={i} className="text-sm text-foreground/70">• {result}</p>
                    ))}
                  </div>
                  <Button className="w-full">View Full Case Study</Button>
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

export default CaseStudies;
