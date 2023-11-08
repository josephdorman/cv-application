import { useState } from 'react'
import Header from './components/Header'
import Contact from './components/Contact'
import Personal from './components/Personal'
import Resume from './components/Resume'
import Education from './components/Education'
import Work from './components/Work'
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
        location: '',
        startWork: '',
        endWork: '',
        presentWork: '',
        workDescription: ''
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
    console.log(e.target, id);
    setData({...data, experience:data.experience.map(element => {
          if (e.target.id === 'presentWork' && element.id === id) {
            element[e.target.id] = e.target.checked;
          }
          else if (element.id === id) {
            element[e.target.id] = e.target.value;
          }
          
          return element;
        })
    })

  }

  return (
    <>
      <div className="edit-container">
        <Header />
        <Personal handleData={handleData}/>
        <Contact handleData={handleData}/>
        <Education data={data} removeEduData={removeEduData} addEduData={addEduData} handleEduData={handleEduData}/>
        <Work data={data} handleWorkData={handleWorkData}/>
      </div>
      <div className="resume-container">
        <Resume data={data}/>
      </div>
    </>
  )
}

export default App
