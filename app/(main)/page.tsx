import { Metadata } from 'next';
import ScrollText from '@/components/scroll-text';
import HeroScale from '@/components/hero-scale';
import ParticlesBackground from '@/components/ui/particles';
import TableOfContents from '@/components/table-of-contents';
import WaveDivider from '@/components/wave-divider';
import RevealOnScroll from '@/components/reveal-on-scroll';
import SkillsCloud from '@/components/skills-cloud';
import Image from 'next/image';
import Link from 'next/link';
import ProjectCard from '@/components/project-card';
import ExperienceCard from '@/components/experience-card';
import ContactSection from '@/components/contact-section';
import LoadingScreen from '@/components/loading-screen';
import HeroAbout from '@/components/hero-about';
import tipsyThumbnail from '@/app/history/2510-halloween/images/projects/tipsy/tipsy-thumbnail.png';
import kickThumbnail from '@/app/history/2510-halloween/images/projects/kick/kick_thumbnail.png';
import volunThumbnail from '@/app/history/2510-halloween/images/projects/volun/volun-thumbnail.png';
import birdThumbnail from '@/app/history/2510-halloween/images/projects/bird/bird-thumbnail.png';

export const metadata: Metadata = {
  title: 'Ellie Lok | Full-stack Developer | Digital Marketing Enthusiast',
  description:
    'I am an aspiring full-stack developer skilled in React, TypeScript, and modern CSS frameworks. Passionate about creating responsive, user-friendly web applications, I focus on combining thoughtful design with solid engineering for performance and accessibility.',
  openGraph: {
    title: 'Ellie Lok | Full-stack Developer | Digital Marketing Enthusiast',
    description:
      'Aspiring full-stack developer skilled in React, TypeScript, and modern CSS frameworks. Creating responsive, user-friendly web applications.',
  },
};

