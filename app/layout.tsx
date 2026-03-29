import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import AnnouncementBanner from '@/components/AnnouncementBanner';
import ClaimWebsiteCTA from '@/components/ClaimWebsiteCTA';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Elite Beauty Salon | Irvine, CA',
  description: 'Premium beauty salon located in Irvine, CA providing professional beauty services.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth dark`}>
      <body className="font-sans antialiased text-neutral-200 bg-neutral-950 flex flex-col min-h-screen" suppressHydrationWarning>
        <AnnouncementBanner />
        <div className="flex-grow">
          {children}
        </div>
        <ClaimWebsiteCTA />
        <Footer />
      </body>
    </html>
  );
}
