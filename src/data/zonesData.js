/**
 * Zones d'intervention Golden Gate — Couverture Pan-Africaine (54 Pays)
 * Structure par catégorie : Siège → Togo → Régions Africaines
 */

// Zones locales (Lomé & Togo)
export const ZONES_LOME = [
  {
    name: 'La Pampa (Siège & Atelier)',
    description: 'La Pampa, Tokoin, Boulevard du 13 Janvier, Centre & Environs',
    status: 'Intervention immédiate < 24h',
    badge: 'Siège & Proximité',
    projectsCount: '50+ chantiers'
  },
  {
    name: 'Agoè-Nyivé & Environs',
    description: 'Télécom, Cacaveli, Logopé, Deux Lions, Assiyéyé, Ségbé',
    status: 'Intervention sous 24h',
    badge: 'Zone Fréquente',
    projectsCount: '45+ chantiers'
  },
  {
    name: 'Tokoin & Centre-Ville',
    description: 'Tokoin Douane, Hôpital, Forever, Casablanca, Deckon, Boulevard',
    status: 'Intervention sous 24h',
    badge: 'Zone Principale',
    projectsCount: '38+ chantiers'
  },
  {
    name: 'Hédzranawoé & Aéroport',
    description: 'Hédzranawoé Marché, Kégué, Totsi, Aflao Gakli, Bè-Kpota',
    status: 'Intervention sous 24h',
    badge: 'Zone Fréquente',
    projectsCount: '30+ chantiers'
  },
  {
    name: 'Baguida & Zone Littorale',
    description: 'Baguida Plage, Avépozo, Kpogan, Port de Lomé, Ablogamé',
    status: 'Intervention sous 24h - 48h',
    badge: 'Zone Spéciale Façade Siloxane',
    projectsCount: '25+ chantiers'
  },
  {
    name: 'Adidogomé & Banlieue Ouest',
    description: 'Grand Contournement, Zossimé, Yokoe, Sagbado, Sanguéra',
    status: 'Intervention sous 24h - 48h',
    badge: 'Nouvelles Villas',
    projectsCount: '22+ chantiers'
  },
];

export const ZONES_TOGO = [
  {
    name: 'Villes de l\'Intérieur du Togo',
    description: 'Tsévié, Kpalimé, Aného, Atakpamé, Kara, Sokodé, Dapaong (grands projets & villas)',
    status: 'Sur RDV & Étude préalable',
    badge: 'Grand Togo',
    projectsCount: '15+ chantiers'
  }
];

// Zones internationales par région africaine
export const ZONES_AFRIQUE_OUEST = {
  region: 'Afrique de l\'Ouest — Golfe de Guinée & Sahel',
  emoji: '🌍',
  badge: 'Zone Principale Internationale',
  status: 'Mobilité Rapide — Équipes Déployées',
  countries: [
    { flag: '🇧🇯', name: 'Bénin', cities: 'Cotonou, Porto-Novo, Parakou', highlight: true },
    { flag: '🇬🇭', name: 'Ghana', cities: 'Accra, Tema, Kumasi', highlight: true },
    { flag: '🇨🇮', name: 'Côte d\'Ivoire', cities: 'Abidjan, Yamoussoukro, Bouaké', highlight: true },
    { flag: '🇳🇬', name: 'Nigeria', cities: 'Lagos, Abuja, Port Harcourt', highlight: true },
    { flag: '🇸🇳', name: 'Sénégal', cities: 'Dakar, Saint-Louis, Thiès', highlight: true },
    { flag: '🇧🇫', name: 'Burkina Faso', cities: 'Ouagadougou, Bobo-Dioulasso' },
    { flag: '🇲🇱', name: 'Mali', cities: 'Bamako, Sikasso' },
    { flag: '🇬🇳', name: 'Guinée', cities: 'Conakry, Kankan' },
    { flag: '🇳🇪', name: 'Niger', cities: 'Niamey, Zinder' },
    { flag: '🇲🇷', name: 'Mauritanie', cities: 'Nouakchott, Nouadhibou' },
    { flag: '🇬🇲', name: 'Gambie', cities: 'Banjul, Serekunda' },
    { flag: '🇬🇼', name: 'Guinée-Bissau', cities: 'Bissau' },
    { flag: '🇨🇻', name: 'Cap-Vert', cities: 'Praia, Mindelo' },
    { flag: '🇸🇱', name: 'Sierra Leone', cities: 'Freetown' },
    { flag: '🇱🇷', name: 'Liberia', cities: 'Monrovia' },
  ]
};

