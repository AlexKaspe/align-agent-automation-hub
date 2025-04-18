
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
    
    // Get initial position
    const initialY = window.scrollY;
    const handleScroll = () => {
      const elementTop = ref.current?.getBoundingClientRect().top || 0;
      const elementBottom = ref.current?.getBoundingClientRect().bottom || 0;
      const windowHeight = window.innerHeight;
      
      // Check if element is in viewport
      if (elementTop < windowHeight && elementBottom > 0) {
        // Calculate scrolled distance within component visibility
        const scrolled = window.scrollY - initialY;
        const yPos = -(scrolled * speed);
        // Only apply transform when element is visible
        setOffset(yPos);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div className={`${className} overflow-hidden relative`}>
      <div 
        ref={ref} 
        className={`will-change-transform transition-transform duration-200 ease-out`}
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
