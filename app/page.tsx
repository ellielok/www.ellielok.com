import { Particles } from "@/components/ui/shadcn-io/particles";
import { ReactNode } from 'react';
import Footer from '@/component/footer';
import hl from '@/utils/highLight';
import { Intro, ProjectSection, WritingSection } from "@/component/right-column";
import { LeftColumn } from "@/component/left-column";

export default function Home() {
  return (
    <div
      className="flex flex-col 
                    px-8 py-20
                    lg:flex-row lg:px-0 lg:py-0
                    gap-3"
    >


      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh
      />

      {/* Left Space */}
      <div className=" hidden lg:block lg:flex-1 "></div>

      {/* Left Column  */}
      <LeftColumn></LeftColumn>
 

      {/* Right Column */}

      <div className="flex-3 scroll-smooth lg:py-25">
        <div>
          <div
            id="about-content"
            className="sticky top-0 py-5 lg:hidden font-bold bg-black text-white/90"
          >
            About Me
          </div>

          <div className="">
            <Intro></Intro>
          </div>
        </div>

        {/* PROJECT Section */}
        <div>
          <div
            id="project-content"
            className="sticky top-0  py-5 lg:hidden font-bold bg-black text-white/90"
          >
            Experience
          </div>
          <div id="ex-more" className=" py-5 mb-10">
            <ProjectSection></ProjectSection>
            
          </div>
        </div>

        {/* WRITING Section */}
        <div>
          <div id="more" className=" py-5 mb-10 font-bold text-white/90">
            Projects
          </div>
          <div id="more-content">
            <WritingSection></WritingSection>
          </div>
        </div>

        <Footer></Footer>
      </div>

      {/* Right Space */}
      <div className=" hidden lg:block flex-1 "></div>
    </div>
  );
}
