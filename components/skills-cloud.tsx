'use client'

import { useState } from 'react';
import {
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiPython,
  SiOracle,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiAmazonwebservices,
  SiDocker,
  SiKubernetes,
  SiVercel,
  SiGit
} from 'react-icons/si';
import { FaJava, FaDatabase } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface Skill {
  name: string;
  level: string;
  description: string;
  position: { top: string; left: string };
  icon: IconType;
}

const skills: Skill[] = [
  // FRONT-END (top-left quadrant) - more compact layout
  {
    name: 'React',
    level: 'Advanced',
    description: 'Building interactive UIs with hooks, context, and modern patterns',
    position: { top: '6%', left: '3%' },
    icon: SiReact
  },
  {
    name: 'Vue.js',
    level: 'Intermediate',
    description: 'Progressive framework for building user interfaces',
    position: { top: '6%', left: '22%' },
    icon: SiVuedotjs
  },
  {
    name: 'Next.js',
    level: 'Intermediate',
    description: 'Server-side rendering and modern React framework',
    position: { top: '18%', left: '8%' },
    icon: SiNextdotjs
  },
  {
    name: 'TypeScript',
    level: 'Advanced',
    description: 'Type-safe development with strong typing and interfaces',
    position: { top: '18%', left: '28%' },
    icon: SiTypescript
  },
  {
    name: 'JavaScript',
    level: 'Advanced',
    description: 'Core language for web development and interactivity',
    position: { top: '30%', left: '3%' },
    icon: SiJavascript
  },
  {
    name: 'HTML5',
    level: 'Advanced',
    description: 'Semantic markup and modern web standards',
    position: { top: '30%', left: '22%' },
    icon: SiHtml5
  },
  {
    name: 'CSS3',
    level: 'Advanced',
    description: 'Styling, animations, and responsive layouts',
    position: { top: '42%', left: '8%' },
    icon: SiCss3
  },
  {
    name: 'Tailwind CSS',
    level: 'Advanced',
    description: 'Utility-first CSS framework for rapid UI development',
    position: { top: '42%', left: '28%' },
    icon: SiTailwindcss
  },
  {
    name: 'Bootstrap',
    level: 'Intermediate',
    description: 'Popular CSS framework for responsive design',
    position: { top: '6%', left: '38%' },
    icon: SiBootstrap
  },
  // BACK-END (top-right quadrant)
  {
    name: 'Node.js',
    level: 'Intermediate',
    description: 'Backend development with JavaScript runtime',
    position: { top: '8%', left: '58%' },
    icon: SiNodedotjs
  },
  {
    name: 'Python',
    level: 'Intermediate',
    description: 'Versatile language for backend and data processing',
    position: { top: '20%', left: '72%' },
    icon: SiPython
  },
  {
    name: 'Java',
    level: 'Intermediate',
    description: 'Object-oriented programming for enterprise applications',
    position: { top: '8%', left: '85%' },
    icon: FaJava
  },
  // DATABASES (bottom-left quadrant)
  {
    name: 'Oracle DB',
    level: 'Intermediate',
    description: 'Enterprise relational database management',
    position: { top: '56%', left: '5%' },
    icon: SiOracle
  },
  {
    name: 'PostgreSQL',
    level: 'Intermediate',
    description: 'Relational database design and query optimization',
    position: { top: '68%', left: '18%' },
    icon: SiPostgresql
  },
  {
    name: 'MongoDB',
    level: 'Intermediate',
    description: 'NoSQL database for flexible data structures',
    position: { top: '80%', left: '5%' },
    icon: SiMongodb
  },
  // CLOUD & DEVOPS (bottom-right quadrant)
  {
    name: 'AWS',
    level: 'Beginner',
    description: 'Cloud infrastructure with Lambda, S3, and DynamoDB',
    position: { top: '56%', left: '58%' },
    icon: SiAmazonwebservices
  },
  {
    name: 'Docker',
    level: 'Intermediate',
    description: 'Containerization and deployment workflows',
    position: { top: '56%', left: '78%' },
    icon: SiDocker
  },
  {
    name: 'Kubernetes',
    level: 'Beginner',
    description: 'Container orchestration and scaling',
    position: { top: '68%', left: '65%' },
    icon: SiKubernetes
  },
  {
    name: 'Firebase',
    level: 'Intermediate',
    description: 'Cloud services for authentication and real-time databases',
    position: { top: '68%', left: '88%' },
    icon: SiFirebase
  },
  {
    name: 'Neon',
    level: 'Intermediate',
    description: 'Serverless Postgres for modern applications',
    position: { top: '80%', left: '55%' },
    icon: FaDatabase
  },
  {
    name: 'Vercel',
    level: 'Intermediate',
    description: 'Frontend deployment and edge functions',
    position: { top: '80%', left: '72%' },
    icon: SiVercel
  },
  {
    name: 'Git',
    level: 'Advanced',
    description: 'Version control and collaborative development',
    position: { top: '80%', left: '88%' },
    icon: SiGit
  }
];

