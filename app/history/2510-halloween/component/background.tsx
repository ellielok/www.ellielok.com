import Image from 'next/image';
import halloweenMoonLight from '@/app/history/2510-halloween/images/halloween-moon-light.png';
import halloweenBgMin from '@/app/history/2510-halloween/images/halloween-bg-min.png';
import halloweenWitch from '@/app/history/2510-halloween/images/halloween-witch.png';

export default function Background() {
  return (
    <div>
      <Image
        src={halloweenMoonLight}
        alt="Halloween background"
        width={600}
        height={600}
        className="
            fixed left-1/8 bottom-[10%]
            translate-y-0
            hidden sm:hidden lg:block
            w-auto h-2/5
            opacity-100
            pointer-events-none select-none
            object-contain
            -z-20
          "
      />

      <Image
        src={halloweenBgMin}
        alt="background"
        width={600}
        height={600}
        className="
            fixed bottom-0 left-0 translate-y-0
            hidden sm:hidden lg:block
            h-auto w-2/5
            opacity-85
            pointer-events-none select-none
            object-contain
            -z-10
          "
      />


      <Image
        src={halloweenWitch}
        alt="Halloween background"
        width={600}
        height={600}
        className="
            fixed left-1/5 bottom-[10%]
            hidden sm:hidden lg:block
            h-2/5 w-auto
            opacity-100
            pointer-events-none select-none
            object-contain
            z-1
          "
      />
    </div>
  );
}
