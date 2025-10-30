'use client';
import Tag from '@/component/sub-component/tag';
import { Code2, Sparkles, Package } from 'lucide-react';
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
      'Mobile UI design, Real-time data synchronization, Authentication, Cloud messaging, RESTful API integration, Data visualization',
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
                src='/projects/volun/volun-thumbnail.png'
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
        <h3 className="text-2xl font-semibold ">{name}</h3>
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
      name: 'Smart Volunteer Management',
      description:
        'VolunTrack is an Android application built with Kotlin and Jetpack Compose. It integrates third-party login and calendar access to recommend suitable volunteer opportunities for each user.',
      screenshots: [
        '/projects/volun/wel.png',
        '/projects/volun/signup.png',
        '/projects/volun/cal.png',
      ],
    },

    {
      name: 'Event Discovery and Management',
      description:
        'Connects to open data source APIs to help users explore volunteer opportunities from verified organizations. Users can search by category, and view detailed event information.',
      screenshots: [
        '/projects/volun/event-cus.png',
        '/projects/volun/search.png',
        '/projects/volun/details.png',
      ],
    },

    {
      name: 'Dashboard and Profile',
      description:
        'VolunTrack provides volunteers with a personalized dashboard to track their participation, set goals, and monitor progress across activity categories. ',
      screenshots: [
        '/projects/volun/dashboard.png',
        '/projects/volun/progress.png',
      ],
    },
    {
      name: 'Dashboard and Profile',
      description:
        'VolunTrack provides volunteers with a personalized dashboard to track their participation, set goals, and monitor progress across activity categories. Users can view their volunteer history, update personal details, and visualize achievements through interactive charts and progress indicators.',
      screenshots: ['/projects/volun/profile.png', '/projects/volun/dark.png'],
    },
  ];

  return (
    <div className="w-full px-3 md:px-10 pt-20 max-w-screen-xl mx-auto">
      {/* 返回按钮 */}
      <div className="mb-10 font-semi">
        <Link
          href="/"
          className="inline-flex items-center gap-2  border-2 border-white/40 hover:border-[#93f5fa]/60 px-2 py-1 rounded-xl text-gray-300 hover:text-[#93f5fa] transition-colors hover:-translate-x-0.5 font-semibold"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </Link>
      </div>

      {/* 顶部信息 */}
      <div className='mx-10'>
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
            screenshots={page.screenshots}
            reverse={i % 2 === 1}
          />
        ))}
      </div>
      </div>
    </div>
  );
}
