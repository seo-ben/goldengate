import React, { useState } from 'react';
import { PROJECTS } from '../data/projectsData';
import { getWhatsAppUrl } from '../config/constants';
import { WhatsAppIcon, MapPinIcon, StarIcon, CloseIcon, SparklesIcon, CheckIcon, ClockIcon } from './Icons';
import { RosetteDivider } from './ArtVisuals';

export function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeProject, setActiveProject] = useState(null);

  const filterTabs = [
    { key: 'all', label: 'Tous les Chantiers', count: PROJECTS.length },
    { key: 'staff', label: 'Staff & Rosaces', count: PROJECTS.filter(p => p.category === 'staff').length },
    { key: 'peinture', label: 'Peinture Intérieure', count: PROJECTS.filter(p => p.category === 'peinture').length },
    { key: 'facade', label: 'Façades Extérieures', count: PROJECTS.filter(p => p.category === 'facade').length },
    { key: 'effets', label: 'Stucco & Effets', count: PROJECTS.filter(p => p.category === 'effets').length },
  ];

  const filteredProjects = selectedFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedFilter);

  return (
    <section id="realisations" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <SparklesIcon size={14} />
            <span>Galerie de Réalisations Réelles</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif tracking-tight">
            Nos Derniers Chantiers Livrés à{' '}
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Lomé &amp; au Togo
            </span>
          </h2>

          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Découvrez nos interventions récentes dans les différents quartiers de la capitale : villas contemporaines, appartements de standing, duplex et bureaux.
          </p>

          <RosetteDivider className="max-w-xs mx-auto" />
        </div>

        {/* Barre des Onglets de Filtrage */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedFilter(tab.key)}
              type="button"
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${selectedFilter === tab.key
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30 font-extrabold scale-105'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-amber-500/40 hover:text-white'
                }`}
            >
              <span>{tab.label}</span>
              <span className={`px-2 py-0.5 rounded-full text-[11px] ${selectedFilter === tab.key ? 'bg-slate-950/25 text-slate-950 font-extrabold' : 'bg-slate-800 text-slate-400'
                }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Grille des Projets avec Vraies Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group bg-slate-900/90 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/60 shadow-2xl shadow-black/70 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Cadre Visuel avec Vraie Photo */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 border-b border-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Badge de catégorie flottant */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md text-amber-300 border border-amber-500/40 text-[11px] font-bold shadow-lg">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Année */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-sm text-slate-200 text-[10px] font-mono border border-slate-700">
                      {project.year}
                    </span>
                  </div>

                  {/* Overlay au survol */}
                  <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                    <span className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-extrabold text-xs shadow-2xl flex items-center gap-1.5 transform scale-90 group-hover:scale-100 transition-transform">
                      🔍 Agrandir le projet
                    </span>
                  </div>
                </div>

                {/* Contenu textuel de la carte */}
                <div className="p-6 space-y-3">

                  {/* Localisation & Quartier */}
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-bold">
                    <MapPinIcon size={15} className="shrink-0 text-amber-400" />
                    <span>{project.location}</span>
                  </div>

                  {/* Titre du projet */}
                  <h3 className="text-base sm:text-lg font-bold font-serif text-white group-hover:text-amber-300 transition-colors leading-snug line-clamp-2">
                    {project.title}
                  </h3>

                  {/* Caractéristiques */}
                  <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                    <span>Surface : <strong className="text-slate-200">{project.surface}</strong></span>
                    <span>Délai : <strong className="text-slate-200">{project.duration}</strong></span>
                  </div>

                  {/* Avis client résumé */}
                  <p className="text-xs text-slate-300 italic bg-slate-950/80 p-3 rounded-xl border border-slate-800/80 line-clamp-2">
                    {project.clientQuote}
                  </p>
                </div>
              </div>

              {/* Bouton bas de carte */}
              <div className="px-6 pb-6 pt-1">
                <button
                  type="button"
                  className="w-full py-3 px-4 rounded-xl bg-slate-800 group-hover:bg-amber-500/20 text-slate-200 group-hover:text-amber-300 border border-slate-700 group-hover:border-amber-500/40 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Détails &amp; Fiche Chantier</span>
                  <span className="text-amber-400">→</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* MODALE LIGHTBOX EN PLEIN ÉCRAN */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in" onClick={() => setActiveProject(null)}>
          <div
            className="relative w-full max-w-3xl bg-slate-900 rounded-2xl overflow-hidden border border-amber-500/50 shadow-2xl shadow-black max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header de la modale */}
            <div className="p-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-extrabold text-amber-400 uppercase tracking-wider">
                  {activeProject.categoryLabel} • {activeProject.year}
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-serif text-white mt-0.5">
                  {activeProject.title}
                </h3>
              </div>

              <button
                onClick={() => setActiveProject(null)}
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Fermer"
              >
                <CloseIcon size={20} />
              </button>
            </div>

            {/* Corps de la modale défilant */}
            <div className="overflow-y-auto p-6 space-y-6">

              {/* Grand Visuel Réel */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Métadonnées du chantier */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs">
                <div>
                  <span className="text-slate-400">Localisation :</span>
                  <p className="font-bold text-amber-300 flex items-center gap-1 mt-0.5">
                    <MapPinIcon size={14} />
                    {activeProject.location}
                  </p>
                </div>
                <div>
                  <span className="text-slate-400">Surface traitée :</span>
                  <p className="font-bold text-white mt-0.5">{activeProject.surface}</p>
                </div>
                <div>
                  <span className="text-slate-400">Délai de livraison :</span>
                  <p className="font-bold text-white mt-0.5 flex items-center gap-1">
                    <ClockIcon size={14} className="text-emerald-400" />
                    {activeProject.duration}
                  </p>
                </div>
              </div>

              {/* Description détaillée */}
              <div>
                <h4 className="text-sm font-bold text-amber-400 mb-2 font-serif">Description des Travaux</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeProject.description}
                </p>
              </div>

              {/* Points forts */}
              <div>
                <h4 className="text-sm font-bold text-amber-400 mb-2 font-serif">Éléments Techniques Clés</h4>
                <div className="space-y-2">
                  {activeProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                      <span className="p-1 rounded-md bg-emerald-500/20 text-emerald-400">
                        <CheckIcon size={14} />
                      </span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Témoignage client */}
              <div className="bg-gradient-to-r from-amber-500/10 to-blue-500/10 p-5 rounded-2xl border border-amber-500/20 space-y-2">
                <div className="flex items-center gap-1 text-amber-400">
                  <StarIcon size={15} />
                  <StarIcon size={15} />
                  <StarIcon size={15} />
                  <StarIcon size={15} />
                  <StarIcon size={15} />
                </div>
                <p className="text-xs sm:text-sm text-slate-200 italic font-light">
                  {activeProject.clientQuote}
                </p>
                <p className="text-xs font-bold text-amber-300 pt-1">
                  — {activeProject.clientName} ({activeProject.location})
                </p>
              </div>

            </div>

            {/* Footer de la modale avec CTA WhatsApp */}
            <div className="p-5 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-400 text-center sm:text-left">
                Vous souhaitez la même finition chez vous ?
              </span>

              <a
                href={getWhatsAppUrl(`Bonjour Golden Gate ! J'ai vu le chantier "${activeProject.title}" à ${activeProject.location} et je souhaite un devis similaire.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-colors"
              >
                <WhatsAppIcon size={18} />
                <span>Demander un projet similaire sur WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
