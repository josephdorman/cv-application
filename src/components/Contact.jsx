import '../styles/Contact.css'
import contact from '/contact.svg'

function Contact() {

  return (
    <>
      <form className='contact'>
        <h2 className="form-title"><img className='l-icon' src={contact}></img>Contact Info</h2>
        <div className="input-element">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="input-element">
          <label htmlFor="tel">Phone Number</label>
          <input type="tel" id="tel" name="tel" />
        </div>
        <div className="input-element">
          <label htmlFor="website">Website</label>
          <input type="url" id="url" name="url" />
        </div>
        <div className="input-element">
          <label htmlFor="location">Location</label>
          <input type="text" id="location" name="location" />
        </div>
      </form>
    </>
  )
}

export default Contact