export default function Tag({ label }: { label: string }) {
  return (
    <span
      className="px-4 py-1 rounded-full
                 bg-gray-200 dark:bg-[#3D2A52]
                 text-gray-700 dark:text-[#ffffff]/75
                 text-sm font-medium tracking-wide select-none
                 transition-colors"
    >
      {label}
    </span>
  );
}
