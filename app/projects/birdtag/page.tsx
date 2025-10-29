'use client';
import Tag from '@/component/sub-component/tag';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Code2, Sparkles, Package } from 'lucide-react';

// ✅ 顶部产品信息
function ProductHeader() {
  const product = {
    appName: 'BirdTag',
    description:
      'An AI-powered bird identification web application that automatically recognizes bird species from uploaded photos using a fully serverless AWS architecture. The platform integrates intelligent tagging, DynamoDB data management, and real-time notification services.',
    stack:
      'AWS Lambda, API Gateway, S3, DynamoDB, Amplify, Cognito, Python, React',
    skills:
      'Serverless architecture, Image recognition, Data synchronization, User authentication, Cloud automation, Full-stack development',
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
            src="/projects/bird/bird-thumbnail.png"
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
// ✅ 支持“单列多行图片”的展示区
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
      } items-start gap-10 mb-20`}
    >
      {/* 文本区 */}
      <div className="flex-1 space-y-3 text-white">
        <h3 className="text-2xl font-semibold ">{name}</h3>
        <p className="text-gray-300 text-base leading-relaxed">{description}</p>
      </div>

      {/* 图片区（单列 + 多行） */}
      <div className="flex-1 flex flex-col gap-6 w-full">
        {screenshots.map((src, i) => (
          <div key={i} className="rounded-xl overflow-hidden w-full">
            <Image
              src={src}
              alt={`${name} screenshot ${i + 1}`}
              width={900}
              height={500}
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
      name: 'User Access & Authentication',
      description:
        'Users can sign up or log in securely using Amazon Cognito. BirdTag supports both traditional email registration (username, email, password) and Google account login for convenience.',
      screenshots: ['/projects/bird/signup.png'],
    },
    {
      name: 'Upload Media Files',
      description:
        'Once logged in, users can navigate to the upload page and select bird photos or videos. Upon upload, the files are stored in S3, automatically triggering the AI detection pipeline. Metadata and recognition results are written to DynamoDB for persistence.',
      screenshots: ['/projects/bird/upload.png'],
    },
    {
      name: 'Search & Explore Files',
      description:
        'Users can search their uploaded files by species name or tag. The system fetches matching entries from DynamoDB and displays thumbnails; clicking a thumbnail reveals the original image in full resolution.',
      screenshots: ['/projects/bird/search.png'],
    },

    {
      name: 'Modify & Manage Tags',
      description:
        'Each recognized file record includes editable tags. Users can update or add new tags directly from the interface to refine identification or improve dataset quality.',
      screenshots: ['/projects/bird/tags.png'],
    },
    {
      name: 'Delete & Bulk Operations',
      description:
        'BirdTag allows users to delete single or multiple files at once. The bulk delete function includes checkbox selection and batch removal through DynamoDB and S3 synchronization.',
      screenshots: ['/projects/bird/delete.png'],
    },
    {
      name: 'Bird Tag Subscriptions & Notifications',
      description:
        'Users can subscribe to specific bird tags (e.g., "crow" or "parrot"). When new files matching those tags are uploaded, the system automatically sends notifications via AWS SNS to subscribed users.',
      screenshots: ['/projects/bird/subscribe.png'],
    },
  ];

  return (
    <div className="w-full px-6 sm:px-10 pt-20 max-w-screen-xl mx-auto">
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

        <div className="space-y-20 mx-5">
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
