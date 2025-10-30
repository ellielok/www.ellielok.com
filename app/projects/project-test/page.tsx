'use client';
import ProductDetailsPage from '@/component/project-details';

// ✅ 主页面布局
export default function Page() {
  return (
    <ProductDetailsPage
      appName="BirdTag"
      description="An AI-powered bird identification web application that automatically recognizes bird species from uploaded photos using a fully serverless AWS architecture. The platform integrates intelligent tagging, DynamoDB data management, and real-time notification services."
      stack="AWS Lambda, API Gateway, S3, DynamoDB, Amplify, Cognito, Python, React"
      skills="Serverless architecture, Image recognition, Data synchronization, User authentication, Cloud automation, Full-stack development"
      thumbnail="/projects/bird/bird-thumbnail.png"
      pages={[
    {
      name: 'User Access & Authentication',
      description:
        'Users can sign up or log in securely using Amazon Cognito. BirdTag supports both traditional email registration (username, email, password) and Google account login for convenience.',
      screenshot: '/projects/bird/signup.png',
    },
    {
      name: 'Upload Media Files',
      description:
        'Once logged in, users can navigate to the upload page and select bird photos or videos. Upon upload, the files are stored in S3, automatically triggering the AI detection pipeline. Metadata and recognition results are written to DynamoDB for persistence.',
      screenshot: '/projects/bird/upload.png',
    },
    {
      name: 'Search & Explore Files',
      description:
        'Users can search their uploaded files by species name or tag. The system fetches matching entries from DynamoDB and displays thumbnails; clicking a thumbnail reveals the original image in full resolution.',
      screenshot: '/projects/bird/search.png',
    },

    {
      name: 'Modify & Manage Tags',
      description:
        'Each recognized file record includes editable tags. Users can update or add new tags directly from the interface to refine identification or improve dataset quality.',
      screenshot: '/projects/bird/tags.png',
    },
    {
      name: 'Delete & Bulk Operations',
      description:
        'BirdTag allows users to delete single or multiple files at once. The bulk delete function includes checkbox selection and batch removal through DynamoDB and S3 synchronization.',
      screenshot: '/projects/bird/delete.png',
    },
    {
      name: 'Bird Tag Subscriptions & Notifications',
      description:
        'Users can subscribe to specific bird tags (e.g., "crow" or "parrot"). When new files matching those tags are uploaded, the system automatically sends notifications via AWS SNS to subscribed users.',
      screenshot: '/projects/bird/subscribe.png',
    },
  ]}
    />
  );
}
