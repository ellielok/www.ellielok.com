interface BlogPostLayoutProps {
  title: string;
  date: string;
  tags?: string[];
  children: React.ReactNode;
}

export default function BlogPostLayout({ title, date, tags, children }: BlogPostLayoutProps) {
  return (
    <div className="min-h-screen bg-[#faf8f5] dark:bg-[#0e1218] transition-colors pt-20">
      <div className="max-w-3xl mx-auto px-6 md:px-10 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            {title}
          </h1>
          <div className="flex items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400">{date}</p>
            {tags && tags.length > 0 && (
              <div className="flex gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <article className="prose dark:prose-invert max-w-none">
          {children}
        </article>
      </div>
    </div>
  );
}
