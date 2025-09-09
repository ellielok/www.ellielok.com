interface WritingCardProps {
  thumbnail?: string | React.ReactNode;
  timeRange?: string;
  description?: string;
}

export default function WritingCard({
  thumbnail,
  timeRange,
  description,
}: WritingCardProps) {
  return (
    <div className="grid grid-flow-col grid-rows-3 m-2 border">
      <div className="row-span-3 border">Thumbnail - Photo{thumbnail}</div>
      <div className="col-span-2 border">Time - 2025{timeRange}</div>
      <div className="col-span-2 row-span-2 border">Desc - Details{description}</div>
    </div>
  );
}
