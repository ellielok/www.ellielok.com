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
        <div>Education</div>
        <div>Work Experience</div>
        <a
          href="/cv/ellie-cv.pdf"
          target="_blank"
          rel="noreferrer"
          className="underline-offset-2 hover:underline"
        >
          View Full Résumé
        </a>
      </div>
    </div>
  );
}
