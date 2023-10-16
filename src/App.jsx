import { useState } from 'react'
import Header from './components/Header'
import Contact from './components/Contact'
import Personal from './components/Personal'
import Resume from './components/Resume'
import './styles/App.css'

function App() {

  return (
    <>
      <div className="edit-container">
        <Header />
        <Personal />
        <Contact />
      </div>
      <div className="resume-container">
        <Resume />
      </div>
    </>
  )
}

export default App
