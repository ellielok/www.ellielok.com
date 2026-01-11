import Header from '@/components/header';
import Footer from '@/components/footer';
import '../globals.css';
import { Providers } from '../../components/providers';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
 
    <div
        className={` font-sans antialiased
        bg-gradient-to-br
        from-[#ffffff] via-[#ffffff] to-[#ffffff]
        bg-fixed
    min-h-screen
        `}
      ><Providers>
      <Header />
      {children}
      <Footer /></Providers>
    </div>

  );
}
