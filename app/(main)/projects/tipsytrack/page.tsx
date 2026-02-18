import ProductDetailsPage from '@/components/project-details';
import { Metadata } from "next";
import tipsyThumbnail from '@/app/history/2510-halloween/images/projects/tipsy/tipsy-thumbnail.png';
import te11 from '@/app/history/2510-halloween/images/projects/tipsy/te11.png';
import scanner from '@/app/history/2510-halloween/images/projects/tipsy/scanner.png';
import cal from '@/app/history/2510-halloween/images/projects/tipsy/cal.png';
import tracker from '@/app/history/2510-halloween/images/projects/tipsy/tracker.png';
import listWidget from '@/app/history/2510-halloween/images/projects/tipsy/list-widget.png';

export const metadata: Metadata = {
  title: "TipsyTrack - Alcohol Tracking Web App | Ellie Lok",
  description: "Award-winning web application for alcohol harm reduction. Best Project at Monash IE Expo. Track drinking habits, visualize patterns, and set health goals with AI-powered features.",
  keywords: ["Next.js", "TypeScript", "Tailwind CSS", "Neon Postgres", "Health Tech", "AI", "Award-winning"],
  openGraph: {
    title: "TipsyTrack - Alcohol Tracking Web App | Ellie Lok",
    description: "Award-winning alcohol tracking app with AI-powered drink scanner and health insights.",
    images: [{ url: tipsyThumbnail.src }],
  }
};

export default function Page() {
  return (
    <ProductDetailsPage
      appName="TipsyTrack"
      description="A web application designed to promote alcohol harm reduction by helping adults track and understand their drinking habits."
      stack="Next.js, TypeScript, Tailwind CSS, Neon Postgres, Vercel"
      skills="Frontend development, RESTful APIs, Cloud deployment, Local Storage"
      thumbnail={tipsyThumbnail}
      pages={[

        {
          name: 'Drink Scanner',
          description:
            'Allows users to upload or capture an image of any alcohol product to instantly retrieve details using AI-powered image recognition, ensuring quick results while keeping all photos private and off-server.',
          screenshot: scanner,
        },
        {
          name: 'Drink Calculator',
          description:
            'A step-by-step calculator that helps users estimate standard drinks and blood alcohol concentration (BAC). The intuitive interface makes it simple to log and understand their alcohol intake.',
          screenshot: cal,
        },
        {
          name: 'Progress Tracker',
          description:
            'Visualizes drinking habits through an interactive calendar and progress dashboard, helping users track standard drinks, spending, and calorie intake while promoting healthier consumption patterns.',
          screenshot: tracker,
        },
        {
          name: 'Live Tracking & My Drinks List',
          description:
            'Displays all saved beverages with detailed information such as volume, alcohol content, and sugar levels. Includes a live tracker that calculates standard drinks, estimates blood alcohol concentration (BAC), and predicts recovery time for real-time awareness.',
          screenshot: listWidget,
        },
      ]}
    />
  );
}
