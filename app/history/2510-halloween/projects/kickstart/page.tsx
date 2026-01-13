import ProductDetailsPage from '@/app/history/2510-halloween/component/project-details';
import { Metadata } from "next";
import kickThumbnail from '@/app/history/2510-halloween/images/projects/kick/kick_thumbnail.png';
import home from '@/app/history/2510-halloween/images/projects/kick/home.png';
import calendar from '@/app/history/2510-halloween/images/projects/kick/calendar.png';
import join from '@/app/history/2510-halloween/images/projects/kick/join.png';
import map from '@/app/history/2510-halloween/images/projects/kick/map.png';
import email from '@/app/history/2510-halloween/images/projects/kick/email.png';

export const metadata: Metadata = {
  title: "KickStart - Soccer Event Management Platform",
  description: "A community-driven web app that simplifies street soccer event management. Connects players, volunteers, and organizers through an interactive booking and scheduling platform built with Vue 3.",
  keywords: ["Vue 3", "TypeScript", "Firebase", "FullCalendar", "Tailwind CSS", "Event Management"],
  openGraph: {
    title: "KickStart - Soccer Event Management Platform | Ellie Lok",
    description: "Community-driven soccer event management web app with real-time booking and scheduling.",
    images: ["/history/2510-halloween/images/projects/kick/kick_thumbnail.png"],
  }
};

export default function Page() {
  return (
    <ProductDetailsPage
      appName="KickStart"
      description="A community-driven web app that simplifies street soccer event management. It connects players, volunteers, and organizers through an interactive booking and scheduling platform."
      stack="Vue 3, TypeScript, Firebase, SendGrid, FullCalendar, Tailwind CSS"
      skills="Frontend architecture, Database design, Authentication, Real-time updates, Email integration"
      thumbnail={kickThumbnail}
      pages={[
        {
          name: 'Main Features',
          description:
            'A community-driven web app that streamlines street soccer event management. It connects players, volunteers, and organizers, promoting youth engagement and teamwork through accessible, well-organized soccer programs.',
          screenshot: home,
        },
        {
          name: 'Booking Calendar',
          description:
            'Built with FullCalendar for real-time event scheduling. Users can view, book, or manage soccer sessions seamlessly.',
          screenshot: calendar,
        },
        {
          name: 'Volunteer Portal',
          description:
            'Encourages community participation by offering three user roles: Member, Volunteer, and Admin. Each role provides tailored access to session management and engagement tools, making it easy for anyone.',
          screenshot: join,
        },
        {
          name: 'Find Sessions Page',
          description:
            'Enables users to discover nearby soccer sessions using postcode and distance filters. Integrated with an interactive map, making it easy for players to find and join community games in their area.',
          screenshot: map,
        },
        {
          name: 'Email Notification System',
          description:
            'Automated SendGrid integration sends event confirmations, reminders, and updates to all participants instantly.',
          screenshot: email,
        },
      ]}
    />
  );
}
