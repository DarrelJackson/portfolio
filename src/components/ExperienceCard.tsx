// ExperienceCard.tsx
import { useState } from 'react';

interface ExperienceCardProps {
  logo: string;
  role: string;
  company: string;
  dateRange: string;
  description: string[];
}

export function ExperienceCard({ logo, role, company, dateRange, description }: ExperienceCardProps) {
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
        {role}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {company}
      </p>

      {/* Date */}
      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
        {dateRange}
      </p>

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
        <ul className="text-sm text-gray-600 dark:text-gray-300 text-left list-disc pl-5 space-y-1">
            {description.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
      </div>

    </div>
  );
}