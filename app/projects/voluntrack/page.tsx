'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// ✅ 顶部产品信息
function ProductHeader() {
  const product = {
    appName: 'VolunTrack',
    description:
      'A volunteer management Android app built with Kotlin and Jetpack Compose. It empowers organizations to monitor volunteer progress, manage activities, and visualize engagement data through real-time dashboards and analytics.',
    stack:
      'Kotlin, Jetpack Compose, Firebase, SendGrid, MVVM Architecture, Material Design 3',
    skills:
      'Mobile UI design, real-time data synchronization, authentication, cloud messaging, RESTful API integration, data visualization',
  };

  return (
    <div className="text-white text-left max-w-3xl space-y-6 mb-16">
      <h1 className="text-4xl font-bold tracking-tight">{product.appName}</h1>
      <p className="text-gray-300 text-base leading-relaxed">
        {product.description}
      </p>

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

// ✅ 支持多张截图的展示区
function PageSection({
  name,
  description,
  screenshots,
  reverse = false,
}: {
  name: string;
  description: string;
  screenshots: string[];
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

      {/* 图片区（多张） */}
      <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
        {screenshots.map((src, i) => (
          <div key={i} className="rounded-xl overflow-hidden">
            <Image
              src={src}
              alt={`${name} screenshot ${i + 1}`}
              width={500}
              height={300}
              className="object-cover w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ✅ 主页面布局
export default function ProductDetailsPage() {
  const pages = [
    {
      name: 'Volunteer Dashboard',
      description:
        'The home dashboard provides a clear overview of volunteer progress, hours logged, and recent activities, powered by Firebase Realtime Database.',
      screenshots: [
        '/projects/volun/dashboard.png',
        '/projects/volun/progress.png',
      ],
    },
    {
      name: 'Activity Management',
      description:
        'Organizers can create, assign, and monitor volunteering activities in real-time. Volunteers can track their assigned tasks and mark progress directly from the app.',
      screenshots: [
        '/projects/volun/wel.png',
        '/projects/volun/signup.png',
        '/projects/volun/cal.png',
      ],
    },
    {
      name: 'Summary Cards',
      description:
        'The summary cards dynamically display statistics such as total hours, completed events, and volunteer rankings with Compose animation effects.',
      screenshots: [
        '/projects/volun/profile.png',
        '/projects/volun/dashboard.png',
        '/projects/volun/progress.png',
      ],
    },
    {
      name: 'Organization Info',
      description:
        'A dedicated section displaying partner organizations, upcoming events, and volunteer contacts. Integrated with Firebase Firestore for real-time updates.',
      screenshots: [
        '/projects/volun/event-cus.png',
        '/projects/volun/search.png',
        '/projects/volun/details.png',
      ],
    },
  ];

  return (
    <div className="w-full px-6 sm:px-10 py-30 max-w-screen-xl mx-auto">
      {/* 返回按钮 */}
      <div className="mb-10 font-semi">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-300 hover:text-[#93f5fa] transition-colors hover:-translate-x-0.5"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </Link>
      </div>

      {/* 顶部信息 */}
      <ProductHeader />

      {/* 页面展示区 */}
      <div className="space-y-20">
        {pages.map((page, i) => (
          <PageSection
            key={i}
            name={page.name}
            description={page.description}
            screenshots={page.screenshots}
            reverse={i % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
}