export default function SkillsCloud() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const getLevelGlow = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'shadow-[0_0_20px_rgba(168,85,247,0.6)]'; // Purple glow
      case 'Intermediate':
        return 'shadow-[0_0_20px_rgba(59,130,246,0.6)]'; // Blue glow
      case 'Beginner':
        return 'shadow-[0_0_20px_rgba(34,197,94,0.6)]'; // Green glow
      default:
        return 'shadow-md';
    }
  };

  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'bg-purple-500';
      case 'Intermediate':
        return 'bg-blue-500';
      case 'Beginner':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-visible">
      {/* SVG for elliptical lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        <defs>
          <linearGradient id="ellipseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Concentric ellipses centered at the cross point */}
        <ellipse cx="50%" cy="50%" rx="13%" ry="12%" fill="none" stroke="url(#ellipseGradient)" strokeWidth="1" opacity="0.5" />
        <ellipse cx="50%" cy="50%" rx="26%" ry="24%" fill="none" stroke="url(#ellipseGradient)" strokeWidth="1" opacity="0.4" />
        <ellipse cx="50%" cy="50%" rx="39%" ry="36%" fill="none" stroke="url(#ellipseGradient)" strokeWidth="1" opacity="0.3" />

        {/* Center point */}
        <circle cx="50%" cy="50%" r="3" fill="rgb(168, 85, 247)" opacity="0.6" />
      </svg>

      {/* Cross axes */}
      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-purple-400 dark:bg-purple-500 z-0"></div>
      {/* Horizontal line */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-purple-400 dark:bg-purple-500 z-0"></div>

      {/* Quadrant labels */}
      <div className="absolute top-2 left-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
        Front-End
      </div>
      <div className="absolute top-2 right-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
        Back-End
      </div>
      <div className="absolute bottom-2 left-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
        Databases
      </div>
      <div className="absolute bottom-2 right-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
        Cloud & DevOps
      </div>

      {skills.map((skill, index) => {
        const isHovered = hoveredSkill === skill.name;
        const IconComponent = skill.icon;
        return (
          <div
            key={skill.name}
            className="absolute group skill-float"
            style={{
              top: skill.position.top,
              left: skill.position.left,
              animation: `float ${3 + index * 0.3}s ease-in-out infinite`,
              animationDelay: `${index * 0.15}s`,
              zIndex: isHovered ? 50 : 'auto'
            }}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="flex flex-col items-start">
              {/* Skill tag with icon */}
              <div className={`relative z-10 p-2 md:px-3 md:py-2 bg-white dark:bg-gray-800 rounded-full transition-all flex items-center gap-2 md:hover:scale-110 ${getLevelGlow(skill.level)}`}>
                <IconComponent className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                <span className="hidden md:inline text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  {skill.name}
                </span>
              </div>

              {/* Expanded content on hover - hidden on mobile */}
              {isHovered && (
                <div className="hidden md:block relative z-30 mt-2 p-3 bg-gray-900 dark:bg-gray-800 text-white rounded-lg shadow-2xl max-w-xs animate-fadeIn">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${getLevelBadgeColor(skill.level)} text-white`}>
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300">{skill.description}</p>
                </div>
              )}
            </div>
          </div>
        );
      })}

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        /* Disable float animation on small screens */
        @media (max-width: 767px) {
          .skill-float {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
