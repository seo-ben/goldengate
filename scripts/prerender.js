import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const DOMAIN = 'https://goldengatebulder.com';

const ROUTES_META = [
  {
    path: '/',
    dir: '',
    title: "Golden Gate | Peinture d'Exception, Béton Ciré & Staff Décoratif — Togo & Afrique",
    description: "Entreprise experte en faux-plafonds en staff mouluré, gorges lumineuses LED, peinture intérieure, enduits gréx & graffiato, béton ciré sol et mur, stucco vénitien et ravalement de façade. Siège à Lomé (Togo), interventions dans toute l'Afrique. Devis 100% gratuit sur WhatsApp.",
    keywords: "Golden Gate, Golden Gate Afrique, Golden Gate Togo, Galden Gate, Galden Gate Afrique, Golden Gate Bulder, Golden Gate Décoration, Golden Gate SARL, Golden Gate Bâtiment, Gréx Lomé, Graffiato Togo, Enduit gréxé Lomé, Béton ciré Lomé, Béton ciré Togo, Sol béton ciré Afrique, Peintre Lomé, Staffeur Togo, Peintre bâtiment Bénin, Staffeur Côte d'Ivoire, Faux plafond staff Lomé, Peinture villa Abidjan",
    heading: "Golden Gate — Peinture d'Exception, Béton Ciré & Staff Décoratif à Lomé & dans Toute l'Afrique"
  },
  {
    path: '/realisations',
    dir: 'realisations',
    title: "Nos Réalisations & Chantiers | Staff, Béton Ciré & Peinture — Golden Gate Afrique",
    description: "Découvrez nos chantiers d'exception livrés avec succès : enduits gréxés, sols en béton ciré décoratif, faux-plafonds en staff mouluré avec gorges LED et ravalements de villas à Lomé (Togo) et dans toute l'Afrique par Golden Gate.",
    keywords: "Golden Gate, Golden Gate Afrique, Golden Gate Togo, Galden Gate, Photos gréx Lomé, Photos graffiato Togo, Réalisations béton ciré Lomé, Photos faux plafond staff Togo, Chantiers staffeur Cotonou, Décoration villa Abidjan",
    heading: "Nos Réalisations & Chantiers d'Exception — Golden Gate Togo & Afrique"
  },
  {
    path: '/services',
    dir: 'services',
    title: "Nos Services | Béton Ciré, Staff LED & Peinture Villa — Golden Gate Togo & Afrique",
    description: "Prestations haut de gamme de finition et décoration : enduits gréxés et graffiato pour façades, béton ciré minéral, faux-plafond en plâtre fibré staff, gorges lumineuses LED, peinture intérieure satinée, stucco vénitien et ravalement siloxane.",
    keywords: "Golden Gate, Golden Gate Afrique, Golden Gate Togo, Galden Gate, Gréx Lomé, Graffiato Togo, Enduit gréxé Lomé, Béton ciré Lomé, Béton ciré Togo, Sol béton ciré Afrique, Faux plafond staff LED Lomé, Stucco vénitien Cotonou",
    heading: "Nos Prestations de Finition & Décoration Haut de Gamme — Golden Gate"
  },
  {
    path: '/a-propos',
    dir: 'a-propos',
    title: "À Propos de Golden Gate | Maîtres Artisans Staffeurs, Peintres & Béton Ciré en Afrique",
    description: "Basée à Lomé (Togo), Golden Gate réunit des maîtres artisans spécialisés dans l'application d'exception du béton ciré, du plâtre staff et de la peinture haute finition pour villas et résidences de standing en Afrique.",
    keywords: "Golden Gate, Golden Gate Afrique, Golden Gate Togo, Galden Gate, Poseur béton ciré Lomé, Entreprise de peinture Lomé, Entreprise staffeur Togo, Maître staffeur Afrique, Artisans bâtiment Lomé, Golden Gate décoration",
    heading: "L'Excellence Artisanale de Golden Gate au Togo & sur Tout le Continent Africain"
  },
  {
    path: '/contact',
    dir: 'contact',
    title: "Devis Gratuit Béton Ciré, Peinture & Staff | Golden Gate Lomé (Togo) & Afrique",
    description: "Demandez votre devis gratuit et instantané pour votre sol en béton ciré, faux-plafond staff ou peinture villa avec Golden Gate. Équipes mobiles basées à Lomé (Togo) prêtes à intervenir dans les 54 pays d'Afrique : Bénin, Côte d'Ivoire, Sénégal, Cameroun, RDC, Gabon, etc.",
    keywords: "Golden Gate, Golden Gate Afrique, Golden Gate Togo, Galden Gate, Devis béton ciré Lomé, Devis béton ciré Togo, Prix m2 béton ciré Lomé, Devis peinture gratuit Lomé, Devis staffeur Togo, Contact peintre bâtiment Afrique, WhatsApp Golden Gate",
    heading: "Demandez Votre Devis Gratuit avec Golden Gate"
  }
];

