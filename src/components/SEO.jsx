import React from 'react';
import { Helmet } from 'react-helmet-async';

const DOMAIN = 'https://goldengatebulder.com';

export function SEO({
  title = "Golden Gate | Peinture d'Exception, Béton Ciré & Staff Haut de Gamme — Togo & Toute l'Afrique (54 Pays)",
  description = "Entreprise experte en faux-plafonds en staff mouluré, gorges lumineuses LED, peinture intérieure haute définition, béton ciré sol et mur, stucco vénitien et ravalement de façade. Siège à Lomé (Togo), interventions dans les 54 pays d'Afrique. Devis 100% gratuit sur WhatsApp.",
  keywords = "Béton ciré Lomé, Béton ciré Togo, Sol béton ciré Afrique, Peintre Lomé, Staffeur Togo, Peintre bâtiment Bénin, Staffeur Côte d'Ivoire, Faux plafond staff Lomé, Peinture villa Abidjan, Peintre Dakar Sénégal, Staffeur Douala Cameroun, Faux plafond Libreville Gabon, Peinture villa Kinshasa RDC",
  path = '',
  image = `${DOMAIN}/logo.webp`,
  type = 'website',
  jsonLd = null,
}) {
  const canonicalUrl = `${DOMAIN}${path}`;
  const fullTitle = title.includes('Golden Gate') ? title : `${title} | Golden Gate`;

  return (
    <Helmet>
      {/* Dynamic Title & Metas */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hreflang="fr" href={canonicalUrl} />
      <link rel="alternate" hreflang="x-default" href={canonicalUrl} />

      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Golden Gate — Peinture & Staff d'Excellence en Afrique" />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org JSON-LD Additional Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
