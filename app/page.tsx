import Image from 'next/image';
import {ReactNode} from 'react';
import ProjectCard from '@/component/project-card';
import {
  FaGithub,
  FaLinkedin,
  FaCodepen,
  FaInstagram,
  FaGoodreads,
} from 'react-icons/fa';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-4 my-15 mx-10">
      {/* Left Column  */}

      <div className="flex-1 sticky border">
        <div className="border">Ellie Lok</div>
        <a
          href="/cv/ellie-cv.pdf"
          target="_blank"
          rel="noreferrer"
          className="underline-offset-2 hover:underline"
        >
          View Full Résumé
        </a>
        <div className="border">
          Graduated from Monash MIT, I am on my journey to becoming a frontend
          engineer. I love working with React, Next.js, and TypeScript to create
          clean and engaging web experiences.
        </div>

        <div>
          <a href="https://github.com/ellielok" target="_blank" rel="blog">
            <FaGithub size={28} />
          </a>
          <a href="https://linkedin.com/in/ellielok" target="_blank" rel="blog">
            <FaLinkedin size={28} />
          </a>
        </div>
      </div>

      {/* Right Column */}

      <div className="flex-2 border">
        <div>Resume</div>
        <div>Education Placeholder</div>
        <div className="border">Work Experience Placeholder</div>

        {/* PROJECT Section */}
        <div className="border">Experience & Project</div>
        <ProjectCard
          timeRange="Jul 2025 - Present"
          position="Teaching Associate (TA)"
          company="Monash University"
          description="Facilitated postgraduate lab sessions by guiding practical exercises in database technologies (StarSchema, PostGIS, SQL queries) using tools such as DBeaver, SQL*Plus, and PostgreSQL."
          skills="React, Next.js, TypeScript, CSS">
        </ProjectCard>

        <ProjectCard
          timeRange="Mar 2025 - Jun 2025"
          project="BIRDTAG, AI-POWERED BIRD IDENTIFICATION WEB APP"
          position="LED AWS INFRASTRUCTURE DESIGN AND DEPLOYMENT"
          company="Monash University"
          description="Led development of a serverless platform to upload and classify bird species using image recognition. Integrated AWS services including Cognito (access management), S3 (image storage), Lambda (image processing), DynamoDB (tag storage), and SNS (notifications). Connected AI model for bird classification through serverless architecture; generated prediction thumbnails and metadata.">
        </ProjectCard>

        <ProjectCard
          timeRange="Sep 2024 - Nov 2024"
          project="VOLUNTRACK, VOLUNTEER MANAGEMENT ANDROID APP"
          position="LED AWS INFRASTRUCTURE DESIGN AND DEPLOYMENT"
          company="Monash University"
          description=" Spearheaded the development of a full-featured mobile app using Jetpack Compose for managing volunteer events, schedules, and organization info. Built real-time dashboard with Firebase Firestore to track progress and user engagement. Integrated Google Calendar API for event synchronization and reminder notifications.">
        </ProjectCard>

        {/* To be deleted */}
        <ProjectCard
          timeRange="Sep 2024 - Nov 2024"
          project="VOLUNTRACK, VOLUNTEER MANAGEMENT ANDROID APP"
          position="LED AWS INFRASTRUCTURE DESIGN AND DEPLOYMENT"
          company="Monash University"
          description=" Spearheaded the development of a full-featured mobile app using Jetpack Compose for managing volunteer events, schedules, and organization info. Built real-time dashboard with Firebase Firestore to track progress and user engagement. Integrated Google Calendar API for event synchronization and reminder notifications.">
        </ProjectCard>
        

        {/* WRITING Section */}
        <div className="border">Writing</div>
        <div className="grid grid-flow-col grid-rows-3 m-2 border">
          <div className="row-span-3 border">Thumbnail - Photo</div>
          <div className="col-span-2 border">Time - 2025</div>
          <div className="col-span-2 row-span-2 border">Desc - Details</div>
        </div>
      </div>
    </div>
  );
}
