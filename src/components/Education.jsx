import '../styles/Education.css'
import education from '/education.svg'

function Education() {
  return (
    <>
      <form className='education'>
        <h2 className="form-title"><img className='l-icon' src={education}></img>Education</h2>
        <div className="input-element">
          <label htmlFor="school">School</label>
          <input type="text" id="school" name="school" />
        </div>
        <div className="input-element">
          <label htmlFor="degree">Degree</label>
          <input type="text" id="degree" name="degree" />
        </div>
        <div className="input-element">
          <label htmlFor="edu-location">Location</label>
          <input type="text" id="edu-location" name="edu-location" />
        </div>
        <div className="timeline">
          <div className="input-element">
            <label htmlFor="start-date">Start Date</label>
            <input type="date" id="start-date" name="start-date" />
          </div>
          <div className="input-element">
            <label htmlFor="end-date">End Date</label>
            <input type="date" id="end-date" name="end-date" />
          </div>
          <div className="input-element">
            <label htmlFor="present">On Going?</label>
            <input type="checkbox" id="present" name="present" />
          </div>
        </div>
      </form>
    </>
  )
}

export default Education