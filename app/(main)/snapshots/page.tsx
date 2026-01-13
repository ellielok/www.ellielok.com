import PhotoGrid from '@/components/photo-grid';

// Import placeholder images from projects
import kickHome from '@/app/history/2510-halloween/images/projects/kick/home.png';
import kickSession from '@/app/history/2510-halloween/images/projects/kick/session.png';
import kickMap from '@/app/history/2510-halloween/images/projects/kick/map.png';
import tipsyHome from '@/app/history/2510-halloween/images/projects/tipsy/home.png';
import tipsyCal from '@/app/history/2510-halloween/images/projects/tipsy/cal.png';
import tipsyTracker from '@/app/history/2510-halloween/images/projects/tipsy/tracker.png';
import volunDashboard from '@/app/history/2510-halloween/images/projects/volun/dashboard.png';
import volunSearch from '@/app/history/2510-halloween/images/projects/volun/search.png';
import birdHome from '@/app/history/2510-halloween/images/projects/bird/home.png';
import birdSearch from '@/app/history/2510-halloween/images/projects/bird/search.png';
import kickCalendar from '@/app/history/2510-halloween/images/projects/kick/calendar.png';
import tipsyScanner from '@/app/history/2510-halloween/images/projects/tipsy/scanner.png';

const photos = [
  { src: kickHome, alt: 'Snapshot 1' },
  { src: kickSession, alt: 'Snapshot 2' },
  { src: kickMap, alt: 'Snapshot 3' },
  { src: tipsyHome, alt: 'Snapshot 4' },
  { src: tipsyCal, alt: 'Snapshot 5' },
  { src: tipsyTracker, alt: 'Snapshot 6' },
  { src: volunDashboard, alt: 'Snapshot 7' },
  { src: volunSearch, alt: 'Snapshot 8' },
  { src: birdHome, alt: 'Snapshot 9' },
  { src: birdSearch, alt: 'Snapshot 10' },
  { src: kickCalendar, alt: 'Snapshot 11' },
  { src: tipsyScanner, alt: 'Snapshot 12' },
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
