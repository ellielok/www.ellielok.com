import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ellielok.com'),
  authors: [{ name: 'Ellie Lok', url: 'https://www.ellielok.com' }],
  creator: 'Ellie Lok',
  title: {
    template: '%s | Ellie Lok',
    default: 'Ellie Lok | Full-stack Developer',
  },
  openGraph: {
    siteName: 'Ellie Lok',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@ellielok',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased
        bg-gradient-to-br
        from-[#ffffff] via-[#ffffff] to-[#ffffff]
        bg-fixed
    min-h-screen
        `}
      >
        {children}
      </body>
    </html>
  );
}
