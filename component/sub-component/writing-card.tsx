interface WritingCardProps {
  projectName?: string | React.ReactNode;
  timeRange?: string;
  description?: string;
}

export default function WritingCard({
  projectName,
  timeRange,
  description,
}: WritingCardProps) {
  return (
    <div
      className="grid grid-cols-[1fr_4fr] gap-6 p-6 
                    group
                    hover:bg-gradient-to-b hover:from-white/5 hover:via-white/3 hover:to-white/0"
    >
      <div className="text-tiny/6 font-semibold">{timeRange}</div>
      <div>
        <div className="pb-2
                        font-bold text-white/90 
                      group-hover:text-[#93f5fa] transition-colors duration-100">
          {projectName}
        </div>
        <div>{description}</div>
      </div>
    </div>
  );
}
