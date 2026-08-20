import React, { useEffect, useRef, useState } from 'react';

/**
 * Composant de révélation fluide au défilement (Scroll Reveal)
 * S'anime à la fois au défilement vers le bas ET vers le haut (once: false).
 */
export function ScrollReveal({
  children,
  animation = 'fade-up', // 'fade-up' | 'fade-in' | 'slide-right' | 'slide-left' | 'scale-up'
  delay = 0,
  duration = 750,
  className = '',
  threshold = 0.1,
  once = false // Ré-animation activée dans les deux sens (haut et bas)
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && domRef.current) {
            observer.unobserve(domRef.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    const currentElem = domRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [threshold, once]);

  // Styles selon le type d'animation
  const getTransformStyle = () => {
    if (isVisible) return 'opacity-100 translate-y-0 translate-x-0 scale-100';

    switch (animation) {
      case 'fade-up':
        return 'opacity-0 translate-y-12 scale-100';
      case 'slide-right':
        return 'opacity-0 -translate-x-12 scale-100';
      case 'slide-left':
        return 'opacity-0 translate-x-12 scale-100';
      case 'scale-up':
        return 'opacity-0 scale-95 translate-y-6';
      case 'fade-in':
      default:
        return 'opacity-0 scale-100';
    }
  };

  return (
    <div
      ref={domRef}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all ease-out transform will-change-transform ${getTransformStyle()} ${className}`}
    >
      {children}
    </div>
  );
}
