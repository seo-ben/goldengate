import React from 'react';
import { getWhatsAppUrl } from '../config/constants';
import { ScrollReveal } from '../components/ScrollReveal';
import { RealWorkGallery } from '../components/RealWorkGallery';
import { WhatsAppIcon, ShieldCheckIcon, SparklesIcon, CrownIcon, ClockIcon, CheckCircleIcon } from '../components/Icons';
import { SEO } from '../components/SEO';

export function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="À Propos de Golden Gate | Maîtres Artisans Staffeurs & Peintres en Afrique"
        description="Basée à Lomé (Togo), Golden Gate réunit des maîtres artisans spécialisés dans le travail d'exception du plâtre staff et de la peinture haute finition pour villas et résidences de standing en Afrique."
        keywords="Entreprise de peinture Lomé, Entreprise staffeur Togo, Maître staffeur Afrique, Artisans bâtiment Lomé, Golden Gate décoration"
        path="/a-propos"
      />

      {/* En-tête de la page À Propos */}
      <section className="py-16 md:py-20 bg-dot-pattern border-b border-slate-200 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal animation="fade-up">
            <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-slate-900 mb-4">
              L'Excellence Artisanale au Togo &amp; sur Tout le Continent Africain
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Basée à Lomé (Togo), l'entreprise Golden Gate déploie ses maîtres artisans dans les <strong>54 pays du continent africain</strong> : Cotonou, Abidjan, Accra, Dakar, Douala, Libreville, Kinshasa, Nairobi, Casablanca, Johannesburg et bien d'autres. Un travail de finition d'exception alliant tradition du staff et modernité de la peinture.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Histoire & Maîtres Artisans */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal animation="slide-right" duration={800}>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-serif text-slate-900">
                Redonner ses Lettres de Noblesse à la Décoration Murale à Lomé
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2">
                Trop souvent, les chantiers de peinture et de plâtrerie souffrent de finitions approximatives, de traces de rouleau visibles ou de fissures qui apparaissent après quelques mois.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Chez <strong>Golden Gate</strong>, nous considérons que chaque plafond et chaque mur est une toile. Nous utilisons du véritable plâtre fibré de sisal pour nos corniches et rosaces en staff, et nous consacrons 80% du temps à l'enduisage et au ponçage fin sous lumière rasante avant d'appliquer les laques de finition.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-3">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-2xl font-extrabold font-serif text-slate-900">+160</span>
                  <p className="text-xs font-bold text-slate-700 mt-1">Chantiers Livrés</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-2xl font-extrabold font-serif text-slate-900">8 Ans</span>
                  <p className="text-xs font-bold text-slate-700 mt-1">D'Expérience sur le Continent Africain</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6">
            <ScrollReveal animation="slide-left" delay={150} duration={800}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3] group">
                <img
                  src="/images/gallery/golden-gate-20.webp"
                  alt="Artisans en atelier de fabrication du staff chez Golden Gate à La Pampa"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 text-xs text-slate-800 flex items-center gap-3 shadow-md">
                  <CrownIcon size={22} className="text-amber-600 shrink-0" />
                  <span>Atelier de fabrication du staff &amp; chantiers réels à Lomé (La Pampa).</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* Nos 4 Piliers de Confiance */}
      <section className="py-16 bg-dot-pattern border-t border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h3 className="text-2xl sm:text-3xl font-extrabold font-serif text-slate-900">
                Pourquoi Faire Confiance à Golden Gate ?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Des engagements écrits et respectés sur chaque projet.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollReveal animation="fade-up" delay={50}>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2 hover:border-amber-400 hover:shadow-lg transition-all transform hover:-translate-y-1">
                <ShieldCheckIcon size={24} className="text-emerald-600" />
                <h4 className="text-sm font-bold text-slate-900">Devis 100% Gratuit</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Déplacement et métré sans frais dans tout le Grand Lomé sous 24h.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={120}>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2 hover:border-amber-400 hover:shadow-lg transition-all transform hover:-translate-y-1">
                <SparklesIcon size={24} className="text-amber-600" />
                <h4 className="text-sm font-bold text-slate-900">Zéro Mauvaise Surprise</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Prix convenu par devis écrit. Aucun surcoût impromptu en cours de chantier.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={190}>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2 hover:border-amber-400 hover:shadow-lg transition-all transform hover:-translate-y-1">
                <ClockIcon size={24} className="text-blue-600" />
                <h4 className="text-sm font-bold text-slate-900">Respect des Délais</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Planning strict et date de livraison garantie pour emménager à temps.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={260}>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2 hover:border-amber-400 hover:shadow-lg transition-all transform hover:-translate-y-1">
                <CheckCircleIcon size={24} className="text-purple-600" />
                <h4 className="text-sm font-bold text-slate-900">Propreté Totale</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Protection minutieuse des sols et meubles sous bâches hermétiques.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Galerie des Coulisses & Chantiers en Action */}
      <RealWorkGallery
        title="Les Coulisses de Nos Chantiers & Savoir-Faire"
        initialCategory="chantier"
        showHeader={true}
        limit={8}
      />

      {/* CTA bas de page */}
      <section className="py-16 bg-white border-t border-slate-200 text-center overflow-hidden">
        <ScrollReveal animation="scale-up">
          <div className="max-w-2xl mx-auto px-4 space-y-5">
            <h3 className="text-2xl font-extrabold font-serif text-slate-900">
              Un Projet de Peinture ou de Staff en Vue ?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Discutez directement avec notre équipe technique pour obtenir des conseils et une estimation personnalisée.
            </p>
            <a
              href={getWhatsAppUrl("Bonjour Golden Gate, je souhaiterais échanger avec vous concernant un projet de travaux. Merci.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <WhatsAppIcon size={18} />
              <span>Discuter sur WhatsApp</span>
            </a>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
