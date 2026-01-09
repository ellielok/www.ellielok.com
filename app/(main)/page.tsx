import { Metadata } from 'next';
import Image from 'next/image';
import HistoryButton from '@/app/component/history-button';
import ThemeToggle from '@/app/component/theme-toggle';

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
      {/* Hero Section */}
      <section
        className="hero min-h-screen bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center dark:bg-gray-900"
        style={{ backgroundImage: 'url(/images/bg-light.png)' }}
      >
        <div className="w-full px-6 md:px-10">
          <div className="flex flex-col items-center justify-center mx-auto max-w-screen-xl gap-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white dark:text-black text-center">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-white/90 dark:text-black text-center max-w-2xl">
              Full-stack Developer | Digital Marketing Enthusiast
            </p>

            <div className="flex gap-4 mt-8">
              <ThemeToggle />
              <HistoryButton />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider h-1 bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-transparent"></div>

      {/* Content Section */}
      <section className="content bg-yellow-50 dark:bg-gray-800 min-h-screen transition-colors">
        <div className="w-full px-6 md:px-10 py-20">
          <div className="mx-auto max-w-screen-xl">
            <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
              About Me
            </h2>

            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                I am an aspiring full-stack developer skilled in React, TypeScript, and modern CSS frameworks.
                Passionate about creating responsive, user-friendly web applications, I focus on combining
                thoughtful design with solid engineering for performance and accessibility.
              </p>

              <p className="text-lg leading-relaxed">
                With a background in digital marketing, I bring a unique perspective to web development,
                understanding both the technical implementation and the user experience that drives engagement
                and conversion.
              </p>

              <div className="mt-12 grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Frontend</h3>
                  <p className="text-gray-600 dark:text-gray-300">React, TypeScript, Next.js, Tailwind CSS</p>
                </div>

                <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Backend</h3>
                  <p className="text-gray-600 dark:text-gray-300">Node.js, Express, RESTful APIs</p>
                </div>

                <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Marketing</h3>
                  <p className="text-gray-600 dark:text-gray-300">SEO, Analytics, Content Strategy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
