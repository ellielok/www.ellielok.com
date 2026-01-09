import { Metadata } from 'next';
import HistoryButton from '@/app/component/history-button';

export const metadata: Metadata = {
  title: 'Ellie Lok | Full-stack Developer | Digital Marketing Enthusiast',
  description: 'I am an aspiring full-stack developer skilled in React, TypeScript, and modern CSS frameworks. Passionate about creating responsive, user-friendly web applications, I focus on combining thoughtful design with solid engineering for performance and accessibility.',
  openGraph: {
    title: 'Ellie Lok | Full-stack Developer | Digital Marketing Enthusiast',
    description: 'Aspiring full-stack developer skilled in React, TypeScript, and modern CSS frameworks. Creating responsive, user-friendly web applications.',
  }
};

export default function Home() {
  return (
    <>
      {/* Hero Section - 首屏主图 */}
      <section
        className="hero min-h-screen bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center"
        style={{ backgroundImage: 'url(/images/bg-light.png)' }}
      >
        <div className="w-full px-6 md:px-10">
          <div className="flex flex-col lg:flex-row mx-auto max-w-screen-xl gap-3">
            {/* Hero 内容 */}
            <HistoryButton />
          </div>
        </div>
      </section>

      {/* Divider - 分隔线 */}
      <div className="divider h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>

      {/* Content Section - 黄色底色 */}
      <section className="content bg-yellow-50 min-h-screen">
        <div className="w-full px-6 md:px-10 py-20">
          <div className="mx-auto max-w-screen-xl">
            {/* 后续内容 */}
            <h2 className="text-3xl font-bold mb-6">Welcome</h2>
            <p className="text-lg">这里是后续内容区域</p>
          </div>
        </div>
      </section>
    </>
  );
}
