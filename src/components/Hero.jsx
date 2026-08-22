import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getWhatsAppUrl } from '../config/constants';
import { WhatsAppIcon, ArrowRightIcon } from './Icons';

const PHRASES = [
  "Faux-Plafonds en Staff & Gorges LED",
  "Peinture Intérieure Satinée Zéro Défaut",
  "Béton Ciré Contemporain & Stucco",
  "Ravalement de Façades Siloxanes",
  "Stucco Vénitien Effet Marbre",
];

export function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(75);

  useEffect(() => {
    const currentFullPhrase = PHRASES[phraseIndex];

    const handleType = () => {
      if (!isDeleting) {
        setDisplayText(currentFullPhrase.substring(0, displayText.length + 1));
        setTypingSpeed(70);

        if (displayText === currentFullPhrase) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setDisplayText(currentFullPhrase.substring(0, displayText.length - 1));
        setTypingSpeed(35);

        if (displayText === '') {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex, typingSpeed]);

  return (
    <section className="relative w-full min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex items-center justify-center overflow-hidden bg-slate-950 text-white border-b border-slate-200">
      
      {/* 1. VIDÉO DE FOND CINÉMATOGRAPHIQUE & POSTER ARCHITECTURAL */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/gallery/golden gate two.png"
          className="w-full h-full object-cover object-center scale-105"
        >
          <source src="/videos/golden-gate-chantier.mp4" type="video/mp4" />
          <source src="/videos/hero-staff.mp4" type="video/mp4" />
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        <img
          src="/images/gallery/golden gate two.png"
          alt="Staff et peinture de luxe Golden Gate à Lomé"
          className="w-full h-full object-cover object-center absolute inset-0 -z-10"
        />

        {/* Overlay sombre raffiné */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/75 to-slate-950/65"></div>
      </div>

      {/* 2. CONTENU ÉPURÉ SANS ÉLÉMENT ENCOMBRANT */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center space-y-6">
        
        {/* Titre Principal + Typewriter */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-serif tracking-tight text-white leading-tight">
            L'Excellence du Bâtiment
          </h1>

          {/* Ligne auto-écrite dynamique */}
          <div className="min-h-[38px] sm:min-h-[54px] flex items-center justify-center">
            <span className="text-xl sm:text-3xl md:text-4xl font-extrabold font-serif bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-md">
              {displayText}
              <span className="inline-block w-1 sm:w-1.5 h-6 sm:h-9 bg-amber-400 ml-1.5 align-middle animate-pulse"></span>
            </span>
          </div>
        </div>

        {/* Sous-titre concis */}
        <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-sm">
          Spécialiste de la transformation de vos intérieurs et façades au <strong>Togo, dans la sous-région et dans tous les pays d'Afrique</strong>. Faux-plafonds moulurés en staff, gorges lumineuses LED, béton ciré et peintures satinées haute durabilité.
        </p>

        {/* Les 2 Boutons d'Action (sans rien après) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={getWhatsAppUrl("Bonjour Golden Gate, je souhaiterais obtenir des informations et un devis gratuit pour mon projet à Lomé. Merci.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-emerald-950/50 transition-all flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <WhatsAppIcon size={20} />
            <span>Devis Gratuit sur WhatsApp</span>
            <ArrowRightIcon size={16} />
          </a>

          <Link
            to="/realisations"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm sm:text-base border border-white/30 backdrop-blur-md transition-all flex items-center justify-center gap-2"
          >
            <span>Voir nos Réalisations</span>
          </Link>
        </div>

      </div>

    </section>
  );
}
