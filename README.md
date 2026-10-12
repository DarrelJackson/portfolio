# Darrel Jackson — Portfolio

A personal portfolio site built with React, TypeScript, and Tailwind CSS. Features an animated landing screen, light/dark mode, a scroll-tracking side navigation, and expandable cards for experience and projects.

## Live Site

(https://www.darreljackson.com/)

## Features

- **Animated intro** — welcome message scrambles in using [anime.js](https://animejs.com/), followed by a fade transition into the main site.
- **Light / dark mode** — toggle in the nav, respects system preference on first visit, and persists the user's choice across sessions via `localStorage`.
- **Scroll-tracking side nav** — a dot-based side navigation highlights the section currently in view and lets you jump directly to any section.
- **Expandable cards** — experience and project entries collapse by default and expand individually to reveal full details.
- **Fully responsive** — built mobile-first with Tailwind's responsive utilities throughout.

## Tech Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) — build tool and dev server
- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling
- [anime.js](https://animejs.com/) — animations (text scramble, fade transitions)
- [Font Awesome](https://fontawesome.com/) — icons

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm

### Installation

```bash
git clone https://github.com/DarrelJackson/<repo-name>.git
cd <repo-name>
npm install
```

### Development

```bash
npm run dev
```

Runs the app locally with hot reload, typically at `http://localhost:5173`.

### Build

```bash
npm run build
```

Builds a production-ready bundle to `dist/`.

### Preview production build

```bash
npm run preview
```

## Project Structure

```
src/
├── assets/            # Images, logos, resume PDF, etc.
├── components/
│   ├── Home.tsx        # Main page — layout, sections, animation logic
│   ├── Darkmode.tsx     # useDarkMode hook — theme state + persistence
│   ├── SideNav.tsx      # Scroll-tracking side navigation
│   ├── ExperienceCard.tsx
│   └── ProjectCard.tsx
└── css/
    └── Home.css
```

## Sections

- **About** — intro, headshot, and links to LinkedIn, GitHub, and resume.
- **Experience** — expandable cards listing roles, companies, and dates.
- **Projects** — expandable cards showcasing project work with links.
- **Contact** — email, LinkedIn, and resume download.

## Contact

- **Email:** darreljackson.dj@gmail.com
- **LinkedIn:** [linkedin.com/in/darrel-jackson-706302202](https://www.linkedin.com/in/darrel-jackson-706302202/)
- **GitHub:** [github.com/DarrelJackson](https://github.com/DarrelJackson)

## License

This project is licensed under the [MIT License](LICENSE).