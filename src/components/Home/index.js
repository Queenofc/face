import { useEffect, useState } from 'react'

import Loader from 'react-loaders'
import { Link } from 'react-router-dom'

import LogoTitle from '../../assets/images/logo11.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'


const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = 'hibani'.split('')
  const jobArray = 'an Engineering Student'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <br/>
            <span className={`${letterClass} _121`}>t</span>
            <span className={`${letterClass} _122`}>h</span>
            <span className={`${letterClass} _123`}>e</span>
            <span className={`${letterClass} _124`}>r</span>
            <span className={`${letterClass} _125`}>e</span>
            <span className={`${letterClass} _126`}>!</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="Shibani" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <br/>
          <h2>
          From Code to Creation: My Path into Full-Stack Web Development.
          </h2>
          <Link to="/contact" className="flat-button">
            Contact Me
          </Link>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
