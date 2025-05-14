
import { Trophy, TrendingUp, Users } from 'lucide-react';

const SuccessStoriesSection = () => {
  return (
    <section id="success-stories" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in" style={{animationDelay: '0.13s'}}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-heading">
            Real Success Stories
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto" style={{animationDelay: '0.15s'}}>
            See the impact our AI automation has made for real estate professionals across the country.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="h-full animate-fade-in-soft" style={{animationDelay: '0.18s'}}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl -z-10 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="bg-card border border-border/50 rounded-2xl p-6 h-full hover:shadow-xl transition-shadow duration-500">
                <img
                  src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=800&auto=format&fit=crop"
                  alt="Miami Real Estate Success"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <div className="flex items-center gap-4 mb-4">
                  <Trophy className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Miami Market Domination</h3>
                </div>
                <p className="text-foreground/70 mb-4">
                  "Using Align Agents AI, we automated our lead qualification process and saw a 300% increase in quality leads within the first month."
                </p>
                <div className="flex items-center justify-between text-sm text-foreground/60">
                  <span>Miami Luxury Realty</span>
                  <span className="text-primary">+300% ROI</span>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full mt-8 md:mt-0 animate-fade-in-soft" style={{animationDelay: '0.26s'}}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl -z-10 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="bg-card border border-border/50 rounded-2xl p-6 h-full hover:shadow-xl transition-shadow duration-500">
                <img
                  src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=800&auto=format&fit=crop"
                  alt="NYC Real Estate Success"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <div className="flex items-center gap-4 mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">NYC Scale Success</h3>
                </div>
                <p className="text-foreground/70 mb-4">
                  "Our team scaled from 50 to 200 leads per month without adding any additional staff. The automation is incredible."
                </p>
                <div className="flex items-center justify-between text-sm text-foreground/60">
                  <span>NYC Property Group</span>
                  <span className="text-primary">4x Growth</span>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full mt-8 md:mt-0 animate-fade-in-soft" style={{animationDelay: '0.34s'}}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl -z-10 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="bg-card border border-border/50 rounded-2xl p-6 h-full hover:shadow-xl transition-shadow duration-500">
                <img
                  src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?q=80&w=800&auto=format&fit=crop"
                  alt="LA Real Estate Success"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <div className="flex items-center gap-4 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">LA Team Growth</h3>
                </div>
                <p className="text-foreground/70 mb-4">
                  "We reduced our response time from hours to minutes. Our conversion rate doubled in just two weeks."
                </p>
                <div className="flex items-center justify-between text-sm text-foreground/60">
                  <span>LA Realty Partners</span>
                  <span className="text-primary">100% ↑</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
