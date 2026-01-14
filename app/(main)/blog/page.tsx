import Link from 'next/link';
import Image from 'next/image';
import { getAllBlogPosts } from '@/lib/blog';

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-[#FEFCE8] dark:bg-[#1E2939] transition-colors pt-20">
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-10">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-10">
          Blog
        </h1>

        <div className="space-y-8">
          {posts.map((post) => (
            <Link
              key={`${post.folder}/${post.slug}`}
              href={`/blog/${post.folder}/${post.slug}`}
              className="block group"
            >
              <div className="flex gap-6 p-6 rounded-xl transition-all hover:shadow-lg">
                {/* Left: Image */}
                {post.image && (
                  <div className="flex-shrink-0 w-48 h-32 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={192}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Right: Content */}
                <div className="flex-1 flex flex-col justify-between">
                  {/* Title */}
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-[#93f5fa] transition-colors mb-2">
                      {post.title}
                    </h2>

                    {/* Description */}
                    {post.description && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
                        {post.description}
                      </p>
                    )}
                  </div>

                  {/* Meta: Date and Tags */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {formatDate(post.date)}
                    </span>
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
