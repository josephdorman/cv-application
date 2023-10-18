import '../styles/Personal.css'
import personal from '/personal.svg'

function Personal() {

  return (
    <>
      <form className='personal'>
        <h2 className="form-title"><img className="l-icon" src={personal}></img>Personal Details</h2>
        <div className="input-element">
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="fname" />
        </div>
        <div className="input-element">
          <label htmlFor="lname">Last Name</label>
          <input type="lname" id="lname" name="lname" />
        </div>
        <div className="input-element">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </div>
      </form>
    </>
  )
}

export default Personal