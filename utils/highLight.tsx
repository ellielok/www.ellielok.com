export default function hl(item: string | React.ReactNode) {
  return (
    <span className="font-semibold text-white
          hover:text-[#93f5fa] transition-colors duration-300">
      {item}
    </span>
  );
}
