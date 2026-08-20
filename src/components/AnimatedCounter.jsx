import React, { useEffect, useRef, useState } from 'react';

/**
 * Compteur numérique animé au scroll (Bidirectionnel)
 * S'anime à chaque fois qu'il entre dans le viewport, en montant comme en descendant.
 */
export function AnimatedCounter({
  target,
  prefix = '',
  suffix = '',
  duration = 1600,
  className = ''
}) {
  const [count, setCount] = useState(0);
  const elemRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Lancement de l'animation de comptage
          let startTimestamp = null;
          
          if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
          }

          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // Easing cubique out
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeProgress * target));

            if (progress < 1) {
              animationFrameRef.current = window.requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };

          animationFrameRef.current = window.requestAnimationFrame(step);
        } else {
          // Remise à zéro pour ré-animer quand on scroll dans l'autre sens
          if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
          }
          setCount(0);
        }
      },
      { threshold: 0.15 }
    );

    const currentElem = elemRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [target, duration]);

  return (
    <span ref={elemRef} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}
