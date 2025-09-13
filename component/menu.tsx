export default function Menu() {
  const items = [
    { label: 'About', href: '#about' },
    { label: 'Project', href: '#project' },
    { label: 'More', href: '#more' },
  ];

  return (
    <div className="hidden md:block mt-20 border">
      <ul className="">
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="block px-2 py-1 font-semibold rounded hover:bg-gray-900 border">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
