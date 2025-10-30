'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';


export default function HalloweenIconToggle() {
  const [showIcons, setShowIcons] = useState(true);
  const [offsetY, setOffsetY] = useState(0);
  
  useEffect(() => {
  const handleScroll = () => setOffsetY(Math.min(window.scrollY * 0.3, 132));
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <div>
<div className="fixed md:hidden right-0 bottom-0 mb-10 mr-10">
  <motion.div
    whileTap={{ scale: 0.88 }} // 点击时轻微缩放反馈
    onClick={() => {
      if (window.scrollY === 0) {
        // 当前在首屏 → 滚动到底部
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      } else {
        // 否则 → 滚动到顶部
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      setShowIcons(!showIcons);
    }}
    className="cursor-pointer select-none"
  >
    <Image
      src="/halloween-light-sm.png"
      alt="Halloween light"
      width={120}
      height={120}
      className="w-15 h-auto pointer-events-auto z-30"
    />
  </motion.div>
</div>


    <div className="hidden md:fixed right-6 top-4 md:right-10 md:top-6 md:flex md:flex-col md:items-center z-25">
      <motion.div
  whileTap={{ y: 5, scale: 0.99 }}
  animate={{ y: offsetY }}
  transition={{ type: 'spring', stiffness: 150, damping: 10 }}
  onClick={() => {
    if (window.scrollY === 0) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      setOffsetY(72);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setOffsetY(0);
    }
    setShowIcons(!showIcons);
  }}
  className="cursor-pointer select-none"
>
        <Image
          src="/halloween-light.png"
          alt="Halloween light"
          width={120}
          height={120}
          className="w-7/10 2xl:w-10/10 h-auto md:-translate-y-55 md:translate-x-20 
          2xl:translate-x-0
          2xl:-translate-y-75
          pointer-events-auto z-30"
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </div>
  );
}
