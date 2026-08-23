/**
 * Configuration globale de l'entreprise Golden Gate
 * Modifiez facilement le numéro WhatsApp et les informations ici.
 */
export const COMPANY = {
  name: 'Golden Gate',
  legalName: 'Golden Gate Décoration & Finitions SARL',
  tagline: "L'art de la finition parfaite : Peinture d'exception, Béton Ciré & Staff haut de gamme — Du Togo à toute l'Afrique (54 pays)",
  shortDescription: "Spécialiste de la peinture intérieure/extérieure, enduits gréxés & graffiato, béton ciré, faux-plafonds en staff mouluré, corniches lumineuses LED et revêtements décoratifs. Siège à Lomé (Togo), interventions dans les 54 pays du continent africain.",
  
  // Contact & WhatsApp
  whatsappNumber: '22893394874', // Format international sans '+' pour le lien wa.me
  whatsappDisplay: '+228 93 39 48 74',
  phoneAlt: '+228 93 39 48 74',
  email: 'contact@goldengatebulder.com',
  
  // Localisation
  city: 'Lomé',
  country: 'Togo',
  address: 'La Pampa, Lomé - Togo',
  district: 'La Pampa',
  googleMapsUrl: 'https://maps.google.com/?q=La+Pampa+Lomé+Togo',
  googleMapsEmbed: 'https://maps.google.com/maps?q=La%20Pampa%20Lom%C3%A9%20Togo&t=&z=15&ie=UTF8&iwloc=&output=embed',
  zonesSummary: 'Siège à Lomé (Togo). Équipes mobiles déployées dans les 54 pays d\'Afrique : Abidjan, Cotonou, Accra, Dakar, Douala, Libreville, Kinshasa, Brazzaville, Nairobi, Casablanca, Johannesburg et toutes les grandes capitales africaines.',
  
  // Horaires
  hours: 'Lun - Sam : 07h30 - 18h30',
  emergency: 'Urgences & Devis WhatsApp 7j/7',
  
  // Chiffres clés de confiance
  stats: {
    projectsDone: 160,
    yearsExperience: 8,
    satisfactionRate: 99,
    avgResponseMinutes: 15,
    countriesServed: 54,
  },

  // Régions africaines couvertes
  regionsServed: [
    'Afrique de l\'Ouest',
    'Afrique Centrale',
    'Afrique de l\'Est',
    'Afrique Australe',
    'Afrique du Nord',
  ],

  // Pays clés mis en avant (pour affichage footer et SEO)
  keyCountries: [
    { flag: '🇹🇬', name: 'Togo', capital: 'Lomé' },
    { flag: '🇧🇯', name: 'Bénin', capital: 'Cotonou' },
    { flag: '🇬🇭', name: 'Ghana', capital: 'Accra' },
    { flag: '🇨🇮', name: 'Côte d\'Ivoire', capital: 'Abidjan' },
    { flag: '🇸🇳', name: 'Sénégal', capital: 'Dakar' },
    { flag: '🇨🇲', name: 'Cameroun', capital: 'Douala' },
    { flag: '🇬🇦', name: 'Gabon', capital: 'Libreville' },
    { flag: '🇨🇩', name: 'RDC', capital: 'Kinshasa' },
    { flag: '🇨🇬', name: 'Congo', capital: 'Brazzaville' },
    { flag: '🇧🇫', name: 'Burkina Faso', capital: 'Ouagadougou' },
    { flag: '🇲🇱', name: 'Mali', capital: 'Bamako' },
    { flag: '🇬🇳', name: 'Guinée', capital: 'Conakry' },
    { flag: '🇳🇪', name: 'Niger', capital: 'Niamey' },
    { flag: '🇳🇬', name: 'Nigeria', capital: 'Lagos' },
    { flag: '🇰🇪', name: 'Kenya', capital: 'Nairobi' },
    { flag: '🇲🇦', name: 'Maroc', capital: 'Casablanca' },
    { flag: '🇿🇦', name: 'Afrique du Sud', capital: 'Johannesburg' },
    { flag: '🇲🇬', name: 'Madagascar', capital: 'Antananarivo' },
    { flag: '🇹🇩', name: 'Tchad', capital: 'N\'Djamena' },
    { flag: '🇹🇳', name: 'Tunisie', capital: 'Tunis' },
  ],
  
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
      description: 'Estimation transparente et détaillée sous 24h avec déplacement gratuit sur chantier à Lomé. Devis à distance pour les autres pays d\'Afrique.',
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
    },
    {
      title: 'Mobilité Pan-Africaine',
      description: 'Équipes qualifiées déployées dans les 54 pays d\'Afrique avec logistique intégrée.',
      icon: 'globe'
    }
  ]
};

/**
 * Fonction utilitaire pour générer un lien WhatsApp propre avec message encodé
 */
export function getWhatsAppUrl(customMessage) {
  const defaultMsg = "Bonjour Golden Gate, je souhaiterais obtenir des informations et un devis pour mes travaux de peinture / staff. Merci.";
  const msg = customMessage || defaultMsg;
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}

