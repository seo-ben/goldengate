/**
 * Catalogue complet des réalisations et photos réelles de Golden Gate Décoration SARL (Lomé - Togo).
 * Classées par catégories : Staff & Plafonds, Peinture Intérieure, Façades & Extérieur, Stuc & Décorations, Chantiers & Coulisses.
 */

export const REAL_GALLERY_CATEGORIES = [
  { id: 'all', label: 'Toutes les Photos' },
  { id: 'staff', label: 'Plafonds Staff & LED' },
  { id: 'peinture', label: 'Peinture Intérieure' },
  { id: 'facade', label: 'Façades & Extérieur' },
  { id: 'effets', label: 'Stuc & Décorations' },
  { id: 'chantier', label: 'Chantiers & Coulisses' },
];

export const REAL_GALLERY_IMAGES = [
  // --- 1. STAFF & PLAFONDS SUSPENDUS ---
  {
    id: 'staff-01',
    src: '/images/gallery/golden gate two.png',
    title: 'Faux-Plafond en Staff Double Décaissé & LED',
    category: 'staff',
    location: 'Agoè-Nyivé, Lomé',
    description: 'Plafond suspendu en staff mouluré avec double niveau, gorge lumineuse LED indirecte et spots encastrés.'
  },
  {
    id: 'staff-02',
    src: '/images/gallery/golden-gate-104.jpeg',
    title: 'Plafond Majestueux en Staff avec Décaissé & Spots',
    category: 'staff',
    location: 'Cacaveli, Lomé',
    description: 'Structure contemporaine en plâtre fibré de sisal avec décaissé central et éclairage encastré.'
  },
  {
    id: 'staff-03',
    src: '/images/gallery/golden-gate-101.jpeg',
    title: 'Gorge Lumineuse 360° & Corniches Royales',
    category: 'staff',
    location: 'Résidence Tokoin, Lomé',
    description: 'Corniches d\'angle sculptées main et bandeau lumineux LED blanc chaud 3000K pour salon de réception.'
  },
  {
    id: 'staff-04',
    src: '/images/gallery/golden-gate-104.jpeg',
    title: 'Plafond Moderne à Caissons Décoratifs',
    category: 'staff',
    location: 'Hédzranawoé, Lomé',
    description: 'Structure contemporaine à caissons asymétriques avec découpe laser et spots intégrés.'
  },
  {
    id: 'staff-05',
    src: '/images/gallery/golden-gate-105.jpeg',
    title: 'Faux-Plafond Salle à Manger & Îlot Central',
    category: 'staff',
    location: 'Baguida Plage, Lomé',
    description: 'Décaissé central ovale souligné d\'un ruban LED doux et finitions plâtre haute densité.'
  },
  {
    id: 'staff-06',
    src: '/images/gallery/golden-gate-108.jpeg',
    title: 'Plafond Staff Épuré & Éclairage Minimaliste',
    category: 'staff',
    location: 'Adidogomé, Lomé',
    description: 'Lignes architecturales épurées pour villa moderne, avec absorption acoustique et peinture mate veloutée.'
  },
  {
    id: 'staff-07',
    src: '/images/gallery/golden-gate-82.jpeg',
    title: 'Corniches et Rosaces en Staff Traditionnel',
    category: 'staff',
    location: 'Kodjoviakopé, Lomé',
    description: 'Moulures classiques ouvragées à la main par nos maîtres staffeurs togolais.'
  },
  {
    id: 'staff-08',
    src: '/images/gallery/golden-gate-77.jpeg',
    title: 'Double Décaissé Circulaire Rétroéclairé',
    category: 'staff',
    location: 'Agoè Télécom, Lomé',
    description: 'Conception géométrique complexe avec cercles imbriqués et variation d\'intensité lumineuse.'
  },
  {
    id: 'staff-09',
    src: '/images/gallery/golden-gate-78.jpeg',
    title: 'Gorge Lumineuse en Vague Ondulée',
    category: 'staff',
    location: 'Totsi, Lomé',
    description: 'Plafond artistique avec courbes fluides en plâtre fibré et ruban LED blanc neutre 4000K.'
  },
  {
    id: 'staff-10',
    src: '/images/gallery/golden-gate-76.jpeg',
    title: 'Staff Haute Finition & Intégration Climatisation',
    category: 'staff',
    location: 'Aflao-Gakli, Lomé',
    description: 'Faux-plafond technique intégrant diffuseurs de climatisation et trappes d\'accès discrètes.'
  },
  {
    id: 'staff-11',
    src: '/images/gallery/golden-gate-64.jpeg',
    title: 'Plafond Multizone pour Suite Parentale',
    category: 'staff',
    location: 'Zone Portuaire, Lomé',
    description: 'Séparation visuelle espace nuit et dressing par décalage de hauteurs sous plafond en staff.'
  },
  {
    id: 'staff-12',
    src: '/images/gallery/golden-gate-2.jpeg',
    title: 'Sculpture Plâtre & Motifs Géométriques',
    category: 'staff',
    location: 'La Pampa (Siège), Lomé',
    description: 'Prototype de motif staff décoratif sculpté dans nos ateliers de La Pampa.'
  },

  // --- 2. PEINTURE INTÉRIEURE HAUTE DÉFINITION ---
  {
    id: 'peint-01',
    src: '/images/gallery/golden gate one .png',
    title: 'Peinture Intérieure Satinée Zéro Trace',
    category: 'peinture',
    location: 'Agoè-Nyivé, Lomé',
    description: 'Application soignée en 3 couches après enduisage fin et ponçage millimétré sous lumière rasante.'
  },
  {
    id: 'peint-02',
    src: '/images/gallery/golden-gate-40.jpeg',
    title: 'Salon Rénové : Teinte Douce & Boiseries',
    category: 'peinture',
    location: 'Tokoin Habitat, Lomé',
    description: 'Harmonie des tons chauds, peinture acrylique veloutée lavable et laque satinée pour portes.'
  },
  {
    id: 'peint-03',
    src: '/images/gallery/golden-gate-48.jpeg',
    title: 'Mur d\'Accentuation & Ligne de Démarcation Nette',
    category: 'peinture',
    location: 'Hédzranawoé, Lomé',
    description: 'Bicolore précis avec découpe au laser pour un rendu graphique ultra moderne.'
  },
  {
    id: 'peint-04',
    src: '/images/gallery/golden-gate-53.jpeg',
    title: 'Peinture Lessivable pour Pièce à Vivre',
    category: 'peinture',
    location: 'Cacaveli, Lomé',
    description: 'Revêtement mural haute résistance contre les traces du quotidien et l\'humidité de Lomé.'
  },
  {
    id: 'peint-05',
    src: '/images/gallery/golden-gate-55.jpeg',
    title: 'Finition Mate Soyeuse pour Chambre à Coucher',
    category: 'peinture',
    location: 'Baguida, Lomé',
    description: 'Ambiance feutrée avec peinture sans odeur à faible émission de COV pour confort optimal.'
  },
  {
    id: 'peint-06',
    src: '/images/gallery/golden-gate-59.jpeg',
    title: 'Mise en Valeur Couloir & Cage d\'Escalier',
    category: 'peinture',
    location: 'Agoè Légbassito, Lomé',
    description: 'Application决策 sur grande hauteur avec échafaudage sécurisé et finitions sans raccords.'
  },
  {
    id: 'peint-07',
    src: '/images/gallery/golden-gate-61.jpeg',
    title: 'Peinture Plafond Blanc Pur Anti-Reflets',
    category: 'peinture',
    location: 'Kodjoviakopé, Lomé',
    description: 'Blanc lumineux profond masquant toutes les imperfections et maximisant la lumière naturelle.'
  },
  {
    id: 'peint-08',
    src: '/images/gallery/golden-gate-62.jpeg',
    title: 'Rénovation Complète Villa R+1',
    category: 'peinture',
    location: 'Adidogomé, Lomé',
    description: 'Murs, plafonds, plinthes et encadrements traités avec des peintures professionnelles haut de gamme.'
  },
  {
    id: 'peint-09',
    src: '/images/gallery/golden-gate-68.jpeg',
    title: 'Teinte Royale & Contraste Lumineux',
    category: 'peinture',
    location: 'Totsi, Lomé',
    description: 'Couleurs pigmentées durables garanties sans décoloration sous le soleil togolais.'
  },
  {
    id: 'peint-10',
    src: '/images/gallery/golden-gate-69.jpeg',
    title: 'Peinture Cuisine & Espaces d\'Eau',
    category: 'peinture',
    location: 'Nyékonakpoé, Lomé',
    description: 'Formule hydrofuge anti-moisissures et fongicide spéciale pièces humides.'
  },
  {
    id: 'peint-11',
    src: '/images/gallery/golden-gate-74.jpeg',
    title: 'Finitions Angle Droit Parfaites',
    category: 'peinture',
    location: 'Agoè-Nyivé, Lomé',
    description: 'Découpage minutieux entre plafond staff et murs colorés sans débordement.'
  },

  // --- 3. FAÇADES & EXTÉRIEURS ---
  {
    id: 'fac-01',
    src: '/images/gallery/golden-gate-111.jpeg',
    title: 'Villa Moderne Blanche & Colonnes Sculptées',
    category: 'facade',
    location: 'Cacaveli, Lomé',
    description: 'Ravalement complet de villa d\'architecte avec colonnes staffées et peinture extérieure blanche anti-UV.'
  },
  {
    id: 'fac-02',
    src: '/images/gallery/golden-gate-36.jpeg',
    title: 'Ravalement Façade Villa Contemporaine',
    category: 'facade',
    location: 'Baguida Plage, Lomé',
    description: 'Traitement hydrofuge complet et application de peinture siloxane imperméable anti-salissures.'
  },
  {
    id: 'fac-02',
    src: '/images/gallery/golden-gate-38.jpeg',
    title: 'Façade Blanche & Grise aux Volumes Modernes',
    category: 'facade',
    location: 'Agoè Télécom, Lomé',
    description: 'Soulignement des volumes architecturaux avec contraste de teintes résistant aux UV tropicaux.'
  },
  {
    id: 'fac-03',
    src: '/images/gallery/golden-gate-44.jpeg',
    title: 'Enduit Extérieur & Protection Anti-Fissures',
    category: 'facade',
    location: 'Cacaveli, Lomé',
    description: 'Réparation des microfissures et pose d\'une résine souple élastomère haute durabilité.'
  },
  {
    id: 'fac-04',
    src: '/images/gallery/golden-gate-45.jpeg',
    title: 'Peinture Façade Résidence Privée',
    category: 'facade',
    location: 'Hédzranawoé, Lomé',
    description: 'Rénovation totale extérieure avec protection renforcée contre les pluies de mousson.'
  },
  {
    id: 'fac-05',
    src: '/images/gallery/golden-gate-46.jpeg',
    title: 'Traitement Murs de Clôture & Portails',
    category: 'facade',
    location: 'Tokoin, Lomé',
    description: 'Peinture minérale imperméable et vernis de protection anti-poussière.'
  },
  {
    id: 'fac-06',
    src: '/images/gallery/golden-gate-49.jpeg',
    title: 'Mise en Couleur Façade d\'Immeuble',
    category: 'facade',
    location: 'Zone Portuaire, Lomé',
    description: 'Chantier grande envergure réalisé dans les délais stricts avec sécurité totale.'
  },
  {
    id: 'fac-07',
    src: '/images/gallery/golden-gate-51.jpeg',
    title: 'Rénovation Façade Villa R+2',
    category: 'facade',
    location: 'Adidogomé, Lomé',
    description: 'Nettoyage haute pression, sous-couche d\'accroche et bi-couche siloxane anti-algues.'
  },
  {
    id: 'fac-08',
    src: '/images/gallery/golden-gate-54.jpeg',
    title: 'Détails Architecturaux & Balcons Extérieurs',
    category: 'facade',
    location: 'Kodjoviakopé, Lomé',
    description: 'Finition soignée des avant-toits, acrotères et sous-faces de dalles extérieures.'
  },
  {
    id: 'fac-09',
    src: '/images/gallery/golden-gate-56.jpeg',
    title: 'Façade Étanche aux Embruns Marins',
    category: 'facade',
    location: 'Baguida Côte, Lomé',
    description: 'Peinture spécifique résistante au sel marin et au climat côtier de Lomé.'
  },
  {
    id: 'fac-10',
    src: '/images/gallery/golden-gate-57.jpeg',
    title: 'Embellissement Extérieur & Colonnes',
    category: 'facade',
    location: 'Agoè Minamadou, Lomé',
    description: 'Colonnes moulurées extérieures et enduit lissé hydrofuge.'
  },
  {
    id: 'fac-11',
    src: '/images/gallery/golden-gate-63.jpeg',
    title: 'Façade Latérale Protégée Contre l\'Humidité',
    category: 'facade',
    location: 'Totsi, Lomé',
    description: 'Imperméabilisation des parois exposées aux intempéries saisonnières.'
  },
  {
    id: 'fac-12',
    src: '/images/gallery/golden-gate-65.jpeg',
    title: 'Finition Façade Éclatante',
    category: 'facade',
    location: 'La Pampa, Lomé',
    description: 'Rendu impeccable sous la lumière solaire avec garantie de tenue dans le temps.'
  },

  // --- 4. STUC & EFFETS DÉCORATIFS ---
  {
    id: 'eff-01',
    src: '/images/gallery/golden-gate-87.jpeg',
    title: 'Stuc Vénitien Effet Marbre Poli',
    category: 'effets',
    location: 'Agoè-Nyivé, Lomé',
    description: 'Enduit à la chaux lissé à la spatule avec cire protectrice brillante effet miroir.'
  },
  {
    id: 'eff-02',
    src: '/images/gallery/golden-gate-88.jpeg',
    title: 'Mur Décoratif Texturé & Relief 3D',
    category: 'effets',
    location: 'Cacaveli, Lomé',
    description: 'Jeu d\'ombres et de textures en staff sculpté pour hall d\'entrée majestueux.'
  },
  {
    id: 'eff-03',
    src: '/images/gallery/golden-gate-90.jpeg',
    title: 'Tête de Lit en Staff Mural Rétroéclairé',
    category: 'effets',
    location: 'Hédzranawoé, Lomé',
    description: 'Panneau décoratif sur-mesure intégrant prises, liseuses et éclairage d\'ambiance.'
  },
  {
    id: 'eff-04',
    src: '/images/gallery/golden-gate-91.jpeg',
    title: 'Enduit Nacré & Reflets Métallisés',
    category: 'effets',
    location: 'Tokoin, Lomé',
    description: 'Peinture décorative sablée avec micro-paillettes or pour salon de réception.'
  },
  {
    id: 'eff-05',
    src: '/images/gallery/golden-gate-92.jpeg',
    title: 'Faux-Marbre & Veinures Réalisées Main',
    category: 'effets',
    location: 'Kodjoviakopé, Lomé',
    description: 'Imitation marbre de carrare sur colonnes et soubassements par notre artiste peintre.'
  },
  {
    id: 'eff-06',
    src: '/images/gallery/golden-gate-96.jpeg',
    title: 'Niche Murale Décorative en Staff',
    category: 'effets',
    location: 'Baguida, Lomé',
    description: 'Niches cintrées encastrées dans la maçonnerie avec spots LED miniatures.'
  },
  {
    id: 'eff-07',
    src: '/images/gallery/golden-gate-97.jpeg',
    title: 'Arche Orientale Moulurée en Plâtre',
    category: 'effets',
    location: 'Agoè Télécom, Lomé',
    description: 'Passage entre salon et salle à manger orné d\'une arche sculptée sur-mesure.'
  },
  {
    id: 'eff-08',
    src: '/images/gallery/golden-gate-98.jpeg',
    title: 'Habillage Mural Contemporain & Baguettes',
    category: 'effets',
    location: 'Totsi, Lomé',
    description: 'Moulures murales façon boiseries haussmanniennes en staff haute densité.'
  },
  {
    id: 'eff-09',
    src: '/images/gallery/golden-gate-99.jpeg',
    title: 'Plafond Étoilé & Ciel Lumineux',
    category: 'effets',
    location: 'Adidogomé, Lomé',
    description: 'Intégration de fibres optiques scintillantes dans le faux-plafond en staff.'
  },
  {
    id: 'eff-10',
    src: '/images/gallery/golden-gate-103.jpeg',
    title: 'Peinture à Effet Béton Ciré Urbain',
    category: 'effets',
    location: 'La Pampa, Lomé',
    description: 'Enduit minéral lissé pour un style loft contemporain très tendance à Lomé.'
  },
  {
    id: 'eff-11',
    src: '/images/gallery/golden-gate-107.jpeg',
    title: 'Décoration Murale Florale Sculptée',
    category: 'effets',
    location: 'Nyékonakpoé, Lomé',
    description: 'Bas-relief en plâtre façonné directement sur le mur par nos artisans.'
  },
  {
    id: 'eff-12',
    src: '/images/gallery/golden-gate-114.jpeg',
    title: 'Finitions de Luxe & Ornementation Or',
    category: 'effets',
    location: 'Cacaveli, Lomé',
    description: 'Rehauts à la feuille d\'or et patine dorée sur moulures de plafond.'
  },

  // --- 5. CHANTIERS & COULISSES DU SAVOIR-FAIRE ---
  {
    id: 'chant-01',
    src: '/images/gallery/golden-gate-10.jpeg',
    title: 'Préparation et Protection Totale du Chantier',
    category: 'chantier',
    location: 'Agoè-Nyivé, Lomé',
    description: 'Bâchage des sols, calicotage des joints et masquage haute adhérence avant travaux.'
  },
  {
    id: 'chant-02',
    src: '/images/gallery/golden-gate-14.jpeg',
    title: 'Ossature & Fixation des Suspentes du Staff',
    category: 'chantier',
    location: 'Baguida, Lomé',
    description: 'Alignement au niveau laser et ancrage sécurisé des structures suspendues.'
  },
  {
    id: 'chant-03',
    src: '/images/gallery/golden-gate-20.jpeg',
    title: 'Fabrication des Plaques de Staff en Atelier',
    category: 'chantier',
    location: 'La Pampa (Atelier), Lomé',
    description: 'Coulage du plâtre moulé fibré au sisal dans nos ateliers togolais.'
  },
  {
    id: 'chant-04',
    src: '/images/gallery/golden-gate-22.jpeg',
    title: 'Ponçage Haute Précision & Lumière Rasante',
    category: 'chantier',
    location: 'Tokoin, Lomé',
    description: 'Contrôle qualité millimétré pour éliminer toute trace ou imperfection avant peinture.'
  },
  {
    id: 'chant-05',
    src: '/images/gallery/golden-gate-25.jpeg',
    title: 'Application de l\'Enduit de Finition Croisé',
    category: 'chantier',
    location: 'Hédzranawoé, Lomé',
    description: 'Geste artisanal précis au platoir pour une planéité absolue des murs.'
  },
  {
    id: 'chant-06',
    src: '/images/gallery/golden-gate-32.jpeg',
    title: 'Montage des Échafaudages Sécurisés',
    category: 'chantier',
    location: 'Agoè Télécom, Lomé',
    description: 'Travail en hauteur sécurisé pour plafonds cathédrales et grands salons.'
  },
  {
    id: 'chant-07',
    src: '/images/gallery/golden-gate-34.jpeg',
    title: 'Câblage & Intégration des Rubans LED',
    category: 'chantier',
    location: 'Cacaveli, Lomé',
    description: 'Pose des profilés aluminium dissipateurs et raccordements électriques sécurisés.'
  },
  {
    id: 'chant-08',
    src: '/images/gallery/golden-gate-42.jpeg',
    title: 'Pose des Corniches d\'Angle et Raccords',
    category: 'chantier',
    location: 'Kodjoviakopé, Lomé',
    description: 'Assemblage invisible des joints avec colle plâtre spéciale sans fissure.'
  },
  {
    id: 'chant-09',
    src: '/images/gallery/golden-gate-80.jpeg',
    title: 'Nettoyage Fin de Chantier & Débâchage',
    category: 'chantier',
    location: 'Adidogomé, Lomé',
    description: 'Livraison d\'un chantier immaculé, nettoyé et prêt à habiter.'
  },
  {
    id: 'chant-10',
    src: '/images/gallery/golden-gate-84.jpeg',
    title: 'Vérification Finale avec le Client',
    category: 'chantier',
    location: 'Totsi, Lomé',
    description: 'Réception des travaux avec le propriétaire et garantie de satisfaction 100%.'
  },
  {
    id: 'chant-11',
    src: '/images/gallery/golden-gate-89.jpeg',
    title: 'Équipe Golden Gate en Pleine Action',
    category: 'chantier',
    location: 'La Pampa, Lomé',
    description: 'Nos compagnons peintres et staffeurs passionnés par l\'art de la perfection.'
  },
  {
    id: 'chant-12',
    src: '/images/gallery/golden-gate-106.jpeg',
    title: 'Contrôle de Teinte & Échantillons sur Mur',
    category: 'chantier',
    location: 'Nyékonakpoé, Lomé',
    description: 'Validation de la couleur avec le client à la lumière du jour avant application totale.'
  },
  {
    id: 'chant-13',
    src: '/images/gallery/golden-gate-112.jpeg',
    title: 'Moulage Sur-Mesure de Motifs Décoratifs',
    category: 'chantier',
    location: 'La Pampa (Atelier), Lomé',
    description: 'Création artisanale de pièces uniques pour villas d\'exception au Togo.'
  }
];
