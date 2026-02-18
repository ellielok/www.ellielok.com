import ProductDetailsPage from '@/components/project-details';
import { Metadata } from "next";
import birdThumbnail from '@/app/history/2510-halloween/images/projects/bird/bird-thumbnail.png';
import signupImg from '@/app/history/2510-halloween/images/projects/bird/signup.png';
import upload from '@/app/history/2510-halloween/images/projects/bird/upload.png';
import search from '@/app/history/2510-halloween/images/projects/bird/search.png';
import tags from '@/app/history/2510-halloween/images/projects/bird/tags.png';
import deleteImg from '@/app/history/2510-halloween/images/projects/bird/delete.png';
import subscribe from '@/app/history/2510-halloween/images/projects/bird/subscribe.png';

export const metadata: Metadata = {
  title: "Bird Snap - AI Bird Identification Platform | Ellie Lok",
  description: "AI-powered bird identification web application using serverless AWS architecture. Automatically recognizes bird species from photos with intelligent tagging and real-time notifications.",
  keywords: ["AWS Lambda", "API Gateway", "S3", "DynamoDB", "AI", "Image Recognition", "React", "Serverless"],
  openGraph: {
    title: "Bird Snap - AI Bird Identification Platform | Ellie Lok",
    description: "Serverless AI bird identification platform with automatic species recognition and smart tagging.",
    images: [{ url: birdThumbnail.src }],
  }
};

export default function Page() {
  return (
    <ProductDetailsPage
      appName="Bird Snap"
      description="An AI-powered bird identification web application that automatically recognizes bird species from uploaded photos using a fully serverless AWS architecture. The platform integrates intelligent tagging, DynamoDB data management, and real-time notification services."
      stack="AWS Lambda, API Gateway, S3, DynamoDB, Amplify, Cognito, Python, React"
      skills="Serverless architecture, Image recognition, Data synchronization, User authentication, Cloud automation, Full-stack development"
      thumbnail={birdThumbnail}
      pages={[
        {
          name: 'User Access & Authentication',
          description:
            'Users can sign up or log in securely using Amazon Cognito. Bird Snap supports both traditional email registration (username, email, password) and Google account login for convenience.',
          screenshot: signupImg,
        },
        {
          name: 'Upload Media Files',
          description:
            'Once logged in, users can navigate to the upload page and select bird photos or videos. Upon upload, the files are stored in S3, automatically triggering the AI detection pipeline. Metadata and recognition results are written to DynamoDB for persistence.',
          screenshot: upload,
        },
        {
          name: 'Search & Explore Files',
          description:
            'Users can search their uploaded files by species name or tag. The system fetches matching entries from DynamoDB and displays thumbnails; clicking a thumbnail reveals the original image in full resolution.',
          screenshot: search,
        },

        {
          name: 'Modify & Manage Tags',
          description:
            'Each recognized file record includes editable tags. Users can update or add new tags directly from the interface to refine identification or improve dataset quality.',
          screenshot: tags,
        },
        {
          name: 'Delete & Bulk Operations',
          description:
            'Bird Snap allows users to delete single or multiple files at once. The bulk delete function includes checkbox selection and batch removal through DynamoDB and S3 synchronization.',
          screenshot: deleteImg,
        },
        {
          name: 'Bird Tag Subscriptions & Notifications',
          description:
            'Users can subscribe to specific bird tags (e.g., "crow" or "parrot"). When new files matching those tags are uploaded, the system automatically sends notifications via AWS SNS to subscribed users.',
          screenshot: subscribe,
        },
      ]}
    />
  );
}
