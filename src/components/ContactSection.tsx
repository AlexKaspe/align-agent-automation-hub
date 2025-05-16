
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Twitter, Instagram, Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from './ui/use-toast';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      // Create email data to send
      const mailtoLink = `mailto:jane@alignagents.co?subject=Contact Form Submission from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nMessage: ${formData.message}`
      )}`;

      // Open the user's default email client
      window.open(mailtoLink, '_blank');

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });

      // Show success message
      toast({
        description: "Your message was prepared for sending. If your email client didn't open automatically, please contact us directly."
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        description: "Failed to send the message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-heading">
              Let's Transform Your Real Estate Business
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Reach out to discuss how we can help your agency automate, accelerate, and dominate your market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Contact form */}
            <div className="bg-card border border-border/50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4 font-heading">Send us a message</h3>
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <Input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-1">
                    Company
                  </label>
                  <Input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact details */}
            <div className="space-y-6">
              <div className="bg-card border border-border/50 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4 font-heading">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-primary mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-foreground/70">jane@alignagents.co</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-primary mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-foreground/70">(800) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-foreground/70">Miami, FL (HQ)</p>
                      <p className="text-foreground/70">Remote teams across the US</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border/50 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4 font-heading">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://twitter.com/alignagentsai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-background hover:bg-primary hover:text-background transition-colors p-3 rounded-full border border-border/50"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="https://instagram.com/alignagentsai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-background hover:bg-primary hover:text-background transition-colors p-3 rounded-full border border-border/50"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:jane@alignagents.co"
                    className="bg-background hover:bg-primary hover:text-background transition-colors p-3 rounded-full border border-border/50"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="bg-card/50 border border-primary/20 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2 font-heading text-primary">Ready for a demo?</h3>
                <p className="text-foreground/70 mb-4">
                  See how our AI can revolutionize your real estate operations in just 15 minutes.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    const form = document.getElementById('contact-form');
                    if (form) {
                      form.scrollIntoView({ behavior: 'smooth' });
                      const nameInput = document.getElementById('name');
                      if (nameInput) {
                        nameInput.focus();
                      }
                    }
                  }}
                >
                  Schedule a Demo Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
