import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { RealWorkGallery } from '../components/RealWorkGallery';
import { SEO } from '../components/SEO';

export function ProjectsPage() {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Nos Réalisations & Chantiers | Staff, Peinture & Façade — Lomé & Afrique"
        description="Découvrez plus de 160 chantiers livrés avec succès : faux-plafonds en staff mouluré avec gorges LED, peintures veloutées sans trace, et ravalements de villas à Lomé (Togo) et dans toute l'Afrique."
        keywords="Réalisations peinture Lomé, Photos faux plafond staff Togo, Chantiers staffeur Cotonou, Décoration villa Abidjan, Galerie peinture bâtiment Afrique"
        path="/realisations"
      />

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

      {/* Galerie Complète & Unique des Réalisations en Mosaïque Bento */}
      <RealWorkGallery
        title="Galerie Complète des Chantiers & Finitions"
        showHeader={false}
      />

    </div>
  );
}
