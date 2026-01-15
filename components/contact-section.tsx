'use client';

import { useState } from 'react';
import { Copy, Check, Github, Mail } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const email = 'ellielokit@gmail.com';

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="space-y-6 pt-8">
      {/* Email Section */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          Email:
        </p>
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${email}`}
            className="text-xl font-semibold text-gray-900 dark:text-white hover:underline transition-all"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            {email}
          </a>
          <button
            onClick={() => copyToClipboard(email, 'email')}
            className="h-8 w-8 inline-flex items-center justify-center hover:bg-gray-200 dark:hover:bg-white/20 rounded-md transition-all"
            aria-label="Copy email"
          >
            {copiedEmail ? (
              <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
            ) : (
              <Copy className="w-5 h-5 text-gray-600 dark:text-white/60" />
            )}
          </button>
        </div>
      </div>

      {/* Contact Me Section */}
      <div className="flex flex-col items-center gap-3">
        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          Contact Me
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/ellielok"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 w-10 inline-flex items-center justify-center hover:bg-gray-200 dark:hover:bg-white/20 rounded-md transition-all group"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 text-gray-600 dark:text-white/80 group-hover:text-gray-900 dark:group-hover:text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/ellielok"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 w-10 inline-flex items-center justify-center hover:bg-gray-200 dark:hover:bg-white/20 rounded-md transition-all group"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6 text-gray-600 dark:text-white/80 group-hover:text-gray-900 dark:group-hover:text-white" />
          </a>
          <a
            href={`mailto:${email}`}
            className="h-10 w-10 inline-flex items-center justify-center hover:bg-gray-200 dark:hover:bg-white/20 rounded-md transition-all group"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 text-gray-600 dark:text-white/80 group-hover:text-gray-900 dark:group-hover:text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}
