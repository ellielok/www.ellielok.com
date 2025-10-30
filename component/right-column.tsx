'use client';
import hl from '@/utils/highLight';
import { useState } from 'react';
import ProjectCard from './sub-component/project-card';
import WritingCard from '@/component/sub-component/writing-card';
import Footer from '@/component/footer';
import { ExternalLink } from 'lucide-react';

export function Intro() {
  return (
    <div className="text-base leading-7 space-y-10">
      <div className="">
        I am an aspiring {hl('full-stack developer')} skilled in React,
        TypeScript, and modern CSS frameworks. Passionate about creating
        responsive, user-friendly web applications, I focus on combining
        thoughtful design with solid engineering for performance and
        accessibility. Currently completing my Master of Information Technology
        at Monash University, I plan to reside in {hl('Melbourne, Australia')}.
      </div>
      <div className=" ">
        Previously, I worked as a {hl('Senior Advertising Specialist')} at{' '}
        {hl('Fastlane', 'https://fstln.io/en')}, where I gained deep experience
        in digital marketing and user analytics. This background helps me design
        products that are both data-informed and user-centered. Outside of
        coding, I enjoy traveling, hiking, and exploring virtual worlds from
        Summoner's Rift to Hyrule.
      </div>
    </div>
  );
}

export function ProjectSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      timeRange: 'Jul 2025 - Present',
      project: 'Teaching Associate (TA)',
      position: 'Advanced Database',
      company: 'Monash University',
      description:
        'Facilitated postgraduate lab sessions by guiding practical exercises in database technologies (StarSchema, PostGIS, SQL queries).',
      skills: 'DBeaver, PostGIS, PostgreSQL, Docker',
    },
    {
      timeRange: 'Aug 2022 - Jan 2024',
      project: 'Senior Advertising Specialist',
      position: 'Digital Marketing',
      company: 'Fastlane',
      description:
        'Managed and optimised multi-channel digital advertising campaigns across Google, Meta, and programmatic platforms. Ensured alignment with overall brand strategy, conducted performance analytics, and improved ROI through A/B testing and audience segmentation.',
      skills:
        'Google Ads, Meta Ads, Google Analytics, Programmatic, Figma, Data Studio',
    },
  ];

  return (
    <div className="space-y-6">
      {projects.map((p, i) => (
        <div
          key={i}
          // Listen hover events to set hovered index
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`
            transition-opacity duration-300
            ${
              hoveredIndex !== null && hoveredIndex !== i
                ? 'opacity-40'
                : 'opacity-100'
            }
          `}
        >
          <ProjectCard {...p} />
        </div>
      ))}
    </div>
  );
}

export function WritingSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const writings = [
    {
      projectName: 'TIPSYTRACK, ALCOHOL HARM-REDUCTION WEB APP',
      timeRange: 'Jul - Oct 2025',
      description:
        'Developed a full-stack web application to help adults in Victoria track alcohol consumption and promote safer drinking habits. Built with Next.js (App Router), TypeScript, Tailwind, and Neon Postgres. Implemented Google Vision API for drink label scanning, local storage-based privacy features, and gamified progress tracking. Deployed on Vercel with protected routes and responsive UI components (Shadcn, Radix).',
      href: '/projects/tipsytrack',
      screenshot: '/projects/tipsy/tipsy-thumbnail.png',
    },
    {
      projectName: 'KICKSTART, COMMUNITY STREET SOCCER VOLUNTEER PLATFORM',
      timeRange: 'Apr - Jul 2025',
      description:
        'Co-led development of a Vue.js + Firebase web platform to connect volunteers with community street soccer sessions. Integrated Firebase Authentication (email/Google login), Firestore (session management), and Cloud Functions with SendGrid for automated notifications. Designed interactive admin dashboards and data charts, ensuring accessibility (WCAG 2.1 AA) and responsive user experience.',

      href: '/projects/kickstart',
      screenshot: '/projects/kick/kick_thumbnail.png',
    },
    {
      projectName: 'VOLUNTRACK, VOLUNTEER MANAGEMENT ANDROID APP',
      timeRange: 'Mar - Jun 2025',
      description:
        'Led development of a serverless platform to upload and classify bird species using image recognition. Integrated AWS services including Cognito (access management), S3 (image storage), Lambda (image processing), DynamoDB (tag storage), and SNS (notifications). Connected AI model for bird classification through serverless architecture; generated prediction projectNames and metadata.',
      href: '/projects/voluntrack',
      screenshot: '/projects/volun/volun-thumbnail.png',
    },
    {
      projectName: 'BIRDTAG, AI-POWERED BIRD IDENTIFICATION WEB APP',
      timeRange: 'Sep - Nov 2024',
      description:
        'Spearheaded the development of a full-featured mobile app using Jetpack Compose for managing volunteer events, schedules, and organization info. Built real-time dashboard with Firebase Firestore to track progress and user engagement.',
      href: '/projects/birdtag',
      screenshot: '/projects/bird/bird-thumbnail.png',
    },
  ];

  return (
    <div className="space-y-3 md:space-y-6">
      {writings.map((p, i) => (
        <div
          key={i}
          // Listen hover events to set hovered index
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`
            transition-opacity duration-300
            ${
              hoveredIndex !== null && hoveredIndex !== i
                ? 'opacity-40'
                : 'opacity-100'
            }
          `}
        >
          <WritingCard {...p} />
        </div>
      ))}
    </div>
  );
}

export default function RightColumn() {
  return (
    <div className="space-y-10 flex-4 scroll-smooth lg:py-25 lg:px-10 xl:px-0">
      <div>
        <div
          className="top-0 py-5 lg:hidden font-bold 
             text-white/90 "
        >
          About Me
        </div>
        <Intro></Intro>
      </div>

      <div>
        <a
          href="/cv/ellie-cv.pdf"
          target="_blank"
          rel="ellielok"
          className="inline-flex gap-1 items-center font-semibold text-white
          hover:text-[#93f5fa] transition-colors duration-300 group"
        >
          View Full Résumé{' '}
          <ExternalLink className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>

      {/* PROJECT Section */}
      <div>
        <div className="top-0  py-5 lg:hidden font-bold text-white/90">
          Experience
        </div>
        <div id="experience" className="py-5">
          <ProjectSection></ProjectSection>
        </div>
      </div>

      {/* WRITING Section */}
      <div>
        <div className="top-0 py-5 font-bold text-white/90">Projects</div>
        <div id="project">
          <WritingSection></WritingSection>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
