
const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-heading">
              Schedule Your 30-Minute Demo Call
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Book a 30-minute call to see how our AI can revolutionize your real estate operations.
            </p>
          </div>

          {/* Cal.com Iframe Embed */}
          <div className="bg-card border border-border/50 rounded-xl p-6 shadow-md">
            <iframe  
              src="https://cal.com/alignagentsai/intro-call?embed=true"  
              width="100%"  
              height="700"  
              style={{ border: "none", overflow: "hidden" }}  
              scrolling="no"
              title="Schedule a 30-minute demo call"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
