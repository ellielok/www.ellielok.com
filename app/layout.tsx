import { Inter } from 'next/font/google';
import './globals.css';
import  Header  from '@/app/component/header';
import Footer from './component/footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

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
        from-[#ffffff] via-[#ffffff] to-[#ffffff]
        bg-fixed
    min-h-screen
        `}
      >


        <Header></Header>
        {children}

        <Footer></Footer>


        
      </body>
    </html>
  );
}
