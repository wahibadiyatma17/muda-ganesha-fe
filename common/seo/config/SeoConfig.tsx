import { DefaultSeoProps } from 'next-seo';

const NEXT_SEO_CONFIG = {
  defaultTitle: 'Home | MG Portal',
  description: 'MG Portal Home Page',
  canonical: '#',
  openGraph: {
    type: 'website',
    title: 'Company',
    description: 'MG Portal Home Page',
    images: [
      {
        url: '/icon-mg.png',
        width: 640,
        height: 640,
        alt: 'company-logo',
      },
    ],
    url: '#',
    locale: 'en_US',
    site_name: 'Company',
  },
  twitter: {
    cardType: 'summary',
    site: '',
    handle: '',
  },
} as DefaultSeoProps;

export default NEXT_SEO_CONFIG;
