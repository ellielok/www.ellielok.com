import Image from 'next/image';
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

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 mx-10 ">
      {/* Left Space */}
      <div className=" hidden lg:block flex-1 "></div>

      {/* Left Column  */}
      <div className="flex-2 h-fit  my-10
                      lg:top-0 lg:h-screen lg:sticky 
                      top-10 self-start ">
        <h1 className=" text-2xl font-bold text-white/95 sm:text-3xl md:text-4xl lg:text-5xl ">Ellie Lok</h1>
        <h2 className=" mt-5 mb-5 font-semibold  text-white/95 text-base md:text-xl">Junior Developer</h2>
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

        <div className="flex flex-wrap gap-3 
                        mt-5
                        lg:flex-col lg:absolute lg:inset-x-0 lg:bottom-0 lg:px-5 
                        ">
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

      <div className="flex-3 my-10  scroll-smooth">
        <div id="about-content" className="sticky top-0  py-5 lg:hidden font-bold bg-black text-white/90">
          About Me
        </div>
        <div className="m-2 mb-15 ">
          Junior Frontend Developer with hands-on experience in React,
          TypeScript, and modern CSS frameworks. Passionate about building
          responsive, user-friendly web applications and eager to learn new
          technologies in a collaborative environment.
        </div>
        <div className="m-2 mb-15 ">
          Master of Information Technology GPA: 3.5 (Distinction) Monash
          University, Clayton, VIC Graduation: November 2025 Relevant
          Coursework: Algorithms & Programming Foundations in Python, Internet
          Applications Development, Software Engineering, Cloud Computing &
          Security, Mobile & Distributed Computing Systems
        </div>

        {/* PROJECT Section */}
        <div
          id="project-content"
          className="sticky top-0  py-5 lg:hidden font-bold bg-black text-white/90"
        >
          Experience & Project
        </div>
        <div className='space-y-15'>
          <ProjectCard
            timeRange="Jul 2025 - Present"
            project="Teaching Associate (TA)" 
            position='Advanced Database'
            company="Monash University"
            description="Facilitated postgraduate lab sessions by guiding practical exercises in database technologies (StarSchema, PostGIS, SQL queries) using tools such as DBeaver, SQL*Plus, and PostgreSQL."
            skills="React, Next.js, TypeScript, CSS"
          ></ProjectCard>

          <ProjectCard
            timeRange="Mar 2025 - Jun 2025"
            project="BIRDTAG, AI-POWERED BIRD IDENTIFICATION WEB APP"
            position="LED AWS INFRASTRUCTURE DESIGN AND DEPLOYMENT"
            company="Monash University"
            description="Led development of a serverless platform to upload and classify bird species using image recognition. Integrated AWS services including Cognito (access management), S3 (image storage), Lambda (image processing), DynamoDB (tag storage), and SNS (notifications). Connected AI model for bird classification through serverless architecture; generated prediction thumbnails and metadata."
          ></ProjectCard>

          <ProjectCard
            timeRange="Sep 2024 - Nov 2024"
            project="VOLUNTRACK, VOLUNTEER MANAGEMENT ANDROID APP"
            position="LED AWS INFRASTRUCTURE DESIGN AND DEPLOYMENT"
            company="Monash University"
            description=" Spearheaded the development of a full-featured mobile app using Jetpack Compose for managing volunteer events, schedules, and organization info. Built real-time dashboard with Firebase Firestore to track progress and user engagement. Integrated Google Calendar API for event synchronization and reminder notifications."
          ></ProjectCard>
                  {/* To be deleted */}
        <ProjectCard
          timeRange="Sep 2024 - Nov 2024"
          project="VOLUNTRACK, VOLUNTEER MANAGEMENT ANDROID APP"
          position="LED AWS INFRASTRUCTURE DESIGN AND DEPLOYMENT"
          company="Monash University"
          description=" Spearheaded the development of a full-featured mobile app using Jetpack Compose for managing volunteer events, schedules, and organization info. Built real-time dashboard with Firebase Firestore to track progress and user engagement. Integrated Google Calendar API for event synchronization and reminder notifications."
        ></ProjectCard>
        </div>



        {/* WRITING Section */}
        <div id="more" className=" py-5 mb-10 font-bold text-white/90">
          Writing
        </div>
        <div id="more-content">
          <WritingCard></WritingCard>
          <WritingCard></WritingCard>
          <WritingCard></WritingCard>
        </div>

        <Footer></Footer>
      </div>

      {/* Right Space */}
      <div className=" hidden lg:block flex-1 "></div>
    </div>
  );
}
