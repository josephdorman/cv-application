import { v4 as uuidv4 } from 'uuid'

export default function Autofill (data, setData) {
  const info = [
    {
      name: 'fname',
      text: 'John'
    },
    {
      name: 'lname',
      text: 'Doe'
    },
    {
      name: 'title',
      text: 'Web Developer'
    },
    {
      name: 'tel',
      text: '703-589-0061'
    },
    {
      name: 'url',
      text: 'github.com/johnDoe'
    },
    {
      name: 'email',
      text: 'johndoe45@yahoo.com'
    },
    {
      name: 'location',
      text: 'Austin, TX'
    }
  ]

  const eduInfo = [
    { id: uuidv4(),
      school: "Austin TX University",
      degree: "Bachlors in Computer Science",
      location: 'Austin, TX',
      start: "08/2016",
      end: "01/2020",
      present: ""},
    {
      id: uuidv4(),
      school: "",
      degree: "",
      location: '',
      start: "",
      end: "",
      present: ""}
  ]

  const expInfo = [
    {
      id: uuidv4(),
      company: 'Amazon',
      position: 'Web Developer',
      locationWork: 'Los Angeles, CA',
      startWork: '02/2020',
      endWork: '08/2022',
      presentWork: '',
      workDescription: 'Worked on Amazons main webpage as well as the official ecommerce site, dealing with UX and UI specializing in making reactive based website'
    },
    {
      id: uuidv4(),
      company: 'SpaceX',
      position: 'Backend Engineer',
      locationWork: 'Austin, TX',
      startWork: '11/2022',
      endWork: '',
      presentWork: true,
      workDescription: 'Worked on the official api and backend of tesla cars aswell as SpaceX backends, dealt with managing databases concerning telsa stock/values and multiple other databases'
    },
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

  setData({info: info, education: eduInfo, experience: expInfo});

}