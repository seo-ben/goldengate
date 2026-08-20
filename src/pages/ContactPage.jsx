import React, { useState } from 'react';
import { COMPANY, getWhatsAppUrl } from '../config/constants';
import { ScrollReveal } from '../components/ScrollReveal';
import { WhatsAppIcon, PhoneIcon, MapPinIcon, ClockIcon, ArrowRightIcon, CheckCircleIcon } from '../components/Icons';

const BOT_QUESTIONS = [
  {
    step: 1,
    title: "1. Quel type de travaux souhaitez-vous réaliser ?",
    placeholder: "Ex: Faux-plafond staff LED salon + peinture satinée...",
    options: [
      "Staff décoratif & Faux-Plafond LED",
      "Peinture Intérieure Satinée / Mat",
      "Ravalement de Façade Extérieure",
      "Stucco Vénitien & Effets Marbre",
      "Rénovation Complète (Staff + Peinture)"
    ]
  },
  {
    step: 2,
    title: "2. Pour quel type d'espace s'agit-il ?",
    placeholder: "Ex: Villa R+1, salon 50m² et 4 chambres...",
    options: [
      "Grand Salon / Séjour",
      "Villa Complète (R+1 / Plain-Pied)",
      "Appartement (2 à 4 pièces)",
      "Bureaux ou Local Commercial",
      "Suite Parentale / Chambre"
    ]
  },
  {
    step: 3,
    title: "3. Dans quel quartier de Lomé se trouve le chantier ?",
    placeholder: "Ex: Baguida près de la plage, Lomé...",
    options: [
      "Agoè-Nyivé, Télécom, Cacaveli",
      "Tokoin, Douane, Forever, Centre",
      "Hédzranawoé, Kégué, Aéroport",
      "Baguida, Avépozo, Zone Littorale",
      "Adidogomé, Contournement, Ségbé",
      "Autre quartier / Autre ville du Togo"
    ]
  },
  {
    step: 4,
    title: "4. Quel est votre délai souhaité pour démarrer ?",
    placeholder: "Ex: Démarrage souhaité début de semaine prochaine...",
    options: [
      "Urgent (Démarrage cette semaine)",
      "Dans le mois",
      "Je prépare mon projet & budget"
    ]
  }
];

