import { v4 as uuidv4 } from 'uuid'

export default function Reset (data, setData) {
  const info = [
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
  ]

  const eduInfo = [
    { id: uuidv4(),
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