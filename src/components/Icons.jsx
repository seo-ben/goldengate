import React from 'react';

export function WhatsAppIcon({ className = 'w-5 h-5', size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.07 21.65a.75.75 0 00.924.924l4.57-1.393A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" fill="#25D366"/>
      <path d="M17.5 14.3c-.3-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.3-.74.94-.91 1.13-.17.19-.34.21-.64.06-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49-.17-.01-.36-.01-.55-.01-.19 0-.5.07-.76.35-.26.28-1 1-1 2.43 0 1.43 1.04 2.81 1.18 3 .15.19 2.05 3.13 4.97 4.39.69.3 1.23.48 1.65.61.7.22 1.34.19 1.84.12.56-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.56-.34z" fill="#FFFFFF"/>
    </svg>
  );
}

export function PhoneIcon({ className = 'w-5 h-5', size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
    </svg>
  );
}

export function MapPinIcon({ className = 'w-5 h-5', size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

export function StarIcon({ className = 'w-5 h-5', size = 20, fill = '#D4AF37' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={fill} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}

export function ShieldCheckIcon({ className = 'w-5 h-5', size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="M9 12l2 2 4-4"/>
    </svg>
  );
}

export function SparklesIcon({ className = 'w-5 h-5', size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3v3m0 12v3M3 12h3m12 0h3m-2.93-6.07l-2.12 2.12m-7.88 7.88l-2.12 2.12m0-12.12l2.12 2.12m7.88 7.88l2.12 2.12"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  );
}

export function CrownIcon({ className = 'w-5 h-5', size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z"/>
      <circle cx="12" cy="19" r="1"/>
      <circle cx="5" cy="19" r="1"/>
      <circle cx="19" cy="19" r="1"/>
    </svg>
  );
}

export function PaintBrushIcon({ className = 'w-5 h-5', size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18.37 2.63a3 3 0 014.24 4.24l-8.49 8.49a5 5 0 01-2.12 1.28l-3.54 1.18a1 1 0 01-1.26-1.26l1.18-3.54a5 5 0 011.28-2.12l8.71-8.27z"/>
      <path d="M6 18c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3c.8 0 1.52.32 2.05.84"/>
    </svg>
  );
}

export function BuildingIcon({ className = 'w-5 h-5', size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
      <path d="M9 22v-4h6v4"/>
      <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01"/>
    </svg>
  );
}

export function CheckIcon({ className = 'w-5 h-5', size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

export function CheckCircleIcon({ className = 'w-5 h-5', size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  );
}

export function ClockIcon({ className = 'w-5 h-5', size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}

export function ArrowRightIcon({ className = 'w-5 h-5', size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  );
}

export function ChevronDownIcon({ className = 'w-5 h-5', size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  );
}

export function CloseIcon({ className = 'w-5 h-5', size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}

export function DocumentCheckIcon({ className = 'w-5 h-5', size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <path d="M9 15l2 2 4-4"/>
    </svg>
  );
}

export function MessageSquareIcon({ className = 'w-5 h-5', size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
    </svg>
  );
}

export function RosetteLogo({ size = 38, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5D061" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#996515" />
        </linearGradient>
        <linearGradient id="blueNightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E3A8A" />
          <stop offset="100%" stopColor="#0B1528" />
        </linearGradient>
        <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#D4AF37" floodOpacity="0.4"/>
        </filter>
      </defs>
      
      {/* Fond circulaire blason bleu nuit */}
      <circle cx="50" cy="50" r="46" fill="url(#blueNightGrad)" stroke="url(#goldGrad)" strokeWidth="2.5" />
      
      {/* Cercle perlé de rosace staff */}
      <circle cx="50" cy="50" r="38" stroke="url(#goldGrad)" strokeWidth="1" strokeDasharray="2 3" opacity="0.8" />
      
      {/* Motif Rosace Décorative / Portail Golden Gate stylisé */}
      <g filter="url(#goldGlow)">
        {/* Arche monumentale Golden Gate */}
        <path d="M30 70 V38 C30 26 70 26 70 38 V70" stroke="url(#goldGrad)" strokeWidth="3" strokeLinecap="round" />
        <path d="M38 70 V42 C38 33 62 33 62 42 V70" stroke="url(#goldGrad)" strokeWidth="1.8" strokeLinecap="round" />
        
        {/* Rosace centrale au sommet de l'arche */}
        <circle cx="50" cy="38" r="8" fill="#0B1528" stroke="url(#goldGrad)" strokeWidth="2" />
        
        {/* Pétales de rosace staff */}
        <path d="M50 30 L50 46 M42 38 L58 38 M44 32 L56 44 M44 44 L56 32" stroke="url(#goldGrad)" strokeWidth="1.2" strokeLinecap="round" />
        
        {/* Base du portail */}
        <line x1="22" y1="70" x2="78" y2="70" stroke="url(#goldGrad)" strokeWidth="3" strokeLinecap="round" />
        
        {/* Étoile sommitale */}
        <polygon points="50,18 52,22 56,23 53,26 54,30 50,28 46,30 47,26 44,23 48,22" fill="url(#goldGrad)" />
      </g>
    </svg>
  );
}
