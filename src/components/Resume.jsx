import '../styles/Resume.css'
import phone from '/phone.svg'
import website from '/website.svg'
import email from '/email.svg'
import location from '/location.svg'

function Resume({data}) {
  return (
    <>
      <div className="resume">
        <div className="resume-header">
          <h1 className="resume-name">{data.info[0].text} {data.info[1].text}</h1>
          <h3 className='resume-position'>{data.info[2].text}</h3>
          <div className="resume-contact-container">
            <p className="resume-contact"><img src={phone} className="s-icon" />{data.info[3].text}</p>
            <p className='resume-contact'><img src={website} className="s-icon" />{data.info[4].text}</p>
            <p className="resume-contact"><img src={email} className="s-icon" />{data.info[5].text}</p>
            <p className="resume-contact"><img src={location} className="s-icon" />{data.info[6].text}</p>
          </div>
        </div>
        <div className="resume-education-section">
          <h2 className="resume-title">EDUCATION</h2>
          {
            data.education.map(element => {
              if (element.start === '' && element.end === '' && element.location === '' && element.school === '' && element.degree === '') {
                return false
              }
              else if (element.present === true) {
                return (
                  <div className="resume-edu-info-container" key={element.id}>
                    <p className="resume-edu-time">{element.start} - {'present'}</p>
                    <p className="resume-edu-school">{element.school}</p>
                    <p className="resume-edu-location">{element.location}</p>
                    <p className="resume-edu-degree">{element.degree}</p>
                  </div>
                )
              }
              return (
                <div className="resume-edu-info-container" key={element.id}>
                  <p className="resume-edu-time">{element.start} - {element.end}</p>
                  <p className="resume-edu-school">{element.school}</p>
                  <p className="resume-edu-location">{element.location}</p>
                  <p className="resume-edu-degree">{element.degree}</p>
                </div>
              )
            })
          }
        </div>
        <div className="resume-work-section">
          <h2 className="resume-title">WORK EXPERIENCE</h2>
          {
            data.experience.map(element => {
              if (element.startWork === '' && element.endWork === '' && element.locationWork === '' && element.position === '' && element.company === '' && element.workDescription === '') {
                return false
              }
              else if (element.presentWork === true) {
                return (
                  <div className="resume-work-info-container" key={element.id}>
                    <p className="resume-work-time">{element.startWork} - {'present'}</p>
                    <p className="resume-work-company">{element.company}</p>
                    <p className="resume-work-location">{element.locationWork}</p>
                    <p className="resume-work-position">{element.position}</p>
                    <p className="resume-work-description">{element.workDescription}</p>
                  </div>
                )
              }
              return (
                <div className="resume-work-info-container" key={element.id}>
                  <p className="resume-work-time">{element.startWork} - {element.endWork}</p>
                  <p className="resume-work-company">{element.company}</p>
                  <p className="resume-work-location">{element.locationWork}</p>
                  <p className="resume-work-position">{element.position}</p>
                  <p className="resume-work-description">{element.workDescription}</p>
                </div>
              )
            })  
          }
        </div>
      </div>
    </>
  )
}

export default Resume