import Header from '@/app/component/header';
import Footer from '@/app/component/footer';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: 'url(/images/bg-light.png)' }}
    >
      <Header />
      {children}
      
    </div>
  );
}
