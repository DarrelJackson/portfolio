// ProjectCard.tsx
import { useState } from 'react';

interface ProjectCardProps {
  logo: string;
  name: string;
  company: string;
  description: string;
  link: string;
}

export function ProjectCard({ logo, name, company, description, link }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full sm:w-64 rounded-2xl bg-white dark:bg-gray-800 shadow-lg p-4 flex flex-col items-center text-center">

      {/* Image */}
      <img
        src={logo}
        alt={company}
        className="w-72 h-32 object-contain mb-3"
      />

      {/* Role + company */}
      <h3 className="text-base font-semibold text-gray-800 dark:text-white">
        {name}
      </h3>
      

      {/* Expand/collapse arrow */}
      <button
        onClick={() => setExpanded((prev) => !prev)}
        aria-label={expanded ? 'Collapse details' : 'Expand details'}
        className="mt-3 text-gray-500 dark:text-gray-400 hover:text-blue-600 transition"
      >
        <i className={`fa-solid fa-chevron-down transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}></i>
      </button>

      {/* Expandable details */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          expanded ? 'max-h-96 mt-3' : 'max-h-0'
        }`}
      >
        <a href={link} target="_blank" className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-left">
          {description}
        </a>
      </div>

    </div>
  );
}