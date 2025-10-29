'use client';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Mail, Github, Linkedin, Briefcase, Sprout } from 'lucide-react';

export default function IntroSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-12 py-24 px-6 sm:px-10 max-w-screen-xl mx-auto">
      {/* 左侧文本区域 */}
      <div className="flex-2 text-left space-y-6">
        <h1 className="text-5xl font-bold text-white/70 tracking-tight">
          Hi, I’m <span className="">Ellie Lok</span>
        </h1>

        <div className="flex items-center gap-5 pt-4 ">
          <a
            href="/cv/ellie-cv.pdf"
            target="_blank"
            rel="ellielok"
            className="inline-flex gap-1 items-center font-semibold text-white/85
          hover:text-[#93f5fa] transition-colors duration-300 group border-2 border-white/50 hover:border-[#93f5fa] rounded-lg px-3 py-1 animate-pulse"
          >
            View Full Résumé{' '}
            <ExternalLink className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <p className=" text-white/70 leading-relaxed max-w-2xl">
          Aspiring full-stack developer passionate about building responsive,
          human-centered web experiences. Skilled in React, TypeScript, and
          cloud-based systems, I love finding the balance between aesthetics and
          performance - crafting interfaces that not only look good but also
          feel intuitive and fast.
        </p>

        <p className="text-white/70 leading-relaxed max-w-2xl">
          Currently completing a Master of Information Technology at Monash
          University (Melbourne), with hands-on experience in full-stack web
          development, and database design.
        </p>

        {/* 位置信息与状态 */}
        <div className="space-y-4 text-white">
          <div className="flex items-center gap-3 ">
            <MapPin className="w-6 h-6 min-w-[1.5rem]" />
            <span className='font-semibold text-white/85'>Melbourne, Australia</span>
          </div>

          <div className="flex items-center gap-3">
            <Sprout className="w-6 h-6 min-w-[1.5rem]" />
            
            <span className='font-semibold text-white/85'>Open to new opportunities</span>
          </div>
        </div>

        {/* 按钮与社交链接 */}
        <div className="flex items-center gap-5 pt-4">
          <div className="flex items-center gap-4 text-white/90">
            <Link
              href="https://github.com/ellielok"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="w-6 h-6 hover:text-[#93f5fa] transition-colors" />
            </Link>
            <Link
              href="https://linkedin.com/in/ellielok"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="w-6 h-6 hover:text-[#93f5fa] transition-colors" />
            </Link>
            <Link
              href="mailto:ellielo2021@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Mail className="w-6 h-6 hover:text-[#93f5fa] transition-colors" />
            </Link>
          </div>
        </div>
      </div>

      {/* 右侧照片区域 */}
      <div className="flex-1 flex justify-center lg:justify-center">
        {/* 主图 */}
        <div className="relative rounded-full overflow-hidden w-60 h-60 ">
          <Image
            src="/profile/ellie.png"
            alt="Ellie Lok Graduation"
            width={400}
            height={400}
            className="object-cover [object-position:70%_10%] w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
