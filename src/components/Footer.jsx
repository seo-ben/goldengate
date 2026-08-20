import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY, getWhatsAppUrl } from '../config/constants';
import { WhatsAppIcon, PhoneIcon, MapPinIcon } from './Icons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-600 text-xs border-t border-slate-200">
      
      {/* Section principale du Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10">
          
          {/* Colonne 1 : Marque & Présentation (Prend 5 colonnes sur desktop) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Golden Gate Logo"
                className="h-10 sm:h-12 w-auto object-contain"
              />
              <div>
                <span className="text-xl font-extrabold tracking-wider text-slate-900 font-serif leading-none block">
                  GOLDEN GATE
                </span>
                <p className="text-[10px] sm:text-[11px] font-bold text-amber-600 uppercase tracking-wider mt-1">
                  Peinture &amp; Staff d'Excellence • Lomé
                </p>
              </div>
            </div>

            <p className="text-slate-600 text-xs leading-relaxed max-w-md">
              Entreprise togolaise experte en faux-plafonds en staff mouluré, corniches lumineuses LED, peinture intérieure satinée, ravalement de façades et stuc vénitien à Lomé et au Togo.
            </p>

            {/* Boutons d'Action Rapides sur la MÊME ligne */}
            <div className="grid grid-cols-2 gap-2.5 max-w-sm w-full pt-1">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 sm:px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white border border-emerald-200 transition-all flex items-center justify-center gap-1.5 font-bold text-xs cursor-pointer shadow-2xs text-center truncate"
              >
                <WhatsAppIcon size={16} className="shrink-0" />
                <span className="truncate">WhatsApp</span>
              </a>
              <a
                href={`tel:${COMPANY.phoneAlt}`}
                className="px-3 sm:px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-900 text-slate-800 hover:text-white border border-slate-200 transition-all flex items-center justify-center gap-1.5 font-bold text-xs cursor-pointer shadow-2xs text-center truncate"
              >
                <PhoneIcon size={14} className="text-amber-500 shrink-0" />
                <span className="truncate">Appel Direct</span>
              </a>
            </div>
          </div>

          {/* Colonne 2 : Liens du Site (Organisés en 2 sous-colonnes sur Mobile) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-6">
            
            {/* Sous-colonne A : Pages du Site */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-serif">
                Pages du Site
              </h4>
              <ul className="space-y-2 text-xs">
                <li><Link to="/" className="hover:text-slate-950 font-medium transition-colors">Accueil</Link></li>
                <li><Link to="/realisations" className="hover:text-slate-950 font-medium transition-colors">Nos Réalisations</Link></li>
                <li><Link to="/services" className="hover:text-slate-950 font-medium transition-colors">Nos Services</Link></li>
                <li><Link to="/a-propos" className="hover:text-slate-950 font-medium transition-colors">À Propos</Link></li>
                <li><Link to="/contact" className="hover:text-slate-950 font-medium transition-colors">Contact &amp; Devis</Link></li>
              </ul>
            </div>

            {/* Sous-colonne B : Prestations */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-serif">
                Prestations
              </h4>
              <ul className="space-y-2 text-xs">
                <li><Link to="/services" className="hover:text-slate-950 transition-colors">Plafonds en Staff</Link></li>
                <li><Link to="/services" className="hover:text-slate-950 transition-colors">Gorges LED</Link></li>
                <li><Link to="/services" className="hover:text-slate-950 transition-colors">Peinture Satinée</Link></li>
                <li><Link to="/services" className="hover:text-slate-950 transition-colors">Façades &amp; Murs</Link></li>
                <li><Link to="/services" className="hover:text-slate-950 transition-colors">Stucco Vénitien</Link></li>
              </ul>
            </div>

          </div>

          {/* Colonne 3 : Siège, Ateliers & Horaires (Prend 3 colonnes sur desktop) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-serif">
              Siège &amp; Ateliers
            </h4>
            
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5 text-xs text-slate-600">
              <p className="flex items-start gap-2">
                <MapPinIcon size={14} className="text-amber-600 shrink-0 mt-0.5" />
                <a
                  href={COMPANY.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-900 hover:underline font-medium leading-snug"
                >
                  {COMPANY.address}
                </a>
              </p>
              
              <p className="flex items-center gap-2 pt-1 border-t border-slate-200/60">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                <span className="text-[11px] font-semibold text-slate-700">
                  {COMPANY.hours}
                </span>
              </p>

              <p className="text-[10px] text-slate-500">
                Interventions dans tout le Grand Lomé &amp; Togo
              </p>
            </div>
          </div>

        </div>

        {/* Ligne de Copyright & Mentions */}
        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <p>© {currentYear} {COMPANY.legalName}. Tous droits réservés.</p>
          <p className="font-medium text-slate-600">Décoration d'intérieur &amp; finitions d'excellence à Lomé</p>
        </div>

      </div>

    </footer>
  );
}
