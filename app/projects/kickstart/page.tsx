'use client';

import Tag from '@/component/sub-component/tag';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Code2, Sparkles, Package } from 'lucide-react';

// ✅ 顶部产品信息
function ProductHeader() {
  const product = {
    appName: 'KickStart',
    description:
      'A community-driven web app that simplifies street soccer event management. It connects players, volunteers, and organizers through an interactive booking and scheduling platform.',
    stack: 'Vue 3, TypeScript, Firebase, SendGrid, FullCalendar, Tailwind CSS',
    skills:
      'Frontend architecture, Database design, Authentication, Real-time updates, Email integration',
  };

  const skillList =
    typeof product.skills === 'string'
      ? product.skills.split(',').map((s) => s.trim())
      : product.skills;

  return (
    <div className="flex flex-col md:flex-row text-white text-left  space-y-8 mb-16">
      <div className="md:w-8/10 space-y-6 max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight">{product.appName}</h1>
      <p className="text-gray-300 text-base leading-relaxed">
        {product.description}
      </p>

      <div className="text-left space-y-8">
        <div>
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Code2 className="w-5 h-5" />
            Tech Stack
          </h2>
          <p className="text-gray-300">{product.stack}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            Key Skills
          </h2>
          {/* Skills tags */}
          {skillList && Array.isArray(skillList) && (
            <div className="flex flex-wrap gap-2 pt-3">
              {skillList.map((skill, i) => (
                <Tag key={i} label={skill} />
              ))}
            </div>
          )}
        </div>
      </div>
      </div>

      <div className="md:w-2/10 mt-8 md:mt-0 flex items-center justify-center mx-10">
      <div className="w-full aspect-[16/9] overflow-hidden rounded-xl border border-white/30 shadow-lg ">
          <Image
            src='/projects/kick/kick_thumbnail.png'
            alt="Image of the project"
            width={800}
            height={450}
            className="object-cover [object-position:70%_10%]"
          />
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
        <h3 className="text-2xl font-semibold ">{name}</h3>
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
      name: 'Main Features',
      description:
        'A community-driven web app that streamlines street soccer event management. It connects players, volunteers, and organizers, promoting youth engagement and teamwork through accessible, well-organized soccer programs.',
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
        'Encourages community participation by offering three user roles: Member, Volunteer, and Admin. Each role provides tailored access to session management and engagement tools, making it easy for anyone.',
      screenshot: '/projects/kick/join.png',
    },
    {
      name: 'Find Sessions Page',
      description:
        'Enables users to discover nearby soccer sessions using postcode and distance filters. Integrated with an interactive map, making it easy for players to find and join community games in their area.',
      screenshot: '/projects/kick/map.png',
    },
    {
      name: 'Email Notification System',
      description:
        'Automated SendGrid integration sends event confirmations, reminders, and updates to all participants instantly.',
      screenshot: '/projects/kick/email.png',
    },
  ];

  return (
    <div className="w-full px-6 sm:px-10 pt-20 max-w-screen-xl mx-auto">
      {/* Back Button */}
      <div className="mb-10 font-semi">
        <Link
          href="/"
          className="inline-flex items-center gap-2  border-2 border-white/40 hover:border-[#93f5fa]/60 px-2 py-1 rounded-xl text-gray-300 hover:text-[#93f5fa] transition-colors hover:-translate-x-0.5 font-semibold"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </Link>
      </div>

      {/* 产品信息 */}
      <div className="mx-10">
        <ProductHeader />

                {/* 分割线 */}
        <div className="flex items-center justify-center my-20">
          <div className="flex-grow h-px bg-gradient-to-r from-transparent via-white/30 to-white/50" />
          <span className="flex items-center gap-2 px-6 text-lg font-semibold">
            <Package className="w-5 h-5" />
            Product Introduction
          </span>
          <div className="flex-grow h-px bg-gradient-to-r from-white/50 via-white/30 to-transparent" />
        </div>

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
    </div>
  );
}
