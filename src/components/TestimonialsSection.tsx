
import { Star, Quote } from 'lucide-react';
import ParallaxSection from './ParallaxSection';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-full max-w-[800px] -z-10 bg-gradient-radial from-primary/10 to-transparent opacity-40"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-[100px]"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-secondary/5 blur-[100px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ParallaxSection speed={0.1} className="mb-16">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <div className="inline-block mb-3">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                Testimonials
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Why Real Estate Agencies Trust Us
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Don't just take our word for it. Here's what real estate professionals have to say about partnering with Align Agents AI.
            </p>
          </div>
        </ParallaxSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="group animate-fade-in-soft" style={{animationDelay: '0.18s'}}>
            <div className="bg-card border border-border/30 rounded-xl p-8 hover:shadow-xl transition-all duration-500 h-full relative overflow-hidden hover:border-primary/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl group-hover:bg-primary/10 transition-colors duration-500"></div>
              <Quote className="text-primary/20 w-12 h-12 absolute top-4 right-4 group-hover:scale-110 transition-transform duration-300" />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="h-16 w-16 rounded-full overflow-hidden bg-primary/20 flex items-center justify-center ring-2 ring-border/20 group-hover:ring-primary/30 transition-colors duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop"
                    alt="Jessica P." 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex text-primary mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <h3 className="font-bold text-lg">Jessica P.</h3>
                  <p className="text-sm text-foreground/60">Realtor, Miami, FL</p>
                </div>
              </div>
              
              <blockquote className="mt-2 mb-6">
                <p className="text-foreground/80 italic text-lg leading-relaxed">
                  "Align Agents AI turned my 12-hour days into 6. I now close 2x more deals. The lead qualification alone saved me countless hours chasing dead-end prospects."
                </p>
              </blockquote>
              
              <div className="mt-4 pt-4 border-t border-border/20 group-hover:border-primary/10 transition-colors duration-300">
                <p className="text-sm text-foreground/60 flex gap-2 items-center">
                  <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Increased productivity by 50%</span>
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="group animate-fade-in-soft" style={{animationDelay: '0.26s'}}>
            <div className="bg-card border border-border/30 rounded-xl p-8 hover:shadow-xl transition-all duration-500 h-full relative overflow-hidden hover:border-primary/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl group-hover:bg-primary/10 transition-colors duration-500"></div>
              <Quote className="text-primary/20 w-12 h-12 absolute top-4 right-4 group-hover:scale-110 transition-transform duration-300" />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="h-16 w-16 rounded-full overflow-hidden bg-primary/20 flex items-center justify-center ring-2 ring-border/20 group-hover:ring-primary/30 transition-colors duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=150&auto=format&fit=crop"
                    alt="David T." 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex text-primary mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <h3 className="font-bold text-lg">David T.</h3>
                  <p className="text-sm text-foreground/60">Brokerage Owner, Austin, TX</p>
                </div>
              </div>
              
              <blockquote className="mt-2 mb-6">
                <p className="text-foreground/80 italic text-lg leading-relaxed">
                  "I literally saved $3,000/month on admin staff. This is a no-brainer. The AI follow-up system keeps our leads warm without any human intervention needed."
                </p>
              </blockquote>
              
              <div className="mt-4 pt-4 border-t border-border/20 group-hover:border-primary/10 transition-colors duration-300">
                <p className="text-sm text-foreground/60 flex gap-2 items-center">
                  <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>$36,000 annual savings</span>
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="group animate-fade-in-soft" style={{animationDelay: '0.34s'}}>
            <div className="bg-card border border-border/30 rounded-xl p-8 hover:shadow-xl transition-all duration-500 h-full relative overflow-hidden hover:border-primary/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl group-hover:bg-primary/10 transition-colors duration-500"></div>
              <Quote className="text-primary/20 w-12 h-12 absolute top-4 right-4 group-hover:scale-110 transition-transform duration-300" />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="h-16 w-16 rounded-full overflow-hidden bg-primary/20 flex items-center justify-center ring-2 ring-border/20 group-hover:ring-primary/30 transition-colors duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=150&auto=format&fit=crop"
                    alt="Sarah L." 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex text-primary mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <h3 className="font-bold text-lg">Sarah L.</h3>
                  <p className="text-sm text-foreground/60">Team Lead, Denver, CO</p>
                </div>
              </div>
              
              <blockquote className="mt-2 mb-6">
                <p className="text-foreground/80 italic text-lg leading-relaxed">
                  "Our team's lead conversion rate jumped 40% within the first month. The predictive nurturing keeps prospects engaged at exactly the right moments."
                </p>
              </blockquote>
              
              <div className="mt-4 pt-4 border-t border-border/20 group-hover:border-primary/10 transition-colors duration-300">
                <p className="text-sm text-foreground/60 flex gap-2 items-center">
                  <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>40% higher conversion rate</span>
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="group animate-fade-in-soft" style={{animationDelay: '0.42s'}}>
            <div className="bg-card border border-border/30 rounded-xl p-8 hover:shadow-xl transition-all duration-500 h-full relative overflow-hidden hover:border-primary/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl group-hover:bg-primary/10 transition-colors duration-500"></div>
              <Quote className="text-primary/20 w-12 h-12 absolute top-4 right-4 group-hover:scale-110 transition-transform duration-300" />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="h-16 w-16 rounded-full overflow-hidden bg-primary/20 flex items-center justify-center ring-2 ring-border/20 group-hover:ring-primary/30 transition-colors duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=150&auto=format&fit=crop"
                    alt="Michael R." 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex text-primary mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <h3 className="font-bold text-lg">Michael R.</h3>
                  <p className="text-sm text-foreground/60">Agency Director, Chicago, IL</p>
                </div>
              </div>
              
              <blockquote className="mt-2 mb-6">
                <p className="text-foreground/80 italic text-lg leading-relaxed">
                  "I was skeptical about AI, but this system paid for itself within weeks. My agents now focus solely on closing deals instead of admin work."
                </p>
              </blockquote>
              
              <div className="mt-4 pt-4 border-t border-border/20 group-hover:border-primary/10 transition-colors duration-300">
                <p className="text-sm text-foreground/60 flex gap-2 items-center">
                  <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>ROI in less than 30 days</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
