import React, { useState } from 'react';
import { PROJECTS } from '../data/projectsData';
import { getWhatsAppUrl } from '../config/constants';
import { ScrollReveal } from '../components/ScrollReveal';
import { MapPinIcon, StarIcon, CloseIcon, CheckIcon, WhatsAppIcon } from '../components/Icons';

export function ProjectsPage() {
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
    <div className="bg-white min-h-screen">

      {/* En-tête de la page Réalisations */}
      <section className="py-16 md:py-20 bg-dot-pattern border-b border-slate-200 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal animation="fade-up">
            <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-slate-900 mb-4">
              Nos Réalisations à Lomé &amp; au Togo
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Plus de <strong>160 chantiers livrés</strong> avec succès dans tout le Grand Lomé. Explorez nos réalisations de faux-plafonds en staff, peintures satinées et ravalements de façades.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-xs sm:text-sm font-semibold text-slate-700">
              <span className="flex items-center gap-1.5"><strong className="text-slate-900 font-serif text-base">+160</strong> Chantiers réalisés</span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5"><strong className="text-slate-900 font-serif text-base">8 Ans</strong> D'expérience</span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5"><strong className="text-emerald-700 font-serif text-base">99%</strong> Satisfaction</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Onglets de Filtrage & Grille */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Onglets avec animation douce */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setSelectedFilter(tab.key)}
                type="button"
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 transform active:scale-95 ${selectedFilter === tab.key
                    ? 'bg-slate-900 text-white shadow-lg scale-105 font-bold'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
              >
                <span>{tab.label}</span>
                <span className={`px-2 py-0.5 rounded-full text-[11px] ${selectedFilter === tab.key ? 'bg-white/20 text-white font-bold' : 'bg-white text-slate-600'
                  }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grille des Projets avec ScrollReveal en cascade */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} animation="fade-up" delay={idx * 80}>
              <div
                onClick={() => setActiveProject(project)}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:border-amber-400 transition-all duration-500 cursor-pointer flex flex-col justify-between group transform hover:-translate-y-2"
              >
                <div>
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-slate-900 shadow-sm">
                      {project.categoryLabel}
                    </span>
                    <span className="absolute top-3 right-3 bg-black/70 text-white px-2 py-0.5 rounded text-[10px] font-mono">
                      {project.year}
                    </span>
                  </div>

                  <div className="p-6 space-y-2.5">
                    <div className="flex items-center gap-1.5 text-xs text-amber-700 font-semibold">
                      <MapPinIcon size={14} />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="text-lg font-bold font-serif text-slate-900 group-hover:text-blue-950 transition-colors line-clamp-2">
                      {project.title}
                    </h3>

                    <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
                      <span>Surface : <strong className="text-slate-800">{project.surface}</strong></span>
                      <span>Délai : <strong className="text-slate-800">{project.duration}</strong></span>
                    </div>

                    <p className="text-xs text-slate-600 italic bg-slate-50 p-3 rounded-xl line-clamp-2">
                      {project.clientQuote}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    type="button"
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 group-hover:bg-amber-500 group-hover:text-slate-950 text-slate-800 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <span>Fiche détaillée &amp; Photos</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </section>

      {/* MODALE LIGHTBOX EN PLEIN ÉCRAN */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in" onClick={() => setActiveProject(null)}>
          <div
            className="relative w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col border border-slate-200 transform scale-100 transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header de la modale */}
            <div className="p-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                  {activeProject.categoryLabel} • {activeProject.year}
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900 mt-0.5">
                  {activeProject.title}
                </h3>
              </div>

              <button
                onClick={() => setActiveProject(null)}
                className="p-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 transition-colors cursor-pointer"
                aria-label="Fermer"
              >
                <CloseIcon size={20} />
              </button>
            </div>

            {/* Corps de la modale */}
            <div className="overflow-y-auto p-6 space-y-6">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
                <div>
                  <span className="text-slate-500">Quartier :</span>
                  <p className="font-bold text-slate-900 mt-0.5">{activeProject.location}</p>
                </div>
                <div>
                  <span className="text-slate-500">Superficie :</span>
                  <p className="font-bold text-slate-900 mt-0.5">{activeProject.surface}</p>
                </div>
                <div>
                  <span className="text-slate-500">Délai :</span>
                  <p className="font-bold text-slate-900 mt-0.5">{activeProject.duration}</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-2 font-serif">Détails des travaux</h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {activeProject.description}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold text-slate-900 font-serif">Points techniques clés</h4>
                {activeProject.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckIcon size={14} className="text-emerald-600 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 space-y-1.5">
                <div className="flex items-center gap-1 text-amber-500">
                  <StarIcon size={14} fill="#f59e0b" />
                  <StarIcon size={14} fill="#f59e0b" />
                  <StarIcon size={14} fill="#f59e0b" />
                  <StarIcon size={14} fill="#f59e0b" />
                  <StarIcon size={14} fill="#f59e0b" />
                </div>
                <p className="text-xs sm:text-sm text-slate-800 italic">
                  {activeProject.clientQuote}
                </p>
                <p className="text-xs font-bold text-amber-800 pt-1">
                  — {activeProject.clientName}
                </p>
              </div>
            </div>

            {/* Footer de modale */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-600">Vous souhaitez un résultat similaire pour votre villa ?</span>
              <a
                href={getWhatsAppUrl(`Bonjour Golden Gate, j'ai vu votre réalisation "${activeProject.title}" à ${activeProject.location} et je souhaite un devis similaire. Merci.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
              >
                <WhatsAppIcon size={16} />
                <span>Demander sur WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
