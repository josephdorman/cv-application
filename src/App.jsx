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
    educationTemplate: [
      {
        school: '',
        degree: '',
        location: '',
        start: '',
        end: '',
        present: ''
      }
    ],
    education: [

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
    setData({...data, educationTemplate:data.educationTemplate.map(element => {
          element[e.target.name] = e.target.value;
          return element;
        })
    })

    console.log(data.educationTemplate);
    addEduData();

  }

  const addEduData = () => {
    setData({...data, education:data.educationTemplate[0]});
    console.log('this is main data', data.education);
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
