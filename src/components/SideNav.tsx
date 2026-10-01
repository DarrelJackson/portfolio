{/* Components for my side nav */}
import { useActiveSection } from './useActiveSection';

interface SectionLink {
  id: string;
  label: string;
}

interface SideNavProps {
  sections: SectionLink[];
}

export function SideNav({ sections }: SideNavProps) {
  const activeId = useActiveSection(sections.map((s) => s.id));

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-50">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          aria-label={section.label}
          className="group relative flex items-center"
        >
          <span
            className={`block w-3 h-3 rounded-full transition-all ${
              activeId === section.id
                ? 'bg-blue-600 scale-125'
                : 'bg-gray-300 dark:bg-gray-600 group-hover:bg-gray-400'
            }`}
          />
          <span className="absolute right-6 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
            {section.label}
          </span>
        </a>
      ))}
    </nav>
  );
}