/**
 * Configuration globale de l'entreprise Golden Gate
 * Modifiez facilement le numéro WhatsApp et les informations ici.
 */
export const COMPANY = {
  name: 'Golden Gate',
  legalName: 'Golden Gate Décoration & Finitions SARL',
  tagline: "L'art de la finition parfaite : Peinture d'exception & Staff haut de gamme à Lomé",
  shortDescription: "Spécialiste de la peinture intérieure/extérieure, des faux-plafonds en staff mouluré, corniches lumineuses LED et revêtements décoratifs au Togo.",
  
  // Contact & WhatsApp
  whatsappNumber: '22893394874', // Format international sans '+' pour le lien wa.me
  whatsappDisplay: '+228 93 39 48 74',
  phoneAlt: '+228 93 39 48 74',
  email: 'contact@goldengate-togo.com',
  
  // Localisation
  city: 'Lomé',
  country: 'Togo',
  address: 'La Pampa, Lomé - Togo',
  district: 'La Pampa',
  googleMapsUrl: 'https://maps.google.com/?q=La+Pampa+Lomé+Togo',
  googleMapsEmbed: 'https://maps.google.com/maps?q=La%20Pampa%20Lom%C3%A9%20Togo&t=&z=15&ie=UTF8&iwloc=&output=embed',
  zonesSummary: 'Intervention dans tout le Grand Lomé (La Pampa, Agoè, Tokoin, Hédzranawoé, Baguida, Adidogomé...) et grandes villes du Togo',
  
  // Horaires
  hours: 'Lun - Sam : 07h30 - 18h30',
  emergency: 'Urgences & Devis WhatsApp 7j/7',
  
  // Chiffres clés de confiance
  stats: {
    projectsDone: 160,
    yearsExperience: 8,
    satisfactionRate: 99,
    avgResponseMinutes: 15,
  },
  
  // Réseaux sociaux
  socials: {
    facebook: 'https://facebook.com/goldengate.togo',
    instagram: 'https://instagram.com/goldengate.togo',
    tiktok: 'https://tiktok.com/@goldengate.togo',
  },
  
  // Garanties
  guarantees: [
    {
      title: 'Devis 100% Gratuit & Sans Engagement',
      description: 'Estimation transparente et détaillée sous 24h avec déplacement gratuit sur chantier à Lomé.',
      icon: 'document'
    },
    {
      title: 'Zéro Mauvaise Surprise',
      description: 'Prix fixé par devis écrit. Pas de frais cachés en cours de chantier.',
      icon: 'shield'
    },
    {
      title: 'Finitions au Millimètre',
      description: 'Ponçage soigné, protection complète de vos meubles et sols, nettoyage final impeccable.',
      icon: 'sparkles'
    },
    {
      title: 'Respect Strict des Délais',
      description: 'Planning convenu respecté à la lettre pour emménager ou ouvrir vos locaux à temps.',
      icon: 'clock'
    }
  ]
};

/**
 * Fonction utilitaire pour générer un lien WhatsApp propre avec message encodé
 */
export function getWhatsAppUrl(customMessage) {
  const defaultMsg = "Bonjour Golden Gate, je souhaiterais obtenir des informations et un devis pour mes travaux de peinture / staff à Lomé. Merci.";
  const msg = customMessage || defaultMsg;
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}
