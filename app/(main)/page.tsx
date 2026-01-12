import { Metadata } from 'next';
import HistoryButton from '@/components/history-button';
import ScrollText from '@/components/scroll-text';
import HeroScale from '@/components/hero-scale';
import ParticlesBackground from '@/components/ui/particles';
import TableOfContents from '@/components/table-of-contents';
import WaveDivider from '@/components/wave-divider';


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
      {/* Particles Background */}
      <div className="fixed inset-0 z-1 pointer-events-none">
        <ParticlesBackground />
      </div>

      {/* Table of Contents - Full Screen */}
      <TableOfContents />

      {/* Hero Section with Scale Effect */}
      <HeroScale>

      </HeroScale>
      <HistoryButton />

      {/* Static text after TOC animation */}
      <div className="absolute left-1/2 -translate-x-1/2 md:left-5/11 z-[100] pointer-events-none" style={{ top: '90vh' }}>
        <div className="flex flex-col gap-60">
          <h2 className="text-6xl md:text-9xl font-bold text-black dark:text-white">
            Welcome
          </h2>
          {/* 这里需要加入容器 */}
          <p className=" text-xl md:text-2xl text-black dark:text-white">
            Aspiring full-stack developer skilled in React, TypeScript, and modern CSS frameworks. 
          </p>
        </div>
      </div>

      {/* Divider with Clouds */}
      <WaveDivider className="relative z-20" />

      {/* Content Section */}
      <section className="content bg-yellow-50 dark:bg-gray-800 min-h-screen transition-colors relative z-20">
        <div className="w-full px-6 md:px-10 py-20">
          <div className="mx-auto max-w-4xl space-y-20">



            {/* About Section */}
            <div id="about" className="scroll-mt-80 mt-30">
              
              <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
                About Me
              </h2>
              

              <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <p>
                  I am an aspiring <span className="font-semibold text-gray-900 dark:text-white">full-stack developer</span> skilled in React,
                  TypeScript, and modern CSS frameworks. Passionate about creating
                  responsive, user-friendly web applications, I focus on combining
                  thoughtful design with solid engineering for performance and
                  accessibility. Currently completing my Master of Information Technology
                  at Monash University, I plan to reside in <span className="font-semibold text-gray-900 dark:text-white">Melbourne, Australia</span>.
                </p>

                <p>
                  Previously, I worked as a <span className="font-semibold text-gray-900 dark:text-white">Senior Advertising Specialist</span> at{' '}
                  <a href="https://fstln.io/en" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900 dark:hover:text-white transition-colors">
                    Fastlane
                  </a>, where I gained deep experience
                  in digital marketing and user analytics. This background helps me design
                  products that are both data-informed and user-centered. Outside of
                  coding, I enjoy traveling, hiking, and exploring virtual worlds from
                  Summoner's Rift to Hyrule.
                </p>

                <div className="mt-8">
                  <a
                    href="/cv/ellie-cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold text-gray-900 dark:text-white hover:underline transition-all"
                  >
                    View Full Résumé
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div id="experience" className="scroll-mt-20">
              <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
                Experience
              </h2>

              <div className="space-y-8">
                {/* Experience Item 1 */}
                <div className="group p-6 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:w-1/4 text-sm text-gray-600 dark:text-gray-400">
                      Jul 2025 - Present
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Teaching Associate (TA)
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-2">
                        Advanced Database • Monash University
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Facilitated postgraduate lab sessions by guiding practical exercises in database technologies (StarSchema, PostGIS, SQL queries).
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {['DBeaver', 'PostGIS', 'PostgreSQL', 'Docker'].map((skill) => (
                          <span key={skill} className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience Item 2 */}
                <div className="group p-6 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:w-1/4 text-sm text-gray-600 dark:text-gray-400">
                      Aug 2022 - Jan 2024
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Senior Advertising Specialist
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-2">
                        Digital Marketing • Fastlane
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Managed and optimised multi-channel digital advertising campaigns across Google, Meta, and programmatic platforms. Ensured alignment with overall brand strategy, conducted performance analytics, and improved ROI through A/B testing and audience segmentation.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {['Google Ads', 'Meta Ads', 'Google Analytics', 'Programmatic', 'Figma', 'Data Studio'].map((skill) => (
                          <span key={skill} className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Projects Section */}
            <div id="projects" className="scroll-mt-20">
              <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
                Projects
              </h2>

              <div className="space-y-8">
                {/* Project 1 */}
                <div className="group p-6 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-all">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="aspect-video bg-gray-200 dark:bg-gray-600 rounded-lg overflow-hidden">
                        <img src="/projects/tipsy/tipsy-thumbnail.png" alt="TipsyTrack" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Jul - Oct 2025</div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        TipsyTrack - Alcohol Harm-Reduction Web App
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Developed a full-stack web application to help adults in Victoria track alcohol consumption and promote safer drinking habits. Built with Next.js (App Router), TypeScript, Tailwind, and Neon Postgres. Implemented Google Vision API for drink label scanning, local storage-based privacy features, and gamified progress tracking.
                      </p>
                      <a href="/history/2510-halloween/projects/tipsytrack" className="text-gray-900 dark:text-white font-semibold hover:underline">
                        View Project →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="group p-6 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-all">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="aspect-video bg-gray-200 dark:bg-gray-600 rounded-lg overflow-hidden">
                        <img src="/projects/kick/kick_thumbnail.png" alt="KickStart" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Apr - Jul 2025</div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        KickStart - Community Street Soccer Volunteer Platform
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Co-led development of a Vue.js + Firebase web platform to connect volunteers with community street soccer sessions. Integrated Firebase Authentication (email/Google login), Firestore (session management), and Cloud Functions with SendGrid for automated notifications.
                      </p>
                      <a href="/history/2510-halloween/projects/kickstart" className="text-gray-900 dark:text-white font-semibold hover:underline">
                        View Project →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project 3 */}
                <div className="group p-6 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-all">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="aspect-video bg-gray-200 dark:bg-gray-600 rounded-lg overflow-hidden">
                        <img src="/projects/volun/volun-thumbnail.png" alt="VolunTrack" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Mar - Jun 2025</div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        VolunTrack - Volunteer Management Android App
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Led development of a serverless platform to upload and classify bird species using image recognition. Integrated AWS services including Cognito (access management), S3 (image storage), Lambda (image processing), DynamoDB (tag storage), and SNS (notifications).
                      </p>
                      <a href="/history/2510-halloween/projects/voluntrack" className="text-gray-900 dark:text-white font-semibold hover:underline">
                        View Project →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project 4 */}
                <div className="group p-6 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-all">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="aspect-video bg-gray-200 dark:bg-gray-600 rounded-lg overflow-hidden">
                        <img src="/projects/bird/bird-thumbnail.png" alt="BirdTag" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Sep - Nov 2024</div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        BirdTag - AI-Powered Bird Identification Web App
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Spearheaded the development of a full-featured web app for managing bird identification and volunteer data. Integrated an AI model to analyze uploaded bird images and generate classification results. Implemented a subscription feature for users to receive analysis updates and notifications.
                      </p>
                      <a href="/history/2510-halloween/projects/birdtag" className="text-gray-900 dark:text-white font-semibold hover:underline">
                        View Project →
                      </a>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
