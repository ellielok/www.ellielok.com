'use client';

import { useState } from 'react';
import { Mail, Phone, Copy, Check, Github } from 'lucide-react';
import { FaLinkedin, FaWeixin } from 'react-icons/fa';

export default function EnvFooter() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const email = 'ellielo2021@gmail.com';

  const copyToClipboard = async (text: string, type: 'email' ) => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <footer className="bg-[#060409] text-white/90 px-8 md:px-20 py-10 space-y-5">
      {/* ===== Top Section ===== */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-20">
        {/* Logo & Address */}
        <div>
          <div className="mb-4">
            <div className="font-extrabold text-3xl tracking-tight">
              ELLIE
              <br />
              LOK
            </div>
          </div>
          <div>
            <p className="font-semibold mb-1">Address:</p>
            <p className="text-white/60">Monash University</p>
            <p className="text-white/60">Melbourne VIC</p>
          </div>
        </div>

        {/* Phone & Fax */}
        <div>
          <p className="font-semibold mb-1">Email:</p>
          <a className="text-white/60">{email}</a><button
                                  onClick={() => copyToClipboard(email, 'email')}
                                  className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
                                  aria-label="Copy email"
                              >
                                  {copiedEmail ? (
                                      <Check className="w-6 h-6 md:w-8 md:h-5 text-green-200" />
                                  ) : (
                                      <Copy className="w-6 h-6 md:w-8 md:h-5 text-white/60 group-hover:text-white/90" />
                                  )}
                              </button>
          <p className="font-semibold mt-3 mb-1">Contact Me</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ellieluo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-white/60 hover:text-white/90 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/ellielok"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6 text-white/60 hover:text-white/90 transition-colors" />
            </a>
            <a
              href={`mailto:${email}`}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-white/60 hover:text-white/90 transition-colors" />
            </a>
          </div>
        </div>

        {/* Mailing & ABN */}
        <div>
          <p className="font-semibold mb-1">Projects</p>
          <div className="space-y-2">
            
            <p className="text-white/60 hover:text-[#93f5fa] transition-colors"><a href="/projects/kickstart">KickStart Soccer</a></p>
            
            
            <p className="text-white/60 hover:text-[#93f5fa] transition-colors"><a href="/projects/tipsytrack">TipsyTrack</a></p>
            
            
            <p className="text-white/60 hover:text-[#93f5fa] transition-colors"><a href="/projects/birdtag">BirdTag</a></p>
            
            
            <p className="text-white/60 hover:text-[#93f5fa] transition-colors"><a href="/projects/voluntrack">VolunTrack</a></p>
            
          </div>
        </div>

        {/* Find Sessions & Contact */}
        <div>
          <p className="font-semibold mb-1">Others</p>
          <a href="/contact">
            <p className="text-white/60 cursor-pointer hover:text-[#93f5fa] transition-colors">
              About Me
            </p>
          </a>
        </div>
      </div>

      {/* ===== Divider Line ===== */}
      <hr className="border-t border-white/10 my-6" />

      {/* ===== Acknowledgement Section ===== */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between text-white/60 text-sm">
        <div className="space-y-2 md:w-3/4 italic">
          <p>
            Built from Melbourne Craft with React, Next.js, Tailwind CSS. Deploy
            with Vercel view source code on Github.
          </p>
          <p>
            I acknowledge the Traditional Custodians of the land on which I live
            and work, and pay my respects to Elders past and present.
          </p>
        </div>

        {/* Social Icons */}
        {/* <div className="flex gap-4 mt-6 md:mt-0">
          <a
            href="https://github.com/ellieluo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
          >
            <Github className="w-5 h-5" />
          </a>
        </div> */}
      </div>
    </footer>
  );
}
