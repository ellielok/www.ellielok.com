export default function hl(item: string | React.ReactNode,
link?: string,
newTab: boolean = true

) {

  const baseClass = "font-semibold text-white hover:text-[#93f5fa] transition-colors duration-300"
          
  if (link) {
    return (
      <a
        href={link}
        target={newTab ? "_blank" : "_self"}
        rel = {newTab ? "noreferrer" : undefined}
        className={baseClass}
      >
        {item}
      </a>
    );
  }
  return (
    <span
      className={baseClass}
    >
      {item}
    </span>
  );
}
