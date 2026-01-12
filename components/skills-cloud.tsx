'use client'

import { useState } from 'react';

interface Skill {
  name: string;
  level: string;
  description: string;
  position: { top: string; left: string };
}

const skills: Skill[] = [
  // FRONT-END (top-left quadrant)
  {
    name: 'React',
    level: 'Advanced',
    description: 'Building interactive UIs with hooks, context, and modern patterns',
    position: { top: '15%', left: '15%' }
  },
  {
    name: 'TypeScript',
    level: 'Advanced',
    description: 'Type-safe development with strong typing and interfaces',
    position: { top: '30%', left: '25%' }
  },
  {
    name: 'Next.js',
    level: 'Intermediate',
    description: 'Server-side rendering and modern React framework',
    position: { top: '35%', left: '8%' }
  },
  {
    name: 'Tailwind CSS',
    level: 'Advanced',
    description: 'Utility-first CSS framework for rapid UI development',
    position: { top: '20%', left: '35%' }
  },
  // BACK-END (top-right quadrant)
  {
    name: 'Node.js',
    level: 'Intermediate',
    description: 'Backend development with JavaScript runtime',
    position: { top: '15%', left: '65%' }
  },
  {
    name: 'Firebase',
    level: 'Intermediate',
    description: 'Cloud services for authentication and real-time databases',
    position: { top: '30%', left: '75%' }
  },
  {
    name: 'AWS',
    level: 'Beginner',
    description: 'Cloud infrastructure with Lambda, S3, and DynamoDB',
    position: { top: '35%', left: '85%' }
  },
  // DATABASES (bottom-left quadrant)
  {
    name: 'PostgreSQL',
    level: 'Intermediate',
    description: 'Relational database design and query optimization',
    position: { top: '65%', left: '15%' }
  },
  {
    name: 'MongoDB',
    level: 'Intermediate',
    description: 'NoSQL database for flexible data structures',
    position: { top: '75%', left: '28%' }
  },
  {
    name: 'Redis',
    level: 'Beginner',
    description: 'In-memory data structure store for caching',
    position: { top: '85%', left: '20%' }
  },
  // DEVOPS & TOOLS (bottom-right quadrant)
  {
    name: 'Docker',
    level: 'Intermediate',
    description: 'Containerization and deployment workflows',
    position: { top: '65%', left: '65%' }
  },
  {
    name: 'Git',
    level: 'Advanced',
    description: 'Version control and collaborative development',
    position: { top: '75%', left: '80%' }
  },
  {
    name: 'CI/CD',
    level: 'Intermediate',
    description: 'Automated testing and deployment pipelines',
    position: { top: '85%', left: '70%' }
  }
];

export default function SkillsCloud() {
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent, skill: Skill) => {
    setHoveredSkill(skill);
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

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
        <ellipse cx="50%" cy="50%" rx="15%" ry="12%" fill="none" stroke="url(#ellipseGradient)" strokeWidth="1" opacity="0.5" />
        <ellipse cx="50%" cy="50%" rx="30%" ry="24%" fill="none" stroke="url(#ellipseGradient)" strokeWidth="1" opacity="0.4" />
        <ellipse cx="50%" cy="50%" rx="45%" ry="36%" fill="none" stroke="url(#ellipseGradient)" strokeWidth="1" opacity="0.3" />

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
        DevOps & Tools
      </div>

      {skills.map((skill, index) => (
        <div
          key={skill.name}
          className="absolute group cursor-pointer"
          style={{
            top: skill.position.top,
            left: skill.position.left,
            animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
            animationDelay: `${index * 0.2}s`
          }}
          onMouseEnter={(e) => handleMouseMove(e, skill)}
          onMouseMove={(e) => handleMouseMove(e, skill)}
          onMouseLeave={() => setHoveredSkill(null)}
        >
          <div className={`px-4 py-2 bg-white dark:bg-gray-800 rounded-full transition-all hover:scale-110 ${getLevelGlow(skill.level)}`}>
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {skill.name}
            </span>
          </div>
        </div>
      ))}

      {/* Hover tooltip - positioned to bottom right */}
      {hoveredSkill && (
        <div
          className="fixed z-50 pointer-events-none"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
          }}
        >
          <div className="bg-gray-900 dark:bg-gray-800 text-white p-4 rounded-lg shadow-2xl max-w-xs">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg font-bold">{hoveredSkill.name}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${getLevelBadgeColor(hoveredSkill.level)} text-white`}>
                {hoveredSkill.level}
              </span>
            </div>
            <p className="text-sm text-gray-300">{hoveredSkill.description}</p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}
