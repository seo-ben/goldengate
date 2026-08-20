import React from 'react';
import { COMPANY, getWhatsAppUrl } from '../config/constants';
import { WhatsAppIcon, PhoneIcon, MapPinIcon, ClockIcon, ArrowRightIcon, RosetteLogo } from './Icons';

export function FinalCTA({ onOpenChatbot }) {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 text-white overflow-hidden">

      {/* Halo doré et filigrane rosace en arrière-plan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-2xl p-8 sm:p-12 lg:p-16 bg-gradient-to-b from-slate-900/90 to-slate-950/95 border-2 border-amber-500/40 shadow-2xl shadow-black text-center backdrop-blur-md overflow-hidden">

          {/* Motif Rosace Décorative en filigrane */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
            <RosetteLogo size={450} />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">

            {/* Logo d'en-tête */}
            <div className="inline-flex justify-center mb-2">
              <RosetteLogo size={56} />
            </div>

            {/* Titre Principal */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif tracking-tight leading-tight">
              Prêt à Donner à vos Murs et Plafonds{' '}
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                la Splendeur qu'ils Méritent ?
              </span>
            </h2>

            {/* Sous-titre rassurant */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
              Contactez dès aujourd'hui <strong>Golden Gate</strong>. Nos artisans se déplacent gratuitement partout à Lomé pour évaluer votre chantier et vous remettre un devis sans engagement sous 24h.
            </p>

            {/* Boutons d'Action Rapides */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={getWhatsAppUrl("Bonjour Golden Gate ! Je souhaite un devis gratuit pour mon projet à Lomé.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-base shadow-xl shadow-emerald-950/60 hover:shadow-emerald-600/30 transition-all flex items-center justify-center gap-3 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <WhatsAppIcon size={22} />
                <span>Discuter sur WhatsApp ({COMPANY.whatsappDisplay})</span>
              </a>

              <button
                onClick={onOpenChatbot}
                type="button"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 font-bold text-base transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Simulateur de Devis 4 Questions</span>
                <ArrowRightIcon size={16} />
              </button>
            </div>

            {/* Coordonnées & Horaires */}
            <div className="pt-8 mt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
              <div className="flex items-center justify-center gap-2">
                <PhoneIcon size={15} className="text-amber-400" />
                <span>Appel : <strong>{COMPANY.phoneAlt}</strong></span>
              </div>

              <div className="flex items-center justify-center gap-2">
                <MapPinIcon size={15} className="text-emerald-400" />
                <span>{COMPANY.address}</span>
              </div>

              <div className="flex items-center justify-center gap-2">
                <ClockIcon size={15} className="text-sky-400" />
                <span>{COMPANY.hours}</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
