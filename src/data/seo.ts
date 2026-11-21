import { company, configuredSocialUrls, evercrop } from './company';

export interface PageMeta {
  path: string;
  title: string;
  description: string;
  /** Excluded from the sitemap and marked noindex (e.g. the 404 page). */
  noindex?: boolean;
}

const suffix = ' | SoLeaf';

export const pages = {
  home: {
    path: '/',
    title: 'SoLeaf | Singapore AgriTech Company',
    description:
      'SoLeaf is a Singapore-registered AgriTech software company developing tools for agricultural businesses, including its flagship farm sales product Evercrop.',
  },
  about: {
    path: '/about',
    title: 'About Us' + suffix,
    description:
      'Meet the team behind SoLeaf, a Singapore AgriTech startup founded by Felicia Tan and Shernell Ho. Explore our story, mission, vision and values.',
  },
  platform: {
    path: '/platform',
    title: 'Evercrop' + suffix,
    description:
      'Explore the proposed Evercrop workflow for WhatsApp enquiries, stock and price checks, structured orders, staff escalation and fulfilment.',
  },
  projects: {
    path: '/projects',
    title: 'Projects' + suffix,
    description:
      'Follow Evercrop development and explore the earlier proof of concept for harvest pre-orders and learning-journey enquiries.',
  },
  technology: {
    path: '/technology',
    title: 'Technology' + suffix,
    description:
      'Explore SoLeaf’s approach to software engineering and AI integration through Evercrop’s proposed architecture.',
  },
  contact: {
    path: '/contact',
    title: 'Contact' + suffix,
    description:
      'Contact SoLeaf LLP to discuss farm sales workflows, Evercrop development or potential collaboration.',
  },
  privacy: {
    path: '/privacy',
    title: 'Privacy Policy' + suffix,
    description: 'How SoLeaf LLP handles personal data submitted through this website.',
  },
  terms: {
    path: '/terms',
    title: 'Terms of Use' + suffix,
    description: 'Terms governing the use of the SoLeaf LLP website.',
  },
  notFound: {
    path: '/404',
    title: 'Page Not Found' + suffix,
    description: 'The page you were looking for could not be found.',
    noindex: true,
  },
} satisfies Record<string, PageMeta>;

export const OG_IMAGE = '/images/og-image.png';
export const OG_IMAGE_ALT = 'SoLeaf LLP — Singapore AgriTech software company';

export function canonicalUrl(path: string): string {
  return path === '/' ? `${company.siteUrl}/` : `${company.siteUrl}${path}`;
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.brandName,
    legalName: company.legalName,
    url: `${company.siteUrl}/`,
    logo: `${company.siteUrl}/logo/tyllage-logo-512.png`,
    description: company.description,
    owns: {
      '@type': 'Product',
      name: evercrop.name,
      description: evercrop.description,
      slogan: evercrop.tagline,
      url: canonicalUrl(pages.platform.path),
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: company.countryCode,
      ...(company.contact.address ? { streetAddress: company.contact.address } : {}),
    },
    ...(company.contact.uen
      ? { identifier: { '@type': 'PropertyValue', propertyID: 'UEN', value: company.contact.uen } }
      : {}),
    ...(company.contact.email ? { email: company.contact.email } : {}),
    ...(company.contact.phone ? { telephone: company.contact.phone } : {}),
    founder: company.founders.map((f) => ({ '@type': 'Person', name: f.name })),
    sameAs: configuredSocialUrls(),
  };
}
