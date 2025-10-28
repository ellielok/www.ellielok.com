import { ArrowRight, ChevronRight } from 'lucide-react';

interface WritingCardProps {
  projectName?: string | React.ReactNode;
  timeRange?: string;
  description?: string;
  href?: string;
}

export default function WritingCard({
  projectName,
  timeRange,
  description,
  href
}: WritingCardProps) {
  return (
    <div
      className="grid grid-cols-[1fr_4fr] gap-6 p-6 
                    group
                    hover:bg-gradient-to-b hover:from-white/5 hover:via-white/3 hover:to-white/0"
    >
      <div className="text-tiny/6 font-semibold">{timeRange}</div>
      <div>
        <a href={href} target='_self' rel="ellielok_home">
        <div
          className="w-full flex gap-1 justify-between items-center pb-2
                        font-bold text-white/90 
                      group-hover:text-[#93f5fa] transition-colors duration-100"
        >
          <span>
          {projectName}
          </span>
          <a
            className=" items-center gap-1 group-hover:gap-2 mr-2 group-hover:translate-x-0.5"
          >
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div>{description}</div>
        </a>
      </div>
    </div>
  );
}
