# Golden Gate — Stratégie & Conception du Site Web

**Entreprise :** Golden Gate (Peinture & Staffeur — Togo)
**Objectif :** Créer un site web puissant, orienté conversion, qui incite les clients à contacter l'entreprise via WhatsApp et réseaux sociaux, tout en étant bien référencé sur Google.

---

## 1. Le message psychologique à faire passer

Un client qui cherche un peintre/staffeur a peur de 3 choses :
- Se faire arnaquer
- Un travail bâclé
- Un artisan injoignable après paiement

Tout le site doit répondre à ces 3 peurs **avant même que le visiteur ne les formule** :

| Peur du client | Réponse sur le site |
|---|---|
| Se faire arnaquer | Preuve sociale : témoignages avec noms réels, quartiers |
| Travail bâclé | Preuve par l'image : avant/après en grand format, chantiers réels |
| Injoignable après paiement | Contact instantané et visible (WhatsApp), réactivité affichée |

**Principes clés :**
- Preuve par l'image plutôt que par le texte (photos réelles, pas de stock photos)
- Preuve sociale : témoignages clients avec nom + quartier + photo si possible
- Autorité douce : nombre de chantiers réalisés, années d'expérience, zones couvertes
- Accessibilité immédiate : bouton WhatsApp visible en permanence

---

## 2. Architecture du site (sitemap)

```
Accueil
├── Hero (accroche + CTA WhatsApp/Chatbot)
├── Nos réalisations (galerie filtrable : peinture / staff / façade)
├── Pourquoi nous faire confiance (chiffres clés + témoignages)
├── Nos services (peinture intérieure/extérieure, staff décoratif, façade)
├── Processus de travail (3-4 étapes simples)
├── Zone d'intervention (carte ou liste de quartiers)
├── Contact / CTA final (WhatsApp + Facebook/Instagram)

Page Réalisations (détaillée, filtrable par type de chantier)
Page À propos (histoire, équipe, valeurs)
Page Contact (formulaire léger + WhatsApp + réseaux)
```

> Pas plus de 5 pages pour un artisan — trop de pages dilue le SEO local et perd le visiteur.

---

## 3. Câblage (wireframe) de la page d'accueil

1. **Header sticky** — logo, menu court, bouton WhatsApp visible en permanence (vert, contrasté)
2. **Hero** — photo/vidéo d'un chantier terminé impressionnant, titre fort, sous-titre rassurant, double CTA (Chatbot WhatsApp + "Voir nos réalisations")
3. **Bande de confiance** — chiffres clés (ex : "+150 chantiers", "8 ans d'expérience", "Lomé et environs")
4. **Galerie avant/après** — format glissant ou grille, cliquable pour zoomer
5. **Témoignages** — carrousel avec vrais noms
6. **Services** — 3-4 cartes claires avec icônes, sans jargon technique
7. **Processus** — rassure sur le sérieux (ex : Contact → Devis gratuit → Réalisation → Suivi)
8. **CTA final** — bloc bleu/vert avec chatbot WhatsApp + liens réseaux sociaux
9. **Footer** — coordonnées, zone, réseaux, mentions légales

> Un **bouton WhatsApp flottant fixe** (bas droite, sur toutes les pages) est indispensable.

---

## 4. Design

