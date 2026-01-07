'use client';
import Tag from '../component/sub-component/tag';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Code2, Sparkles, Package } from 'lucide-react';

interface ProjectProps {
  appName?: string;
  description?: string;
  stack?: string;
  skills?: string;
  thumbnail: string;
}

interface PageItem {
  name: string;
  description: string;
  screenshot: string | string[];
}

interface ProjectShowcaseProps {
  pages: PageItem[];
}

type ProductDetailsProps = ProjectProps & ProjectShowcaseProps;

function ProductHeader({
  appName,
  description,
  stack,
  skills,
  thumbnail,
}: ProjectProps) {
  const skillList =
    typeof skills === 'string'
      ? skills.split(',').map((s) => s.trim())
      : skills;

  return (
    <div className="flex flex-col md:flex-row text-white text-left  space-y-8 mb-16">
      <div className="md:w-8/10 space-y-6 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight">{appName}</h1>
        <p className="text-gray-300 text-base leading-relaxed">{description}</p>

        <div className="text-left space-y-8">
          <div>
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Code2 className="w-5 h-5" />
              Tech Stack
            </h2>
            <p className="text-gray-300">{stack}</p>
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
            src={thumbnail}
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

function PageSection({
  name,
  description,
  screenshot,
  reverse = false,
}: {
  name: string;
  description: string;
  screenshot: string | string[];
  reverse?: boolean;
}) {
  return (
    <div
      className={`flex flex-col lg:flex-row ${
        reverse ? 'lg:flex-row-reverse' : ''
      } items-center gap-10 mb-20`}
    >
      <div className="flex-1 space-y-3 text-white">
        <h3 className="text-2xl font-semibold ">{name}</h3>
        <p className="text-gray-300 text-base leading-relaxed">{description}</p>
      </div>

      <div className="flex-1 w-full">
        {Array.isArray(screenshot) ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
            {screenshot.map((src, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden border border-white/10 shadow-lg"
              >
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
        ) : (
          <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg">
            <Image
              src={screenshot}
              alt={`${name} screenshot`}
              width={900}
              height={500}
              className="object-cover w-full"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProductDetailsPage({
  appName,
  description,
  stack,
  skills,
  thumbnail,
  pages,
}: ProductDetailsProps) {
  return (
    <div className="w-full px-3 md:px-10 pt-20 max-w-screen-xl mx-auto">
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

      <div className="mx-5">
        <ProductHeader
          appName={appName}
          description={description}
          stack={stack}
          skills={skills}
          thumbnail={thumbnail}
        />

        <div className="flex items-center justify-center my-20">
          <div className="flex-grow h-px bg-gradient-to-r from-transparent via-white/30 to-white/50" />
          <span className="flex items-center gap-2 px-6 text-lg font-semibold">
            <Package className="w-5 h-5" />
            Product Introduction
          </span>
          <div className="flex-grow h-px bg-gradient-to-r from-white/50 via-white/30 to-transparent" />
        </div>

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
