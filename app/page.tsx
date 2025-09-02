import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-80 flex-none border">
        Ellie Lok
      </div>
      <div className="flex-auto border">
        Resume
      </div>
    </div>
  );
}
