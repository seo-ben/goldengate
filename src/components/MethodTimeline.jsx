import React, { useState, useEffect } from 'react';
import { SparklesIcon, ShieldCheckIcon, ClockIcon, DocumentCheckIcon } from './Icons';

const STEPS = [
  {
    num: "01",
    title: "Diagnostic & Visite Gratuite",
    subtitle: "Prise de métré chez vous à Lomé",
    desc: "Nous nous déplaçons gratuitement dans votre villa ou appartement partout à Lomé pour évaluer l'état des murs, vérifier l'humidité et prendre les mesures exactes.",
    image: "/images/before-raw-room.jpg",
    imageLabel: "Étape 1 : Visite sur site & Diagnostic technique",
    icon: <ClockIcon size={20} className="text-amber-600" />
  },
  {
    num: "02",
    title: "Devis Transparent sous 24h",
    subtitle: "Prix ferme sans aucun surcoût",
    desc: "Vous recevez une proposition détaillée par écrit avec le choix des matériaux (staff fibré, peintures satinées lessivables) et un calendrier précis d'exécution.",
    image: "/images/staffeur-craftsman.jpg",
    imageLabel: "Étape 2 : Planification & Conseils personnalisés",
    icon: <DocumentCheckIcon size={20} className="text-blue-600" />
  },
  {
    num: "03",
    title: "Chantier Bâché & Réalisation Soignée",
    subtitle: "Protection totale et ponçage propre",
    desc: "Nos maîtres artisans protègent minutieusement vos sols et mobiliers. Nous réalisons les faux-plafonds, l'enduisage sous lumière rasante et les couches de peinture sans poussière.",
    image: "/images/luxury-interior-paint.jpg",
    imageLabel: "Étape 3 : Exécution méticuleuse & Protection des lieux",
    icon: <SparklesIcon size={20} className="text-purple-600" />
  },
  {
    num: "04",
    title: "Contrôle & Livraison VIP",
    subtitle: "Paiement du solde uniquement après satisfaction",
    desc: "Nous inspectons ensemble chaque angle sous tous les éclairages. Le solde des travaux n'est réglé que lorsque le résultat est 100% parfait selon vos exigences.",
    image: "/images/after-luxury-room.jpg",
    imageLabel: "Étape 4 : Livraison de votre salon métamorphosé",
    icon: <ShieldCheckIcon size={20} className="text-emerald-600" />
  }
];

export function MethodTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Défilement automatique toutes les 4.5 secondes (si non survolé)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, activeStep]);

  return (
    <section className="py-20 bg-dot-pattern border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Titre sobre */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900">
            Notre Méthode de Travail en 4 Étapes
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Un processus transparent et cadencé. Les étapes s'enchaînent automatiquement pour illustrer la métamorphose de votre chantier.
          </p>
        </div>

        {/* CHEMIN INTERACTIF + IMAGE DYNAMIQUE ANIMÉE */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* COLONNE GAUCHE : Le Chemin (Stepper avec barre de progression animée) */}
          <div className="lg:col-span-7 space-y-4 relative">

            {/* Ligne verticale de liaison avec curseur lumineux */}
            <div className="absolute top-8 bottom-8 left-6 sm:left-7 w-0.5 bg-slate-200 -z-0">
              <div
                className="w-1.5 -left-[2px] relative bg-amber-500 rounded-full shadow-[0_0_12px_rgba(245,158,11,0.9)] transition-all duration-500"
                style={{
                  height: '25%',
                  top: `${activeStep * 25}%`
                }}
              />
            </div>

            {STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`relative z-10 p-5 sm:p-6 rounded-2xl transition-all duration-300 cursor-pointer border overflow-hidden flex items-start gap-4 sm:gap-6 group ${isActive
                      ? 'bg-white border-amber-400 shadow-xl translate-x-3 ring-1 ring-amber-400/30'
                      : 'bg-white/70 border-slate-200/80 hover:bg-white hover:border-slate-300 hover:translate-x-1'
                    }`}
                >
                  {/* Barre de progression dorée sur l'étape active */}
                  {isActive && !isPaused && (
                    <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-slate-100 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 animate-expand-width" style={{ animationDuration: '4.5s' }} />
                    </div>
                  )}

                  {/* Numéro avec cercle animé */}
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center font-extrabold font-serif text-base sm:text-lg shrink-0 transition-all duration-300 ${isActive
                        ? 'bg-slate-900 text-amber-400 shadow-lg scale-105 ring-4 ring-amber-400/20'
                        : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                      }`}
                  >
                    {step.num}
                  </div>

                  {/* Textes de l'étape */}
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-base sm:text-lg font-bold font-serif transition-colors ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                        {step.title}
                      </h3>
                      {isActive && (
                        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/90 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                          <span>Étape Active</span>
                        </span>
                      )}
                    </div>

                    <p className="text-xs font-semibold text-amber-700">
                      {step.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* COLONNE DROITE : Grande Photo Dynamique Synchronisée */}
          <div className="lg:col-span-5">
            <div className="bg-white p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-2xl space-y-3 sticky top-28">

              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-100">
                <img
                  key={STEPS[activeStep].image}
                  src={STEPS[activeStep].image}
                  alt={STEPS[activeStep].title}
                  className="w-full h-full object-cover object-center transition-all duration-700 transform scale-100 hover:scale-105"
                />

                {/* Badge Étape en haut avec effet verre */}
                <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md px-3.5 py-1 rounded-full text-white text-xs font-bold shadow-md flex items-center gap-2 border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                  <span>Étape {STEPS[activeStep].num} sur 04</span>
                </div>

                {/* Titre descriptif en bas avec fond dégradé */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-5 text-white">
                  <p className="text-xs sm:text-sm font-semibold tracking-wide">
                    {STEPS[activeStep].imageLabel}
                  </p>
                </div>
              </div>

              {/* Barre de navigation des étapes sous l'image */}
              <div className="flex items-center justify-between text-xs pt-1.5 px-2">
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev === 0 ? STEPS.length - 1 : prev - 1))}
                  className="font-semibold text-slate-600 hover:text-slate-900 cursor-pointer transition-colors"
                >
                  ← Précédent
                </button>

                <div className="flex items-center gap-2">
                  {STEPS.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveStep(i)}
                      className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${activeStep === i ? 'w-8 bg-amber-500 shadow-xs' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                        }`}
                      aria-label={`Aller à l'étape ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev + 1) % STEPS.length)}
                  className="font-bold text-amber-700 hover:text-amber-800 cursor-pointer transition-colors"
                >
                  Suivant →
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
