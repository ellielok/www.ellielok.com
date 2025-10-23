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
    <div className="grid grid-flow-col grid-rows-5 m-2 my-10 gap-6">
      <div className="row-span-5 text-tiny/6 font-semibold">{timeRange}</div>
      <div className="col-span-2 font-bold text-white/90 ">{projectName}</div>
      <div className="col-span-2 row-span-4">{description}</div>
    </div>
  );
}
