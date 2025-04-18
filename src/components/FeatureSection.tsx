
import { Shield, Rocket, LineChart } from 'lucide-react';

const FeatureSection = () => {
  return (
    <section id="features" className="py-16 bg-card/30 border-y border-border/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-heading">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Superpowers
            </span>{" "}
            We Bring to Your Real Estate Biz 🚀
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Our AI solutions are specifically designed for real estate professionals to automate tedious tasks and focus on closing deals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-card border border-border/50 rounded-xl p-6 hover:shadow-md transition-shadow relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">AI Lead Qualification</h3>
              <p className="text-foreground/70 mb-4">
                Instantly filters serious buyers & sellers from time-wasters, routing quality leads straight to your team.
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>24/7 lead scoring and qualification</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Intelligent follow-up scheduling</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Buyer intent prediction</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-card border border-border/50 rounded-xl p-6 hover:shadow-md transition-shadow relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">Workflow Automation</h3>
              <p className="text-foreground/70 mb-4">
                Auto-follow-ups, appointment bookings, and status updates that keep your deals moving forward even when you're sleeping.
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Automated email & text follow-ups</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Smart appointment scheduling</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Document automation & reminders</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-card border border-border/50 rounded-xl p-6 hover:shadow-md transition-shadow relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <LineChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">Revenue-Boosting Insights</h3>
              <p className="text-foreground/70 mb-4">
                Get dashboards showing what works, what doesn't ~ and what to do next to maximize your conversion rates.
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Performance analytics & reporting</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Conversion optimization insights</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Market trend predictions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
