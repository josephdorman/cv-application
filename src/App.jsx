import { useState } from 'react'
import Contact from './components/Contact'
import Resume from './components/Resume'
import './styles/App.css'

function App() {

  return (
    <>
      <div className="edit-container">
        <Contact />
      </div>
      <div className="resume-container">
        <Resume />
      </div>
    </>
  )
}

export default App
