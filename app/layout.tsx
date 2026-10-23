import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/data/site-config';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `Sahuaro High School Class of ${siteConfig.graduationYear} — ${siteConfig.reunionLabel}`,
  description: `Sahuaro High School Class of ${siteConfig.graduationYear} — ${siteConfig.reunionLabel}. ${siteConfig.heroDatesLine}`,
  icons: {
    icon: '/head-mascot.png',
    apple: '/head-mascot.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" id="top" className="scroll-smooth">
      <body className={`${inter.variable} ${plusJakartaSans.variable} min-h-screen bg-stone-50 text-stone-900`}>
        {children}
      </body>
    </html>
  );
}
