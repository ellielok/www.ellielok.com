import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Ellie Lok, an aspiring full-stack developer passionate about creating responsive, user-friendly web applications with modern technologies.",
  openGraph: {
    title: "About Me | Ellie Lok",
    description: "Learn more about Ellie Lok, an aspiring full-stack developer passionate about creating responsive, user-friendly web applications.",
  }
};

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}

            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row"> 
        </div>
      </main>

    </div>
  );
}
