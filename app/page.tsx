import Image from 'next/image';
import {
  FaGithub,
  FaLinkedin,
  FaCodepen,
  FaInstagram,
  FaGoodreads,
} from 'react-icons/fa';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-4 my-15 mx-10">
      {/* Left Column  */}

      <div className="flex-1 border">
        <div className="border">Ellie Lok</div>
        <a
          href="/cv/ellie-cv.pdf"
          target="_blank"
          rel="noreferrer"
          className="underline-offset-2 hover:underline"
        >
          View Full Résumé
        </a>
        <div className="border">
          Graduated from Monash MIT, I’m on my journey to becoming a frontend
          engineer. I love working with React, Next.js, and TypeScript to create
          clean and engaging web experiences.
        </div>

        <div>
          <a href="https://github.com/ellielok" target="_blank" rel="blog">
            <FaGithub size={28} />
          </a>
          <a href="https://linkedin.com/in/ellielok" target="_blank" rel="blog">
            <FaLinkedin size={28} />
          </a>
        </div>
      </div>

      {/* Right Column */}

      <div className="flex-2 border">
        <div>Resume</div>
        <div>Education Placeholder</div>
        <div className="border">Work Experience Placeholder</div>

        {/* PROJECT Section */}
        <div className="border">Project</div>
        <div className="flex m-2 flex-row ">
          <div className="basis-1/3 border">Time Range Placeholder</div>
          <div className='basis-2/3 border'>
            <div> Position & Company </div>
            <div> Detailed desc </div>
            <div> Placeholder for skills icons </div>
          </div>
        </div>
        

        {/* WRITING Section */}
        <div className="border">Writing</div>
        <div className="grid grid-flow-col grid-rows-3 m-2 border">
          <div className="row-span-3 border">Thumbnail - Photo</div>
          <div className="col-span-2 border">Time - 2025</div>
          <div className="col-span-2 row-span-2 border">Desc - Details</div>
        </div>
      </div>
    </div>
  );
}