export default function Home() {
  return (
    <>
      {/* Loading Screen */}
      <LoadingScreen />

      {/* Particles Background */}
      {/* <div className="fixed inset-0 z-1 pointer-events-none">
        <ParticlesBackground />
      </div> */}

      {/* Table of Contents - Full Screen */}
      <TableOfContents />

      {/* Hero About - appears next to TOC on desktop */}
      <HeroAbout />

      {/* Hero Section with Scale Effect */}
      <HeroScale></HeroScale>

      {/* Mobile hero text - only visible on sm */}
      {/* <div
        className="md:hidden absolute left-0 w-full z-40 pointer-events-none px-6"
        style={{ top: '50vh', transform: 'translateY(-50%)' }}
      >
        <h2
          className="text-3xl md:text-4xl font-bold text-[#101828] dark:text-white mb-3"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Ellie L.&apos;s personal site.
        </h2>
        <p className="text-base md:text-lg text-[#101828]/80 dark:text-white/80">
          Featuring portfolio work, blog posts, and snapshots of life.
        </p>
      </div> */}

      {/* Divider with Clouds */}
      {/* <WaveDivider className="relative z-20" /> */}

      {/* Content Section */}
      <section className="content bg-gradient-to-b from-[#faf8f5] to-[#f5f3f0] dark:bg-gradient-to-br dark:from-[#0a0d15] dark:via-[#1a2332] dark:to-[#0e1218] min-h-screen transition-colors relative z-20">
        <div className="w-full px-6 py-20">
          <div className="md:ml-40 md:mr-5 xl:ml-100 xl:mr-40 space-y-30">
            {/* About Section */}
            <div id="about" className="scroll-mt-80 mt-30">
              <RevealOnScroll>
                <h2
                  className="text-4xl font-bold mb-8 text-gray-900 dark:text-white"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  About Me
                </h2>
              </RevealOnScroll>

              <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <RevealOnScroll>
                  <p>
                    I am an aspiring{' '}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      full-stack developer
                    </span>{' '}
                    skilled in React, TypeScript, and modern CSS frameworks. I
                    have recently completed my{' '}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Master of Information Technology
                    </span>{' '}
                    at Monash University. I am currently contributing to open
                    source projects and seeking development opportunities.
                  </p>
                </RevealOnScroll>

                <RevealOnScroll>
                  <p>
                    Previously, I worked as a{' '}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Senior Advertising Specialist
                    </span>{' '}
                    at{' '}
                    <a
                      href="https://fstln.io/en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      Fastlane
                    </a>
                    , where I gained deep experience in digital marketing and
                    user analytics. This background helps me design products
                    that are both data-informed and user-centered.
                  </p>
                </RevealOnScroll>

                <RevealOnScroll>
                  <div className="mt-8">
                    <a
                      href="/cv/ellie-cv.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-semibold text-gray-900 dark:text-white hover:underline transition-all"
                    >
                      View Full Résumé
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </RevealOnScroll>
              </div>
            </div>

            {/* Skills Section */}
            <div id="skills" className="scroll-mt-20">
              <RevealOnScroll>
                <h2
                  className="text-4xl font-bold mb-8 text-gray-900 dark:text-white"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Skills
                </h2>
              </RevealOnScroll>

              <RevealOnScroll>
                <SkillsCloud />
              </RevealOnScroll>
            </div>

            {/* Experience Section */}
            <div id="experience" className="scroll-mt-20">
              <RevealOnScroll>
                <h2
                  className="text-4xl font-bold mb-8 text-gray-900 dark:text-white"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Experience
                </h2>
              </RevealOnScroll>

              <div className="space-y-8">
                <ExperienceCard
                  date="Jul 2025 - Present"
                  logo="/images/experience/Monash-logo.png"
                  logoAlt="Monash University"
                  darkInvert
                  title="Teaching Associate (TA)"
                  subtitle="Advanced Database • Monash University"
                  description="Facilitated postgraduate lab sessions by guiding practical exercises in database technologies (StarSchema, PostGIS, SQL queries)."
                  skills={['DBeaver', 'PostGIS', 'PostgreSQL', 'Docker']}
                />
                <ExperienceCard
                  date="Aug 2022 - Jan 2024"
                  logo="/images/experience/Fastlane-logo-light.png"
                  logoAlt="Fastlane"
                  title="Senior Advertising Specialist"
                  subtitle="Digital Marketing • Fastlane"
                  description="Managed and optimised multi-channel digital advertising campaigns across Google, Meta, and programmatic platforms. Ensured alignment with overall brand strategy, conducted performance analytics, and improved ROI through A/B testing and audience segmentation."
                  skills={[
                    'Google Ads',
                    'Meta Ads',
                    'Google Analytics',
                    'Programmatic',
                    'Figma',
                    'Data Studio',
                  ]}
                />
              </div>
            </div>

            {/* Projects Section */}
            <div id="projects" className="scroll-mt-20">
              <RevealOnScroll>
                <h2
                  className="text-4xl font-bold mb-8 text-gray-900 dark:text-white"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Projects
                </h2>
              </RevealOnScroll>

              <div className="space-y-8">
                <ProjectCard
                  href="/projects/tipsytrack"
                  thumbnail={tipsyThumbnail}
                  alt="TipsyTrack"
                  date="Jul - Oct 2025"
                  title="TipsyTrack - Alcohol Harm-Reduction Web App"
                  description="Developed a full-stack web application to help adults in Victoria track alcohol consumption and promote safer drinking habits. Built with Next.js (App Router), TypeScript, Tailwind, and Neon Postgres. Implemented Google Vision API for drink label scanning, local storage-based privacy features, and gamified progress tracking."
                />
                <ProjectCard
                  href="/projects/kickstart"
                  thumbnail={kickThumbnail}
                  alt="KickStart"
                  date="Apr - Jul 2025"
                  title="KickStart - Community Street Soccer Volunteer Platform"
                  description="Co-led development of a Vue.js + Firebase web platform to connect volunteers with community street soccer sessions. Integrated Firebase Authentication (email/Google login), Firestore (session management), and Cloud Functions with SendGrid for automated notifications."
                />
                <ProjectCard
                  href="/projects/voluntrack"
                  thumbnail={volunThumbnail}
                  alt="VolunTrack"
                  date="Mar - Jun 2025"
                  title="VolunTrack - Volunteer Management Android App"
                  description="Led development of a serverless platform to upload and classify bird species using image recognition. Integrated AWS services including Cognito (access management), S3 (image storage), Lambda (image processing), DynamoDB (tag storage), and SNS (notifications)."
                />
                <ProjectCard
                  href="/projects/birdtag"
                  thumbnail={birdThumbnail}
                  alt="BirdTag"
                  date="Sep - Nov 2024"
                  title="BirdTag - AI-Powered Bird Identification Web App"
                  description="Spearheaded the development of a full-featured web app for managing bird identification and volunteer data. Integrated an AI model to analyze uploaded bird images and generate classification results. Implemented a subscription feature for users to receive analysis updates and notifications."
                />
              </div>
            </div>

            {/* Snapshots Section */}
            <div id="snapshots" className="scroll-mt-20">
              <RevealOnScroll>
                <h2
                  className="text-4xl font-bold mb-8 text-gray-900 dark:text-white"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Snapshots
                </h2>
              </RevealOnScroll>

              <RevealOnScroll>
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    A glimpse into my daily life through photos. From scenic
                    landscapes to everyday moments, these snapshots capture
                    memories from my journey.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                      <Image
                        src="/images/shots/IMG_1130.jpeg"
                        alt="Snapshot 1"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                      <Image
                        src="/images/shots/IMG_3419.jpeg"
                        alt="Snapshot 2"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                      <Image
                        src="/images/shots/IMG_6720.jpeg"
                        alt="Snapshot 3"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                      <Image
                        src="/images/shots/IMG_8938.jpeg"
                        alt="Snapshot 4"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  </div>

                  <div className="text-center mt-6">
                    <Link
                      href="/snapshots"
                      className="inline-flex items-center gap-2 font-semibold text-gray-900 dark:text-white hover:underline transition-all"
                    >
                      View more in Snapshots
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Closing Section */}
            <div id="connect" className="scroll-mt-20 mt-20">
              <RevealOnScroll>
                <div className="text-center space-y-8 pt-16 border-t border-gray-300 dark:border-white/20">
                  <div className="space-y-4">
                    <h2
                      className="text-3xl font-bold text-gray-900 dark:text-white"
                      style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                      That's All for Now
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                      Thank you for exploring my portfolio. If you're
                      interested, feel free to check out the{' '}
                      <Link
                        href="/blog/0115/behind-the-story"
                        className="underline hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        Story Behind This Edition
                      </Link>
                      .
                    </p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-gray-700 dark:text-gray-300">
                      If your company or project needs a developer, feel free to
                      reach out below
                    </p>
                    <ContactSection />
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
