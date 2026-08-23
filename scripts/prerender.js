import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const DOMAIN = 'https://goldengatedecor.com';

const ROUTES_META = [
  {
    path: '/',
    dir: '',
    title: "Golden Gate | Peinture d'Exception, Béton Ciré, Gréx & Staff — Togo & Afrique (54 Pays)",
    description: "Entreprise experte en faux-plafonds en staff mouluré, gorges lumineuses LED, peinture intérieure, enduits gréx & graffiato, béton ciré sol et mur, stucco vénitien et ravalement de façade. Siège à Lomé (Togo). Devis 100% gratuit sur WhatsApp.",
    keywords: "Gréx Lomé, Graffiato Togo, Enduit gréxé Lomé, Béton ciré Lomé, Béton ciré Togo, Sol béton ciré Afrique, Peintre Lomé, Staffeur Togo, Peintre bâtiment Bénin, Staffeur Côte d'Ivoire, Faux plafond staff Lomé, Peinture villa Abidjan",
    heading: "Peinture d'Exception, Béton Ciré, Gréx & Staff Haut de Gamme à Lomé & dans Toute l'Afrique"
  },
  {
    path: '/realisations',
    dir: 'realisations',
    title: "Nos Réalisations & Chantiers | Staff, Béton Ciré, Gréx & Peinture — Lomé & Afrique",
    description: "Découvrez plus de 160 chantiers livrés avec succès : enduits gréxés & graffiato, sols en béton ciré décoratif, faux-plafonds en staff mouluré avec gorges LED et ravalements de villas à Lomé (Togo) et dans toute l'Afrique.",
    keywords: "Photos gréx Lomé, Photos graffiato Togo, Réalisations béton ciré Lomé, Photos faux plafond staff Togo, Chantiers staffeur Cotonou, Décoration villa Abidjan",
    heading: "Nos Réalisations à Lomé & au Togo"
  },
  {
    path: '/services',
    dir: 'services',
    title: "Nos Services | Gréx & Graffiato, Béton Ciré, Staff LED & Peinture Villa | Golden Gate",
    description: "Prestations haut de gamme de finition et décoration : enduits gréxés et graffiato pour façades, béton ciré minéral, faux-plafond en plâtre fibré staff, gorges lumineuses LED, peinture intérieure satinée, stucco vénitien et ravalement siloxane.",
    keywords: "Gréx Lomé, Graffiato Togo, Enduit gréxé Lomé, Béton ciré Lomé, Béton ciré Togo, Sol béton ciré Afrique, Faux plafond staff LED Lomé, Stucco vénitien Cotonou",
    heading: "Nos Prestations de Finition & Décoration"
  },
  {
    path: '/a-propos',
    dir: 'a-propos',
    title: "À Propos de Golden Gate | Maîtres Artisans Staffeurs, Peintres & Béton Ciré en Afrique",
    description: "Basée à Lomé (Togo), Golden Gate réunit des maîtres artisans spécialisés dans l'application d'exception du béton ciré, du plâtre staff et de la peinture haute finition pour villas et résidences de standing en Afrique.",
    keywords: "Poseur béton ciré Lomé, Entreprise de peinture Lomé, Entreprise staffeur Togo, Maître staffeur Afrique, Artisans bâtiment Lomé, Golden Gate décoration",
    heading: "L'Excellence Artisanale au Togo & sur Tout le Continent Africain"
  },
  {
    path: '/contact',
    dir: 'contact',
    title: "Contact & Devis Gratuit | Béton Ciré, Peinture & Staff — Lomé (Togo) & 54 Pays d'Afrique",
    description: "Demandez votre devis gratuit et instantané pour votre sol en béton ciré, faux-plafond staff ou peinture villa. Équipes mobiles basées à Lomé (Togo) prêtes à intervenir dans les 54 pays d'Afrique : Bénin, Côte d'Ivoire, Sénégal, Cameroun, RDC, Gabon, etc.",
    keywords: "Devis béton ciré Lomé, Devis béton ciré Togo, Prix m2 béton ciré Lomé, Devis peinture gratuit Lomé, Devis staffeur Togo, Contact peintre bâtiment Afrique, WhatsApp Golden Gate",
    heading: "Demandez Votre Devis Gratuit"
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

    <!-- Structured Data JSON-LD pour Google Rich Snippets -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Golden Gate Décoration",
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
        <p>Projets & Chantiers de faux-plafonds staff LED, peinture satinée, béton ciré, stucco à Lomé, Togo & dans les 54 pays d'Afrique (Bénin, Côte d'Ivoire, Sénégal, Cameroun, Gabon, RDC).</p>
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