export function ContactPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [customInput, setCustomInput] = useState('');
  const [freeText, setFreeText] = useState('');

  const handleSelect = (option) => {
    const newAnswers = { ...answers, [currentStep + 1]: option };
    setAnswers(newAnswers);
    setCustomInput('');
    if (currentStep < BOT_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(BOT_QUESTIONS.length);
    }
  };

  const generateWhatsAppUrlWithChoices = () => {
    const proj = answers[1] || "Peinture / Staff";
    const space = answers[2] || "Maison";
    const zone = answers[3] || "Lomé";
    const timing = answers[4] || "Dans le mois";

    const msg = `Bonjour Golden Gate ! 👋\nJ'ai configuré mon projet sur votre site :\n\n• Travaux : *${proj}*\n• Espace : *${space}*\n• Quartier : *${zone}*\n• Délai : *${timing}*\n\nJe souhaite obtenir un devis gratuit et fixer une visite de chantier. Merci !`;
    return getWhatsAppUrl(msg);
  };

  return (
    <div className="bg-white min-h-screen">

      {/* En-tête de la page Contact */}
      <section className="py-16 md:py-20 bg-dot-pattern border-b border-slate-200 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal animation="fade-up">
            <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-slate-900 mb-4">
              Demandez Votre Devis Gratuit
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Nos artisans se déplacent gratuitement partout dans le Grand Lomé sous 24h. Contactez-nous par WhatsApp, téléphone ou remplissez votre demande rapide ci-dessous.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contenu principal : Formulaire Devis Rapide à gauche + Coordonnées à droite */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* COLONNE GAUCHE : Faites votre demande de devis aussi vite */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal animation="slide-right" duration={800}>
              <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">

                <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
                  <div>
                    <h3 className="text-lg font-bold font-serif text-slate-900">Faites votre demande de devis aussi vite</h3>
                    <p className="text-xs text-slate-500">Sélectionnez vos options ou saisissez directement votre formulation</p>
                  </div>
                  {currentStep < BOT_QUESTIONS.length && (
                    <span className="text-xs font-bold text-amber-700 bg-amber-100/80 px-2.5 py-1 rounded-full shrink-0">
                      Étape {currentStep + 1} / 4
                    </span>
                  )}
                </div>

                {currentStep < BOT_QUESTIONS.length ? (
                  <div className="space-y-4">
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 font-serif">
                      {BOT_QUESTIONS[currentStep].title}
                    </h4>

                    {/* Options Rapides en 1 clic */}
                    <div className="space-y-2">
                      {BOT_QUESTIONS[currentStep].options.map((opt, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => handleSelect(opt)}
                          className="w-full p-3.5 rounded-xl bg-white hover:bg-amber-50 hover:border-amber-400 text-slate-800 text-xs sm:text-sm font-semibold border border-slate-200 text-left transition-all flex items-center justify-between group cursor-pointer shadow-2xs transform hover:translate-x-1"
                        >
                          <span>{opt}</span>
                          <ArrowRightIcon size={14} className="text-slate-400 group-hover:text-amber-700 transition-colors" />
                        </button>
                      ))}
                    </div>

                    {/* Champ de Saisie Libre pour formuler soi-même */}
                    <div className="pt-3 border-t border-slate-200 space-y-2">
                      <label className="text-xs font-bold text-slate-700 block">
                        Ou saisissez vous-même votre formulation :
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={customInput}
                          onChange={(e) => setCustomInput(e.target.value)}
                          placeholder={BOT_QUESTIONS[currentStep].placeholder}
                          className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && customInput.trim()) {
                              handleSelect(customInput.trim());
                            }
                          }}
                        />
                        <button
                          type="button"
                          disabled={!customInput.trim()}
                          onClick={() => {
                            if (customInput.trim()) {
                              handleSelect(customInput.trim());
                            }
                          }}
                          className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-40 text-white font-bold text-xs cursor-pointer transition-all shrink-0"
                        >
                          Valider
                        </button>
                      </div>
                    </div>

                    {currentStep > 0 && (
                      <button
                        type="button"
                        onClick={() => setCurrentStep(currentStep - 1)}
                        className="text-xs text-slate-500 hover:text-slate-800 underline pt-2 cursor-pointer transition-colors"
                      >
                        ← Revenir à l'étape précédente
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="space-y-5 text-center py-4 animate-fade-in">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircleIcon size={28} />
                    </div>

                    <h4 className="text-lg font-bold font-serif text-slate-900">Votre demande est prête à être envoyée !</h4>

                    <div className="bg-white p-4 rounded-2xl border border-slate-200 text-xs text-left grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
                      <div>
                        <span className="text-slate-400 block">Travaux :</span>
                        <strong className="text-slate-900">{answers[1]}</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Espace :</span>
                        <strong className="text-slate-900">{answers[2]}</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Quartier :</span>
                        <strong className="text-slate-900">{answers[3]}</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Délai :</span>
                        <strong className="text-emerald-700">{answers[4]}</strong>
                      </div>
                    </div>

                    <a
                      href={generateWhatsAppUrlWithChoices()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 cursor-pointer"
                    >
                      <WhatsAppIcon size={20} />
                      <span>Envoyer ma demande directement sur WhatsApp →</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => { setCurrentStep(0); setAnswers({}); setCustomInput(''); }}
                      className="text-xs text-slate-500 hover:text-slate-800 underline block mx-auto cursor-pointer"
                    >
                      Recommencer
                    </button>
                  </div>
                )}

                {/* Saisie Libre Directe (Option envoi immédiat sans étapes) */}
                <div className="mt-8 pt-6 border-t border-slate-200 space-y-3">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Ou formulez librement tout votre besoin :
                  </h4>
                  <textarea
                    value={freeText}
                    onChange={(e) => setFreeText(e.target.value)}
                    placeholder="Ex: Bonjour Golden Gate, j'ai une villa R+1 à Baguida. Je souhaite un faux-plafond staff avec spots LED dans le salon et une peinture satinée complète. Pouvez-vous passer pour un devis ?"
                    rows={3}
                    className="w-full p-3 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  />
                  <a
                    href={getWhatsAppUrl(freeText.trim() ? `Bonjour Golden Gate ! 👋\nVoici mon projet :\n\n${freeText.trim()}\n\nMerci de me contacter pour établir un devis gratuit.` : "Bonjour Golden Gate, je souhaite un devis gratuit pour mon projet à Lomé.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Envoyer ce message direct sur WhatsApp →</span>
                  </a>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* COLONNE DROITE : Coordonnées Directes */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal animation="slide-left" delay={150} duration={800}>
              <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5">
                <h3 className="text-lg font-bold font-serif text-slate-900">Coordonnées Directes</h3>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 shrink-0">
                      <MapPinIcon size={18} />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Adresse de l'atelier / Siège :</span>
                      <p className="text-slate-600 mt-0.5">{COMPANY.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                      <WhatsAppIcon size={18} />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">WhatsApp direct :</span>
                      <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline font-bold">
                        {COMPANY.whatsappDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 shrink-0">
                      <PhoneIcon size={18} />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Appels téléphoniques :</span>
                      <a href={`tel:${COMPANY.phoneAlt}`} className="text-slate-900 font-bold hover:underline">
                        {COMPANY.phoneAlt}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-purple-50 text-purple-700 border border-purple-200 shrink-0">
                      <ClockIcon size={18} />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Disponibilité :</span>
                      <p className="text-slate-600 mt-0.5">{COMPANY.hours}</p>
                      <p className="text-[11px] text-emerald-600 font-semibold mt-0.5">Devis &amp; urgences 7j/7</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={getWhatsAppUrl("Bonjour Golden Gate, je vous contacte pour échanger directement concernant mes travaux à Lomé. Merci.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Échanger directement sur WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Carte & Localisation La Pampa */}
              <div className="bg-white p-5 mt-4 rounded-2xl border border-slate-200 shadow-sm space-y-3 overflow-hidden">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPinIcon size={16} className="text-amber-600" />
                    <h4 className="text-xs font-bold text-slate-900 font-serif">Localisation : La Pampa, Lomé</h4>
                  </div>
                  <a
                    href={COMPANY.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-blue-900 hover:underline flex items-center gap-1"
                  >
                    <span>Itinéraire Google Maps</span>
                    <ArrowRightIcon size={12} />
                  </a>
                </div>

                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                  <iframe
                    title="Localisation Golden Gate à La Pampa Lomé"
                    src={COMPANY.googleMapsEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </div>


            </ScrollReveal>
          </div>

        </div>
      </section>

    </div>
  );
}
