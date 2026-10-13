// Side nav: dot indicators for each section
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
    <nav
      aria-label="Section navigation"
      className="hidden md:flex fixed right-3 lg:right-6 top-1/2 -translate-y-1/2 flex-col items-center gap-1 z-40"
    >
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          aria-label={section.label}
          aria-current={activeId === section.id ? 'true' : undefined}
          className="group relative flex items-center p-2"
        >
          <span
            className={`block w-3 h-3 rounded-full transition-all ${
              activeId === section.id
                ? 'bg-blue-600 scale-125'
                : 'bg-gray-300 dark:bg-gray-600 group-hover:bg-gray-400'
            }`}
          />
          <span className="pointer-events-none absolute right-8 whitespace-nowrap rounded bg-white/90 dark:bg-gray-800/90 px-2 py-1 text-sm text-gray-700 dark:text-gray-300 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            {section.label}
          </span>
        </a>
      ))}
    </nav>
  );
}