import { Particles } from "@/components/ui/shadcn-io/particles";
import { ReactNode } from 'react';
import ProjectCard from '@/component/project-card';
import Footer from '@/component/footer';
import WritingCard from '@/component/writing-card';
import Menu from '@/component/menu';
import {
  FaGithub,
  FaLinkedin,
  FaCodepen,
  FaInstagram,
  FaGoodreads,
} from 'react-icons/fa';
import hl from '@/utils/highLight';

export default function Home() {
  return (
    <div
      className="flex flex-col 
                    px-8 py-20
                    lg:flex-row lg:px-0 lg:py-0
                    gap-3"
    >


      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh
      />

      {/* Left Space */}
      <div className=" hidden lg:block lg:flex-1 "></div>

      {/* Left Column  */}
      <div
        className="flex-2 h-fit  
                      lg:top-0 lg:h-screen lg:sticky 
                      top-10 self-start 
                      lg:pt-25"
      >
        <h1 className=" text-2xl font-bold text-white/95 sm:text-3xl md:text-4xl lg:text-5xl ">
          Ellie Lok
        </h1>
        <h2 className=" mt-5 mb-5 font-semibold  text-white/95 text-base md:text-xl">
          Junior Developer
        </h2>
        <a
          href="/cv/ellie-cv.pdf"
          target="_blank"
          rel="noreferrer"
          className="underline-offset-2 hover:underline"
        >
          View Full Résumé
        </a>
        <div className="">
          Graduated from Monash MIT, I am on my journey to becoming a frontend
          engineer. I love working with React, Next.js, and TypeScript to create
          clean and engaging web experiences.
        </div>
        <div>
          Feel free to{' '}
          <a
            href="mailto:ellielo2021@gmail.com?subject=hello,Ellie"
            target="_blank"
            className="underline-offset-2 hover:underline"
          >
            send email and Say Hello
          </a>
        </div>

        <div
          className="flex flex-wrap gap-3 
                        mt-5
                        lg:flex-col lg:absolute lg:inset-x-0 lg:bottom-0 lg:px-5 lg:py-15 
                        "
        >
          <a href="https://github.com/ellielok" target="_blank" rel="blog">
            <FaGithub size={28} />
          </a>
          <a href="https://linkedin.com/in/ellielok" target="_blank" rel="blog">
            <FaLinkedin size={28} />
          </a>
        </div>
        {/* TOC Menu */}
        <Menu />
      </div>

      {/* Right Column */}

      <div className="flex-3 scroll-smooth lg:py-25">
        <div>
          <div
            id="about-content"
            className="sticky top-0 py-5 lg:hidden font-bold bg-black text-white/90"
          >
            About Me
          </div>

          <div className="">
            <div className="m-2 mb-10">
              I am an aspiring full-stack developer skilled in React,
              TypeScript, and modern CSS frameworks. I am passionate about
              creating responsive and user-friendly web applications that
              combine thoughtful design with solid engineering for performance
              and accessibility. I am about to complete my Master of Information
              Technology at Monash University and plan to reside in{' '}
              {hl('Melbourne, Australia')}.
            </div>
            <div className="m-2 mb-10 ">
              Previously, I worked as a Senior Advertising Specialist at{' '}
              {hl('Fastlane')}, where I gained deep experience in digital
              marketing and user analytics. This background helps me design
              products that are both data-informed and user-centered. Outside of
              coding, I enjoy traveling, hiking, and exploring virtual worlds
              from Summoner’s Rift to Hyrule.
            </div>
          </div>
        </div>

        {/* PROJECT Section */}
        <div>
          <div
            id="project-content"
            className="sticky top-0  py-5 lg:hidden font-bold bg-black text-white/90"
          >
            Experience
          </div>
          <div id="ex-more" className=" py-5 mb-10">
            <ProjectCard
              timeRange="Jul 2025 - Present"
              project="Teaching Associate (TA)"
              position="Advanced Database"
              company="Monash University"
              description="Facilitated postgraduate lab sessions by guiding practical exercises in database technologies (StarSchema, PostGIS, SQL queries) using tools such as DBeaver, SQL*Plus, and PostgreSQL."
              skills="React, Next.js, TypeScript, CSS"
            ></ProjectCard>
            <ProjectCard
              timeRange="Aug 2022 - Jan 2024"
              project="Senior Advertising Specialist"
              position="Digital Marketing"
              company="Fastlane"
              description="Managed and optimised multi-channel digital advertising campaigns across Google, Meta, and programmatic platforms. Ensured alignment with overall brand strategy, conducted performance analytics, and improved ROI through A/B testing and audience segmentation. Collaborated with cross-functional teams to enhance creative strategy and campaign scalability."
              skills="Google Ads, Meta Ads, Programmatic, Analytics, A/B Testing"
            ></ProjectCard>
          </div>
        </div>

        {/* WRITING Section */}
        <div>
          <div id="more" className=" py-5 mb-10 font-bold text-white/90">
            Projects
          </div>
          <div id="more-content">
            <WritingCard
              projectName="TIPSYTRACK, ALCOHOL HARM-REDUCTION WEB APP"
              timeRange="Jul - Oct 2025"
              description="Developed a full-stack web application to help adults in Victoria track alcohol consumption and promote safer drinking habits. Built with Next.js (App Router), TypeScript, Tailwind, and Neon Postgres. Implemented Google Vision API for drink label scanning, local storage–based privacy features, and gamified progress tracking. Deployed on Vercel with protected routes and responsive UI components (Shadcn, Radix)."
            ></WritingCard>

            <WritingCard
              projectName="KICKSTART, COMMUNITY STREET SOCCER VOLUNTEER PLATFORM"
              timeRange="Apr - Jul 2025"
              description="Co-led development of a Vue.js + Firebase web platform to connect volunteers with community street soccer sessions. Integrated Firebase Authentication (email/Google login), Firestore (session management), and Cloud Functions with SendGrid for automated notifications. Designed interactive admin dashboards and data charts, ensuring accessibility (WCAG 2.1 AA) and responsive user experience."
            ></WritingCard>

            <WritingCard
              projectName="VOLUNTRACK, VOLUNTEER MANAGEMENT ANDROID APP"
              timeRange="Mar - Jun 2025"
              description="Led development of a serverless platform to upload and classify bird species using image recognition. Integrated AWS services including Cognito (access management), S3 (image storage), Lambda (image processing), DynamoDB (tag storage), and SNS (notifications). Connected AI model for bird classification through serverless architecture; generated prediction projectNames and metadata."
            ></WritingCard>

            <WritingCard
              projectName="BIRDTAG, AI-POWERED BIRD IDENTIFICATION WEB APP"
              timeRange="Sep - Nov 2024"
              description="Spearheaded the development of a full-featured mobile app using Jetpack Compose for managing volunteer events, schedules, and organization info. Built real-time dashboard with Firebase Firestore to track progress and user engagement. Integrated Google Calendar API for event synchronization and reminder notifications."
            ></WritingCard>
          </div>
        </div>

        <Footer></Footer>
      </div>

      {/* Right Space */}
      <div className=" hidden lg:block flex-1 "></div>
    </div>
  );
}
