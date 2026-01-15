import BlogPostLayout from '@/components/blog-post-layout';
import ContactSection from '@/components/contact-section';

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
      <p>
I have finally updated my personal site once again. The design of this website is built on several key creative inspirations and technical explorations.
</p>

<p>
The overall layout is primarily inspired by{' '}
<a
  href="https://www.shopify.com/au/editions/winter2026#sidekick"
  target="_blank"
  rel="noopener noreferrer"
  className="font-semibold underline underline-offset-4 hover:opacity-80"
>Shopify Editions Winter &apos;26</a>.
My first impression of that site was that it felt like a piece of art rather than a conventional product website. Its attention to interface design, motion details, and scroll-based interactions is exceptionally refined. Effects such as parallax scrolling and smooth transition animations create an experience where visual artistry and modern web interfaces feel seamlessly combined.
</p>

<p>
What I admire most is the team&apos;s meticulous coordination between design and front-end implementation, especially in subtle details like animation timing and divider treatments. These are elements I actively tried to recreate on my own site, although there are still many nuances I have not fully achieved.
</p>

<p>
As for the name of this edition, my previous version was called{' '}
<a
  href="https://www.ellielok.com/history/2510-halloween"
  target="_blank"
  rel="noopener noreferrer"
  className="font-semibold underline underline-offset-4 hover:opacity-80"
>Halloween Edition</a>{' '}
because it launched around Halloween.
This time, I named it <strong>The Art Nouveau Edition</strong>, inspired by one of my favorite artists,{' '}
<a
  href="https://en.wikipedia.org/wiki/Alphonse_Mucha"
  target="_blank"
  rel="noopener noreferrer"
  className="font-semibold underline underline-offset-4 hover:opacity-80"
>Alphonse Mucha</a>,
who is one of the most representative figures of the Art Nouveau movement.
</p>

<p>
The female figure on the homepage is an AI-generated interpretation inspired by Mucha&apos;s works{' '}
<em>The Seasons</em> and <em>Slovanská epopej</em>,
translated into a contemporary digital visual language rather than a direct reproduction.
</p>

<p>
From a technical perspective, this site is built with a modern front-end stack:
</p>

<ul className="list-disc pl-10 space-y-2">
  <li><strong>Next.js 15</strong> for server-side rendering and static generation optimizations</li>
  <li><strong>TypeScript</strong> to improve code reliability and long-term maintainability</li>
  <li><strong>Tailwind CSS</strong> for highly customizable utility-first styling</li>
  <li><strong>Framer Motion</strong> to enable smooth motion transitions and more complex interactions</li>
</ul>

<p>
I am also actively experimenting with modern CSS techniques, including{' '}
<a
  href="https://css-tricks.com/almanac/properties/t/transition/"
  target="_blank"
  rel="noopener noreferrer"
  className="font-semibold underline underline-offset-4 hover:opacity-80"
>CSS transitions</a>,
such as using <strong>next-themes</strong> to support light and dark mode switching and theme transition effects.
Some of these features are currently only fully supported in the latest browsers, but exploring these limitations has helped me better understand modern CSS animation and theming systems.
</p>

<p>
Thank you for taking the time to explore my website. I am currently contributing to several open-source projects and actively looking for a full-time role.
If your company is looking for a developer, I would be happy to connect.
</p>
<ContactSection />

    </BlogPostLayout>
  );
  
}
