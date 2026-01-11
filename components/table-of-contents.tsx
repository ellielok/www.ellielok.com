'use client'

interface TOCItem {
  title: string;
  roman: string;
  href: string;
}

const tocItems: TOCItem[] = [
  { title: 'About', roman: 'I', href: '#about' },
  { title: 'Skills', roman: 'II', href: '#skills' },
  { title: 'Projects', roman: 'III', href: '#projects' },
  { title: 'Experience', roman: 'IV', href: '#experience' },
  { title: 'Contact', roman: 'V', href: '#contact' },
];

export default function TableOfContents() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className=" fixed bottom-8 z-30 ">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Contents
      </h2>

      <nav>
        <ul className="space-y-3">
          {tocItems.map((item) => (
            <li key={item.roman}>
              <a
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="flex items-center justify-between gap-4 group cursor-pointer"
              >
                <span className="text-lg text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  {item.title}
                </span>
                <span className="flex-1 border-b border-dotted border-gray-400 dark:border-gray-600 min-w-[40px]"></span>
                <span className="text-lg text-gray-500 dark:text-gray-400 font-serif">
                  {item.roman}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-8 pt-6 border-t border-gray-300 dark:border-gray-700">
        <p className="text-sm text-gray-900 dark:text-white font-medium mb-2">
          © Ellie Lok
        </p>
        <div className="flex flex-col gap-1 text-sm text-gray-600 dark:text-gray-400">
          <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
}
