import '../styles/Work.css'
import work from '/work.svg'

function Work() {
  return (
    <>
      <form className='work'>
        <h2 className="form-title"><img className='l-icon' src={work}></img>Work</h2>
        <div className="input-element">
          <label htmlFor="company">Company Name</label>
          <input type="text" id="company" name="company" />
        </div>
        <div className="input-element">
          <label htmlFor="position">Position Title</label>
          <input type="text" id="position" name="position" />
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

export default Work