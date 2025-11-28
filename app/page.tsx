import { ReactNode } from 'react';
import RightColumn from '@/component/right-column';
import { LeftColumn } from '@/component/left-column';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ellie Lok | Full-stack Developer | Digital Marketing Enthusiast',
  description: 'I am an aspiring full-stack developer skilled in React, TypeScript, and modern CSS frameworks. Passionate about creating responsive, user-friendly web applications, I focus on combining thoughtful design with solid engineering for performance and accessibility.',
  openGraph: {
    title: 'Ellie Lok | Full-stack Developer | Digital Marketing Enthusiast',
    description: 'Aspiring full-stack developer skilled in React, TypeScript, and modern CSS frameworks. Creating responsive, user-friendly web applications.',
  }
};

export default function Home() {
  return (
    <div className="w-full px-6 md:px-10 py-25 lg:py-0">
      <div className="flex flex-col lg:flex-row mx-auto max-w-screen-xl gap-3">


      {/* Left Column  */}
      <LeftColumn></LeftColumn>

      {/* Right Column */}
      <RightColumn></RightColumn>
      

    </div>
    </div>
  );
}
