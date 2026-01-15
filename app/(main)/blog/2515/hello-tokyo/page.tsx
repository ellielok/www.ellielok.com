import BlogPostLayout from '@/components/blog-post-layout';

export const metadata = {
  title: 'Hello Tokyo!',
  date: '2025-01-08',
  tags: ['Travel', 'England'],
  image: '/images/shots/IMG_6807.jpeg',
  description: 'My first trip to London was absolutely amazing. The city is a perfect blend of traditional culture and modern technology.',
};

export default function Page() {
  return (
    <BlogPostLayout title={metadata.title} date={metadata.date} tags={metadata.tags}>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        My first trip to London was absolutely amazing. The city is a perfect blend of traditional culture and modern technology.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
        I spent my days exploring different neighborhoods, trying authentic British
        cuisine, and meeting wonderful people. Can't wait to go back!
      </p>
    </BlogPostLayout>
  );
}
