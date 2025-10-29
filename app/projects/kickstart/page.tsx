'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// ✅ 顶部产品信息
function ProductHeader() {
  const product = {
    appName: 'KickStart',
    description:
      'A community-driven web app that simplifies street soccer event management. It connects players, volunteers, and organizers through an interactive booking and scheduling platform.',
    stack: 'Vue 3, TypeScript, Firebase, SendGrid, FullCalendar, Tailwind CSS',
    skills:
      'Frontend architecture, database design, authentication, real-time updates, email integration',
  };

  return (
    <div className="text-white text-left max-w-3xl space-y-6 mb-16">
      <h1 className="text-4xl font-bold tracking-tight">{product.appName}</h1>
      <p className="text-gray-300 text-base leading-relaxed">{product.description}</p>

      <div className="text-left space-y-3">
        <div>
          <h2 className="text-lg font-semibold text-[#93f5fa]">Tech Stack</h2>
          <p className="text-gray-300">{product.stack}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#93f5fa]">Key Skills</h2>
          <p className="text-gray-300">{product.skills}</p>
        </div>
      </div>
    </div>
  );
}

// ✅ 单个页面展示区（左右交替）
function PageSection({
  name,
  description,
  screenshot,
  reverse = false,
}: {
  name: string;
  description: string;
  screenshot: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`flex flex-col lg:flex-row ${
        reverse ? 'lg:flex-row-reverse' : ''
      } items-center gap-10 mb-20`}
    >
      {/* 文本区 */}
      <div className="flex-1 space-y-3 text-white">
        <h3 className="text-2xl font-semibold text-[#93f5fa]">{name}</h3>
        <p className="text-gray-300 text-base leading-relaxed">{description}</p>
      </div>

      {/* 图片区 */}
      <div className="flex-1 w-full">
        <div className="rounded-xl overflow-hidden ">
          <Image
            src={screenshot}
            alt={`${name} screenshot`}
            width={900}
            height={500}
            className="object-cover w-full"
          />
        </div>
      </div>
    </div>
  );
}

// ✅ 主页面布局
export default function ProductDetailsPage() {
  const pages = [
    {
      name: 'Home Dashboard',
      description:
        'Provides an overview of upcoming matches, player activities, and team announcements in a clean, responsive layout.',
      screenshot: '/projects/kick/home.png',
    },
    {
      name: 'Booking Calendar',
      description:
        'Built with FullCalendar for real-time event scheduling. Users can view, book, or manage soccer sessions seamlessly.',
      screenshot: '/projects/kick/calendar.png',
    },
    {
      name: 'Volunteer Portal',
      description:
        'Dedicated portal for volunteers to manage attendance, tasks, and notifications — powered by Firebase Realtime Database.',
      screenshot: '/projects/kick/session.png',
    },
    {
      name: 'Email Notification System',
      description:
        'Automated SendGrid integration sends event confirmations, reminders, and updates to all participants instantly.',
      screenshot: '/projects/kick/map.png',
    },
    {
      name: 'Analytics Dashboard',
      description:
        'Displays participation trends, volunteer hours, and event statistics through dynamic charts and responsive cards.',
      screenshot: '/projects/kick/join.png',
    },
    {
      name: 'Analytics Dashboard',
      description:
        'Displays participation trends, volunteer hours, and event statistics through dynamic charts and responsive cards.',
      screenshot: '/projects/kick/signup.png',
    },
  ];

  return (
    <div className="w-full px-6 sm:px-10 py-30 max-w-screen-xl mx-auto">
      {/* Back Button */}
      <div className="mb-10 font-semi">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-300 hover:text-[#93f5fa] transition-colors hover:-translate-x-0.5"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </Link>
      </div>

      {/* 产品信息 */}
      <ProductHeader />

      {/* 页面展示区 */}
      <div className="space-y-20">
        {pages.map((page, i) => (
          <PageSection
            key={i}
            name={page.name}
            description={page.description}
            screenshot={page.screenshot}
            reverse={i % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
}
