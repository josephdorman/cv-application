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
              if (element.start === '' && element.end === '' && element.location === '' && element.school === '' && element.degree === '' && element.present === '') {
                return false
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
            <div className="resume-work-info-container">
              <p className="resume-work-time">08/2022 - present</p>
              <p className="resume-work-company">Space X</p>
              <p className="resume-work-location">Los Angeles, CA</p>
              <p className="resume-work-position">UI UX Developer</p>
              <p className="resume-work-description">Working on the Space X official website, focusing on UI and UX, also worked on backend for tesla servers working on user authentication and managing databases</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Resume