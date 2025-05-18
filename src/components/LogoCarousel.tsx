
import React from 'react';

interface LogoCarouselProps {
  title?: string;
  description?: string;
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({ 
  title = "We integrate with your favorite tools", 
  description = "Connect your existing tech stack seamlessly with our AI automation solutions."
}) => {
  const logos = [
    { name: "n8n", url: "https://n8n.io/favicon.ico" },
    { name: "Zapier", url: "https://cdn.zapier.com/zapier/images/favicon.ico" },
    { name: "Airtable", url: "https://www.airtable.com/favicon.ico" },
    { name: "OpenAI", url: "https://openai.com/favicon.ico" },
    { name: "Botpress", url: "https://botpress.com/favicon.ico" },
    { name: "Anthropic", url: "https://www.anthropic.com/favicon.ico" },
    { name: "HubSpot", url: "https://www.hubspot.com/favicon.ico" },
    { name: "Integromat", url: "https://www.make.com/en/favicon.ico" },
    { name: "AWS", url: "https://aws.amazon.com/favicon.ico" },
    { name: "Relevance AI", url: "https://relevance.ai/favicon.ico" },
    // Duplicate for continuous scrolling
    { name: "n8n", url: "https://n8n.io/favicon.ico" },
    { name: "Zapier", url: "https://cdn.zapier.com/zapier/images/favicon.ico" },
    { name: "Airtable", url: "https://www.airtable.com/favicon.ico" },
    { name: "OpenAI", url: "https://openai.com/favicon.ico" },
    { name: "Botpress", url: "https://botpress.com/favicon.ico" }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
          <p className="text-foreground/70">{description}</p>
        </div>
      </div>
      
      <div className="logos">
        <div className="logos-slide">
          {logos.map((logo, index) => (
            <img 
              key={index} 
              src={logo.url} 
              alt={logo.name} 
              onError={(e) => {
                // Fallback if favicon fails to load
                (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${logo.name}&background=random`;
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
