'use client'

import Image from 'next/image';

interface WaveDividerProps {
  className?: string;
}

export default function WaveDivider({ className = '' }: WaveDividerProps) {
  return (
    <div className={`relative w-full ${className}`} style={{ height: '300px', zIndex: 50 }}>
      {/* Background gradient for smooth transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/10 dark:via-blue-900/5 to-yellow-50 dark:to-gray-800" />

      {/* Cloud Layer 1 - Back layer */}
      <div className="absolute inset-0" style={{ zIndex: 51 }}>
        <div className="cloud-float-1" style={{ position: 'absolute', top: '5%', left: '8%', width: '1080px', height: '150px' }}>
          <Image
            src="/images/cloud/cloud-1.png"
            alt=""
            width={1080}
            height={1050}
            className="drop-shadow-lg"
          />
        </div>
        <div className="cloud-float-2" style={{ position: 'absolute', top: '45%', left: '65%', width: '260px', height: '140px' }}>
          <Image
            src="/images/cloud/cloud-2.png"
            alt=""
            width={1080}
            height={1080}
            className="drop-shadow-lg"
          />
        </div>
        <div className="cloud-float-1" style={{ position: 'absolute', top: '15%', left: '82%', width: '1080px', height: '130px' }}>
          <Image
            src="/images/cloud/cloud-3.png"
            alt=""
            width={1080}
            height={1080}
            className="drop-shadow-lg"
          />
        </div>
      </div>

      {/* Cloud Layer 2 - Front layer */}
      <div className="absolute inset-0" style={{ zIndex: 52 }}>
        <div className="cloud-float-2" style={{ position: 'absolute', top: '25%', left: '55%', width: '1080px', height: '170px' }}>
          <Image
            src="/images/cloud/cloud-1.png"
            alt=""
            width={1080}
            height={1080}
            className="drop-shadow-2xl"
          />
        </div>
        <div className="cloud-float-1" style={{ position: 'absolute', top: '15%', left: '-10%', width: '1080px', height: '160px' }}>
          <Image
            src="/images/cloud/cloud-4.png"
            alt=""
            width={1080}
            height={1080}
            className="drop-shadow-2xl"
          />
        </div>
      </div>

      
    </div>
  );
}
