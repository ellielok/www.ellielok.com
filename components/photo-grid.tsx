'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

interface Photo {
  src: string | StaticImageData;
  alt: string;
}

interface PhotoGridProps {
  photos: Photo[];
}

export default function PhotoGrid({ photos }: PhotoGridProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <>
      {/* Photo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-10 mb-12">
        {photos.map((photo, index) => (
          <button
            key={index}
            onClick={() => setSelectedPhoto(photo)}
            className="relative aspect-square overflow-hidden border-gray-300 dark:border-white/30 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              width={1200}
              height={1600}
              className="h-auto max-h-[90vh] w-auto object-contain "
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}
