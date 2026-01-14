import Header from '@/components/header';
import Footer from '@/components/footer';
import '../globals.css';
import { Providers } from '../../components/providers';
import FooterWrapper from '@/components/env-footer-wrapper';
import { CursorGlow } from '@/components/cursor-glow';


export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={` font-sans antialiased
        bg-[#FEFCE8] dark:bg-[#1E2939]
        transition-colors
        bg-fixed
    min-h-screen
        `}
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
