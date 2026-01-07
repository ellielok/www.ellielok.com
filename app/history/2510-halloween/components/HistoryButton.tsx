'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HistoryButton() {
  return (
    <Link href="/history/2510-halloween">
      <motion.div
        className="fixed right-6 bottom-6 z-50 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="
          bg-gradient-to-br from-purple-600 to-indigo-700
          hover:from-purple-500 hover:to-indigo-600
          text-white
          px-4 py-3
          rounded-full
          shadow-lg
          flex items-center gap-2
          transition-all duration-300
          border border-purple-400/30
        ">
          <span className="text-xl">📜</span>
          <span className="font-medium text-sm">History</span>
        </div>
      </motion.div>
    </Link>
  );
}
