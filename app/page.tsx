import { ReactNode } from 'react';
import RightColumn from '@/component/right-column';
import { LeftColumn } from '@/component/left-column';

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