export const ZONES_AFRIQUE_CENTRALE = {
  region: 'Afrique Centrale',
  emoji: '🌍',
  badge: 'Zone Afrique Centrale',
  status: 'Missions & Déplacements',
  countries: [
    { flag: '🇨🇲', name: 'Cameroun', cities: 'Douala, Yaoundé, Bafoussam', highlight: true },
    { flag: '🇬🇦', name: 'Gabon', cities: 'Libreville, Port-Gentil, Franceville', highlight: true },
    { flag: '🇨🇬', name: 'Congo-Brazzaville', cities: 'Brazzaville, Pointe-Noire', highlight: true },
    { flag: '🇨🇩', name: 'RD Congo', cities: 'Kinshasa, Lubumbashi, Goma', highlight: true },
    { flag: '🇹🇩', name: 'Tchad', cities: 'N\'Djamena, Moundou' },
    { flag: '🇨🇫', name: 'Centrafrique', cities: 'Bangui' },
    { flag: '🇬🇶', name: 'Guinée Équatoriale', cities: 'Malabo, Bata' },
    { flag: '🇸🇹', name: 'São Tomé-et-Príncipe', cities: 'São Tomé' },
  ]
};

export const ZONES_AFRIQUE_EST = {
  region: 'Afrique de l\'Est',
  emoji: '🌍',
  badge: 'Zone Afrique de l\'Est',
  status: 'Missions Internationales',
  countries: [
    { flag: '🇰🇪', name: 'Kenya', cities: 'Nairobi, Mombasa', highlight: true },
    { flag: '🇹🇿', name: 'Tanzanie', cities: 'Dar es Salaam, Zanzibar' },
    { flag: '🇷🇼', name: 'Rwanda', cities: 'Kigali', highlight: true },
    { flag: '🇧🇮', name: 'Burundi', cities: 'Bujumbura' },
    { flag: '🇺🇬', name: 'Ouganda', cities: 'Kampala, Entebbe' },
    { flag: '🇪🇹', name: 'Éthiopie', cities: 'Addis-Abeba' },
    { flag: '🇩🇯', name: 'Djibouti', cities: 'Djibouti-Ville', highlight: true },
    { flag: '🇸🇴', name: 'Somalie', cities: 'Mogadiscio' },
    { flag: '🇪🇷', name: 'Érythrée', cities: 'Asmara' },
    { flag: '🇸🇩', name: 'Soudan', cities: 'Khartoum' },
    { flag: '🇸🇸', name: 'Soudan du Sud', cities: 'Djouba' },
  ]
};

export const ZONES_AFRIQUE_AUSTRALE = {
  region: 'Afrique Australe & Îles',
  emoji: '🌍',
  badge: 'Zone Afrique Australe',
  status: 'Missions Premium',
  countries: [
    { flag: '🇿🇦', name: 'Afrique du Sud', cities: 'Johannesburg, Le Cap, Durban', highlight: true },
    { flag: '🇲🇿', name: 'Mozambique', cities: 'Maputo, Beira' },
    { flag: '🇲🇬', name: 'Madagascar', cities: 'Antananarivo, Nosy Be', highlight: true },
    { flag: '🇦🇴', name: 'Angola', cities: 'Luanda, Lobito', highlight: true },
    { flag: '🇿🇲', name: 'Zambie', cities: 'Lusaka, Livingstone' },
    { flag: '🇿🇼', name: 'Zimbabwe', cities: 'Harare, Bulawayo' },
    { flag: '🇲🇼', name: 'Malawi', cities: 'Lilongwe, Blantyre' },
    { flag: '🇧🇼', name: 'Botswana', cities: 'Gaborone' },
    { flag: '🇳🇦', name: 'Namibie', cities: 'Windhoek' },
    { flag: '🇸🇿', name: 'Eswatini', cities: 'Mbabane' },
    { flag: '🇱🇸', name: 'Lesotho', cities: 'Maseru' },
    { flag: '🇰🇲', name: 'Comores', cities: 'Moroni' },
    { flag: '🇲🇺', name: 'Maurice', cities: 'Port-Louis', highlight: true },
    { flag: '🇸🇨', name: 'Seychelles', cities: 'Victoria' },
  ]
};

