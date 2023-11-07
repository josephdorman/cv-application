import '../styles/Education.css'
import education from '/education.svg'
import trash from '/trash-can-outline.svg'

// {e => {e.preventDefault(); alert('Submitting!');}}

function Education({data, removeEduData, addEduData, handleEduData}) {
  const last = data.education.length - 1;
  const id = data.education[last].id;

  return (
    <> 
      <form className='education'>
        <h2 className='form-header'><span className="form-title"><img className='l-icon' src={education}></img>Education</span><span className='button-container'><button onClick={addEduData} className='add' type="submit">Add</button></span></h2>
        {
          data.education.map(element => {
            if (element === data.education[last]) {
              return false;
            }
            return (
              <>
                <div key={element.id} className="eduTag">{element.school}
                  <button onClick={(e) => removeEduData(e, element.id)} className='delete'><img className='m-icon trash' src={trash}></img></button>
                </div>
              </>
            )
          })
        }
        <div className="input-element">
          <label htmlFor="school">School</label>
          <input onChange={(e) => handleEduData(e, id)} type="text" id="school" name="school" value={data.education[last].school}/>
        </div>
        <div className="input-element">
          <label htmlFor="degree">Degree</label>
          <input onChange={(e) => handleEduData(e, id)} type="text" id="degree" name="degree" value={data.education[last].degree}/>
        </div>
        <div className="input-element">
          <label htmlFor="edu-location">Location</label>
          <input onChange={(e) => handleEduData(e, id)} type="text" id="location" name="location" value={data.education[last].location}/>
        </div>
        <div className="timeline">
          <div className="input-element">
            <label htmlFor="start-date">Start Date</label>
            <input onChange={(e) => handleEduData(e, id)} type="text" id="start" name="start" value={data.education[last].start}/>
          </div>
          <div className="input-element">
            <label htmlFor="end-date">End Date</label>
            <input onChange={(e) => handleEduData(e, id)} type="text" id="end" name="end" value={data.education[last].end}/>
          </div>
          <div className="input-element">
            <label htmlFor="present">On Going?</label>
            <input onChange={(e) => handleEduData(e, id)} type="checkbox" id="present" name="present" value={data.education[last].present}/>
          </div>
        </div>
      </form>
    </>
  )
}

export default Education