
import React, { useEffect, useState } from 'react';

type Position = {
  x: number;
  y: number;
};

const MouseFollower = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleMouseEnter = () => setHidden(false);
    const handleMouseLeave = () => setHidden(true);

    const handleLinkHoverStart = () => setLinkHovered(true);
    const handleLinkHoverEnd = () => setLinkHovered(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Add link hover effect
    const links = document.querySelectorAll('a, button, [role="button"]');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHoverStart);
      link.addEventListener('mouseleave', handleLinkHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);

      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHoverStart);
        link.removeEventListener('mouseleave', handleLinkHoverEnd);
      });
    };
  }, []);

  // Don't render on mobile devices
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  const cursorSize = linkHovered ? 30 : 12;
  const cursorRingSize = linkHovered ? 40 : 30;

  return (
    <>
      <div 
        className={`fixed pointer-events-none z-50 rounded-full transition-opacity duration-300 ${hidden ? 'opacity-0' : 'opacity-100'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: `${cursorSize}px`,
          height: `${cursorSize}px`,
          backgroundColor: linkHovered ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.5)',
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
          transition: 'width 0.2s ease-out, height 0.2s ease-out, background-color 0.2s ease-out'
        }}
      />
      <div 
        className={`fixed pointer-events-none z-50 rounded-full border transition-all duration-300 ${clicked ? 'border-primary/50' : 'border-primary/30'} ${hidden ? 'opacity-0' : 'opacity-100'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: `${cursorRingSize}px`,
          height: `${cursorRingSize}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.3s ease-out, height 0.3s ease-out, border-color 0.2s ease-out',
          transitionDelay: '0.05s'
        }}
      />
    </>
  );
};

export default MouseFollower;
