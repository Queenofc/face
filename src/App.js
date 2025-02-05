import { Route, Routes } from 'react-router-dom'


import Contact from './components/Contact'
import Home from './components/Home'
import Layout from './components/Layout'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Soundbar from './components/Soundbar'
import './App.scss'

function App() {
  return (
    <>
      <Soundbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
