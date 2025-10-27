import { ReactNode } from 'react';
import Header from '@/component/header';
import Footer from '@/component/footer';
import hl from '@/utils/highLight';
import {
  Intro,
  ProjectSection,
  WritingSection,
} from '@/component/right-column';
import { LeftColumn } from '@/component/left-column';

export default function Home() {
  return (
    <div>
      <Header></Header> 
    
    <div
      className="flex flex-col 
                    px-8 py-20
                    lg:flex-row lg:px-0 lg:py-0
                    gap-3"
    >
      {/* Left Space */}
      <div className="hidden lg:block xl:flex-1"></div>

      {/* Left Column  */}
      <LeftColumn></LeftColumn>

      {/* Right Column */}
      <div className="space-y-10 flex-4 scroll-smooth lg:py-25 lg:px-10 xl:px-0">
        <div>
          <div
            className="top-0 py-5 lg:hidden font-bold 
             text-white/90 "
          >
            About Me
          </div>
          <Intro></Intro>
        </div>

        {/* PROJECT Section */}
        <div>
          <div className="top-0  py-5 lg:hidden font-bold oklch(0.1882 0.0765 293.16) text-white/90">
            Experience
          </div>
          <div id="experience" className="py-5">
            <ProjectSection></ProjectSection>
          </div>
        </div>

        {/* WRITING Section */}
        <div>
          <div
            id="project"
            className="hidden mb-10 lg:block font-bold text-white/90"
          >
            Projects
          </div>
          <div className="top-0 py-5 lg:hidden font-bold text-white/90">
            Projects
          </div>
          <WritingSection></WritingSection>
        </div>

        <Footer></Footer>
      </div>

      {/* Right Space */}
      <div className=" hidden xl:block flex-1 "></div>
    </div>
    </div>
  );
}
