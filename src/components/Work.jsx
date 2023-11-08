import '../styles/Work.css'
import work from '/work.svg'

function Work({data, handleWorkData, addWorkData}) {
  const last = data.experience.length - 1;
  const id = data.experience[last].id;

  return (
    <>
      <form className='work'>
        <h2 className="form-header"><span className="form-title"><img className='l-icon' src={work}></img>Work</span><span className='button-container'><button onClick={addWorkData} className='add'>Add</button></span></h2>
        <div className="input-element">
          <label htmlFor="company">Company Name</label>
          <input onChange={(e) => handleWorkData(e, id)} type="text" id="company" name="company" value={data.experience[last].company}/>
        </div>
        <div className="input-element">
          <label htmlFor="position">Position Title</label>
          <input onChange={(e) => handleWorkData(e, id)} type="text" id="position" name="position" value={data.experience[last].position}/>
        </div>
        <div className="input-element">
          <label htmlFor="locationWork">Location</label>
          <input onChange={(e) => handleWorkData(e, id)} type="text" id="locationWork" name="locationWork" value={data.experience[last].locationWork}/>
        </div>
        <div className="timeline">
          <div className="input-element">
            <label htmlFor="startWork">Start Date</label>
            <input onChange={(e) => handleWorkData(e, id)} type="text" id="startWork" name="startWork" value={data.experience[last].startWork}/>
          </div>
          <div className="input-element">
            <label htmlFor="endWork">End Date</label>
            <input onChange={(e) => handleWorkData(e, id)} type="text" id="endWork" name="endWork" value={data.experience[last].endWork}/>
          </div>
          <div className="input-element">
            <label htmlFor="presentWork">On Going?</label>
            <input onChange={(e) => handleWorkData(e, id)} type="checkbox" id="presentWork" name="presentWork" value={data.experience[last].presentWork}/>
          </div>
        </div>
        <div className="input-element">
          <label htmlFor="workDescription">Job Description</label>
          <textarea onChange={(e) => handleWorkData(e, id)} className="workDescription" name="workDescription" id="workDescription" rows="10" value={data.experience[last].workDescription}></textarea>
        </div>
      </form>
    </>
  )
}

export default Work