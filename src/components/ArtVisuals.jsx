import React from 'react';

/**
 * Visuel SVG d'un Faux-Plafond Staff avec Gorges Lumineuses LED & Rosace
 */
export function StaffCeilingVisual({ className = "w-full h-full" }) {
  return (
    <svg viewBox="0 0 800 500" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="roomGlow" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0a0f1d" />
        </radialGradient>
        <linearGradient id="ledWarmGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#d97706" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="staffWhite" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
        <linearGradient id="staffShadow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
        <filter id="blurLed" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
        <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#000000" floodOpacity="0.6"/>
        </filter>
      </defs>

      {/* Fond de la pièce */}
      <rect width="800" height="500" fill="url(#roomGlow)" />
      
      {/* Mur du fond */}
      <polygon points="120,400 680,400 750,500 50,500" fill="#0f172a" opacity="0.9" />
      
      {/* Lignes de perspective des murs */}
      <line x1="0" y1="0" x2="120" y2="400" stroke="#334155" strokeWidth="1.5" opacity="0.4" />
      <line x1="800" y1="0" x2="680" y2="400" stroke="#334155" strokeWidth="1.5" opacity="0.4" />

      {/* PLAFOND NIVEAU 1 : Corniche Périphérique en Staff */}
      <rect x="60" y="40" width="680" height="320" rx="16" fill="url(#staffWhite)" filter="url(#softShadow)" />
      
      {/* Gorge LED périphérique (Halo lumineux chaud) */}
      <rect x="100" y="70" width="600" height="260" rx="12" fill="none" stroke="url(#ledWarmGlow)" strokeWidth="16" filter="url(#blurLed)" opacity="0.85" />
      
      {/* PLAFOND NIVEAU 2 : Décaissé Central Suspendu */}
      <rect x="120" y="85" width="560" height="230" rx="10" fill="url(#staffWhite)" filter="url(#softShadow)" />
      
      {/* Gorge LED intérieure douce */}
      <rect x="170" y="115" width="460" height="170" rx="8" fill="none" stroke="#60a5fa" strokeWidth="10" filter="url(#blurLed)" opacity="0.5" />
      
      {/* PLAFOND NIVEAU 3 : Îlot Central Décoratif */}
      <rect x="190" y="130" width="420" height="140" rx="6" fill="#f8fafc" />

      {/* Rosace Centrale de Staff Sculptée */}
      <g transform="translate(400, 200)">
        <circle r="52" fill="url(#staffWhite)" stroke="url(#staffShadow)" strokeWidth="2" filter="url(#softShadow)" />
        <circle r="44" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
        <circle r="32" fill="none" stroke="#cbd5e1" strokeWidth="2" />
        <circle r="18" fill="#f1f5f9" stroke="#d4af37" strokeWidth="1.5" />
        
        {/* Pétales de la rosace */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
          <line
            key={deg}
            x1="0"
            y1="0"
            x2={Math.cos((deg * Math.PI) / 180) * 42}
            y2={Math.sin((deg * Math.PI) / 180) * 42}
            stroke="#94a3b8"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        ))}
        
        {/* Point central pour le lustre */}
        <circle r="6" fill="#d4af37" />
        
        {/* Halo doré du lustre */}
        <circle r="70" fill="url(#ledWarmGlow)" filter="url(#blurLed)" opacity="0.4" />
      </g>

      {/* Spots LED Encastrés aux 4 angles */}
      {[[90, 60], [710, 60], [90, 340], [710, 340], [150, 105], [650, 105], [150, 295], [650, 295]].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="18" fill="#fef08a" filter="url(#blurLed)" opacity="0.7" />
          <circle cx={cx} cy={cy} r="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          <circle cx={cx} cy={cy} r="3" fill="#fef08a" />
        </g>
      ))}

      {/* Badge élégant incrusté */}
      <g transform="translate(40, 440)">
        <rect width="260" height="36" rx="18" fill="#0b1528" fillOpacity="0.85" stroke="#d4af37" strokeWidth="1.2" />
        <circle cx="20" cy="18" r="6" fill="#22c55e" />
        <text x="36" y="23" fill="#ffffff" fontSize="13" fontWeight="600" fontFamily="sans-serif">Staff & Gorges LED Golden Gate</text>
      </g>
    </svg>
  );
}

/**
 * Visuel SVG de Peinture Intérieure Satin Velouté & Préparation Soignée
 */
