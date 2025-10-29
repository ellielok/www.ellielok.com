'use client';
import Tag from '@/component/sub-component/tag';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Code2, Sparkles, Package } from 'lucide-react';

// ✅ 顶部产品信息
function ProductHeader() {
  const product = {
    appName: 'TipsyTrack',
    description:
      'A web application designed to promote alcohol harm reduction by helping adults track and understand their drinking habits.',
    stack: 'Next.js, TypeScript, Tailwind CSS, Neon Postgres, Vercel',
    skills:
      'Frontend development, RESTful APIs, Cloud deployment, Local Storage',
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
              src='/projects/tipsy/tipsy-thumbnail.png'
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
      name: 'Monash IE Expo Winner',
      description:
        'Awarded Best Project at the Monash Postgraduate Industry Experience Expo, TipsyTrack is a personal alcohol tracking web app that empowers users to monitor their drinking habits, visualize behavioral patterns through interactive data insights, and set personalized health goals.',
      screenshot: '/projects/tipsy/te11.png',
    },
    {
      name: 'Drink Scanner',
      description:
        'Allows users to upload or capture an image of any alcohol product to instantly retrieve details using AI-powered image recognition, ensuring quick results while keeping all photos private and off-server.',
      screenshot: '/projects/tipsy/scanner.png',
    },
    {
      name: 'Drink Calculator',
      description:
        'A step-by-step calculator that helps users estimate standard drinks and blood alcohol concentration (BAC). The intuitive interface makes it simple to log and understand their alcohol intake.',
      screenshot: '/projects/tipsy/cal.png',
    },
    {
      name: 'Progress Tracker',
      description:
        'Visualizes drinking habits through an interactive calendar and progress dashboard, helping users track standard drinks, spending, and calorie intake while promoting healthier consumption patterns.',
      screenshot: '/projects/tipsy/tracker.png',
    },
    {
      name: 'Live Tracking & My Drinks List',
      description:
        'Displays all saved beverages with detailed information such as volume, alcohol content, and sugar levels. Includes a live tracker that calculates standard drinks, estimates blood alcohol concentration (BAC), and predicts recovery time for real-time awareness.',
      screenshot: '/projects/tipsy/list-widget.png',
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
      <div className='mx-5'>
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
            reverse={i % 2 === 1} // 偶数行反转
          />
        ))}
      </div>
      </div>
    </div>
  );
}
