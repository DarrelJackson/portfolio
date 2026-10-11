import { useEffect, useState} from 'react'
import { animate, scrambleText } from 'animejs';
import { SideNav } from "./SideNav.tsx";
import { ExperienceCard } from "./ExperienceCard.tsx";
import { ProjectCard } from "./ProjectCard.tsx";
import signature from '../assets/DarrelsSig.svg';
import signatureLight from '../assets/DarrelsSigLight.svg';
import IntelligentMachines from '../assets/IML.jpg';
import TheServiceCenter from '../assets/TSC.jpg';
import Loading from '../assets/Loading.gif';
import ComingSoon from '../assets/ComingSoon.gif';
import Darrel from '../assets/Darrel.jpg';
import Resume from '../assets/Darrel_Jackson_Full_Stack_Resume.pdf'
import Projects from '../assets/List of projects that I built at the TSC.pdf'
import logo from '../assets/android-chrome-512x512.png'
import { useDarkMode } from './Darkmode.tsx';
import '../css/Home.css'

function Home() {
  /* All Animation being done here */
  const [isDark, toggleDark] = useDarkMode();
  const [showButton, setShowButton] = useState(false)
  const [entered, setEntered] = useState(false)

  /* The Welcome message is being scrambled */
  useEffect(() => {
    animate('h1', {
        innerHTML: scrambleText({
        settleDuration: 500,
        revealRate: 10,          
        settleRate: 30, 
        chars: 'braille',
        }),

        onComplete: () => {
          setShowButton(true)
        },
    })
  }, [])

  /* The enter button is being shown */
  useEffect(() => {
    if (showButton) {
      animate('.enter-button', {
        opacity: [0, 1],
        duration: 1500,
        ease: 'outQuad',
      })
    }
  }, [showButton])

  /* Once the enter button is clicked the page fades out and a new one comes in  */
  const handleEnter = () => {
    // Fade everything out
    animate('.welcome-content', {
      opacity: 0,
      duration: 800,
      ease: 'inQuad',

      onComplete: () => {
        // Change to the new screen
        setEntered(true)
      },
    })
  }

  useEffect(() => {
    if (entered) {
      animate('.new-content', {
        opacity: [0, 1],
        duration: 1000,
        ease: 'outQuad',
      })
    }
  }, [entered])

  /* All components you see on the screen */
  return (
    <div className="bg-white dark:bg-gray-800">
      {/* <div className="flex h-screen flex-col items-center justify-center text-3xl font-bold gap-4"> */}
      <div className={`flex flex-col items-center text-3xl font-bold ${entered ? '' : 'h-screen justify-center'}`}>

        {!entered && (
          
          <div className="welcome-content flex flex-col items-center gap-4">
            <h1 className="text-gray-800 dark:text-white">Welcome to Darrel's page</h1>
            {showButton && (
              <button onClick={handleEnter} className="enter-button px-4 py-2 bg-gray-800 dark:bg-white text-white dark:text-gray-800 rounded hover:bg-gray-900 dark:hover:bg-gray-200 transition duration-200 opacity-0">Enter</button>
            )}
            <nav className="fixed top-0 left-0 right-0 flex w-full items-center justify-between bg-white dark:bg-gray-800 px-6 py-4">
              <button onClick={toggleDark} className="ml-auto rounded px-3 py-1 text-black dark:text-white">
                {isDark ? <i className="fa-regular fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
              </button>
            </nav>
          </div>
        )}
        {/* The main page and everything you see */}
        {entered && (
          <div className="w-full">
            {/* Navabar */}
            <SideNav
              sections={[
                { id: 'about', label: 'About' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' },
              ]}
            />
            <nav className="top-0 left-0 right-0 flex w-full items-center justify-between bg-white dark:bg-gray-800 px-6 py-4">
              <div className="text-xl font-bold text-gray-800 dark:text-white">
                <img src={signature} alt="D" className="block h-12 w-auto dark:hidden" />
                <img src={signatureLight} alt="D" className="hidden h-12 w-auto dark:block" />
              </div>
              <div className="flex space-x-6 text-gray-800 dark:text-white font-normal">
                <button onClick={toggleDark} className="rounded px-3 py-1 text-black dark:text-white">
                  {isDark ? <i className="fa-regular fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
                </button>
              </div>
            </nav>
            {/* About Section */}
            <section id="about" className="scroll-mt-24 py-12">
            <div className="w-full max-w-7xl ml-4 sm:ml-9 md:ml-18 mr-auto rounded-2xl bg-white dark:bg-gray-800 shadow-lg p-4 sm:p-6 md:p-8">
              {/* Row: image + heading side by side */}
              <div className="flex flex-row items-center gap-4 sm:gap-6 mb-4">
                <div className="flex flex-col items-center gap-3 shrink-0">
                  <img src={Darrel} alt="Me" className="w-20 h-20 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-xl object-cover shrink-0"/>
                  <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                    <a href="https://www.linkedin.com/in/darrel-jackson-706302202/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-600 transition"><i className="fa-brands fa-linkedin fa-xl"></i></a>
                    <a href="https://github.com/DarrelJackson" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue-600 transition"><i className="fa-brands fa-github fa-xl"></i></a>
                    <a href={Resume} target="_blank" rel="noopener noreferrer" aria-label="Resume" className="hover:text-blue-600 transition"><i className="fa-regular fa-file fa-xl"></i></a>
                  </div>
                </div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Hi, my name is Darrel Jackson. I'm a full-stack software engineer with four years of experience building web applications and internal tools. I like building things that make people's work easier, whether that's helping customer service get faster access to the reports they need or building a tool so I don't have to repeat the same mundane task myself every time. <br/><br /> I've worked across the full stack, from the interfaces people interact with every day to the backend systems and databases behind them. I care about performance and usability just as much as I care about getting a feature working. <br/><br />I am always striving to learn and become better at what I am pasionate about from programming to gaming in my free time I always give 100% of my capabilities.
                </h2>
              </div>
            </div>
            </section>
            {/* Experience Section */}
            <section id="experience" className="scroll-mt-24 py-12">
                <div className="w-full max-w-7xl ml-4 sm:ml-9 md:ml-18 mr-auto rounded-2xl bg-white dark:bg-gray-800 p-4 sm:p-6 md:p-8">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-6">
                    Experience
                  </h2>
                  <div className="flex flex-wrap items-start gap-6">
                    <ExperienceCard
                      logo={IntelligentMachines}
                      role="Software Engineer"
                      company="Company Name"
                      dateRange="Jun 2021 – Aug 2021"
                      description={[
                        "Made 2 web pages which was location and tracking based",
                        "Made 5 API schemas which included tracking, location, authorization, status of a call agent, and a check in for call agents",
                        "Worked on 3 databases in T-SQL which was location, tracking, and authorization",
                      ]}
                    />
                    <ExperienceCard
                      logo={TheServiceCenter}
                      role="Full Stack Developer"
                      company="The Service Center"
                      dateRange="May 2022 – July 2026"
                      description={[
                        "Built and maintained production web applications.",
                        "Modernized legacy applications and improved performance.",
                        "Integrated third-party APIs and internal services.",
                        "Provided production support and troubleshooting.",
                        "Collaborated with stakeholders to deliver new features."
                      ]}
                    />
                    <ExperienceCard
                      logo={Loading}
                      role="TBD"
                      company="TBD"
                      dateRange="TBD"
                      description={[
                        "TBD"
                      ]}
                    />
                  </div>
                </div>
              </section>
              {/* Projects Section */}
            <section id="projects" className="scroll-mt-24 py-12">
                <div className="w-full max-w-7xl ml-4 sm:ml-9 md:ml-18 mr-auto rounded-2xl bg-white dark:bg-gray-800 p-4 sm:p-6 md:p-8">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-6">
                    Projects
                  </h2>
                  <div className="flex flex-wrap items-start gap-6">
                    <ProjectCard
                      logo={TheServiceCenter}
                      name="The Service Center Projects"
                      company="The Service Center Projects"
                      description="List of projects"
                      link={Projects}
                    />
                    <ProjectCard
                      logo={logo}
                      name="Portfolio"
                      company="Portfolio"
                      description="Already here! :)"
                      link="https://onepiecedle.net/classic"
                    />
                    <ProjectCard
                      logo={ComingSoon}
                      name="TBD"
                      company="TBD"
                      description=""
                      link="https://onepiecedle.net/classic"
                    />
                  </div>
                </div>
            </section>
            {/* Contact Section */}
            <section id="contact" className="scroll-mt-24 py-12">
                <div className="w-full max-w-7xl ml-4 sm:ml-9 md:ml-18 mr-auto rounded-2xl bg-white dark:bg-gray-800 shadow-lg p-4 sm:p-6 md:p-8">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-6">
                    Contact
                  </h2>

                  <div className="flex flex-col text-lg gap-3 text-gray-600 dark:text-gray-300">
                    <a
                      href="darreljackson.dj@gmail.com"
                      aria-label="Email"
                      className="hover:text-blue-600 transition"
                    >
                      <span>Email</span>
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/darrel-jackson-706302202/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="hover:text-blue-600 transition"
                    >
                      <span>Linkedin</span>
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>

                    <a
                      href={Resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Resume"
                      className="hover:text-blue-600 transition"
                    >
                      <span>Full Resume</span>
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                  </div>
                </div>
              </section>
            <footer className="w-full py-8 px-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                  <a href="mailto:darreljackson.dj@gmail.com" aria-label="Email" className="hover:text-blue-600 transition">
                    <i className="fa-regular fa-envelope fa-lg"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/darrel-jackson-706302202/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-600 transition">
                    <i className="fa-brands fa-linkedin fa-lg"></i>
                  </a>
                  <a href="https://github.com/DarrelJackson" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue-600 transition">
                    <i className="fa-brands fa-github fa-lg"></i>
                  </a>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  © {new Date().getFullYear()} Darrel Jackson. All rights reserved.
                </p>
              </div>
            </footer>
          </div>
        )}

      </div>
    </div>
  )
}

export default Home