function prerender() {
  const indexHtmlPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(indexHtmlPath)) {
    console.error('❌ Erreur: dist/index.html introuvable. Lancez vite build d\'abord.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

  ROUTES_META.forEach((route) => {
    const canonicalUrl = `${DOMAIN}${route.path}`;
    
    // Remplacement dynamique du titre
    let html = baseHtml.replace(
      /<title>.*?<\/title>/s,
      `<title>${route.title}</title>`
    );

    // Injection ou mise à jour des balises meta & Canonical
    const headMetas = `
    <!-- Méta SEO Pré-rendues pour Googlebot & Vérification Search Console -->
    <meta name="google-site-verification" content="RfqLNyeW4FN36yzX52ODqHoRpf8gYlSifTbHb8egek8">
    <meta name="description" content="${route.description}">
    <meta name="keywords" content="${route.keywords}">
    <link rel="canonical" href="${canonicalUrl}">
    <link rel="alternate" hreflang="fr" href="${canonicalUrl}">
    <link rel="alternate" hreflang="x-default" href="${canonicalUrl}">

    <!-- Open Graph (Facebook / WhatsApp) -->
    <meta property="og:title" content="${route.title}">
    <meta property="og:description" content="${route.description}">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:image" content="${DOMAIN}/logo.webp">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Golden Gate — Peinture & Staff d'Excellence en Afrique">
    <meta property="og:locale" content="fr_FR">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${route.title}">
    <meta name="twitter:description" content="${route.description}">
    <meta name="twitter:image" content="${DOMAIN}/logo.webp">

    <!-- Structured Data JSON-LD pour Google Rich Snippets & Brand Disambiguation -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "${DOMAIN}/#website",
      "name": "Golden Gate",
      "alternateName": [
        "Golden Gate Afrique",
        "Golden Gate Togo",
        "Golden Gate Décoration",
        "Golden Gate SARL",
        "Golden Gate Bâtiment",
        "Galden Gate",
        "Galden Gate Afrique",
        "Golden Gate Bulder"
      ],
      "url": "${canonicalUrl}",
      "inLanguage": "fr"
    }
    </script>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      "name": "Golden Gate",
      "alternateName": [
        "Golden Gate Décoration & Finitions",
        "Golden Gate Africa",
        "Golden Gate Togo",
        "Galden Gate Afrique"
      ],
      "image": "${DOMAIN}/logo.webp",
      "@id": "${DOMAIN}/#organization",
      "url": "${canonicalUrl}",
      "telephone": "+22893394874",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "La Pampa",
        "addressLocality": "Lomé",
        "addressRegion": "Maritime",
        "postalCode": "00228",
        "addressCountry": "TG"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 6.1375,
        "longitude": 1.2125
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "07:30",
        "closes": "18:30"
      }
    }
    </script>
    `;

    // Injection dans le <head>
    html = html.replace('</head>', `${headMetas}\n</head>`);

    // Contenu pré-rendu SEO dans la div #root pour que Googlebot lise le <h1> et la description avant l'exécution du JS
    const prerenderedBody = `
      <div id="seo-static-fallback" style="display:none;" aria-hidden="true">
        <h1>${route.heading}</h1>
        <p>${route.description}</p>
        <p>Golden Gate (aussi recherché sous les termes Golden Gate Togo, Golden Gate Afrique, Galden Gate, Galden Gate Afrique) est l'entreprise leader spécialisée dans la réalisation de travaux de peinture d'exception, faux-plafonds en plâtre staff LED, béton ciré sol et mur, stucco et ravalement de façade à Lomé (Togo) et dans les 54 pays du continent africain.</p>
      </div>
    `;

    html = html.replace('<div id="root"></div>', `<div id="root"></div>\n${prerenderedBody}`);

    if (route.dir === '') {
      // Pour la page d'accueil /
      fs.writeFileSync(indexHtmlPath, html, 'utf-8');
      console.log(`✅ [SSG] Pré-rendu généré pour "/" -> dist/index.html`);
    } else {
      // Pour les sous-pages /realisations, /services, /a-propos, /contact
      const targetFolder = path.join(distDir, route.dir);
      if (!fs.existsSync(targetFolder)) {
        fs.mkdirSync(targetFolder, { recursive: true });
      }
      fs.writeFileSync(path.join(targetFolder, 'index.html'), html, 'utf-8');
      console.log(`✅ [SSG] Pré-rendu généré pour "${route.path}" -> dist/${route.dir}/index.html`);
    }
  });

  console.log('🎉 Pré-rendu Statique (SSG) terminé avec succès pour les 5 routes !');
}

prerender();
