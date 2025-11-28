import ProductDetailsPage from '@/component/project-details';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VolunTrack - Volunteer Management App",
  description: "A volunteer management Android app built with Kotlin and Jetpack Compose. Empowers organizations to monitor volunteer progress, manage activities, and visualize engagement data through real-time dashboards.",
  keywords: ["Kotlin", "Jetpack Compose", "Firebase", "Android", "Volunteer Management", "Mobile App"],
  openGraph: {
    title: "VolunTrack - Volunteer Management App | Ellie Lok",
    description: "Android volunteer management app with real-time dashboards and analytics built with Kotlin and Jetpack Compose.",
    images: ["/projects/volun/volun-thumbnail.png"],
  }
};

export default function Page() {
  return (
    <ProductDetailsPage
      appName="VolunTrack"
      description="A volunteer management Android app built with Kotlin and Jetpack Compose. It empowers organizations to monitor volunteer progress, manage activities, and visualize engagement data through real-time dashboards and analytics."
      stack="Kotlin, Jetpack Compose, Firebase, SendGrid, MVVM Architecture, Material Design 3"
      skills="Mobile UI design, Real-time data synchronization, Authentication, Cloud messaging, RESTful API integration, Data visualization"
      thumbnail="/projects/volun/volun-thumbnail.png"
      pages={[
        {
          name: 'Smart Volunteer Management',
          description:
            'VolunTrack is an Android application built with Kotlin and Jetpack Compose. It integrates third-party login and calendar access to recommend suitable volunteer opportunities for each user.',
          screenshot: [
            '/projects/volun/wel.png',
            '/projects/volun/signup.png',
            '/projects/volun/cal.png',
          ],
        },

        {
          name: 'Event Discovery and Management',
          description:
            'Connects to open data source APIs to help users explore volunteer opportunities from verified organizations. Users can search by category, and view detailed event information.',
          screenshot: [
            '/projects/volun/event-cus.png',
            '/projects/volun/search.png',
            '/projects/volun/details.png',
          ],
        },

        {
          name: 'Dashboard and Profile',
          description:
            'VolunTrack provides volunteers with a personalized dashboard to track their participation, set goals, and monitor progress across activity categories. ',
          screenshot: [
            '/projects/volun/dashboard.png',
            '/projects/volun/progress.png',
          ],
        },
        {
          name: 'Dark and Light Mode Support',
          description:
            'VolunTrack features both dark and light mode options, allowing users to switch seamlessly based on their preference or environment. This enhances readability, reduces eye strain, and provides a comfortable, modern user experience across all devices.',
          screenshot: [
            '/projects/volun/profile.png',
            '/projects/volun/dark.png',
          ],
        },
      ]}
    />
  );
}
