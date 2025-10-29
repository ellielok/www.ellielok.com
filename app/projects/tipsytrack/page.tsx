'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// ✅ 顶部产品信息
function ProductHeader() {
  const product = {
    appName: 'TipsyTrack',
    description:
      'A web application designed to promote alcohol harm reduction by helping adults track and understand their drinking habits.',
    stack: 'Next.js (App Router), TypeScript, Tailwind CSS, Neon Postgres, Vercel',
    skills: 'Frontend development, RESTful APIs, Cloud deployment, UI/UX design',
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
        <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg">
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
      name: 'Dashboard',
      description:
        'Shows weekly alcohol intake, progress toward goals, and motivational messages to help maintain healthy habits.',
      screenshot: '/projects/tipsy/home.png',
    },
    {
      name: 'Drink Scanner',
      description:
        'Utilizes Google Vision API to scan drink labels, identify alcohol content, and calculate standard drinks automatically.',
      screenshot: '/projects/tipsy/scanner.png',
    },
    {
      name: 'Progress Tracker',
      description:
        'Gamified experience with “Swap to Zero” challenges, progress milestones, and visual rewards to encourage positive change.',
      screenshot: '/projects/tipsy/tracker.png',
    },
    {
      name: 'Progress Tracker',
      description:
        'Gamified experience with “Swap to Zero” challenges, progress milestones, and visual rewards to encourage positive change.',
      screenshot: '/projects/tipsy/tracker.png',
    },
    {
      name: 'Progress Tracker',
      description:
        'Gamified experience with “Swap to Zero” challenges, progress milestones, and visual rewards to encourage positive change.',
      screenshot: '/projects/tipsy/list-widget.png',
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
            reverse={i % 2 === 1} // 偶数行反转
          />
        ))}
      </div>
      
    </div>
  );
}
