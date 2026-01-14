import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import RevealOnScroll from '@/components/reveal-on-scroll';

interface ProjectCardProps {
  href: string;
  thumbnail: StaticImageData;
  alt: string;
  date: string;
  title: string;
  description: string;
}

export default function ProjectCard({
  href,
  thumbnail,
  alt,
  date,
  title,
  description,
}: ProjectCardProps) {
  return (
    <RevealOnScroll>
      <Link href={href}>
        <div className="group p-6 rounded-lg hover:bg-[#1E3A5F] dark:hover:bg-[#1E3A5F] transition-all cursor-pointer">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/4 flex items-center justify-center">
              <div className="aspect-video w-full bg-gray-200 dark:bg-gray-600 rounded-lg overflow-hidden">
                <Image src={thumbnail} alt={alt} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="md:w-3/4">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">{date}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-teal-400 transition-colors inline-flex items-center gap-2">
                {title}
                <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </h3>
              <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-300">
                {description}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </RevealOnScroll>
  );
}
