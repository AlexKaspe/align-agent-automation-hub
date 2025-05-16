
import React, { useState, FormEvent } from 'react';
import { Button } from './ui/button';
import { Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.email || !formData.name || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);

    // EmailJS service configuration
    // Note: You need to create an account on EmailJS and set up a service
    // You'll need to replace these IDs with your actual EmailJS IDs
    const serviceId = "service_id"; // Replace with your EmailJS service ID
    const templateId = "template_id"; // Replace with your EmailJS template ID
    const userId = "user_id"; // Replace with your EmailJS user ID
    
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        message: formData.message,
        to_email: "jane@alignagents.co"
      };

      await emailjs.send(serviceId, templateId, templateParams, userId);
      
      toast({
        title: "Success",
        description: "Your message has been sent! We'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <div className="bg-card border border-border/50 rounded-xl p-6 shadow-md relative z-20">
              <h3 className="text-xl font-bold mb-4 font-heading">Send us a message</h3>
              <form id="contact-form" className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      className="w-full"
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
                    onChange={handleChange}
                    placeholder="Your company"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full"
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
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
                      <p className="text-foreground/70">info@alignagentsai.com</p>
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
                    href="mailto:info@alignagentsai.com"
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
