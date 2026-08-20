import React from 'react';
import { getWhatsAppUrl } from '../config/constants';
import { WhatsAppIcon } from './Icons';

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 select-none">
      <a
        href={getWhatsAppUrl("Bonjour Golden Gate, je souhaiterais obtenir des informations et un devis pour mes travaux de peinture / staff à Lomé. Merci.")}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-xl shadow-emerald-900/30 transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer"
        aria-label="Contacter sur WhatsApp"
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40"></span>
        <WhatsAppIcon size={30} className="relative z-10 text-white" />
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-300 border-2 border-white"></span>
      </a>
    </div>
  );
}
