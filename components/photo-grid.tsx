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
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  const handleImageError = (index: number) => {
    setFailedImages((prev) => new Set(prev).add(index));
  };

  const validPhotos = photos.filter((_, index) => !failedImages.has(index));

  return (
    <>
      {/* Photo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-10 mb-12">
        {validPhotos.map((photo, displayIndex) => {
          const originalIndex = photos.indexOf(photo);
          return (
            <button
              key={originalIndex}
              onClick={() => setSelectedPhoto(photo)}
              className="relative aspect-square overflow-hidden border-gray-300 dark:border-white/30 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                loading={displayIndex < 4 ? 'eager' : 'lazy'}
                priority={displayIndex < 4}
                onError={() => handleImageError(originalIndex)}
              />
            </button>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-h-[100vh] max-w-[90vw] animate-in fade-in zoom-in-95 duration-300">
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              width={1200}
              height={1600}
              className="h-auto max-h-[100vh] w-auto object-contain"
              onClick={(e) => e.stopPropagation()}
              onError={() => setSelectedPhoto(null)}
              priority
              quality={90}
            />
          </div>
        </div>
      )}
    </>
  );
}
