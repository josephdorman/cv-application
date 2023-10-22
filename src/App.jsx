import { useState } from 'react'
import Header from './components/Header'
import Contact from './components/Contact'
import Personal from './components/Personal'
import Resume from './components/Resume'
import Education from './components/Education'
import Work from './components/Work'
import './styles/App.css'

function App() {
  const [data, setData] = useState ({
    info: [
      {
        name: 'fname',
        text: ''
      },
      {
        name: 'lname',
        text: ''
      },
      {
        name: 'title',
        text: ''
      }
    ]
  })

  const handleData = (e) => {
    setData({...data, info:data.info.map(element => {
          if(element.name === e.target.id)
            element.text = e.target.value;
            return element
        })
    })

  }

  return (
    <>
      <div className="edit-container">
        <Header />
        <Personal handleData={handleData}/>
        <Contact />
        <Education />
        <Work />
      </div>
      <div className="resume-container">
        <Resume data={data}/>
      </div>
    </>
  )
}

export default App
