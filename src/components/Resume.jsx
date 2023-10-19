import '../styles/Resume.css'

function Resume() {

  return (
    <>
      <div className="resume">
        <div className="resume-header">
          <h1 className="resume-name">Joseph Dorman</h1>
          <h3 className='resume-position'>Web Developer</h3>
          <div className="resume-contacts">
            <p className="resume-phone">908-761-0478</p>
            <p className='resume-website'>https://github.com/josephdorman</p>
            <p className="resume-email">jdorman@profession.mail</p>
            <p className="resume-location">Los Angeles, CA</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Resume