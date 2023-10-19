import '../styles/Resume.css'
import phone from '/phone.svg'
import website from '/website.svg'
import email from '/email.svg'
import location from '/location.svg'

function Resume() {

  return (
    <>
      <div className="resume">
        <div className="resume-header">
          <h1 className="resume-name">Joseph Dorman</h1>
          <h3 className='resume-position'>Web Developer</h3>
          <div className="resume-contact-container">
            <p className="resume-contact"><img src={phone} className="s-icon" />908-761-0478</p>
            <p className='resume-contact'><img src={website} className="s-icon" />github.com/josephdorman</p>
            <p className="resume-contact"><img src={email} className="s-icon" />jdorman@profession.mail</p>
            <p className="resume-contact"><img src={location} className="s-icon" />Los Angeles, CA</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Resume