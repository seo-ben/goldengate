import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY, getWhatsAppUrl } from '../config/constants';
import { WhatsAppIcon, PhoneIcon, MapPinIcon } from './Icons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-600 text-xs border-t border-slate-200">
      
      {/* Section principale du Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Colonne 1 & 2 : Marque & Présentation */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Golden Gate Logo"
                className="h-11 w-auto object-contain"
              />
              <div>
                <span className="text-xl font-extrabold tracking-wider text-slate-900 font-serif leading-none block">
                  GOLDEN GATE
                </span>
                <p className="text-[11px] font-bold text-amber-600 uppercase tracking-widest mt-1">
                  Peinture &amp; Staff d'Excellence • Lomé
                </p>
              </div>
            </div>

            <p className="text-slate-600 text-xs leading-relaxed max-w-sm">
              Entreprise togolaise experte en faux-plafonds en staff mouluré, corniches lumineuses LED, peinture intérieure haute définition, ravalement de façades et enduits décoratifs stuc à Lomé et au Togo.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white border border-emerald-200 transition-colors flex items-center gap-2 font-bold"
              >
                <WhatsAppIcon size={16} />
                <span>WhatsApp : {COMPANY.whatsappDisplay}</span>
              </a>
            </div>
          </div>

          {/* Colonne 3 : Les 5 Pages du Site */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-serif">
              Pages du Site
            </h4>
            <ul className="space-y-2.5">
              <li><Link to="/" className="hover:text-blue-950 font-medium transition-colors">Accueil</Link></li>
              <li><Link to="/realisations" className="hover:text-blue-950 font-medium transition-colors">Nos Réalisations</Link></li>
              <li><Link to="/services" className="hover:text-blue-950 font-medium transition-colors">Nos Services</Link></li>
              <li><Link to="/a-propos" className="hover:text-blue-950 font-medium transition-colors">À Propos de Nous</Link></li>
              <li><Link to="/contact" className="hover:text-blue-950 font-medium transition-colors">Contact &amp; Devis</Link></li>
            </ul>
          </div>

          {/* Colonne 4 : Savoir-Faire */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-serif">
              Prestations
            </h4>
            <ul className="space-y-2.5">
              <li><Link to="/services" className="hover:text-blue-950 transition-colors">Plafonds en Staff &amp; Rosaces</Link></li>
              <li><Link to="/services" className="hover:text-blue-950 transition-colors">Gorges Lumineuses LED</Link></li>
              <li><Link to="/services" className="hover:text-blue-950 transition-colors">Peinture Satinée Zéro Défaut</Link></li>
              <li><Link to="/services" className="hover:text-blue-950 transition-colors">Façades Siloxanes Hydrofuges</Link></li>
              <li><Link to="/services" className="hover:text-blue-950 transition-colors">Stucco Vénitien Effet Marbre</Link></li>
            </ul>
          </div>

          {/* Colonne 5 : Coordonnées & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-serif">
              Contact &amp; Adresse
            </h4>
            <div className="space-y-2.5 text-xs text-slate-600">
              <p className="flex items-start gap-2">
                <MapPinIcon size={15} className="text-amber-600 shrink-0 mt-0.5" />
                <a href={COMPANY.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 hover:underline font-medium">
                  {COMPANY.address}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <PhoneIcon size={15} className="text-amber-600 shrink-0" />
                <a href={`tel:${COMPANY.phoneAlt}`} className="hover:text-slate-900 font-semibold">{COMPANY.phoneAlt}</a>
              </p>
              <p className="text-[11px] text-slate-500 pt-1">
                {COMPANY.hours} • Devis 7j/7
              </p>
            </div>
          </div>

        </div>


        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <p>© {currentYear} {COMPANY.legalName}. Tous droits réservés.</p>
          <p className="font-medium">Entreprise togolaise de décoration &amp; finitions</p>
        </div>

      </div>

    </footer>
  );
}