export const ZONES_AFRIQUE_NORD = {
  region: 'Afrique du Nord',
  emoji: '🌍',
  badge: 'Zone Afrique du Nord',
  status: 'Missions Spéciales',
  countries: [
    { flag: '🇲🇦', name: 'Maroc', cities: 'Casablanca, Rabat, Marrakech, Tanger', highlight: true },
    { flag: '🇹🇳', name: 'Tunisie', cities: 'Tunis, Sfax, Sousse', highlight: true },
    { flag: '🇩🇿', name: 'Algérie', cities: 'Alger, Oran, Constantine' },
    { flag: '🇱🇾', name: 'Libye', cities: 'Tripoli, Benghazi' },
    { flag: '🇪🇬', name: 'Égypte', cities: 'Le Caire, Alexandrie' },
  ]
};

// Export unifié pour compatibilité ascendante
export const ZONES = [
  ...ZONES_LOME,
  ...ZONES_TOGO,
  {
    name: 'Afrique de l\'Ouest (15 pays)',
    description: 'Bénin, Ghana, Côte d\'Ivoire, Nigeria, Sénégal, Burkina Faso, Mali, Guinée, Niger, Mauritanie, Gambie, Guinée-Bissau, Cap-Vert, Sierra Leone, Liberia',
    status: 'Mobilité Rapide — Équipes Déployées',
    badge: 'Afrique de l\'Ouest',
    projectsCount: 'Missions Internationales'
  },
  {
    name: 'Afrique Centrale (8 pays)',
    description: 'Cameroun, Gabon, Congo-Brazzaville, RD Congo, Tchad, Centrafrique, Guinée Équatoriale, São Tomé',
    status: 'Missions & Déplacements',
    badge: 'Afrique Centrale',
    projectsCount: 'Missions Internationales'
  },
  {
    name: 'Afrique de l\'Est (11 pays)',
    description: 'Kenya, Tanzanie, Rwanda, Burundi, Ouganda, Éthiopie, Djibouti, Somalie, Érythrée, Soudan, Soudan du Sud',
    status: 'Missions Internationales',
    badge: 'Afrique de l\'Est',
    projectsCount: 'Missions Premium'
  },
  {
    name: 'Afrique Australe & Îles (14 pays)',
    description: 'Afrique du Sud, Mozambique, Madagascar, Angola, Zambie, Zimbabwe, Malawi, Botswana, Namibie, Eswatini, Lesotho, Comores, Maurice, Seychelles',
    status: 'Missions Premium',
    badge: 'Afrique Australe',
    projectsCount: 'Missions Premium'
  },
  {
    name: 'Afrique du Nord (5 pays)',
    description: 'Maroc, Tunisie, Algérie, Libye, Égypte',
    status: 'Missions Spéciales',
    badge: 'Afrique du Nord',
    projectsCount: 'Missions Spéciales'
  }
];

// Toutes les régions internationales pour le composant à onglets
export const ZONES_REGIONS = [
  { id: 'lome', label: '📍 Lomé', data: ZONES_LOME },
  { id: 'togo', label: '🇹🇬 Togo', data: ZONES_TOGO },
  { id: 'ouest', label: '🌍 Afrique Ouest', dataRegion: ZONES_AFRIQUE_OUEST },
  { id: 'centrale', label: '🌍 Afrique Centrale', dataRegion: ZONES_AFRIQUE_CENTRALE },
  { id: 'est', label: '🌍 Afrique Est', dataRegion: ZONES_AFRIQUE_EST },
  { id: 'australe', label: '🌍 Afrique Australe', dataRegion: ZONES_AFRIQUE_AUSTRALE },
  { id: 'nord', label: '🌍 Afrique Nord', dataRegion: ZONES_AFRIQUE_NORD },
];
