import Menu from '@/component/menu';
import hl from '@/utils/highLight';
import {
  FaGithub,
  FaLinkedin,
  FaCodepen,
  FaInstagram,
  FaGoodreads,
} from 'react-icons/fa';

export function LeftColumn() {
    return (
           <div
        className="flex-2 h-fit  
                      lg:top-0 lg:h-screen lg:sticky 
                      top-10 self-start 
                      lg:pt-25
                      lg:px-10 xl:px-0"
      >
        <h1 className=" text-2xl font-bold text-white/95 sm:text-3xl md:text-4xl lg:text-5xl ">
          Ellie Lok
        </h1>
        <h2 className=" mt-5 mb-5 font-semibold  text-white/95 text-base md:text-xl">
          Junior Developer
        </h2>
        <a
          href="/cv/ellie-cv.pdf"
          target="_blank"
          rel="noreferrer"
          className="underline-offset-2 hover:underline"
        >
          View Full Résumé
        </a>
        <div className="">
          On my journey to becoming a frontend
          engineer.
        </div>
        <div>
          Feel free to{' '}
          <a
            href="mailto:ellielo2021@gmail.com?subject=hello,Ellie"
            target="_blank"
            className="underline-offset-2 hover:underline"
          >
            {hl('send email and Say Hello')}
          </a>
        </div>

        <div
          className="flex flex-wrap gap-3 
                        mt-5
                        lg:flex-col lg:absolute lg:inset-x-0 lg:bottom-0 lg:px-5 lg:py-15 
                        "
        >
          <a href="https://github.com/ellielok" target="_blank" rel="blog">
            <FaGithub size={28} />
          </a>
          <a href="https://linkedin.com/in/ellielok" target="_blank" rel="blog">
            <FaLinkedin size={28} />
          </a>
        </div>
        {/* TOC Menu */}
        <Menu />
      </div>
              )
              };