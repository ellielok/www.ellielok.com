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
    <div className="grid grid-flow-col grid-rows-5 m-2 my-10 ">
      <div className="row-span-5 ">Thumbnail - Photo{thumbnail}</div>
      <div className="col-span-2 ">Time - 2025{timeRange}</div>
      <div className="col-span-2 row-span-4 ">Desc - Details{description}</div>
    </div>
  );
}
