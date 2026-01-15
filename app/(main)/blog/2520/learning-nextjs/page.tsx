import BlogPostLayout from '@/components/blog-post-layout';

export const metadata = {
  title: 'Learning Next.js 15',
  date: '2025-05-20',
  tags: ['Web Dev', 'Next.js'],
  image: '/images/shots/IMG_8938.jpeg',
  description: 'Next.js 15 introduces some amazing features that make building web applications even more enjoyable. The App Router has become my go-to for new projects.',
};

export default function Page() {
  return (
    <BlogPostLayout title={metadata.title} date={metadata.date} tags={metadata.tags}>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        Next.js 15 introduces some amazing features that make building web applications
        even more enjoyable. The App Router has become my go-to for new projects.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
        Server Components and the new caching strategies have significantly improved
        performance. It's exciting to see how the framework continues to evolve.
      </p>
    </BlogPostLayout>
  );
}
