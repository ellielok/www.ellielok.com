import BlogPostLayout from '@/components/blog-post-layout';

export const metadata = {
  title: 'Photos Page',
  date: '2025-03-12',
  tags: ['Photography', 'Design'],
  image: '/images/shots/IMG_3577.jpeg',
  description: 'I recently redesigned the photos page with a clean grid layout. The goal was to create a simple yet elegant way to showcase photography work.',
};

export default function Page() {
  return (
    <BlogPostLayout title={metadata.title} date={metadata.date} tags={metadata.tags}>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        I recently redesigned the photos page with a clean grid layout. The goal
        was to create a simple yet elegant way to showcase photography work.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
        The new design features square thumbnails that expand to full-size lightbox
        views. It's been great to see how the minimalist approach lets the photos
        speak for themselves.
      </p>
    </BlogPostLayout>
  );
}
