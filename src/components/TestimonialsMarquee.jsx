import React from 'react';
import { TESTIMONIALS } from '../data/testimonialsData';
import { StarIcon } from './Icons';

export function TestimonialsMarquee() {
  // On triple la liste pour assurer un ruban continu sans coupure sur tous les écrans
  const marqueeList = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-20 bg-white border-b border-slate-200 overflow-hidden">
      
      {/* En-tête sobre */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900">
          Ce que disent nos Clients au Togo
        </h2>
        <p className="text-sm sm:text-base text-slate-600 mt-2">
          Des retours d'expérience authentiques recueillis après livraison sur nos chantiers à Lomé.
        </p>
      </div>

      {/* RUBAN DÉFILANT HORIZONTAL CONTINU (MARQUEE) */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused] py-4 cursor-grab active:cursor-grabbing">
          {marqueeList.map((t, idx) => (
            <div
              key={`${t.id}-${idx}`}
              className="w-[320px] sm:w-[380px] bg-slate-50 hover:bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all flex flex-col justify-between shrink-0 space-y-4 select-none transform hover:-translate-y-1"
            >
              {/* Étoiles & Badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <StarIcon key={i} size={15} fill="#f59e0b" />
                  ))}
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100/70 px-2.5 py-0.5 rounded-full">
                  ✓ Chantier Livré
                </span>
              </div>

              {/* Commentaire client */}
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed font-normal">
                « {t.comment} »
              </p>

              {/* Auteur et Quartier */}
              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-slate-900 font-serif">{t.author}</h4>
                  <p className="text-slate-500 text-[11px]">{t.location}</p>
                </div>
                <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
                  {t.projectType}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
