import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Globe, Github } from 'lucide-react';
import RevealOnScroll from '@/components/reveal-on-scroll';

interface ProjectCardProps {
  href: string;
  thumbnail: StaticImageData;
  alt: string;
  date: string;
  title: string;
  description: string;
  websiteUrl?: string;
  repoUrl?: string;
}

export default function ProjectCard({
  href,
  thumbnail,
  alt,
  date,
  title,
  description,
  websiteUrl,
  repoUrl,
}: ProjectCardProps) {
  return (
    <RevealOnScroll>
      <div className="group p-6 rounded-sm border border-transparent dark:hover:bg-white/3 dark:hover:backdrop-blur-sm dark:hover:border-white/2 dark:hover:shadow-sm dark:hover:shadow-black/10 transition-all">
        <Link href={href} className="cursor-pointer block">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/4 flex items-center justify-center">
              <div className="aspect-video w-full bg-gray-200 dark:bg-gray-600 rounded-lg overflow-hidden transition-shadow group-hover:shadow-xl">
                <Image src={thumbnail} alt={alt} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="md:w-3/4">
              <div className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors mb-2">{date}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-teal-400 transition-colors inline-flex items-center gap-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                {title}
                <svg className="w-4 h-4 transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </h3>
              <p className="text-gray-500 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                {description}
              </p>
            </div>
          </div>
        </Link>

        {(websiteUrl || repoUrl) && (
          <div className="flex gap-2 mt-4 md:ml-[calc(25%+1.5rem)]">
            {websiteUrl && (
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border border-gray-300 dark:border-white/25 text-gray-500 dark:text-gray-400 hover:border-blue-500 dark:hover:border-teal-400 hover:text-blue-600 dark:hover:text-teal-400 transition-all"
              >
                <Globe className="w-3 h-3" />
                View Website
              </a>
            )}
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border border-gray-300 dark:border-white/25 text-gray-500 dark:text-gray-400 hover:border-gray-500 dark:hover:border-white/60 hover:text-gray-700 dark:hover:text-white transition-all"
              >
                <Github className="w-3 h-3" />
                View Repo
              </a>
            )}
          </div>
        )}
      </div>
    </RevealOnScroll>
  );
}
