import React, { useState } from 'react';
import { ZONES_REGIONS } from '../data/zonesData';
import { getWhatsAppUrl, COMPANY } from '../config/constants';
import { MapPinIcon, ClockIcon, WhatsAppIcon, ShieldCheckIcon } from './Icons';
import { RosetteDivider } from './ArtVisuals';

function LocalZoneCard({ zone }) {
  return (
    <div
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
          href={getWhatsAppUrl(`Bonjour Golden Gate ! J'ai un projet dans la zone : ${zone.name}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
        >
          <span>Demander visite</span>
          <WhatsAppIcon size={14} />
        </a>
      </div>
    </div>
  );
}

function RegionCountriesGrid({ regionData }) {
  return (
    <div className="space-y-4">
      {/* Header de la région */}
      <div className="flex items-center justify-between gap-3 px-1">
        <div>
          <h3 className="text-lg font-bold font-serif text-white flex items-center gap-2">
            <span className="text-xl">{regionData.emoji}</span>
            {regionData.region}
          </h3>
          <span className="text-[11px] font-medium text-emerald-400 flex items-center gap-1 mt-1">
            <ClockIcon size={13} />
            {regionData.status}
          </span>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-bold shrink-0">
          {regionData.countries.length} pays
        </span>
      </div>

      {/* Grille des pays */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {regionData.countries.map((country, idx) => (
          <div
            key={idx}
            className={`rounded-xl p-4 border transition-all duration-300 group flex items-start gap-3 ${
              country.highlight
                ? 'bg-slate-900/90 border-amber-500/30 hover:border-amber-400/60 shadow-lg'
                : 'bg-slate-900/60 border-slate-800 hover:border-slate-600'
            }`}
          >
            <span className="text-2xl shrink-0 leading-none mt-0.5">{country.flag}</span>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors truncate">
                {country.name}
              </h4>
              <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                {country.cities}
              </p>
            </div>
            {country.highlight && (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5 animate-pulse" />
            )}
          </div>
        ))}
      </div>

      {/* CTA WhatsApp pour la région */}
      <div className="pt-3 flex justify-center">
        <a
          href={getWhatsAppUrl(`Bonjour Golden Gate ! J'ai un projet de peinture/staff en ${regionData.region}. Merci de me contacter.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/40 text-emerald-300 border border-emerald-500/30 text-xs font-bold transition-all"
        >
          <WhatsAppIcon size={15} />
          <span>Devis gratuit — {regionData.region}</span>
        </a>
      </div>
    </div>
  );
}

export function ZonesCoverage() {
  const [activeTab, setActiveTab] = useState('lome');

  const activeRegion = ZONES_REGIONS.find(r => r.id === activeTab);

  return (
    <section id="quartiers" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPinIcon size={14} />
            <span>54 Pays Couverts</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif tracking-tight">
            Zones d'Intervention :{' '}
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Tout le Continent Africain
            </span>
          </h2>

          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Siège à Lomé (Togo), nos équipes mobiles sont déployées dans les <strong>54 pays d'Afrique</strong>. Interventions locales à Lomé sous 24h, missions internationales avec logistique intégrée.
          </p>

          <RosetteDivider className="max-w-xs mx-auto" />
        </div>

        {/* Onglets de navigation par région */}
        <div className="mb-8 overflow-x-auto scrollbar-hide -mx-4 px-4">
          <div className="flex gap-2 min-w-max justify-center">
            {ZONES_REGIONS.map((region) => (
              <button
                key={region.id}
                onClick={() => setActiveTab(region.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  activeTab === region.id
                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                }`}
              >
                {region.label}
              </button>
            ))}
          </div>
        </div>

        {/* Contenu de l'onglet actif */}
        <div className="min-h-[300px]">
          {activeRegion && activeRegion.data && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeRegion.data.map((zone, idx) => (
                <LocalZoneCard key={idx} zone={zone} />
              ))}
            </div>
          )}

          {activeRegion && activeRegion.dataRegion && (
            <RegionCountriesGrid regionData={activeRegion.dataRegion} />
          )}
        </div>

        {/* Bande défilante de drapeaux */}
        <div className="mt-12 overflow-hidden relative">
          <div className="flex animate-scroll-flags gap-6 text-2xl">
            {COMPANY.keyCountries.concat(COMPANY.keyCountries).map((c, i) => (
              <span key={i} className="shrink-0 opacity-60 hover:opacity-100 transition-opacity" title={c.name}>
                {c.flag}
              </span>
            ))}
          </div>
        </div>

        {/* Note de réassurance géographique */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900 border border-slate-800 text-center max-w-3xl mx-auto text-xs text-slate-400 flex items-center justify-center gap-2">
          <ShieldCheckIcon size={16} className="text-emerald-400 shrink-0" />
          <span>Déplacement et métré gratuits à Lomé. Devis à distance et mobilisation d'équipes pour tous les autres pays d'Afrique.</span>
        </div>

      </div>
    </section>
  );
}
