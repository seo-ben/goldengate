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
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all relative">
      {/* Barre de progression dorée discrète */}
      <div
        className="absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 transition-all duration-150 z-50 pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />
      {/* Bandeau d'annonce supérieur sobre et pro */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 font-semibold">GOLDEN GATE</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-200">Peinture &amp; Staff d'Excellence à Lomé</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${COMPANY.phoneAlt}`}
              className="hover:text-amber-300 transition-colors flex items-center gap-1.5 font-medium"
            >
              <PhoneIcon size={13} className="text-amber-400" />
              <span>{COMPANY.phoneAlt}</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-slate-300 hidden sm:inline">Lomé &amp; Grand Togo</span>
          </div>
        </div>
      </div>

      {/* Barre de navigation principale blanche et épurée */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        
        {/* Logo & Nom de Marque Officiel */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
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
                    ? 'text-blue-950 font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-amber-500'
                    : 'text-slate-600 hover:text-blue-950 after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-500 after:transition-all hover:after:w-full'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA WhatsApp Vert d'action direct */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={getWhatsAppUrl("Bonjour Golden Gate, je souhaiterais obtenir des informations et un devis gratuit pour mon projet à Lomé. Merci.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all flex items-center gap-2 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <WhatsAppIcon size={18} />
            <span>Devis WhatsApp</span>
          </a>
        </div>

        {/* Bouton Mobile (Hamburger) */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-emerald-600 text-white shadow-sm"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon size={20} />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="p-2 rounded-xl text-slate-700 hover:text-slate-900 bg-slate-100 border border-slate-200"
            aria-label="Ouvrir le menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </nav>

      {/* Menu Mobile déroulant */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white p-4 shadow-xl space-y-2 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                isActive(link.path)
                  ? 'bg-amber-50 text-amber-800 font-bold border-l-4 border-amber-500'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-3 border-t border-slate-100">
            <a
              href={getWhatsAppUrl("Bonjour Golden Gate, je souhaiterais obtenir des informations et un devis gratuit pour mon projet à Lomé. Merci.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md"
            >
              <WhatsAppIcon size={20} />
              <span>Contacter sur WhatsApp (Devis gratuit)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
