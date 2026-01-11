import { Metadata } from 'next';
import HistoryButton from '@/app/component/history-button';
import ScrollText from '@/app/component/scroll-text';
import HeroScale from '@/app/component/hero-scale';

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
      {/* Scrolling text */}
      <ScrollText />

      {/* Hero Section with Scale Effect */}
      <HeroScale>
        
      </HeroScale>
      <HistoryButton />

      {/* Divider */}
      <div className="divider h-1 bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-transparent relative z-20"></div>

      {/* Content Section */}
      <section className="content bg-yellow-50 dark:bg-gray-800 min-h-screen transition-colors relative z-20">
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
