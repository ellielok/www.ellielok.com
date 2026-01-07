import { Inter } from 'next/font/google';
import './halloween-theme.css';
import { Particles } from '@/app/history/2510-halloween/component/ui/shadcn-io/particles';
import HalloweenIconToggle from '@/app/history/2510-halloween/component/HalloweenIconToggle';
import HistoryButton from '@/app/component/history-button';
import Header from '@/app/history/2510-halloween/component/header';
import BackgroundWrapper from '@/app/history/2510-halloween/component/background-wrapper';
import FooterWrapper from '@/app/history/2510-halloween/component/env-footer-wrapper';
import Script from "next/script";

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export default function HalloweenLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>

        <Header></Header>
        <Particles
          className="
          fixed inset-0 -z-10
          hidden md:block
          h-1/"
          quantity={60}
          ease={10}
          staticity={100}
          color="E57C3D"
          size={2.0}
          vx={0.2}
          vy={0.2}
          refresh
        />

        <BackgroundWrapper />

        <HalloweenIconToggle />



        {children}
        <FooterWrapper />

        </div>

  );
}
