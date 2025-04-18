
import { useEffect, useRef, useState } from 'react';

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  direction?: 'vertical' | 'horizontal';
}

const ParallaxSection = ({ 
  children, 
  speed = 0.5, 
  className = '',
  direction = 'vertical'
}: ParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    if (!ref.current) return;
    
    // Initial position
    const initialScroll = window.scrollY;
    
    const handleScroll = () => {
      const element = ref.current;
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      const windowHeight = window.innerHeight;
      
      // Check if element is in viewport or near it
      if (elementTop < windowHeight + 300 && elementBottom > -300) {
        // Calculate scrolled distance relative to the element's position
        // Apply a reduced speed factor for smoother parallax
        const scrollDistance = window.scrollY - initialScroll;
        // Reduce the speed by a factor of 3 to make it much slower
        const reducedSpeed = speed / 3;
        const newOffset = -(scrollDistance * reducedSpeed);
        
        // Apply the offset with a smoother transition
        setOffset(newOffset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial calculation
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div className={`${className} overflow-hidden relative`}>
      <div 
        ref={ref} 
        className="will-change-transform transition-transform duration-500 ease-out"
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
