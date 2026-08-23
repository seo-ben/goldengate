import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { REAL_GALLERY_CATEGORIES, REAL_GALLERY_IMAGES } from '../data/realGalleryData';
import { getWhatsAppUrl } from '../config/constants';
import { WhatsAppIcon, MapPinIcon } from './Icons';

export function RealWorkGallery({
  initialCategory = 'all',
  limit = 0,
  showHeader = true,
  title = "Nos Réalisations d'Exception à Lomé"
}) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [selectedImage, setSelectedImage] = useState(null);
  const [clustersToShow, setClustersToShow] = useState(limit === 10 ? 1 : (limit > 0 ? Math.ceil(limit / 10) : 1));
  const [isZoomed, setIsZoomed] = useState(false);
  const [slideDirection, setSlideDirection] = useState('next');
  const [prevImage, setPrevImage] = useState(null);
  const [isFlipping, setIsFlipping] = useState(false);

  const filteredImages = useMemo(() => {
    if (activeCategory === 'all') return REAL_GALLERY_IMAGES;
    return REAL_GALLERY_IMAGES.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  // Découpage en grappes Bento de 10 images selon le schéma architectural
  const bentoClusters = useMemo(() => {
    const clusters = [];
    for (let i = 0; i < filteredImages.length; i += 10) {
      clusters.push(filteredImages.slice(i, i + 10));
    }
    return clusters;
  }, [filteredImages]);

  const visibleClusters = useMemo(() => {
    return bentoClusters.slice(0, clustersToShow);
  }, [bentoClusters, clustersToShow]);

  // Navigation dans la modale plein écran (1 seule image à la fois)
  const selectedIndex = useMemo(() => {
    if (!selectedImage) return -1;
    return filteredImages.findIndex((img) => img.id === selectedImage.id);
  }, [selectedImage, filteredImages]);

  const handlePrev = useCallback((e) => {
    e?.stopPropagation();
    setIsZoomed(false);
    setSlideDirection('prev');
    setPrevImage(selectedImage);
    setIsFlipping(true);
    setTimeout(() => setIsFlipping(false), 460);
    if (selectedIndex > 0) {
      setSelectedImage(filteredImages[selectedIndex - 1]);
    } else {
      setSelectedImage(filteredImages[filteredImages.length - 1]);
    }
  }, [selectedIndex, filteredImages, selectedImage]);

  const handleNext = useCallback((e) => {
    e?.stopPropagation();
    setIsZoomed(false);
    setSlideDirection('next');
    setPrevImage(selectedImage);
    setIsFlipping(true);
    setTimeout(() => setIsFlipping(false), 460);
    if (selectedIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[selectedIndex + 1]);
    } else {
      setSelectedImage(filteredImages[0]);
    }
  }, [selectedIndex, filteredImages, selectedImage]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, handlePrev, handleNext]);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  return (
    <section className="w-full py-16 md:py-20 bg-dot-pattern border-t border-b border-slate-200 relative overflow-hidden" id="galerie-photos">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* En-tête de section */}
        {showHeader && (
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold font-serif text-slate-900 tracking-tight leading-tight">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Explorez nos vrais chantiers de faux-plafonds en staff, peintures satinées et stuc à Lomé. Cliquez sur n'importe quelle photo pour la voir en grand format intégral avec feuilletage 3D.
            </p>
          </div>
        )}

        {/* Filtres de catégories professionnels : Grille compacte 2 colonnes sur Mobile, 3 colonnes sur Tablette & Centré sur Desktop */}
        <div className="mb-6 sm:mb-10 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center gap-2 sm:gap-2.5">
            {REAL_GALLERY_CATEGORIES.map((cat) => {
              const count = cat.id === 'all'
                ? REAL_GALLERY_IMAGES.length
                : REAL_GALLERY_IMAGES.filter((img) => img.category === cat.id).length;
              const active = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setClustersToShow(1);
                  }}
                  className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center justify-between sm:justify-center gap-1.5 sm:gap-2 cursor-pointer transform active:scale-95 border ${
                    active
                      ? 'bg-slate-900 text-amber-400 border-slate-900 shadow-md font-extrabold ring-2 ring-slate-900/10'
                      : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200/90 shadow-2xs hover:border-slate-300'
                  }`}
                >
                  <span className="truncate">{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold shrink-0 ${
                      active ? 'bg-amber-400 text-slate-950' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* GRILLE BENTO SIGNATURE (Sans boîte extérieure superflue, images directement disposées) */}
        <div className="space-y-8">
          {visibleClusters.map((cluster, clusterIdx) => (
            <div key={clusterIdx} className="golden-bento-grid">
              {cluster.map((img, idx) => {
                const slotNumber = (idx % 10) + 1;
                return (
                  <div
                    key={img.id}
                    onClick={() => {
                      setSelectedImage(img);
                      setIsZoomed(false);
                    }}
                    className={`group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-200 hover:border-amber-500 transition-all duration-300 cursor-pointer bg-slate-100 golden-slot-${slotNumber}`}
                  >
                    {/* Image de réalisation */}
                    <img
                      src={img.src}
                      alt={img.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top sm:object-center transition-transform duration-700 group-hover:scale-108"
                    />

                    {/* Overlay d'informations au survol */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3.5 sm:p-4 text-white">
                      
                      {/* Badge Localisation en haut à gauche */}
                      <div className="flex items-center justify-between">
                        <div className="bg-slate-950/85 backdrop-blur-xs text-amber-300 text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-xl flex items-center gap-1 border border-amber-400/40">
                          <MapPinIcon size={12} className="text-amber-400 shrink-0" />
                          <span className="truncate max-w-[130px]">{img.location}</span>
                        </div>
                        
                        <span className="p-1.5 rounded-xl bg-black/60 text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors shadow-xs">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                          </svg>
                        </span>
                      </div>

                      {/* Titre & Description au bas */}
                      <div className="space-y-1 transform group-hover:-translate-y-0.5 transition-transform duration-300">
                        <h4 className="text-xs sm:text-sm font-bold text-white font-serif leading-snug line-clamp-2 drop-shadow-md">
                          {img.title}
                        </h4>
                        <p className="text-[10px] sm:text-[11px] text-slate-200 line-clamp-1">
                          {img.description}
                        </p>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Bouton Charger Plus de Réalisations */}
        {clustersToShow < bentoClusters.length && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setClustersToShow((prev) => prev + 1)}
              className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold text-xs sm:text-sm rounded-2xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer inline-flex items-center gap-2 border border-slate-700"
            >
              <span>Afficher plus de réalisations ({filteredImages.length - clustersToShow * 10} restantes)</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}

      </div>

      {/* --- MODALE DE VISUALISATION PLEIN ÉCRAN CINÉMA : 1 SEULE IMAGE EN GRANDEUR TOTALE AVEC PLIAGE 3D --- */}
      {selectedImage && createPortal(
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-5 animate-fade-in select-none"
          role="dialog"
          aria-modal="true"
        >
          {/* 1. HEADER SUPÉRIEUR (Fixe en haut, ne chevauche jamais la photo) */}
          <div className="w-full flex items-center justify-between z-50 text-white pb-2 shrink-0">
            <div className="flex items-center gap-2 text-xs text-amber-400 font-bold bg-slate-900/90 px-3.5 py-1.5 rounded-full border border-white/15">
              <MapPinIcon size={14} />
              <span>{selectedImage.location}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">
                Photo {selectedIndex + 1} / {filteredImages.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Bouton Zoom */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsZoomed(!isZoomed);
                }}
                className="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                title={isZoomed ? "Ajuster à l'écran" : "Agrandir l'image"}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isZoomed ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  )}
                </svg>
                <span className="hidden sm:inline">{isZoomed ? "Ajuster" : "Zoom"}</span>
              </button>

              {/* Bouton Fermer */}
              <button
                onClick={() => setSelectedImage(null)}
                className="p-2 sm:p-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
                aria-label="Fermer"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* 2. ZONE CENTRALE : L'IMAGE UNIQUE OCCUPE TOUTE LA HAUTEUR AVEC EFFET DE PLIURE 3D */}
          <div
            className="relative w-full flex-1 min-h-0 my-1 flex items-center justify-center overflow-hidden cursor-pointer page-flip-container"
          >
            {/* Flèche Précédent */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-slate-900/80 hover:bg-slate-900 border border-white/25 text-white transition-all z-50 cursor-pointer flex items-center justify-center shadow-2xl"
              aria-label="Photo précédente"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Feuille de fond précédente (l'ancienne photo reste en dessous pendant que la nouvelle se rabat/se plie) */}
            {isFlipping && prevImage && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30 scale-[0.98] transition-opacity duration-300">
                <img
                  src={prevImage.src}
                  alt=""
                  className="max-w-full max-h-[65vh] sm:max-h-[75vh] w-auto h-auto object-contain rounded-2xl shadow-xl"
                />
              </div>
            )}

            {/* Photo unique 100% visible qui se plie / se rabat en 3D */}
            <div
              key={selectedImage.id}
              className={`relative z-10 flex items-center justify-center max-w-full max-h-full ${
                slideDirection === 'next' ? 'animate-book-flip-next' : 'animate-book-flip-prev'
              }`}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsZoomed(!isZoomed);
                }}
                className={`max-w-full max-h-[65vh] sm:max-h-[75vh] w-auto h-auto object-contain rounded-2xl shadow-2xl transition-transform duration-300 ${
                  isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'
                }`}
              />
            </div>

            {/* Flèche Suivant */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3.5 sm:p-4 rounded-full bg-slate-900/80 hover:bg-slate-900 border border-white/25 text-white transition-all z-50 cursor-pointer flex items-center justify-center shadow-2xl"
              aria-label="Photo suivante"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* 3. FOOTER INFÉRIEUR (En dessous de l'image, sans aucun chevauchement !) */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl mx-auto bg-slate-900/95 rounded-2xl p-3 sm:p-3.5 border border-white/15 text-white flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xl shrink-0 mt-2 z-50"
          >
            <div className="text-center sm:text-left space-y-0.5">
              <h3 className="text-xs sm:text-sm font-bold text-white font-serif">
                {selectedImage.title}
              </h3>
              <p className="text-[11px] text-slate-300 line-clamp-1">
                {selectedImage.description}
              </p>
            </div>

            <a
              href={getWhatsAppUrl(`Bonjour Golden Gate, j'ai vu votre réalisation "${selectedImage.title}" à ${selectedImage.location} sur votre site et je souhaite un devis similaire. Merci.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all shrink-0 cursor-pointer whitespace-nowrap"
            >
              <WhatsAppIcon size={15} />
              <span>Devis WhatsApp</span>
            </a>
          </div>

        </div>,
        document.body
      )}

    </section>
  );
}
