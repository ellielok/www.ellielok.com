'use client'

import { useState } from 'react';

interface Skill {
  name: string;
  level: string;
  description: string;
  position: { top: string; left: string };
}

const skills: Skill[] = [
  {
    name: 'React',
    level: 'Advanced',
    description: 'Building interactive UIs with hooks, context, and modern patterns',
    position: { top: '15%', left: '20%' }
  },
  {
    name: 'TypeScript',
    level: 'Advanced',
    description: 'Type-safe development with strong typing and interfaces',
    position: { top: '45%', left: '15%' }
  },
  {
    name: 'Next.js',
    level: 'Intermediate',
    description: 'Server-side rendering and modern React framework',
    position: { top: '25%', left: '75%' }
  },
  {
    name: 'Tailwind CSS',
    level: 'Advanced',
    description: 'Utility-first CSS framework for rapid UI development',
    position: { top: '60%', left: '70%' }
  },
  {
    name: 'PostgreSQL',
    level: 'Intermediate',
    description: 'Relational database design and query optimization',
    position: { top: '70%', left: '25%' }
  },
  {
    name: 'Docker',
    level: 'Intermediate',
    description: 'Containerization and deployment workflows',
    position: { top: '35%', left: '50%' }
  },
  {
    name: 'Git',
    level: 'Advanced',
    description: 'Version control and collaborative development',
    position: { top: '80%', left: '55%' }
  },
  {
    name: 'Node.js',
    level: 'Intermediate',
    description: 'Backend development with JavaScript runtime',
    position: { top: '50%', left: '85%' }
  },
  {
    name: 'Firebase',
    level: 'Intermediate',
    description: 'Cloud services for authentication and real-time databases',
    position: { top: '20%', left: '45%' }
  },
  {
    name: 'AWS',
    level: 'Beginner',
    description: 'Cloud infrastructure with Lambda, S3, and DynamoDB',
    position: { top: '85%', left: '35%' }
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
            left: `${mousePosition.x + 10}px`,
            top: `${mousePosition.y + 10}px`,
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
