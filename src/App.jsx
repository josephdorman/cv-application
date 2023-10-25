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
      },
      {
        name: 'tel',
        text: ''
      },
      {
        name: 'url',
        text: ''
      },
      {
        name: 'email',
        text: ''
      },
      {
        name: 'location',
        text: ''
      }
    ],
    education: [
      {
        name: 'school',
        text: ''
      },
      {
        name: 'degree',
        text: ''
      },
      {
        name: 'edu-location',
        text: ''
      },
      {
        name: 'start-date',
        text: ''
      },
      {
        name: 'end-date',
        text: ''
      },
      {
        name: 'present',
        text: ''
      },
      
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

  const handleEduData = (e) => {
    setData({...data, education:data.education.map(element => {
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
        <Contact handleData={handleData}/>
        <Education handleEduData={handleEduData}/>
        <Work />
      </div>
      <div className="resume-container">
        <Resume data={data}/>
      </div>
    </>
  )
}

export default App
