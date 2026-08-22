import React, { useState, useEffect, useRef } from 'react';
import { getWhatsAppUrl } from '../config/constants';
import { WhatsAppIcon, RosetteLogo, MessageSquareIcon, ArrowRightIcon } from './Icons';
import { RosetteDivider } from './ArtVisuals';

const BOT_STEPS = [
  {
    step: 1,
    botMessage: "Bonjour 👋 Bienvenue chez Golden Gate ! Quel type de projet souhaitez-vous réaliser à Lomé ?",
    options: [
      { label: "Staff décoratif & Faux-Plafond LED", key: "Staff & LED" },
      { label: "Peinture Intérieure (Murs & Plafonds)", key: "Peinture Intérieure" },
      { label: "Ravalement de Façade Extérieure", key: "Façade Extérieure" },
      { label: "Stucco Vénitien, Béton Ciré & Effets", key: "Stucco & Béton Ciré" },
      { label: "Rénovation Complète (Staff + Peinture)", key: "Rénovation Complète" }
    ]
  },
  {
    step: 2,
    botMessage: "Excellent choix ! Pour quel type d'espace ou de bien immobilier s'agit-il ?",
    options: [
      { label: "Grand Salon & Salle à Manger", key: "Salon / Séjour" },
      { label: "Villa Complète (R+1 ou Plain-Pied)", key: "Villa Complète" },
      { label: "Appartement (2 à 4 pièces)", key: "Appartement" },
      { label: "Bureaux ou Local Commercial", key: "Bureaux / Commerce" },
      { label: "Chambre / Suite Parentale", key: "Suite Parentale" }
    ]
  },
  {
    step: 3,
    botMessage: "Parfait. Dans quelle zone ou pays d'Afrique se situe votre chantier ?",
    options: [
      { label: "Agoè-Nyivé, Télécom, Cacaveli (Lomé)", key: "Agoè & Environs" },
      { label: "Tokoin, Douane, Forever, Centre (Lomé)", key: "Tokoin & Centre" },
      { label: "Hédzranawoé, Kégué, Aéroport (Lomé)", key: "Hédzranawoé & Kégué" },
      { label: "Baguida, Avépozo, Zone Littorale (Lomé)", key: "Baguida & Littoral" },
      { label: "Autre ville du Togo (Tsévié, Kpalimé, Kara...)", key: "Intérieur Togo" },
      { label: "Autre Pays d'Afrique (Bénin, Ghana, CI, etc.)", key: "Afrique / International" }
    ]
  },
  {
    step: 4,
    botMessage: "Un dernier détail : pour quand envisagez-vous le démarrage des travaux ?",
    options: [
      { label: "⚡ Urgent (Démarrage cette semaine)", key: "Urgent (cette semaine)" },
      { label: "📅 Dans le mois", key: "Dans le mois" },
      { label: "💡 Je prépare mon projet & budget", key: "Préparation budget" }
    ]
  }
];

