import React from 'react';
import { SERVICES } from '../data/servicesData';
import { getWhatsAppUrl } from '../config/constants';
import { ScrollReveal } from '../components/ScrollReveal';
import { RealWorkGallery } from '../components/RealWorkGallery';
import { WhatsAppIcon, CheckCircleIcon, ClockIcon, ShieldCheckIcon } from '../components/Icons';
import { SEO } from '../components/SEO';

export function ServicesPage() {
  const getServiceImage = (category) => {
    switch (category) {
      case 'staff': return '/images/gallery/golden gate two.webp';
      case 'peinture': return '/images/gallery/golden gate one .webp';
      case 'facade': return '/images/gallery/golden-gate-36.webp';
      case 'effets': return '/images/gallery/golden-gate-87.webp';
      default: return '/images/gallery/golden-gate-111.webp';
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Nos Services | Faux-Plafond Staff LED, Béton Ciré, Stucco & Peinture Villa"
        description="Prestations haut de gamme de finition et décoration : faux-plafond en plâtre fibré staff, gorges lumineuses LED, peinture intérieure satinée, béton ciré, stucco vénitien et ravalement siloxane hydrofuge."
        keywords="Faux plafond staff LED Lomé, Béton ciré Togo, Stucco vénitien Cotonou, Ravalement façade villa Abidjan, Enduit lissage peinture Afrique"
        path="/services"
      />

      {/* En-tête de la page Services */}
      <section className="py-16 md:py-20 bg-dot-pattern border-b border-slate-200 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal animation="fade-up">
            <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-slate-900 mb-4">
              Nos Prestations de Finition &amp; Décoration
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              De la création sur-mesure de faux-plafonds en staff jusqu'à la protection étanche des façades de villas, découvrez le détail technique de nos interventions à Lomé <strong>et dans toute l'Afrique</strong>.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Détail complet des 4 services avec ScrollReveal asymétrique */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 overflow-hidden">
        {SERVICES.map((service, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${isEven ? '' : 'lg:flex-row-reverse'
                }`}
            >
              {/* Image d'illustration du service */}
              <div className={`lg:col-span-6 ${isEven ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}>
                <ScrollReveal animation={isEven ? 'slide-right' : 'slide-left'} duration={800}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-[16/11] group">
                    <img
                      src={getServiceImage(service.category)}
                      alt={`Golden Gate — Service ${service.title} (Lomé, Togo & Afrique)`}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold text-slate-900 shadow-xs">
                      {service.badge}
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Contenu textuel et technique */}
              <div className={`lg:col-span-6 space-y-5 ${isEven ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}`}>
                <ScrollReveal animation={isEven ? 'slide-left' : 'slide-right'} delay={150} duration={800}>
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">
                    Pôle 0{idx + 1}
                  </span>

                  <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-slate-900">
                    {service.title}
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.fullDesc}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Ce qui est inclus :</h4>
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircleIcon size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs">
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <ClockIcon size={15} className="text-amber-600" />
                      <span>Délai moyen : <strong className="text-slate-900">{service.timeline}</strong></span>
                    </div>

                    <a
                      href={getWhatsAppUrl(`Bonjour Golden Gate, je souhaiterais obtenir des informations et un devis pour la prestation : ${service.title}. Merci.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 shadow-xs transition-all transform hover:-translate-y-0.5 cursor-pointer"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Devis gratuit pour ce service</span>
                    </a>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          );
        })}
      </section>

      {/* Galerie des réalisations pour chaque prestation */}
      <RealWorkGallery
        title="Exemples Réels de Nos Prestations à Lomé"
        showHeader={true}
        limit={12}
      />

      {/* Bandeau d'engagement qualité */}
      <section className="py-16 bg-dot-pattern border-t border-slate-200 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <ScrollReveal animation="scale-up">
            <ShieldCheckIcon size={36} className="text-emerald-600 mx-auto" />
            <h3 className="text-2xl font-extrabold font-serif text-slate-900">
              Nos Engagements sur Chaque Chantier
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Devis gratuit sous 24h sans aucun engagement, bâchage systématique de vos sols et mobiliers, peintures sans odeur et respect scrupuleux des délais annoncés.
            </p>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
