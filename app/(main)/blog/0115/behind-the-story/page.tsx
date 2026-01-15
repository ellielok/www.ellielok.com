import BlogPostLayout from '@/components/blog-post-layout';

export const metadata = {
  title: 'Story Behind This Edition',
  date: '2026-01-15',
  tags: ['Design', 'Inspiration'],
  image: '/images/shots/IMG_8938.jpeg',
  description: 'The design inspiration behind this portfolio site.',
};

export default function Page() {
  return (
    <BlogPostLayout title={metadata.title} date={metadata.date} tags={metadata.tags}>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        This portfolio site draws its primary design inspiration from Shopify's Winter '26 Edition.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
        Building this site has been a journey of learning and experimentation. 
      </p>
    </BlogPostLayout>
  );
}
