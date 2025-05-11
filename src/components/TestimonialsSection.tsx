
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-full max-w-[800px] -z-10 bg-gradient-radial from-primary/5 to-transparent opacity-40"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-heading">
            Why Real Estate Agencies Trust Us
          </h2>
          <p className="text-lg text-foreground/70">
            Don't just take our word for it. Here's what real estate professionals have to say about partnering with Align Agents AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-card border border-border/50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-16 w-16 rounded-full overflow-hidden bg-primary/20 flex items-center justify-center">
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
            <blockquote className="mt-2">
              <p className="text-foreground/80 italic">
                "Align Agents AI turned my 12-hour days into 6.1 now I close 2x more deals. The lead qualification alone saved me countless hours chasing dead-end prospects."
              </p>
            </blockquote>
            <div className="mt-4 pt-4 border-t border-border/30">
              <p className="text-sm text-foreground/60 flex gap-1 items-center">
                <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Increased productivity by 50%</span>
              </p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-card border border-border/50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-16 w-16 rounded-full overflow-hidden bg-primary/20 flex items-center justify-center">
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
            <blockquote className="mt-2">
              <p className="text-foreground/80 italic">
                "I literally saved $3,000/month on admin staff. This is a no-brainer. The AI follow-up system keeps our leads warm without any human intervention needed."
              </p>
            </blockquote>
            <div className="mt-4 pt-4 border-t border-border/30">
              <p className="text-sm text-foreground/60 flex gap-1 items-center">
                <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>$36,000 annual savings</span>
              </p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-card border border-border/50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-16 w-16 rounded-full overflow-hidden bg-primary/20 flex items-center justify-center">
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
            <blockquote className="mt-2">
              <p className="text-foreground/80 italic">
                "Our team's lead conversion rate jumped 40% within the first month. The predictive nurturing keeps prospects engaged at exactly the right moments."
              </p>
            </blockquote>
            <div className="mt-4 pt-4 border-t border-border/30">
              <p className="text-sm text-foreground/60 flex gap-1 items-center">
                <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>40% higher conversion rate</span>
              </p>
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="bg-card border border-border/50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-16 w-16 rounded-full overflow-hidden bg-primary/20 flex items-center justify-center">
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
            <blockquote className="mt-2">
              <p className="text-foreground/80 italic">
                "I was skeptical about AI, but this system paid for itself within weeks. My agents now focus solely on closing deals instead of admin work."
              </p>
            </blockquote>
            <div className="mt-4 pt-4 border-t border-border/30">
              <p className="text-sm text-foreground/60 flex gap-1 items-center">
                <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>ROI in less than 30 days</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
