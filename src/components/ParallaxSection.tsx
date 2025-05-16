
import { useEffect, useRef, useState } from 'react';

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  direction?: 'vertical' | 'horizontal';
  delay?: number; // When to start the parallax effect (0-1, percentage of viewport)
  threshold?: number; // How much of element must be visible to trigger effect
}

const ParallaxSection = ({ 
  children, 
  speed = 0.05, // reduced default even more
  className = '',
  direction = 'vertical',
  delay = 0.2, // Start when element is 20% into viewport by default
  threshold = 0.1 // Element must be 10% visible to trigger effect
}: ParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    if (!ref.current) return;
    
    const initialScroll = window.scrollY;
    const handleScroll = () => {
      const element = ref.current;
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate visibility percentage (0-1)
      const visiblePx = Math.min(windowHeight, elementTop + elementHeight) - Math.max(0, elementTop);
      const visiblePercent = Math.max(0, visiblePx / elementHeight);
      
      // Check if element is in view with threshold
      const nowInView = visiblePercent > threshold;
      
      // Handle entering/exiting viewport
      if (nowInView !== isInView) {
        setIsInView(nowInView);
      }
      
      if (nowInView) {
        // Only apply parallax if element has moved beyond delay threshold
        const viewportPosition = 1 - (elementTop / windowHeight);
        if (viewportPosition > delay) {
          // Calculate how far past delay point we are
          const effectStrength = Math.max(0, (viewportPosition - delay) / (1 - delay));
          // Calculate scroll distance with smoother curves
          const scrollDistance = window.scrollY - initialScroll;
          // Apply easing curve to make movement more natural
          const easedOffset = -(scrollDistance * speed * effectStrength * 0.5);
          setOffset(easedOffset);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, isInView, delay, threshold]);

  return (
    <div className={`${className} overflow-hidden relative`}>
      <div 
        ref={ref} 
        className="will-change-transform transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]"
        style={{ 
          transform: direction === 'vertical' 
            ? `translateY(${offset}px)` 
            : `translateX(${offset}px)`
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