export function InteriorPaintVisual({ className = "w-full h-full" }) {
  return (
    <svg viewBox="0 0 800 500" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wallSatin" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f1f5f9" />
          <stop offset="50%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>
        <linearGradient id="accentWall" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="50%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
        <linearGradient id="woodFloor" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#78350f" />
          <stop offset="100%" stopColor="#451a03" />
        </linearGradient>
        <filter id="wallShadow">
          <feDropShadow dx="4" dy="8" stdDeviation="6" floodColor="#000" floodOpacity="0.25"/>
        </filter>
      </defs>

      {/* Plafond épuré */}
      <rect width="800" height="100" fill="#ffffff" />
      <line x1="0" y1="100" x2="800" y2="100" stroke="#d4af37" strokeWidth="3" />

      {/* Mur Principal Gauche en Peinture Velours Bleu Nuit Royal */}
      <polygon points="0,100 480,100 480,420 0,420" fill="url(#accentWall)" />
      
      {/* Tableau d'Art Contemporain sur le mur */}
      <g transform="translate(140, 150)" filter="url(#wallShadow)">
        <rect width="200" height="150" rx="4" fill="#0b1120" stroke="#d4af37" strokeWidth="3" />
        <circle cx="100" cy="75" r="45" fill="none" stroke="#f59e0b" strokeWidth="2" />
        <line x1="40" y1="75" x2="160" y2="75" stroke="#f59e0b" strokeWidth="2" />
        <line x1="100" y1="20" x2="100" y2="130" stroke="#f59e0b" strokeWidth="2" />
      </g>

      {/* Mur Droit en Teinte Crème Sable Doré */}
      <polygon points="480,100 800,100 800,420 480,420" fill="url(#wallSatin)" />

      {/* Canapé moderne d'ambiance */}
      <g transform="translate(360, 260)" filter="url(#wallShadow)">
        <rect x="0" y="60" width="340" height="80" rx="12" fill="#334155" />
        <rect x="20" y="30" width="300" height="50" rx="8" fill="#475569" />
        <rect x="30" y="40" width="130" height="40" rx="6" fill="#f8fafc" opacity="0.9" />
        <rect x="180" y="40" width="130" height="40" rx="6" fill="#f8fafc" opacity="0.9" />
      </g>

      {/* Sol Parquet Lustré avec Reflets */}
      <polygon points="0,420 800,420 800,500 0,500" fill="url(#woodFloor)" />
      <line x1="0" y1="420" x2="800" y2="420" stroke="#ffffff" strokeWidth="8" />

      {/* Badge qualité */}
      <g transform="translate(40, 440)">
        <rect width="270" height="36" rx="18" fill="#0b1528" fillOpacity="0.9" stroke="#d4af37" strokeWidth="1.2" />
        <circle cx="20" cy="18" r="6" fill="#38bdf8" />
        <text x="36" y="23" fill="#ffffff" fontSize="13" fontWeight="600" fontFamily="sans-serif">Peinture Satin Velouté Zéro Trace</text>
      </g>
    </svg>
  );
}

/**
 * Visuel SVG de Façade Extérieure Tropicale Rénovée
 */
export function ExteriorFacadeVisual({ className = "w-full h-full" }) {
  return (
    <svg viewBox="0 0 800 500" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#bae6fd" />
        </linearGradient>
        <linearGradient id="facadePaint" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="70%" stopColor="#f1f5f9" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
        <linearGradient id="woodPanel" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#92400e" />
        </linearGradient>
        <filter id="sunGlow">
          <feDropShadow dx="0" dy="0" stdDeviation="15" floodColor="#fef08a" floodOpacity="0.8"/>
        </filter>
      </defs>

      {/* Ciel ensoleillé de Lomé */}
      <rect width="800" height="220" fill="url(#skyGrad)" />
      
      {/* Soleil radieux */}
      <circle cx="700" cy="60" r="35" fill="#fef08a" filter="url(#sunGlow)" />

      {/* VILLA MODERNE ARCHITECTURALE */}
      {/* Corps principal blanc immaculé */}
      <rect x="100" y="100" width="600" height="300" fill="url(#facadePaint)" stroke="#94a3b8" strokeWidth="1" />

      {/* Toit terrasse casquette contemporaine */}
      <polygon points="80,100 720,100 700,85 100,85" fill="#1e293b" />

      {/* Bloc étage en saillie (Volume gris anthracite & bois) */}
      <rect x="380" y="120" width="300" height="150" fill="#0f172a" />
      <rect x="390" y="130" width="120" height="130" fill="url(#woodPanel)" />

      {/* Baie vitrée panoramique */}
      <rect x="520" y="130" width="150" height="130" fill="#1e3a8a" opacity="0.75" stroke="#ffffff" strokeWidth="2" />
      <line x1="595" y1="130" x2="595" y2="260" stroke="#ffffff" strokeWidth="2" />

      {/* Rez-de-chaussée : Grande entrée vitrée & piliers staffés */}
      <rect x="140" y="270" width="220" height="130" fill="#0f172a" />
      <rect x="160" y="285" width="80" height="115" fill="#38bdf8" opacity="0.6" stroke="#94a3b8" strokeWidth="2" />
      <rect x="255" y="285" width="80" height="115" fill="#38bdf8" opacity="0.6" stroke="#94a3b8" strokeWidth="2" />

      {/* Clôture avant et aménagement paysager tropical */}
      <rect x="0" y="400" width="800" height="100" fill="#15803d" />
      <polygon points="0,440 800,440 800,500 0,500" fill="#334155" />

      {/* Végétation / Palmiers stylisés */}
      <g transform="translate(60, 240)">
        <rect x="15" y="60" width="10" height="100" fill="#78350f" rx="3" />
        <ellipse cx="20" cy="50" rx="35" ry="18" fill="#16a34a" />
        <ellipse cx="10" cy="35" rx="30" ry="15" fill="#22c55e" />
        <ellipse cx="30" cy="40" rx="28" ry="15" fill="#15803d" />
      </g>

      {/* Badge siloxane */}
      <g transform="translate(40, 440)">
        <rect width="280" height="36" rx="18" fill="#0b1528" fillOpacity="0.9" stroke="#d4af37" strokeWidth="1.2" />
        <circle cx="20" cy="18" r="6" fill="#f59e0b" />
        <text x="36" y="23" fill="#ffffff" fontSize="13" fontWeight="600" fontFamily="sans-serif">Façade Siloxane Anti-Intempéries</text>
      </g>
    </svg>
  );
}

