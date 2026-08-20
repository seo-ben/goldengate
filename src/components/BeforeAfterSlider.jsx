import React, { useState, useRef, useCallback } from 'react';
import { getWhatsAppUrl } from '../config/constants';
import { WhatsAppIcon } from './Icons';

export function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pos);
  }, []);

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="avant-apres" className="py-20 bg-slate-50 text-slate-900 relative overflow-hidden border-b border-slate-200">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Titre de la section (Sans badge supérieur) */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif tracking-tight text-slate-900">
            La Métamorphose : <span className="text-amber-600">Avant / Après</span>
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Glissez le curseur central pour visualiser la transformation d'une pièce brute en salon de prestige par nos artisans à Lomé.
          </p>
        </div>

        {/* CONTENEUR DU SLIDER INTERACTIF AVEC VRAIES PHOTOS */}
        <div className="max-w-5xl mx-auto bg-white p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-xl">

          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
            className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-slate-200"
          >
            {/* COUCHE 1 : PHOTO APRÈS (Fond complet) */}
            <div className="absolute inset-0 w-full h-full bg-slate-900">
              <img
                src="/images/after-luxury-room.jpg"
                alt="Après : Salon de luxe avec faux-plafond staff LED et peinture velours par Golden Gate"
                className="w-full h-full object-cover object-center pointer-events-none"
                draggable={false}
              />
              <div className="absolute bottom-4 right-4 bg-emerald-600/90 backdrop-blur-md px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-white text-xs sm:text-sm font-bold shadow-md">
                ✓ APRÈS : Finition Golden Gate
              </div>
            </div>

            {/* COUCHE 2 : PHOTO AVANT (Masquée par clip-path selon le slider) */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
              style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
            >
              <img
                src="/images/before-raw-room.jpg"
                alt="Avant : Chantier brut en parpaings non peints et câbles électriques"
                className="w-full h-full object-cover object-center pointer-events-none"
                draggable={false}
              />
              <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-md px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-slate-200 text-xs sm:text-sm font-bold shadow-md">
                ⚠ AVANT : Pièce Brute
              </div>
            </div>

            {/* BARRE VERTICALE DU SLIDER & POIGNÉE TACTILE */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.8)] z-20 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              {/* Cercle central de préhension */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900 border-2 border-amber-400 shadow-2xl flex items-center justify-center text-amber-400">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 9l-4 3 4 3m8-6l4 3-4 3" />
                </svg>
              </div>
            </div>

          </div>

          {/* Boutons de contrôle rapide en dessous */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-2">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSliderPos(0)}
                className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold border border-slate-200 transition-colors"
              >
                100% Après
              </button>
              <button
                type="button"
                onClick={() => setSliderPos(50)}
                className="px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-bold border border-amber-200 transition-colors"
              >
                50 / 50
              </button>
              <button
                type="button"
                onClick={() => setSliderPos(100)}
                className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold border border-slate-200 transition-colors"
              >
                100% Avant
              </button>
            </div>

            <a
              href={getWhatsAppUrl("Bonjour Golden Gate ! J'ai vu le comparateur Avant/Après sur votre site et je souhaite transformer mon salon.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:underline"
            >
              <WhatsAppIcon size={16} />
              <span>Demander la même transformation →</span>
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}
