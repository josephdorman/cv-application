import '../styles/Personal.css'

function Personal() {

  return (
    <>
      <form className='personal'>
        <h2 className="form-title">Personal Details</h2>
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