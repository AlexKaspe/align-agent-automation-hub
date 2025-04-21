
import { useEffect, useRef, useState } from 'react';

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  direction?: 'vertical' | 'horizontal';
}

const ParallaxSection = ({ 
  children, 
  speed = 0.09, // reduced default (was 0.5)
  className = '',
  direction = 'vertical'
}: ParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    if (!ref.current) return;
    const initialScroll = window.scrollY;
    const handleScroll = () => {
      const element = ref.current;
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      const windowHeight = window.innerHeight;
      if (elementTop < windowHeight + 300 && elementBottom > -300) {
        // Gentle (1/6th of speed requested), much subtler parallax
        const scrollDistance = window.scrollY - initialScroll;
        const reducedSpeed = speed / 6; // softer
        const newOffset = -(scrollDistance * reducedSpeed);
        setOffset(newOffset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

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
