import Image from 'next/image';

export default function Background() {
  return (
    <div>
      {/* Group these images into a <Background> component. It would be easier to manage it and address the "z-level" height in the future development.
       */}
      <Image
        src="/halloween-moon-light.png"
        alt="Halloween background"
        width={600}
        height={600}
        className="
            fixed left-1/8 bottom-[0%] 
            translate-y-0
            hidden sm:hidden lg:block
            w-auto h-1/2
            opacity-100
            pointer-events-none select-none
            object-contain
            -z-20
          "
      />

      <Image
        src="/halloween-bg.png"
        alt="Halloween background"
        width={600}
        height={600}
        className="
            fixed bottom-0 left-0 translate-y-1
            hidden sm:hidden lg:block
            h-1/2 w-auto
            opacity-85
            pointer-events-none select-none
            object-contain
            -z-10
          "
      />

      <Image
        src="/halloween-mount.png"
        alt="Halloween background"
        width={600}
        height={600}
        className="
            fixed bottom-0 left-0 top-[63%]
            hidden sm:hidden lg:block
            h-1/2 w-auto
            opacity-100
            pointer-events-none select-none
            object-contain
            -z-15
          "
      />

      <Image
        src="/halloween-witch.png"
        alt="Halloween background"
        width={600}
        height={600}
        className="
            fixed left-1/4 bottom-[5%]
            hidden sm:hidden lg:block
            h-1/2 w-auto
            opacity-100
            pointer-events-none select-none
            object-contain
            z-1
          "
      />

      {/* <Image
          src="/halloween-cat.png"
          alt="Halloween background"
          width={600}
          height={600}
          className="
            fixed right-12 bottom-[0%] 
            translate-y-2
            hidden sm:hidden lg:block
            w-1/20 h-auto
            opacity-100
            pointer-events-none select-none
            object-contain
            -z-20
          "
        /> */}

      {/* <Image
          src="/halloween-light.png"
          alt="Halloween background"
          width={600}
          height={600}
          className="
            fixed right-2 top-[0%] 
            translate-y-0
            hidden sm:hidden lg:block
            w-1/10 h-auto
            opacity-100
            pointer-events-none select-none
            object-contain
            -z-20
          "
        /> */}
    </div>
  );
}
