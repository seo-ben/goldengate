import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY, getWhatsAppUrl } from '../config/constants';
import { WhatsAppIcon, PhoneIcon } from './Icons';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accueil', path: '/' },
    { label: 'Réalisations', path: '/realisations' },
    { label: 'Nos Services', path: '/services' },
    { label: 'À Propos', path: '/a-propos' },
    { label: 'Contact & Devis', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all relative">
      {/* Barre de progression dorée discrète */}
      <div
        className="absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 transition-all duration-150 z-50 pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />
      {/* Bandeau d'annonce supérieur (Top Navbar) : Architecture fluide sur 1 seule ligne sur Mobile et Desktop */}
      <div className="bg-slate-900 text-slate-300 text-[11px] sm:text-xs py-1.5 px-3 sm:px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          
          {/* Gauche : Nom & Localisation */}
          <div className="flex items-center gap-1.5 sm:gap-2 truncate">
            <span className="text-amber-400 font-bold tracking-wide">GOLDEN GATE</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-200 truncate">
              <span className="hidden sm:inline">Peinture &amp; Staff d'Excellence à </span>Lomé, Togo
            </span>
          </div>

          {/* Droite : Appel Direct Téléphone */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY.phoneAlt}`}
              className="text-amber-300 hover:text-amber-200 transition-colors flex items-center gap-1 font-bold"
            >
              <PhoneIcon size={12} className="text-amber-400 shrink-0" />
              <span>{COMPANY.phoneAlt}</span>
            </a>
            <span className="text-slate-700 hidden md:inline">|</span>
            <span className="text-slate-400 hidden md:inline">Devis sous 24h</span>
          </div>

        </div>
      </div>

      {/* Barre de navigation principale blanche et épurée */}
      <nav className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3.5 flex items-center justify-between">
        
        {/* Logo & Nom de Marque Officiel */}
        <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group">
          <img
            src="/logo.webp"
            alt="Golden Gate Logo"
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-extrabold tracking-wider text-slate-900 font-serif leading-none">
              GOLDEN GATE
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-slate-500 mt-1 flex items-center gap-1">
              <span>Peinture</span>
              <span className="text-amber-500">•</span>
              <span>Staffeur</span>
              <span className="text-amber-500">•</span>
              <span className="text-emerald-600 font-semibold">Togo</span>
            </span>
          </div>
        </Link>

        {/* 5 Liens de Navigation Desktop */}
        <div className="hidden md:flex items-center gap-7 lg:gap-9">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-all relative py-1 ${
                  active
                    ? 'text-slate-950 font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-amber-500'
                    : 'text-slate-600 hover:text-slate-950 after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-500 after:transition-all hover:after:w-full'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA WhatsApp Desktop */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={getWhatsAppUrl("Bonjour Golden Gate, je souhaiterais obtenir des informations et un devis gratuit pour mon projet à Lomé. Merci.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all flex items-center gap-2 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <WhatsAppIcon size={17} />
            <span>Devis WhatsApp</span>
          </a>
        </div>

        {/* Actions Mobiles (WhatsApp Direct + Hamburger Menu) */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={getWhatsAppUrl("Bonjour Golden Gate, je souhaite un devis pour mes travaux.")}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-emerald-600 text-white shadow-xs flex items-center justify-center cursor-pointer"
            aria-label="WhatsApp Devis"
          >
            <WhatsAppIcon size={18} />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="p-2 rounded-xl text-slate-800 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors cursor-pointer flex items-center justify-center"
            aria-label="Menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </nav>

      {/* Menu Mobile Déroulant Moderne */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white p-4 shadow-xl space-y-1.5 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                isActive(link.path)
                  ? 'bg-slate-900 text-amber-400 shadow-sm'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <a
              href={getWhatsAppUrl("Bonjour Golden Gate, je souhaiterais obtenir des informations et un devis gratuit pour mon projet à Lomé. Merci.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-2xl bg-emerald-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <WhatsAppIcon size={18} />
              <span>Demander un Devis WhatsApp</span>
            </a>

            <a
              href={`tel:${COMPANY.phoneAlt}`}
              className="w-full py-2.5 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <PhoneIcon size={14} className="text-amber-600" />
              <span>Appeler le {COMPANY.phoneAlt}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
