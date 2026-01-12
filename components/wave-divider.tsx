'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface WaveDividerProps {
  className?: string;
}

export default function WaveDivider({ className = '' }: WaveDividerProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate cloud opacity based on scroll - fade out more gradually
  const cloudOpacity = Math.max(0, 1 - scrollY / 1500);

  return (
    <div className={`relative w-full ${className}`} style={{ height: '250px' }}>
      {/* Background gradient for smooth transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/10 dark:via-blue-900/5 to-yellow-50 dark:to-gray-800 z-0" />

      {/* Cloud Container */}
      <div
        className="absolute inset-0 overflow-hidden z-50"
        style={{ opacity: cloudOpacity }}
      >
        {/* Cloud Layer 1 - Back layer */}
        <div className="absolute inset-0">
          <div className="cloud-float-1" style={{ position: 'absolute', top: '3%', left: '5%', width: '180px', height: '95px', zIndex: 51 }}>
            <Image
              src="/images/cloud/cloud-1.png"
              alt=""
              width={180}
              height={95}
              className="drop-shadow-lg"
            />
          </div>
          <div className="cloud-float-2" style={{ position: 'absolute', top: '38%', left: '68%', width: '150px', height: '80px', zIndex: 51 }}>
            <Image
              src="/images/cloud/cloud-2.png"
              alt=""
              width={150}
              height={80}
              className="drop-shadow-lg"
            />
          </div>
          <div className="cloud-float-3" style={{ position: 'absolute', top: '8%', left: '85%', width: '140px', height: '75px', zIndex: 51 }}>
            <Image
              src="/images/cloud/cloud-3.png"
              alt=""
              width={140}
              height={75}
              className="drop-shadow-lg"
            />
          </div>
        </div>

        {/* Cloud Layer 2 - Middle layer */}
        <div className="absolute inset-0">
          <div className="cloud-float-2" style={{ position: 'absolute', top: '15%', left: '28%', width: '210px', height: '110px', zIndex: 52 }}>
            <Image
              src="/images/cloud/cloud-1.png"
              alt=""
              width={210}
              height={110}
              className="drop-shadow-xl"
            />
          </div>
          <div className="cloud-float-1" style={{ position: 'absolute', top: '48%', left: '2%', width: '190px', height: '100px', zIndex: 52 }}>
            <Image
              src="/images/cloud/cloud-3.png"
              alt=""
              width={190}
              height={100}
              className="drop-shadow-xl"
            />
          </div>
          <div className="cloud-float-3" style={{ position: 'absolute', top: '32%', left: '78%', width: '170px', height: '90px', zIndex: 52 }}>
            <Image
              src="/images/cloud/cloud-2.png"
              alt=""
              width={170}
              height={90}
              className="drop-shadow-xl"
            />
          </div>
        </div>

        {/* Cloud Layer 3 - Front layer */}
        <div className="absolute inset-0">
          <div className="cloud-float-3" style={{ position: 'absolute', top: '25%', left: '48%', width: '230px', height: '120px', zIndex: 53 }}>
            <Image
              src="/images/cloud/cloud-1.png"
              alt=""
              width={230}
              height={120}
              className="drop-shadow-2xl"
            />
          </div>
          <div className="cloud-float-1" style={{ position: 'absolute', top: '55%', left: '20%', width: '200px', height: '105px', zIndex: 53 }}>
            <Image
              src="/images/cloud/cloud-2.png"
              alt=""
              width={200}
              height={105}
              className="drop-shadow-2xl"
            />
          </div>
          <div className="cloud-float-2" style={{ position: 'absolute', top: '18%', left: '10%', width: '165px', height: '88px', zIndex: 53 }}>
            <Image
              src="/images/cloud/cloud-4.png"
              alt=""
              width={165}
              height={88}
              className="drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
