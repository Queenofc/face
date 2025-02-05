/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'

import {
  faAws,
  faDocker,
  faGitAlt,
  faGolang,
  faJsSquare,
  faPython,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'

import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const aboutArray = 'Skillset'.split('')

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          <p>
          I’m a passionate web developer with a knack for building things that live on the web. My toolkit includes <span className='tech'>HTML</span>,<span className='tech'> CSS</span>,<span className='tech'> JavaScript</span>,<span className='tech'> React</span>, and <span className='tech'>Python</span> for crafting dynamic and responsive interfaces, paired with <span className='tech'> Node.js</span>,<span className='tech'> Express</span>, and <span className='tech'>MySql</span> to power robust backends. I’ve also got hands-on experience with <span className='tech'>Postman</span> for API testing and use <span className='tech'>Git / Github</span> to keep my projects organized and collaborative.
          </p>
          <p>
          I’m passionate about building scalable, efficient, and user-friendly web apps that solve real-world problems. From crafting sleek frontends to optimizing backend performance, I love tackling challenges and turning ideas into reality. Let’s build something awesome! 🚀
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faAws} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faDocker} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faGolang} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
