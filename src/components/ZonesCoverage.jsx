import React from 'react';
import { ZONES } from '../data/zonesData';
import { getWhatsAppUrl } from '../config/constants';
import { MapPinIcon, ClockIcon, WhatsAppIcon, ShieldCheckIcon } from './Icons';
import { RosetteDivider } from './ArtVisuals';

export function ZonesCoverage() {
  return (
    <section id="quartiers" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPinIcon size={14} />
            <span>Proximité &amp; Réactivité</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif tracking-tight">
            Zones d'Intervention :{' '}
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Tout le Grand Lomé &amp; Togo
            </span>
          </h2>

          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Nos équipes mobiles sont équipées pour intervenir rapidement dans tous les quartiers de la capitale et ses environs avec déplacement gratuit pour devis.
          </p>

          <RosetteDivider className="max-w-xs mx-auto" />
        </div>

        {/* Grille des zones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ZONES.map((zone, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 rounded-2xl p-6 border border-slate-800 hover:border-amber-500/50 shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-bold">
                    {zone.badge}
                  </span>

                  <span className="text-[11px] font-medium text-emerald-400 flex items-center gap-1">
                    <ClockIcon size={13} />
                    {zone.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-serif text-white group-hover:text-amber-300 transition-colors mb-2 flex items-center gap-2">
                  <MapPinIcon size={16} className="text-amber-400 shrink-0" />
                  {zone.name}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {zone.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono">{zone.projectsCount}</span>

                <a
                  href={getWhatsAppUrl(`Bonjour Golden Gate ! J'ai un projet dans le quartier : ${zone.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Demander visite</span>
                  <WhatsAppIcon size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note de réassurance géographique */}
        <div className="mt-10 p-4 rounded-xl bg-slate-900 border border-slate-800 text-center max-w-2xl mx-auto text-xs text-slate-400 flex items-center justify-center gap-2">
          <ShieldCheckIcon size={16} className="text-emerald-400 shrink-0" />
          <span>Déplacement et métré 100% gratuits et sans engagement dans tout le Grand Lomé.</span>
        </div>

      </div>
    </section>
  );
}
