import Image from 'next/image';

export default function Background() {
  return (
    <div>
      <Image
        src="/halloween-moon-light.png"
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
        src="/halloween-bg-min.png"
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
        src="/halloween-witch.png"
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
