import fs from 'fs';
import path from 'path';

export interface BlogPost {
  slug: string;
  folder: string;
  title: string;
  date: string;
  tags: string[];
  image?: string;
  description?: string;
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const blogDir = path.join(process.cwd(), 'app/(main)/blog');
  const folders = fs.readdirSync(blogDir).filter((item) => {
    const itemPath = path.join(blogDir, item);
    return fs.statSync(itemPath).isDirectory();
  });

  const posts: BlogPost[] = [];

  for (const folder of folders) {
    const folderPath = path.join(blogDir, folder);
    const slugs = fs.readdirSync(folderPath).filter((item) => {
      const itemPath = path.join(folderPath, item);
      return fs.statSync(itemPath).isDirectory();
    });

    for (const slug of slugs) {
      try {
        const postPath = path.join(folderPath, slug, 'page.tsx');
        if (fs.existsSync(postPath)) {
          // Read the file content to extract metadata
          const content = fs.readFileSync(postPath, 'utf-8');

          // Extract metadata using regex
          const titleMatch = content.match(/title:\s*['"](.+?)['"]/);
          const dateMatch = content.match(/date:\s*['"](.+?)['"]/);
          const tagsMatch = content.match(/tags:\s*\[([\s\S]*?)\]/);
          const imageMatch = content.match(/image:\s*['"](.+?)['"]/);
          const descriptionMatch = content.match(/description:\s*['"](.+?)['"]/);

          if (titleMatch && dateMatch) {
            const tags = tagsMatch
              ? tagsMatch[1]
                  .split(',')
                  .map((tag) => tag.trim().replace(/['"]/g, ''))
                  .filter(Boolean)
              : [];

            posts.push({
              slug,
              folder,
              title: titleMatch[1],
              date: dateMatch[1],
              tags,
              image: imageMatch ? imageMatch[1] : undefined,
              description: descriptionMatch ? descriptionMatch[1] : undefined,
            });
          }
        }
      } catch (error) {
        console.error(`Error reading post ${folder}/${slug}:`, error);
      }
    }
  }

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
