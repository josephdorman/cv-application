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
            <p className="resume-contact"><img src={phone} className="s-icon" />908-761-0478</p>
            <p className='resume-contact'><img src={website} className="s-icon" />github.com/josephdorman</p>
            <p className="resume-contact"><img src={email} className="s-icon" />jdorman@profession.mail</p>
            <p className="resume-contact"><img src={location} className="s-icon" />Los Angeles, CA</p>
          </div>
        </div>
        <div className="resume-education-section">
          <h2 className="resume-title">EDUCATION</h2>
            <div className="resume-edu-info-container">
              <p className="resume-edu-time">08/2018 - 08/2022</p>
              <p className="resume-edu-school">Austin Texas University</p>
              <p className="resume-edu-location">Austin, TX</p>
              <p className="resume-edu-degree">Bachelors in Computer Science</p>
            </div>
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