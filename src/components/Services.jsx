import React from 'react';
import { SERVICES } from '../data/servicesData';
import { getWhatsAppUrl } from '../config/constants';
import { WhatsAppIcon, CrownIcon, PaintBrushIcon, BuildingIcon, SparklesIcon, CheckIcon, ClockIcon } from './Icons';
import { RosetteDivider } from './ArtVisuals';

export function Services({ onSelectServiceForChatbot }) {
  const getIcon = (type) => {
    switch (type) {
      case 'crown':
        return <CrownIcon size={28} className="text-amber-400" />;
      case 'brush':
        return <PaintBrushIcon size={28} className="text-sky-400" />;
      case 'building':
        return <BuildingIcon size={28} className="text-emerald-400" />;
      case 'sparkle':
      default:
        return <SparklesIcon size={28} className="text-purple-400" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <CrownIcon size={14} />
            <span>Nos Savoir-Faire d'Excellence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif tracking-tight">
            Des Prestations d'Artisanat d'Art{' '}
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Sur-Mesure à Lomé
            </span>
          </h2>

          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            De la création de plafonds en staff à la protection des façades contre le climat togolais, nous apportons rigueur, maîtrise technique et matériaux de premier choix.
          </p>

          <RosetteDivider className="max-w-xs mx-auto" />
        </div>

        {/* Grille des 4 services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="relative group bg-slate-950/80 rounded-2xl p-7 sm:p-8 border border-slate-800 hover:border-amber-500/50 shadow-xl shadow-black/50 transition-all duration-300 flex flex-col justify-between"
            >
              
              {/* Haut de carte : Badge + Icône */}
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-inner group-hover:scale-105 transition-transform">
                    {getIcon(service.iconType)}
                  </div>

                  <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold">
                    {service.badge}
                  </span>
                </div>

                {/* Titre & Description courte */}
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {service.fullDesc}
                </p>

                {/* Liste des points forts */}
                <div className="space-y-2.5 mb-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-400">Ce que comprend la prestation :</p>
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="p-0.5 rounded bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                        <CheckIcon size={13} />
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bas de carte : Détails pratiques & Action WhatsApp */}
              <div className="pt-6 border-t border-slate-800/80 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <ClockIcon size={14} className="text-amber-400" />
                    <span>Délai moyen : <strong className="text-slate-200">{service.timeline}</strong></span>
                  </div>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-300 font-medium">Lomé &amp; Togo</span>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={getWhatsAppUrl(`Bonjour Golden Gate ! Je souhaite un devis gratuit pour : ${service.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 transition-colors"
                  >
                    <WhatsAppIcon size={17} />
                    <span>Devis gratuit WhatsApp</span>
                  </a>

                  <button
                    onClick={() => onSelectServiceForChatbot(service.category)}
                    type="button"
                    className="w-full sm:w-auto py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 hover:text-amber-200 border border-slate-700 hover:border-amber-500/40 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Simuler le prix
                  </button>
                </div>
              </div>

              {/* Ligne dorée en bas de carte */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent group-hover:via-amber-400 transition-all"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