- **Bleu** → confiance, sérieux professionnel. Couleur dominante (headers, fonds)
- **Vert** → validation, action. Réservé aux CTA (WhatsApp, boutons d'action) pour créer un contraste qui guide l'œil
- **Blanc / gris clair** → fond neutre pour laisser respirer les photos
- **Typographie** → moderne, lisible, sobre (le sérieux passe aussi par la sobriété)
- **Photos** → haute qualité, format cohérent, filtre uniforme léger pour une identité visuelle reconnaissable

---

## 5. Référencement (SEO)

- Fiche **Google Business Profile** optimisée (photos, avis, horaires, zone) — souvent plus déterminante que le site lui-même pour un artisan local
- Mots-clés ciblés : "peintre Lomé", "staffeur Togo", "décoration plafond staff Lomé", etc., intégrés naturellement
- Site rapide et **mobile-first** (majorité des visiteurs togolais sur mobile/4G → images optimisées, chargement léger)
- Balises structurées **schema.org LocalBusiness** pour apparaître avec étoiles/avis dans Google
- Contenu texte minimal mais pertinent sur chaque page (Google a besoin de texte, pas seulement d'images)

---

## 6. Le chatbot WhatsApp (au lieu du simple bouton)

### Pourquoi c'est plus fort qu'un bouton direct

Un bouton WhatsApp classique envoie le client sur une page vide qu'il doit remplir lui-même — beaucoup abandonnent à ce moment. Un chatbot qui pose 2-3 questions avant de rediriger :

- **Réduit la friction** — le client clique sur des options plutôt que d'écrire
- **Pré-qualifie le lead** — Golden Gate reçoit un message déjà structuré (type de travaux, quartier, urgence)
- **Renforce l'image pro** — donne une impression d'entreprise structurée
- **Filtre les curieux** — ceux qui vont au bout sont plus engagés

### Parcours conversationnel proposé

```
Bot : "Bonjour 👋 Bienvenue chez Golden Gate.
       Quel type de projet avez-vous en tête ?"
       [Peinture] [Staff décoratif] [Façade] [Autre]

Bot : "Super ! C'est pour un intérieur ou extérieur ?"
       [Intérieur] [Extérieur] [Les deux]

Bot : "Dans quelle zone se trouve le chantier ?"
       [Lomé centre] [Périphérie] [Autre ville]

Bot : "Parfait. Un dernier détail : c'est plutôt urgent
       ou vous planifiez pour plus tard ?"
       [Urgent] [Dans le mois] [Je me renseigne]

Bot : "Merci ! Je vous mets en relation directe avec notre
       équipe sur WhatsApp pour un devis gratuit 👇"
       [Continuer sur WhatsApp →]
```

Le dernier bouton ouvre WhatsApp (lien `wa.me`) avec un **message pré-rempli automatiquement**, par exemple :

> "Bonjour, je m'intéresse à un projet de *Peinture* pour un *Intérieur* à *Lomé centre*, c'est *urgent*."

Golden Gate reçoit un message clair, sait exactement quoi répondre, et gagne du temps.

### Points d'attention

- **3-4 questions maximum** — au-delà, le taux d'abandon grimpe
- Toujours une option **"Parler directement à quelqu'un"** dès le début, pour ne jamais forcer le parcours
- **Ton chaleureux, pas robotique** — emojis modérés, vocabulaire simple
- Ce n'est **pas une IA conversationnelle complète**, mais un simple arbre de décision (boutons prédéfinis) : plus rapide à charger, plus fiable, moins cher à développer/maintenir — largement suffisant pour ce cas d'usage
- Le **bouton WhatsApp flottant classique reste disponible en parallèle**, pour ceux qui veulent aller plus vite

---

## 7. Prochaines étapes possibles

- [ ] Prototype fonctionnel de la page d'accueil (HTML/CSS)
- [ ] Prototype interactif du chatbot (widget HTML/JS avec redirection WhatsApp automatique)
- [ ] Rédaction des textes définitifs (accroche, services, à propos)
- [ ] Sélection et retouche des photos de chantiers
- [ ] Mise en place de la fiche Google Business Profile


Voilà une version nettement plus poussée. Ce qui change concrètement :

Identité visuelle propre à Golden Gate

La rosace de moulure (motif de staffeur) devient un vrai fil conducteur : logo, séparateurs, filigrane dans le hero, halo dans le CTA final — plutôt qu'un accent décoratif isolé
Texture de mur "brut vs peint" générée en SVG (bruit fractal) pour le slider avant/après, au lieu d'un simple dégradé plat

Interactions et mouvement

Animations de révélation au scroll (sections qui apparaissent progressivement)
Compteurs animés sur les statistiques (150+, 8 ans, 98%) quand ils entrent dans l'écran
Chatbot avec indicateur de frappe ("..." qui rebondit) avant chaque réponse du bot — sensation plus humaine
Galerie réellement filtrable par catégorie (Peinture / Staff / Façade)
Micro-interactions cohérentes (soulignement qui grandit au survol des liens, bouton WhatsApp flottant qui respire légèrement)
prefers-reduced-motion respecté pour l'accessibilité

Contenu et conversion renforcés

Section FAQ qui répond directement aux objections de confiance (devis gratuit ? paiement d'avance ? délais ?) — exactement le type de friction psychologique qu'on veut désamorcer avant le contact
Section zones d'intervention (quartiers de Lomé) — utile pour le SEO local et rassure sur la proximité
Focus visible au clavier partout, structure accessible

Ce qui reste à faire avant mise en ligne :

Le vrai numéro WhatsApp (WHATSAPP_NUMBER)
Vos vraies photos de chantiers à la place des blocs colorés — je n'ai pas voulu utiliser de photos stock trouvées sur le web comme si c'était vos réalisations, ce serait trompeur pour vos clients et un problème de droits d'auteur
Vrais témoignages clients