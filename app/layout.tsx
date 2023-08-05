import Providers from '@/common/provider';
import '../styles/globals.css';

export const metadata = {
  title: 'MG Portal',
  description: 'Homepage for MG Portal Web-App',
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-mg.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-mg.png" />
        <meta name="apple-mobile-web-app-title" content="MG Portal" />
        <meta name="application-name" content="MG Portal" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#f1f3f6" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
