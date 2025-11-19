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
      className="flex-3 h-fit  
                      lg:top-0 lg:h-screen lg:sticky 
                      top-10 self-start 
                      lg:pt-25
                      lg:px-10 xl:px-0"
    >
      <h1 className=" text-4xl font-bold text-white/100 md:text-5xl lg:text-5xl ">
        Ellie Lok
      </h1>
      <h2 className=" mt-5 mb-5 font-semibold  text-white/95 text-base md:text-xl">
        Aspiring Full-stack Developer
      </h2>

      <div className="">On my journey to becoming a excellent engineer.</div>
      <div>
        Feel free to{' '}
        <a
          href="mailto:ellielokit@gmail.com?subject=hello,Ellie"
          target="_blank"
          className="underline-offset-2 hover:underline"
        >
          {hl('send email and say hello!')}
        </a>
      </div>

      {/* <div
        className="flex flex-wrap gap-3 
                        mt-5
                        lg:flex-col lg:absolute lg:inset-x-0 lg:bottom-0 lg:px-5 lg:py-15 
                        "
      >
        <a
          href="https://github.com/ellielok"
          target="_blank"
          rel="blog"
          className="hover:text-white transition-colors duration-300"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://linkedin.com/in/ellielok"
          target="_blank"
          rel="blog"
          className="hover:text-white transition-colors duration-300"
        >
          <FaLinkedin size={28} />
        </a>
      </div> */}

      {/* TOC Menu */}
      <Menu />
    </div>
  );
}
