'use client'

import Image from 'next/image';

interface WaveDividerProps {
  className?: string;
}

export default function WaveDivider({ className = '' }: WaveDividerProps) {
  return (
    <div className={`relative w-full ${className}`} style={{ height: '300px', zIndex: 30 }}>
      {/* Background gradient for smooth transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#faf8f5]/30 to-[#faf8f5] dark:via-[#0a0d15]/30 dark:to-[#0a0d15]" />

      {/* Cloud Layer 1 - Back layer */}
      <div className="absolute inset-0" style={{ zIndex: 30 }}>
        <div className="cloud-float-1" style={{ position: 'absolute', top: '10%', left: '-7%', width: '1080px', height: '150px' }}>
          <Image
            src="/images/cloud/cloud-1.png"
            alt=""
            width={1080}
            height={1050}
            className="drop-shadow-lg"
          />
        </div>

        <div className="cloud-float-1" style={{ position: 'absolute', top: '20%', left: '32%', width: '1080px', height: '130px' }}>
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
      <div className="absolute inset-0" style={{ zIndex: 30 }}>
        <div className="cloud-float-2" style={{ position: 'absolute', top: '25%', left: '50%', width: '1080px', height: '170px' }}>
          <Image
            src="/images/cloud/cloud-1.png"
            alt=""
            width={1080}
            height={1080}
            className="drop-shadow-2xl"
          />
        </div>
        <div className="cloud-float-1" style={{ position: 'absolute', top: '6%', left: '-10%', width: '1080px', height: '160px' }}>
          <Image
            src="/images/cloud/cloud-4.png"
            alt=""
            width={1080}
            height={1080}
            className="drop-shadow-2xl"
          />
        </div>
                <div className="cloud-float-1" style={{ position: 'absolute', top: '25%', left: '22%', width: '1080px', height: '130px' }}>
          <Image
            src="/images/cloud/cloud-4.png"
            alt=""
            width={1080}
            height={1080}
            className="drop-shadow-lg"
          />
        </div>
        
      </div>

      <style jsx>{`
        /* Floating animations with prominent horizontal movement */
        @keyframes float-1 {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-15px) translateX(30px);
          }
          50% {
            transform: translateY(-25px) translateX(15px);
          }
          75% {
            transform: translateY(-10px) translateX(-20px);
          }
        }

        @keyframes float-2 {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-10px) translateX(-25px);
          }
          50% {
            transform: translateY(-20px) translateX(-35px);
          }
          75% {
            transform: translateY(-12px) translateX(15px);
          }
        }

        .cloud-float-1 {
          animation: float-1 20s ease-in-out infinite;
        }

        .cloud-float-2 {
          animation: float-2 25s ease-in-out infinite;
          animation-delay: -10s;
        }
      `}</style>
    </div>
  );
}
