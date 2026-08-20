import React from 'react';
import { getWhatsAppUrl } from '../config/constants';
import { DocumentCheckIcon, ShieldCheckIcon, SparklesIcon, CheckCircleIcon, ArrowRightIcon } from './Icons';
import { RosetteDivider } from './ArtVisuals';

export function Process() {
  const steps = [
    {
      num: '01',
      title: 'Contact & Diagnostic Gratuit',
      desc: 'Échangez avec nous par WhatsApp ou téléphone. Nous convenons d\'une visite gratuite sur votre chantier à Lomé pour mesurer les surfaces et comprendre vos désirs.',
      icon: <DocumentCheckIcon size={24} className="text-amber-400" />,
      time: 'Jour 1'
    },
    {
      num: '02',
      title: 'Devis Transparent sous 24h',
      desc: 'Vous recevez un devis clair et détaillé (main d\'œuvre, fournitures recommandées, planning ferme). Aucun frais caché : le prix convenu reste le prix final.',
      icon: <ShieldCheckIcon size={24} className="text-sky-400" />,
      time: 'Jour 2'
    },
    {
      num: '03',
      title: 'Réalisation Propre & Soignée',
      desc: 'Protection totale de vos sols et meubles sous bâches. Pose minutieuse du staff, ponçage sous lumière rasante et application des peintures professionnelles.',
      icon: <SparklesIcon size={24} className="text-emerald-400" />,
      time: 'Déroulement'
    },
    {
      num: '04',
      title: 'Contrôle Qualité & Réception',
      desc: 'Inspection conjointe des finitions avec vous. Nettoyage complet du chantier. Le solde final n\'est réglé qu\'après votre totale et entière satisfaction.',
      icon: <CheckCircleIcon size={24} className="text-purple-400" />,
      time: 'Livraison'
    }
  ];

  return (
    <section id="processus" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Rigueur &amp; Transparence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif tracking-tight">
            Notre Méthode en{' '}
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
              4 Étapes Simples
            </span>
          </h2>

          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Parce qu'un chantier réussi repose sur la confiance et l'organisation, voici exactement comment nous travaillons, du premier contact jusqu'au coup d'œil final.
          </p>

          <RosetteDivider className="max-w-xs mx-auto" />
        </div>

        {/* Grille des 4 étapes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative bg-slate-950/80 rounded-2xl p-6 sm:p-7 border border-slate-800 hover:border-amber-500/50 shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Numéro et Temps */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold font-serif text-slate-700 group-hover:text-amber-400/80 transition-colors">
                    {step.num}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400">
                    {step.time}
                  </span>
                </div>

                {/* Icône */}
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 inline-block mb-4 group-hover:scale-105 transition-transform">
                  {step.icon}
                </div>

                {/* Titre & Description */}
                <h3 className="text-lg font-bold font-serif text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Ligne inférieure */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-1 text-xs text-amber-400/90 font-medium">
                <span>Étape garantie</span>
                <CheckCircleIcon size={14} className="text-emerald-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Bannière de réassurance sous les étapes */}
        <div className="mt-12 text-center bg-slate-950/60 p-6 rounded-2xl border border-slate-800 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white">Prêt à démarrer votre projet sereinement ?</h4>
            <p className="text-xs text-slate-400 mt-0.5">Visite de chantier gratuite sous 24h à Lomé.</p>
          </div>

          <a
            href={getWhatsAppUrl("Bonjour Golden Gate ! Je souhaite planifier une visite gratuite pour mon projet.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shrink-0 flex items-center gap-2"
          >
            <span>Prendre RDV Gratuit</span>
            <ArrowRightIcon size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
