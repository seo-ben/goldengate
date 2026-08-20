import React, { useState } from 'react';
import { FAQS } from '../data/faqData';
import { getWhatsAppUrl } from '../config/constants';
import { ChevronDownIcon, WhatsAppIcon, ShieldCheckIcon } from './Icons';
import { RosetteDivider } from './ArtVisuals';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // Premier item ouvert par défaut

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheckIcon size={14} />
            <span>Transparence Totale</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif tracking-tight">
            Foire Aux Questions :{' '}
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Toutes vos Réponses
            </span>
          </h2>

          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Avant de démarrer un projet, il est normal d'avoir des interrogations sur les tarifs, les avances et les délais. Voici nos engagements formels.
          </p>

          <RosetteDivider className="max-w-xs mx-auto" />
        </div>

        {/* Accordéon FAQ */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900 border-amber-500/50 shadow-xl'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 shrink-0">
                      {faq.tag}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white font-serif">
                      {faq.question}
                    </span>
                  </div>

                  <span
                    className={`p-1.5 rounded-lg bg-slate-800 text-slate-300 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-amber-400 bg-amber-500/20' : ''
                    }`}
                  >
                    <ChevronDownIcon size={16} />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 mt-1 animate-fade-in">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Appel à l'action si autre question */}
        <div className="mt-12 text-center bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white">Vous avez une autre question spécifique ?</h4>
            <p className="text-xs text-slate-400 mt-0.5">Notre équipe technique vous répond en direct sur WhatsApp.</p>
          </div>

          <a
            href={getWhatsAppUrl("Bonjour Golden Gate ! J'ai une question spécifique à vous poser concernant mon projet.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-lg flex items-center gap-2 shrink-0"
          >
            <WhatsAppIcon size={16} />
            <span>Poser ma question</span>
          </a>
        </div>

      </div>
    </section>
  );
}
