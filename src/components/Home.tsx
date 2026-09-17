import { useEffect, useState} from 'react'
import { animate, scrambleText } from 'animejs';
import '../css/Home.css'

function Home() {
  /* All Animation being done here */
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
      <div className="flex h-screen flex-col items-center justify-center text-3xl font-bold gap-4">

        {!entered && (
          <div className="welcome-content flex flex-col items-center gap-4">
            <h1 className="text-gray-800 dark:text-white">Welcome to Darrel's page</h1>
            {showButton && (
              <button onClick={handleEnter} className="enter-button px-4 py-2 bg-gray-800 dark:bg-white text-white dark:text-gray-800 rounded hover:bg-gray-900 dark:hover:bg-gray-200 transition duration-200 opacity-0">Enter</button>
            )}
          </div>
        )}

        {entered && (
          <div className="new-content opacity-0 text-gray-800 dark:text-white">
            <h1>Welcome to my website</h1>
          </div>
        )}

      </div>
    </div>
  )
}

export default Home