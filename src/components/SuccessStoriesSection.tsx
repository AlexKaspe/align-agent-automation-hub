
import { Trophy, TrendingUp, Users } from 'lucide-react';
import ParallaxSection from './ParallaxSection';

const SuccessStoriesSection = () => {
  return (
    <section id="success-stories" className="py-24 md:py-32 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-30"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-[100px]"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-secondary/5 blur-[100px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ParallaxSection speed={0.1} className="mb-16">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-block mb-3">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                Success Stories
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Real Success Stories
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              See the impact our AI automation has made for real estate professionals across the country.
            </p>
          </div>
        </ParallaxSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="h-full animate-fade-in-soft" style={{animationDelay: '0.18s'}}>
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl -z-10 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="bg-card border border-border/30 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-500 group-hover:translate-y-[-4px] hover:border-primary/20">
                <div className="overflow-hidden rounded-xl mb-8 group-hover:shadow-lg transition-all duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=800&auto=format&fit=crop"
                    alt="Miami Real Estate Success"
                    className="w-full h-52 object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                    <Trophy className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Miami Market Domination</h3>
                </div>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  "Using Align Agents AI, we automated our lead qualification process and saw a 300% increase in quality leads within the first month."
                </p>
                <div className="flex items-center justify-between text-sm rounded-lg px-4 py-3 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300">
                  <span className="font-medium">Miami Luxury Realty</span>
                  <span className="text-primary font-semibold">+300% ROI</span>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full animate-fade-in-soft" style={{animationDelay: '0.26s'}}>
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl -z-10 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="bg-card border border-border/30 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-500 group-hover:translate-y-[-4px] hover:border-primary/20">
                <div className="overflow-hidden rounded-xl mb-8 group-hover:shadow-lg transition-all duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=800&auto=format&fit=crop"
                    alt="NYC Real Estate Success"
                    className="w-full h-52 object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">NYC Scale Success</h3>
                </div>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  "Our team scaled from 50 to 200 leads per month without adding any additional staff. The automation is incredible."
                </p>
                <div className="flex items-center justify-between text-sm rounded-lg px-4 py-3 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300">
                  <span className="font-medium">NYC Property Group</span>
                  <span className="text-primary font-semibold">4x Growth</span>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full animate-fade-in-soft" style={{animationDelay: '0.34s'}}>
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl -z-10 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="bg-card border border-border/30 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-500 group-hover:translate-y-[-4px] hover:border-primary/20">
                <div className="overflow-hidden rounded-xl mb-8 group-hover:shadow-lg transition-all duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?q=80&w=800&auto=format&fit=crop"
                    alt="LA Real Estate Success"
                    className="w-full h-52 object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">LA Team Growth</h3>
                </div>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  "We reduced our response time from hours to minutes. Our conversion rate doubled in just two weeks."
                </p>
                <div className="flex items-center justify-between text-sm rounded-lg px-4 py-3 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300">
                  <span className="font-medium">LA Realty Partners</span>
                  <span className="text-primary font-semibold">100% ↑</span>
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
