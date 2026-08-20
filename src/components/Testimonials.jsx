import React from 'react';
import { TESTIMONIALS } from '../data/testimonialsData';
import { StarIcon, CheckCircleIcon, MapPinIcon } from './Icons';
import { RosetteDivider } from './ArtVisuals';

export function Testimonials() {
  return (
    <section id="avis" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <StarIcon size={14} />
            <span>Preuve Sociale &amp; Avis Vérifiés</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif tracking-tight">
            Ce que Disent nos Clients à{' '}
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Lomé &amp; au Togo
            </span>
          </h2>

          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            La confiance de nos clients est notre plus précieux atout. Découvrez les retours d'expérience authentiques de propriétaires et professionnels.
          </p>

          <RosetteDivider className="max-w-xs mx-auto" />
        </div>

        {/* Grille des témoignages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-slate-950/90 rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-amber-500/50 shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5 Étoiles + Badge Chantier Vérifié */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <StarIcon key={i} size={16} />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    <CheckCircleIcon size={12} />
                    <span>Avis Vérifié</span>
                  </span>
                </div>

                {/* Commentaire client */}
                <p className="text-sm text-slate-200 italic leading-relaxed mb-6 font-light">
                  {t.comment}
                </p>
              </div>

              {/* Auteur du témoignage */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-slate-950 text-sm shadow-md"
                    style={{ backgroundColor: t.avatarBg }}
                  >
                    {t.avatarInitial}
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-white font-serif">{t.author}</h4>
                    <p className="text-xs text-amber-300 flex items-center gap-1">
                      <MapPinIcon size={12} />
                      <span>{t.location}</span>
                    </p>
                  </div>
                </div>

                <div className="text-right hidden sm:block">
                  <span className="text-[11px] font-medium text-slate-400 block">{t.projectType}</span>
                  <span className="text-[10px] text-slate-500">{t.date}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
