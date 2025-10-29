import { ArrowRight, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface WritingCardProps {
  projectName?: string | React.ReactNode;
  timeRange?: string;
  description?: string;
  href?: string;
  screenshot: string;
}

export default function WritingCard({
  projectName,
  timeRange,
  description,
  href,
  screenshot,
}: WritingCardProps) {
  return (
    <div
      className="grid grid-cols-[1fr_4fr] gap-6 p-6 
                    group
                    hover:bg-gradient-to-b hover:from-white/5 hover:via-white/3 hover:to-white/0"
    >
      <div>
        <div className="text-tiny/6 font-semibold">{timeRange}</div>
        <div className="my-8 w-full aspect-[16/9] overflow-hidden rounded-xl">
        <Image
          src={screenshot}
          alt="Ellie Lok Graduation"
          width={400}
          height={200}
          className="object-cover [object-position:70%_10%]"
        />
        </div>
      </div>
      <div>
        <a href={href} target="_self" rel="ellielok_home">
          <div
            className="w-full flex gap-1 justify-between items-center pb-2
                        font-bold text-white/90 
                      group-hover:text-[#93f5fa] transition-colors duration-100"
          >
            <span>{projectName}</span>
            <span className=" items-center gap-1 group-hover:gap-2 mr-2 group-hover:translate-x-0.5">
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
          <div>{description}</div>
        </a>
      </div>
    </div>
  );
}
