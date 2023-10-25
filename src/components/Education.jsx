import '../styles/Education.css'
import education from '/education.svg'

function Education({handleEduData}) {
  return (
    <>
      <form className='education'>
        <h2 className='form-header'><span className="form-title"><img className='l-icon' src={education}></img>Education</span><span className='button-container'><button className='add'>Add</button></span></h2>
        <div className="input-element">
          <label htmlFor="school">School</label>
          <input onChange={handleEduData} type="text" id="school" name="school" />
        </div>
        <div className="input-element">
          <label htmlFor="degree">Degree</label>
          <input onChange={handleEduData} type="text" id="degree" name="degree" />
        </div>
        <div className="input-element">
          <label htmlFor="edu-location">Location</label>
          <input onChange={handleEduData} type="text" id="edu-location" name="edu-location" />
        </div>
        <div className="timeline">
          <div className="input-element">
            <label htmlFor="start-date">Start Date</label>
            <input onChange={handleEduData} type="date" id="start-date" name="start-date" />
          </div>
          <div className="input-element">
            <label htmlFor="end-date">End Date</label>
            <input onChange={handleEduData} type="date" id="end-date" name="end-date" />
          </div>
          <div className="input-element">
            <label htmlFor="present">On Going?</label>
            <input onChange={handleEduData} type="checkbox" id="present" name="present" />
          </div>
        </div>
      </form>
    </>
  )
}

export default Education