'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function HalloweenIconToggle() {
  const [showIcons, setShowIcons] = useState(true);

  return (
    <div className="hidden xl:fixed right-6 top-4 xl:right-10 xl:top-6 xl:flex xl:flex-col xl:items-center z-20">
      <motion.div
        whileTap={{ y: 8, scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300, damping: 8 }}
        onClick={() => setShowIcons(!showIcons)}
        className="cursor-pointer select-none"
      >
        <Image
          src="/halloween-light.png"
          alt="Halloween light"
          width={120}
          height={120}
          className="w-auto h-auto -translate-y-13 pointer-events-auto"
        />
      </motion.div>

      <AnimatePresence>
        {showIcons && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 10 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center -mt-15 space-y-3"
          >
            <a
              href="https://github.com/ellielok"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-white transition-colors duration-300"
            >
              <FaGithub size={26} />
            </a>
            <a
              href="https://linkedin.com/in/ellielok"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-white transition-colors duration-300"
            >
              <FaLinkedin size={26} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
