import '../styles/Work.css'
import work from '/work.svg'

function Work() {
  return (
    <>
      <form className='work'>
        <h2 className="form-header"><span className="form-title"><img className='l-icon' src={work}></img>Work</span><span className='button-container'><button className='add'>Add</button></span></h2>
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
            <label htmlFor="startWork">Start Date</label>
            <input type="text" id="startWork" name="startWork" />
          </div>
          <div className="input-element">
            <label htmlFor="endWork">End Date</label>
            <input type="text" id="endWork" name="endWork" />
          </div>
          <div className="input-element">
            <label htmlFor="presentWork">On Going?</label>
            <input type="checkbox" id="presentWork" name="presentWork" />
          </div>
        </div>
        <div className="input-element">
          <label htmlFor="workDescription">Job Description</label>
          <textarea className="workDescription" name="workDescription" id="workDescription" rows="10"></textarea>
        </div>
      </form>
    </>
  )
}

export default Work