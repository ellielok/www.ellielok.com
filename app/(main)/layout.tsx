import Header from '@/app/component/header';
import Footer from '@/app/component/footer';

export default function MainLayout({
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
      <Header />
      {children}
      <Footer />
    </body>
    </html>
  );
}
