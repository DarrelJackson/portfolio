import { useEffect } from 'react'
import { animate, scrambleText } from 'animejs';
import '../css/Home.css'

function Home() {
  useEffect(() => {
    animate('h1', {
        innerHTML: scrambleText({
        settleDuration: 500,
        revealRate: 10,          
        settleRate: 30, 
        chars: 'braille',
        }),
    })
  }, [])

  return (
    <>
      <div className="center">
        <h1>
          Welcome to Darrel's page
        </h1>
      </div>
    </>
  )
}

export default Home