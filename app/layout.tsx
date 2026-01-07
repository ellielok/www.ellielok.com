import { Inter } from 'next/font/google';
import './globals.css';

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
        from-[#030205] via-[#2e1e37] to-[#13072B]
        bg-fixed
    min-h-screen
        `}
      >



        {children}


        
      </body>
    </html>
  );
}
