import { useState } from 'react'
import Header from './components/Header'
import Contact from './components/Contact'
import Personal from './components/Personal'
import Resume from './components/Resume'
import Education from './components/Education'
import Work from './components/Work'
import Autofill from './components/Autofill'
import { v4 as uuidv4 } from 'uuid'
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
        id: uuidv4(),
        school: '',
        degree: '',
        location: '',
        start: '',
        end: '',
        present: ''
      }
    ],
    experience: [
      {
        id: uuidv4(),
        company: '',
        position: '',
        locationWork: '',
        startWork: '',
        endWork: '',
        presentWork: '',
        workDescription: ''
      }
    ]
  })

  const loadPreset = () => {
    Autofill(data, setData);
  }

  const handleData = (e) => {
    setData({...data, info:data.info.map(element => {
          if(element.name === e.target.id)
            element.text = e.target.value;
            return element
        })
    })

  }

  const handleEduData = (e, id) => {
    setData({...data, education:data.education.map(element => {
          if (e.target.id === 'present' && element.id === id) {
            element[e.target.id] = e.target.checked;
          }
          else if (element.id === id) {
            element[e.target.id] = e.target.value;
          }
          
          return element;
        })
    })

  }

  const addEduData = (e) => {
    e.preventDefault();
    setData({...data, education: [...data.education , {
                                        id: uuidv4(),
                                        school: "",
                                        degree: "",
                                        location: '',
                                        start: "",
                                        end: "",
                                        present: ""}]})

  }

  const removeEduData = (e, id) => {
    e.preventDefault();
    setData({...data, education: data.education.filter(education => education.id !== id)})
  }

  const handleWorkData = (e, id) => {
    //console.log(e.target.id, id);
    setData({...data, experience:data.experience.map(element => {
          console.log(element.id, id);
          if (e.target.id === 'presentWork' && element.id === id) {
            element[e.target.id] = e.target.checked;
          }
          else if (element.id === id) {
            element[e.target.id] = e.target.value;
          }
          
          return element;
        })
    })

    console.log(data.experience);
  }

  const addWorkData = (e) => {
    e.preventDefault();
    setData({...data, experience: [...data.experience , {
                                        id: uuidv4(),
                                        company: "",
                                        position: "",
                                        locationWork: '',
                                        startWork: "",
                                        endWork: "",
                                        presentWork: "",
                                        workDescription: ""}]})

  }

  const removeWorkData = (e, id) => {
    e.preventDefault();
    setData({...data, experience: data.experience.filter(experience => experience.id !== id)})
  }

  return (
    <>
      <div className="edit-container">
        <Header loadPreset={loadPreset}/>
        <Personal handleData={handleData}/>
        <Contact handleData={handleData}/>
        <Education data={data} removeEduData={removeEduData} addEduData={addEduData} handleEduData={handleEduData}/>
        <Work data={data} removeWorkData={removeWorkData} addWorkData={addWorkData} handleWorkData={handleWorkData}/>
      </div>
      <div className="resume-container">
        <Resume data={data}/>
      </div>
    </>
  )
}

export default App
