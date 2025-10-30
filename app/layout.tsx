import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Particles } from '@/components/ui/shadcn-io/particles';
import HalloweenIconToggle from '@/components/HalloweenIconToggle';
import Header from '@/component/header';
import BackgroundWrapper from '@/component/background-wrapper';
import FooterWrapper from '@/component/env-footer-wrapper';
import Script from "next/script";

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ellie Lok',
  description: 'Aspiring Full-stack Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased
        bg-gradient-to-br
        from-[#030205] via-[#2e1e37] to-[#13072B]
        bg-fixed
    min-h-screen
        `}
      >
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

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GF2SM1M8Y2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GF2SM1M8Y2');
          `}
        </Script>
      </body>
    </html>
  );
}
