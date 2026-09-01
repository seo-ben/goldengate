import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { MethodTimeline } from '../components/MethodTimeline';
import { TestimonialsMarquee } from '../components/TestimonialsMarquee';
import { RealWorkGallery } from '../components/RealWorkGallery';
import { ScrollReveal } from '../components/ScrollReveal';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { FAQS } from '../data/faqData';
import { ZONES } from '../data/zonesData';
import { getWhatsAppUrl } from '../config/constants';
import {
  WhatsAppIcon,
  ChevronDownIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  MapPinIcon
} from '../components/Icons';
import { SEO } from '../components/SEO';

export function HomePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  return (
    <div className="space-y-0 bg-white">
      <SEO
        title="Golden Gate | Peinture d'Exception, Béton Ciré & Staff Haut de Gamme — Togo & Toute l'Afrique"
        description="Entreprise experte en faux-plafonds en staff mouluré, gorges lumineuses LED, peinture intérieure haute définition, béton ciré et ravalement de façade. Siège à Lomé (Togo), interventions dans 54 pays."
        path=""
      />

      {/* 1. Hero Section Compacte avec Vidéo et Texte Auto-Écrit */}
      <Hero />

      {/* 2. BANDEAU DE NOMBRE DE RÉALISATIONS AVEC COMPTEURS ANIMÉS AU SCROLL */}
      <section className="py-12 bg-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up" duration={800}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="p-3 bg-white/80 rounded-2xl border border-slate-200/80 shadow-2xs">
                <AnimatedCounter
                  target={160}
                  prefix="+"
                  className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900"
                />
                <p className="text-xs sm:text-sm font-bold text-slate-800 mt-1">Chantiers Réalisés</p>
                <p className="text-[11px] text-slate-500">Villas &amp; résidences en Afrique</p>
              </div>

              <div className="p-3 bg-white/80 rounded-2xl border border-slate-200/80 shadow-2xs">
                <AnimatedCounter
                  target={85}
                  suffix="+"
                  className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900"
                />
                <p className="text-xs sm:text-sm font-bold text-slate-800 mt-1">Plafonds en Staff &amp; LED</p>
                <p className="text-[11px] text-slate-500">Salons &amp; réceptions de luxe</p>
              </div>

              <div className="p-3 bg-white/80 rounded-2xl border border-slate-200/80 shadow-2xs">
                <AnimatedCounter
                  target={50}
                  suffix="+"
                  className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900"
                />
                <p className="text-xs sm:text-sm font-bold text-slate-800 mt-1">Façades &amp; Villas Peintes</p>
                <p className="text-[11px] text-slate-500">Revêtements siloxanes étanches</p>
              </div>

              <div className="p-3 bg-white/80 rounded-2xl border border-slate-200/80 shadow-2xs">
                <AnimatedCounter
                  target={99}
                  suffix="%"
                  className="text-3xl sm:text-4xl font-extrabold font-serif text-emerald-600"
                />
                <p className="text-xs sm:text-sm font-bold text-slate-800 mt-1">Clients Satisfaits</p>
                <p className="text-[11px] text-slate-500">8 ans de savoir-faire en Afrique</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. SAVOIR-FAIRE MAJEURS (Animation glissante au scroll) */}
      <section className="py-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

          {/* Bloc 1 : Le Staff & Les Plafonds Lumineux */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            <div className="lg:col-span-6">
              <ScrollReveal animation="slide-right" duration={800}>
                <div className="relative aspect-[16/11] rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">
                  <img
                    src="/images/golden-gate-two.webp"
                    alt="Réalisation Faux-plafond en staff et gorges LED Golden Gate"
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 px-3.5 py-1 rounded-full text-xs font-bold text-slate-900 shadow-xs">
                    Staff &amp; Gorges LED
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-6 space-y-5 text-left">
              <ScrollReveal animation="slide-left" delay={150} duration={800}>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">
                  Artisanat &amp; Volume
                </span>

                <h2 className="text-2xl sm:text-4xl font-extrabold font-serif text-slate-900 leading-tight">
                  L'Art du Staff &amp; des Faux-Plafonds Rétroéclairés
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Donnez une dimension majestueuse à vos pièces de vie. Nos artisans conçoivent des plafonds suspendus sur-mesure avec gorges lumineuses LED intégrées, rosaces moulurées et corniches d'angle en plâtre fibré haute densité.
                </p>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircleIcon size={16} className="text-emerald-600 shrink-0" />
                    <span>Plâtre fibré sisal haute résistance contre l'humidité</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircleIcon size={16} className="text-emerald-600 shrink-0" />
                    <span>Intégration d'éclairage indirect LED 3000K chaleureux</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircleIcon size={16} className="text-emerald-600 shrink-0" />
                    <span>Finitions d'angles parfaites et lissage impeccable</span>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 hover:text-amber-700 group"
                  >
                    <span>Découvrir les options de staff</span>
                    <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

          </div>

          {/* Bloc 2 : Peinture Haute Définition & Façades */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            <div className="lg:col-span-6 order-2 lg:order-1 space-y-5 text-left">
              <ScrollReveal animation="slide-right" delay={150} duration={800}>
                <span className="text-xs font-bold text-blue-800 uppercase tracking-widest block">
                  Finitions &amp; Protection
                </span>

                <h2 className="text-2xl sm:text-4xl font-extrabold font-serif text-slate-900 leading-tight">
                  Peinture Satinée Zéro Défaut &amp; Façades Siloxanes
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Le secret d'une peinture d'exception réside dans la préparation du support. Nous appliquons jusqu'à 3 passes d'enduit fin et un ponçage millimétré avant l'application de peintures acryliques satinées ou siloxanes anti-moisissures adaptées au climat de Lomé.
                </p>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircleIcon size={16} className="text-emerald-600 shrink-0" />
                    <span>Murs lisses sans traces de rouleau ni reflets disgracieux</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircleIcon size={16} className="text-emerald-600 shrink-0" />
                    <span>Peintures lessivables et hydrofuges haute durabilité</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircleIcon size={16} className="text-emerald-600 shrink-0" />
                    <span>Protection totale des sols et mobiliers sous bâches</span>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <Link
                    to="/realisations"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-900 group"
                  >
                    <span>Voir nos réalisations de peinture</span>
                    <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <ScrollReveal animation="slide-left" duration={800}>
                <div className="relative aspect-[16/11] rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">
                  <img
                    src="/images/golden-gate-one.webp"
                    alt="Peinture velours et finitions intérieures Golden Gate"
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 px-3.5 py-1 rounded-full text-xs font-bold text-slate-900 shadow-xs">
                    Béton Ciré, Stucco &amp; Peinture
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Comparateur Avant / Après Révolutionnaire */}
      <ScrollReveal animation="scale-up" duration={900}>
        <BeforeAfterSlider />
      </ScrollReveal>

      {/* 5. Méthode en 4 Étapes (Chemin Interactif + Image Synchronisée) */}
      <ScrollReveal animation="fade-up" duration={850}>
        <MethodTimeline />
      </ScrollReveal>

      {/* 6. Galerie Photos Réelles de Chantiers */}
      <ScrollReveal animation="fade-up" duration={850}>
        <RealWorkGallery
          title="Nos Chantiers Récents en Images à Lomé"
          showHeader={true}
          limit={10}
        />
      </ScrollReveal>

      {/* 7. Témoignages Clients Réels */}
      <ScrollReveal animation="fade-up" duration={850}>
        <TestimonialsMarquee />
      </ScrollReveal>

      {/* 7. Zones d'Intervention à Lomé */}
      <section className="py-16 bg-dot-pattern border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <ScrollReveal animation="fade-up">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-slate-900">
              Interventions au Togo &amp; Mobilité dans Toute l'Afrique
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
              Basés à Lomé (Togo), nos maîtres artisans interviennent au Togo, dans la sous-région et se déplacent dans tous les pays d'Afrique.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="scale-up" delay={200}>
            <div className="flex flex-wrap justify-center gap-2.5">
              {ZONES.map((zone, idx) => (
                <div
                  key={idx}
                  className="bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-2xs hover:border-amber-400 hover:shadow-md transition-all flex items-center gap-2 text-xs text-slate-800 transform hover:-translate-y-0.5"
                >
                  <MapPinIcon size={14} className="text-amber-600 shrink-0" />
                  <span className="font-semibold">{zone.name}</span>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-mono">
                    {zone.status}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. FAQ Essentielle */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <ScrollReveal animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900">
                Questions Fréquentes
              </h2>
              <p className="text-sm text-slate-600 mt-1">Les réponses claires à vos questions sur les devis, paiements et délais.</p>
            </div>
          </ScrollReveal>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <ScrollReveal key={idx} animation="fade-up" delay={idx * 70}>
                  <div
                    className={`rounded-2xl border transition-all ${isOpen ? 'bg-slate-50 border-slate-300 shadow-xs' : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-bold text-slate-900 font-serif">
                        {faq.question}
                      </span>
                      <span className={`p-1.5 rounded-lg bg-slate-100 text-slate-600 transition-transform ${isOpen ? 'rotate-180 bg-amber-100 text-amber-800' : ''}`}>
                        <ChevronDownIcon size={16} />
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* 9. Bannière Finale de Contact (Épurée, sans label, design prestige) */}
      <ScrollReveal animation="scale-up" duration={800}>
        <section className="py-20 md:py-24 bg-white border-t border-slate-200 relative overflow-hidden">
          
          {/* Lueur d'ambiance subtile */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-amber-100/30 via-slate-100/60 to-amber-100/30 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif text-slate-900 tracking-tight leading-tight">
              Donnez Vie à vos Projets de Staff &amp; Peinture
            </h2>

            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Nos maîtres artisans se déplacent directement sur votre chantier à Lomé pour évaluer vos besoins et établir votre devis sur-mesure sous 24h.
            </p>

            {/* Boutons d'Action Principaux */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <a
                href={getWhatsAppUrl("Bonjour Golden Gate, je souhaiterais obtenir des informations et un devis gratuit pour mon projet à Lomé. Merci.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon size={20} />
                <span>Discuter sur WhatsApp (+228 93 39 48 74)</span>
              </a>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center"
              >
                <span>Simulateur de Devis &amp; Contact</span>
              </Link>
            </div>

            {/* Garanties & Localisation rapides */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-500 font-medium">
              <span>Siège : Lomé (Togo) • Interventions Toute l'Afrique</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span>Devis &amp; Déplacement Gratuits</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span>Plâtre Fibré de Sisal &amp; Peinture Satinée</span>
            </div>

          </div>
        </section>
      </ScrollReveal>

    </div>
  );
}
