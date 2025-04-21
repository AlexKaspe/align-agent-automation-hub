
import { Trophy, TrendingUp, Users } from 'lucide-react';
import ParallaxSection from './ParallaxSection';

const SuccessStoriesSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-heading animate-fade-in-soft">
            Real Success Stories
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto animate-fade-in-soft" style={{animationDelay: '0.07s'}}>
            See the impact our AI automation has made for real estate professionals across the country.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="h-full">
            <ParallaxSection speed={0.08} className="h-full">
              <div className="relative group animate-fade-in-soft">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl -z-10 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="bg-card border border-border/50 rounded-2xl p-6 h-full hover:shadow-xl transition-shadow duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
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
            </ParallaxSection>
          </div>

          <div className="h-full mt-8 md:mt-0">
            <ParallaxSection speed={0.1} className="h-full">
              <div className="relative group animate-fade-in-soft" style={{animationDelay: '0.2s'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl -z-10 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="bg-card border border-border/50 rounded-2xl p-6 h-full hover:shadow-xl transition-shadow duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
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
            </ParallaxSection>
          </div>

          <div className="h-full mt-8 md:mt-0">
            <ParallaxSection speed={0.12} className="h-full">
              <div className="relative group animate-fade-in-soft" style={{animationDelay: '0.35s'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl -z-10 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="bg-card border border-border/50 rounded-2xl p-6 h-full hover:shadow-xl transition-shadow duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=800&auto=format&fit=crop"
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
            </ParallaxSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
