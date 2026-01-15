import Header from '@/components/header';
import Footer from '@/components/footer';
import '../globals.css';
import { Providers } from '../../components/providers';
import FooterWrapper from '@/components/env-footer-wrapper';
import { CursorGlow } from '@/components/cursor-glow';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});


export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={` font-sans antialiased
        bg-gradient-to-b from-[#faf8f5] to-[#f5f3f0] dark:bg-gradient-to-br dark:from-[#0a0d15] dark:via-[#1a2332] dark:to-[#0e1218]
        transition-colors
        bg-fixed
    min-h-screen
        ${playfair.variable}`}
    >
      <CursorGlow />
      <Providers>
        <Header />

        {children}
        <div className="relative z-10">
          <FooterWrapper />
        </div>
      </Providers>
    </div>
  );
}
