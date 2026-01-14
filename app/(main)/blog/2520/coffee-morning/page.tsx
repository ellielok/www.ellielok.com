import BlogPostLayout from '@/components/blog-post-layout';

export const metadata = {
  title: 'Good',
  date: '2025-04-08',
  tags: ['English', 'Life'],
  image: '/images/shots/IMG_1994.jpeg',
  description: 'Nice day for a coffee in Tokyo.',
};

export default function Page() {
  return (
    <BlogPostLayout title={metadata.title} date={metadata.date} tags={metadata.tags}>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        Nice day for a coffee in Tokyo
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
        Nice day for a coffee in Tokyo.
      </p>
    </BlogPostLayout>
  );
}
