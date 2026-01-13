import PhotoGrid from '@/components/photo-grid';

const photos = [
  { src: '/images/shots/IMG_1130.jpeg', alt: 'Snapshot 1' },
  { src: '/images/shots/IMG_1462.jpeg', alt: 'Snapshot 2' },
  { src: '/images/shots/IMG_1985.jpeg', alt: 'Snapshot 3' },
  { src: '/images/shots/IMG_1994.jpeg', alt: 'Snapshot 4' },
  { src: '/images/shots/IMG_2108.jpeg', alt: 'Snapshot 5' },
  { src: '/images/shots/IMG_3419.jpeg', alt: 'Snapshot 6' },
  { src: '/images/shots/IMG_3577.jpeg', alt: 'Snapshot 7' },
  { src: '/images/shots/IMG_3612.jpeg', alt: 'Snapshot 8' },
  { src: '/images/shots/IMG_3733.jpeg', alt: 'Snapshot 9' },
  { src: '/images/shots/IMG_3897.jpeg', alt: 'Snapshot 10' },
  { src: '/images/shots/IMG_3903.jpeg', alt: 'Snapshot 11' },
  { src: '/images/shots/IMG_4461.jpeg', alt: 'Snapshot 12' },
  { src: '/images/shots/IMG_4992.jpeg', alt: 'Snapshot 13' },
  { src: '/images/shots/IMG_5008.jpeg', alt: 'Snapshot 14' },
  { src: '/images/shots/IMG_5305.jpeg', alt: 'Snapshot 15' },
  { src: '/images/shots/IMG_5942.jpeg', alt: 'Snapshot 16' },
  { src: '/images/shots/IMG_6628.jpeg', alt: 'Snapshot 17' },
  { src: '/images/shots/IMG_6720.jpeg', alt: 'Snapshot 18' },
  { src: '/images/shots/IMG_6758.jpeg', alt: 'Snapshot 19' },
  { src: '/images/shots/IMG_6807.jpeg', alt: 'Snapshot 20' },
  { src: '/images/shots/IMG_7354.jpeg', alt: 'Snapshot 21' },
  { src: '/images/shots/IMG_7406.jpeg', alt: 'Snapshot 22' },
  { src: '/images/shots/IMG_7597.jpeg', alt: 'Snapshot 23' },
  { src: '/images/shots/IMG_8314.jpeg', alt: 'Snapshot 24' },
  { src: '/images/shots/IMG_8480.jpeg', alt: 'Snapshot 25' },
  { src: '/images/shots/IMG_8938.jpeg', alt: 'Snapshot 26' },
  { src: '/images/shots/IMG_9128.jpeg', alt: 'Snapshot 27' },
  { src: '/images/shots/IMG_9246.jpeg', alt: 'Snapshot 28' },
];

export default function SnapshotsPage() {
  return (
    <div className="min-h-screen pt-30">
      
        <div className="px-6 md:px-10 pb-10 text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Snapshots
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed ">
            A collection of moments captured through my lens.
          </p>
        </div>

        <PhotoGrid photos={photos} />
      </div>
    
  );
}
