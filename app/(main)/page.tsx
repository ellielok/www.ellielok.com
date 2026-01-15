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
import tipsyThumbnail from '@/app/history/2510-halloween/images/projects/tipsy/tipsy-thumbnail.png';
import kickThumbnail from '@/app/history/2510-halloween/images/projects/kick/kick_thumbnail.png';
import volunThumbnail from '@/app/history/2510-halloween/images/projects/volun/volun-thumbnail.png';
import birdThumbnail from '@/app/history/2510-halloween/images/projects/bird/bird-thumbnail.png';


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
      {/* <div className="fixed inset-0 z-1 pointer-events-none">
        <ParticlesBackground />
      </div> */}

      {/* Table of Contents - Full Screen */}
      <TableOfContents />
      

      {/* Hero Section with Scale Effect */}
      <HeroScale>

      </HeroScale>


      {/* Static text after TOC animation */}
      <div className="absolute left-1/2 -translate-x-1/2 md:left-1/3 xl:left-7/17 z-40 pointer-events-none" style={{ top: '88vh' }}>
        <div className="flex flex-col gap-60">
          <h2 className="text-6xl md:text-9xl font-bold text-black dark:text-white" style={{ fontFamily: 'var(--font-playfair)' }}>
            Begin here
          </h2>
          {/* 这里需要加入容器 */}
          <div className='space-y-6 md:space-y-5 text-start
          text-xl md:text-2xl
          text-black dark:text-gray-800 md:translate-x-10 ' style={{ fontFamily: 'var(--font-playfair)' }}>
          <p className=" ">
            A personal site by Ellie
          </p>
          <p className=" text-xl md:text-2xl">
            Portfolio, tech blog, and moments from life
          </p>
          </div>
        </div>
      </div>

      {/* Divider with Clouds */}
      <WaveDivider className="relative z-20" />

      {/* Content Section */}
      <section className="content bg-gradient-to-b from-[#faf8f5] to-[#f5f3f0] dark:bg-gradient-to-br dark:from-[#0a0d15] dark:via-[#1a2332] dark:to-[#0e1218] min-h-screen transition-colors relative z-20">
        <div className="w-full px-6 md:px-10 py-20">
          <div className="md:ml-40 md:mr-5 xl:ml-100 xl:mr-40 space-y-30">



            {/* About Section */}
            <div id="about" className="scroll-mt-80 mt-30">

              <RevealOnScroll>
                <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white" style={{ fontFamily: 'var(--font-playfair)' }}>
                  About Me
                </h2>
              </RevealOnScroll>


              <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <RevealOnScroll >
                  <p>
                    I am an aspiring <span className="font-semibold text-gray-900 dark:text-white">full-stack developer</span> skilled in React,
                    TypeScript, and modern CSS frameworks. Passionate about creating
                    responsive, user-friendly web applications, I focus on combining
                    thoughtful design with solid engineering for performance and
                    accessibility. Currently completing my Master of Information Technology
                    at Monash University, I plan to reside in <span className="font-semibold text-gray-900 dark:text-white">Melbourne, Australia</span>.
                  </p>
                </RevealOnScroll>

                <RevealOnScroll >
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
                </RevealOnScroll>

                <RevealOnScroll >
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
                </RevealOnScroll>
              </div>
            </div>

            {/* Skills Section */}
            <div id="skills" className="scroll-mt-20">
              <RevealOnScroll>
                <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Skills
                </h2>
              </RevealOnScroll>

              <RevealOnScroll >
                <SkillsCloud />
              </RevealOnScroll>
            </div>

            {/* Experience Section */}
            <div id="experience" className="scroll-mt-20">
              <RevealOnScroll>
                <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white" style={{ fontFamily: 'var(--font-playfair)' }}>
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
                  skills={['Google Ads', 'Meta Ads', 'Google Analytics', 'Programmatic', 'Figma', 'Data Studio']}
                />
              </div>
            </div>

            {/* Projects Section */}
            <div id="projects" className="scroll-mt-20">
              <RevealOnScroll>
                <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white" style={{ fontFamily: 'var(--font-playfair)' }}>
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

          </div>
        </div>
      </section>
    </>
  );
}
