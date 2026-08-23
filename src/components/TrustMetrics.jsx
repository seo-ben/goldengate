import React from 'react';
import { COMPANY } from '../config/constants';
import { DocumentCheckIcon, ShieldCheckIcon, SparklesIcon, ClockIcon } from './Icons';

export function TrustMetrics() {
  const stats = [
    {
      value: `+${COMPANY.stats.projectsDone}`,
      label: 'Chantiers Livrés',
      detail: 'Villas, appartements & commerces en Afrique',
      color: 'from-amber-400 to-yellow-500'
    },
    {
      value: `${COMPANY.stats.yearsExperience} Ans`,
      label: "D'Expérience Métier",
      detail: 'Staffeurs & peintres hautement qualifiés',
      color: 'from-sky-400 to-blue-500'
    },
    {
      value: `${COMPANY.stats.satisfactionRate}%`,
      label: 'Clients Satisfaits',
      detail: 'Recommandations & avis élogieux',
      color: 'from-emerald-400 to-teal-500'
    },
    {
      value: '< 15 min',
      label: 'Délai de Réponse',
      detail: 'Disponibilité 7j/7 sur WhatsApp',
      color: 'from-purple-400 to-indigo-500'
    },
    {
      value: `${COMPANY.stats.countriesServed}`,
      label: 'Pays Couverts',
      detail: 'Présence sur tout le continent africain',
      color: 'from-rose-400 to-pink-500'
    }
  ];

  return (
    <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Grille des 4 chiffres clés */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="relative group bg-slate-900/90 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-slate-800 hover:border-amber-500/50 shadow-xl shadow-black/60 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex flex-col items-center text-center">
              <span className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </span>
              <span className="text-sm font-bold text-white mt-1">
                {stat.label}
              </span>
              <span className="text-xs text-slate-400 mt-1 leading-snug">
                {stat.detail}
              </span>
            </div>
            
            {/* Ligne lumineuse en bas de carte */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent group-hover:w-3/4 transition-all duration-300"></div>
          </div>
        ))}
      </div>

      {/* Bandeau des 4 engagements de sécurité */}
      <div className="mt-8 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 rounded-2xl p-6 border border-amber-500/20 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
              <DocumentCheckIcon size={22} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Devis 100% Gratuit</h4>
              <p className="text-xs text-slate-400 mt-0.5">Visite de chantier &amp; métré sans aucun frais à Lomé.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
              <ShieldCheckIcon size={22} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Zéro Mauvaise Surprise</h4>
              <p className="text-xs text-slate-400 mt-0.5">Prix fixe par écrit. Pas de rajout impromptu en cours de route.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
              <SparklesIcon size={22} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Finitions au Millimètre</h4>
              <p className="text-xs text-slate-400 mt-0.5">Enduits soignés, ponçage rasoir et protection intégrale des sols.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
              <ClockIcon size={22} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Respect des Délais</h4>
              <p className="text-xs text-slate-400 mt-0.5">Planning strict convenu pour emménager ou ouvrir à temps.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
