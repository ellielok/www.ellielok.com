import RevealOnScroll from '@/components/reveal-on-scroll';

interface ExperienceCardProps {
  date: string;
  logo: string;
  logoAlt: string;
  darkInvert?: boolean;
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
}

export default function ExperienceCard({
  date,
  logo,
  logoAlt,
  darkInvert = false,
  title,
  subtitle,
  description,
  skills,
}: ExperienceCardProps) {
  return (
    <RevealOnScroll>
      <div className="group p-6 rounded-sm border border-transparent dark:hover:bg-white/3 dark:hover:backdrop-blur-sm dark:hover:border-white/2 dark:hover:shadow-sm dark:hover:shadow-black/10 transition-all">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="md:w-1/4 flex flex-col items-center justify-center gap-3">
            <div className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
              {date}
            </div>
            <img
              src={logo}
              alt={logoAlt}
              className={`w-full max-w-32 h-auto ${darkInvert ? 'dark:invert' : ''}`}
            />
          </div>
          <div className="md:w-3/4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-teal-400 transition-colors mb-2">
              {title}
            </h3>
            <p className="text-gray-500 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-100 transition-colors mb-2">
              {subtitle}
            </p>
            <p className="text-gray-500 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors mb-4">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full group-hover:bg-gray-300 dark:group-hover:bg-gray-500 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}