/**
 * Visuel SVG de Stucco Vénitien Lustré Effet Marbre
 */
export function StuccoMarbleVisual({ className = "w-full h-full" }) {
  return (
    <svg viewBox="0 0 800 500" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="marbleBase" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#18181b" />
          <stop offset="50%" stopColor="#27272a" />
          <stop offset="100%" stopColor="#09090b" />
        </linearGradient>
        <linearGradient id="goldVein" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
        <filter id="veinGlow">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Fond marbré noir impérial */}
      <rect width="800" height="500" fill="url(#marbleBase)" />

      {/* Veinages blancs et or sculptés à la main */}
      <path d="M-50,80 Q200,60 350,180 T700,120 T900,220" fill="none" stroke="url(#goldVein)" strokeWidth="3" filter="url(#veinGlow)" opacity="0.9" />
      <path d="M100,-20 Q300,150 450,280 T750,380" fill="none" stroke="#f8fafc" strokeWidth="2" opacity="0.6" />
      <path d="M-20,320 Q250,280 500,420 T850,400" fill="none" stroke="url(#goldVein)" strokeWidth="2.5" filter="url(#veinGlow)" opacity="0.8" />
      <path d="M350,180 Q420,240 480,210 T620,260" fill="none" stroke="url(#goldVein)" strokeWidth="1.5" opacity="0.7" />

      {/* Reflets de lumière lustrés au fer à stuc */}
      <ellipse cx="400" cy="200" rx="300" ry="120" fill="#ffffff" opacity="0.04" transform="rotate(-15, 400, 200)" />
      
      {/* Cadre or de mise en valeur */}
      <rect x="30" y="30" width="740" height="440" rx="12" fill="none" stroke="#d4af37" strokeWidth="1.5" opacity="0.4" />
      <rect x="40" y="40" width="720" height="420" rx="8" fill="none" stroke="#d4af37" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.3" />

      {/* Badge Stucco */}
      <g transform="translate(50, 430)">
        <rect width="280" height="34" rx="17" fill="#000000" fillOpacity="0.85" stroke="#d4af37" strokeWidth="1" />
        <circle cx="18" cy="17" r="5" fill="#d4af37" />
        <text x="32" y="22" fill="#ffffff" fontSize="13" fontWeight="600" fontFamily="sans-serif">Stucco Vénitien Haute Couture</text>
      </g>
    </svg>
  );
}

/**
 * Séparateur ornemental de Rosace en Staff
 */
export function RosetteDivider({ className = "w-full h-8" }) {
  return (
    <div className={`flex items-center justify-center gap-3 my-6 ${className}`}>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-amber-500/40 to-amber-500/80"></div>
      <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-amber-400 shrink-0">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" opacity="0.7"/>
        <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="20" cy="20" r="4" fill="currentColor"/>
        <path d="M20 4 L20 36 M4 20 L36 20 M8 8 L32 32 M8 32 L32 8" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
      </svg>
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-amber-500/40 to-amber-500/80"></div>
    </div>
  );
}