export function InteractiveChatbot() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Initialisation du premier message du bot
  useEffect(() => {
    setIsTyping(true);
    const timer = setTimeout(() => {
      setMessages([
        {
          sender: 'bot',
          text: BOT_STEPS[0].botMessage,
          stepIndex: 0
        }
      ]);
      setIsTyping(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  // Défilement automatique vers le bas
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSelectOption = (option) => {
    const currentStep = BOT_STEPS[currentStepIndex];
    const newAnswers = { ...answers, [currentStep.step]: option.key };
    setAnswers(newAnswers);

    // Ajouter la réponse de l'utilisateur dans le fil
    const userMessage = {
      sender: 'user',
      text: option.label
    };

    setMessages((prev) => [...prev, userMessage]);

    const nextIndex = currentStepIndex + 1;

    if (nextIndex < BOT_STEPS.length) {
      setCurrentStepIndex(nextIndex);
      setIsTyping(true);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: 'bot',
            text: BOT_STEPS[nextIndex].botMessage,
            stepIndex: nextIndex
          }
        ]);
        setIsTyping(false);
      }, 700);
    } else {
      // Fin du questionnaire !
      setCurrentStepIndex(BOT_STEPS.length);
      setIsTyping(true);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: 'bot',
            text: "Merci beaucoup ! Vos informations sont enregistrées. Cliquez sur le bouton ci-dessous pour être mis en relation directe avec notre artisan en chef sur WhatsApp pour votre devis gratuit personnalisé 👇",
            isFinal: true
          }
        ]);
        setIsTyping(false);
      }, 800);
    }
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
    setAnswers({});
    setIsTyping(true);
    setTimeout(() => {
      setMessages([
        {
          sender: 'bot',
          text: BOT_STEPS[0].botMessage,
          stepIndex: 0
        }
      ]);
      setIsTyping(false);
    }, 400);
  };

  // Construction du message WhatsApp pré-formaté
  const generateWhatsAppMessage = () => {
    const proj = answers[1] || "Peinture / Staff";
    const space = answers[2] || "Maison";
    const zone = answers[3] || "Lomé";
    const timing = answers[4] || "Dans le mois";

    return `Bonjour Golden Gate ! 👋\nJ'ai configuré mon projet sur votre site web :\n\n• Type de travaux : *${proj}*\n• Espace concerné : *${space}*\n• Quartier à Lomé : *${zone}*\n• Planning souhaité : *${timing}*\n\nJe souhaite obtenir un devis gratuit et fixer une visite de chantier. Merci !`;
  };

  const isCompleted = currentStepIndex >= BOT_STEPS.length;
  const currentStepData = BOT_STEPS[currentStepIndex];

  return (
    <section id="chatbot-devis" className="py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative">
      
      {/* Halos lumineux */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* En-tête de section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquareIcon size={14} />
            <span>Devis Express en 4 Questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif tracking-tight">
            Configurez votre Projet &amp;{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
              Obtenez votre Devis WhatsApp
            </span>
          </h2>

          <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Pas de formulaire compliqué à remplir : répondez simplement aux 4 questions en quelques clics pour pré-qualifier vos besoins.
          </p>

          <RosetteDivider className="max-w-xs mx-auto" />
        </div>

        {/* CADRE DU CHATBOT (Style Application WhatsApp / Mobile Luxe) */}
        <div className="bg-slate-900/95 rounded-2xl border-2 border-slate-800 shadow-2xl overflow-hidden backdrop-blur-md">
          
          {/* Header du Chat */}
          <div className="bg-slate-950 p-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <RosetteLogo size={38} />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-950"></span>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-white text-sm sm:text-base font-serif">Assistant Devis Golden Gate</h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    En Ligne
                  </span>
                </div>
                <p className="text-xs text-slate-400">Réponse automatique &amp; Transmission directe WhatsApp</p>
              </div>
            </div>

            {/* Bouton Recommencer */}
            <button
              onClick={handleReset}
              type="button"
              className="text-xs text-slate-400 hover:text-amber-300 underline transition-colors cursor-pointer"
            >
              Réinitialiser
            </button>
          </div>

          {/* Corps de la conversation défilante */}
          <div className="p-4 sm:p-6 space-y-4 min-h-[320px] max-h-[440px] overflow-y-auto bg-slate-950/60">
            
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[75%] p-3.5 sm:p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-amber-500 text-slate-950 font-semibold rounded-br-none shadow-lg'
                      : 'bg-slate-800/90 text-slate-100 rounded-bl-none border border-slate-700/80 shadow-md'
                  }`}
                >
                  {msg.sender === 'bot' && (
                    <div className="flex items-center gap-1.5 text-[10px] text-amber-400 font-bold mb-1 uppercase tracking-wider">
                      <span>Golden Gate</span>
                    </div>
                  )}
                  <p>{msg.text}</p>
                </div>
                <span className="text-[10px] text-slate-400 mt-1 px-1">
                  {msg.sender === 'user' ? 'Vous' : 'Artisan Golden Gate'}
                </span>
              </div>
            ))}

            {/* Indicateur de frappe réaliste "..." */}
            {isTyping && (
              <div className="flex items-start">
                <div className="bg-slate-800/90 border border-slate-700/80 p-3 rounded-2xl rounded-bl-none flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Zone des choix d'options cliquables */}
          <div className="p-4 sm:p-5 bg-slate-950 border-t border-slate-800">
            
            {!isCompleted && currentStepData && !isTyping && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span>Étape {currentStepData.step} sur {BOT_STEPS.length}</span>
                  <span className="text-amber-400 font-medium">Cliquez sur une option</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentStepData.options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(opt)}
                      type="button"
                      className="p-3 rounded-xl bg-slate-800/80 hover:bg-amber-500/20 text-slate-200 hover:text-amber-300 border border-slate-700 hover:border-amber-500/50 text-xs sm:text-sm font-semibold transition-all duration-200 text-left flex items-center justify-between group cursor-pointer"
                    >
                      <span>{opt.label}</span>
                      <ArrowRightIcon size={14} className="text-slate-500 group-hover:text-amber-400 transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Écran final une fois toutes les étapes validées */}
            {isCompleted && !isTyping && (
              <div className="space-y-4 text-center py-2 animate-fade-in">
                
                {/* Récapitulatif visuel des choix */}
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 text-left grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-slate-400">Travaux :</span>
                    <p className="font-bold text-amber-300">{answers[1] || 'Staff / Peinture'}</p>
                  </div>
                  <div>
                    <span className="text-slate-400">Espace :</span>
                    <p className="font-bold text-white">{answers[2] || 'Maison'}</p>
                  </div>
                  <div>
                    <span className="text-slate-400">Zone Lomé :</span>
                    <p className="font-bold text-white">{answers[3] || 'Lomé'}</p>
                  </div>
                  <div>
                    <span className="text-slate-400">Délai :</span>
                    <p className="font-bold text-emerald-400">{answers[4] || 'Dans le mois'}</p>
                  </div>
                </div>

                {/* Bouton Majeur de Redirection WhatsApp */}
                <a
                  href={getWhatsAppUrl(generateWhatsAppMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-base shadow-xl shadow-emerald-950/60 hover:shadow-emerald-600/40 transition-all flex items-center justify-center gap-3 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <WhatsAppIcon size={24} />
                  <span>Transmettre mon projet sur WhatsApp →</span>
                </a>

                <p className="text-[11px] text-slate-400">
                  Votre message est déjà pré-rempli. Vous n'avez plus qu'à cliquer sur "Envoyer" dans WhatsApp !
                </p>
              </div>
            )}

            {/* Option de contournement immédiat */}
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
              <span>Vous êtes pressé ?</span>
              <a
                href={getWhatsAppUrl("Bonjour Golden Gate ! Je préfère vous expliquer directement mon projet par message.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 font-medium underline flex items-center gap-1"
              >
                <span>Parler directement à un artisan sans questionnaire</span>
                <ArrowRightIcon size={12} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
