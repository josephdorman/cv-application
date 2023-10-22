import '../styles/Contact.css'
import contact from '/contact.svg'

function Contact({handleData}) {

  return (
    <>
      <form className='contact'>
        <h2 className="form-title"><img className='l-icon' src={contact}></img>Contact Info</h2>
        <div className="input-element">
          <label htmlFor="email">Email</label>
          <input onChange={handleData} type="email" id="email" name="email" />
        </div>
        <div className="input-element">
          <label htmlFor="tel">Phone Number</label>
          <input onChange={handleData} type="tel" id="tel" name="tel" />
        </div>
        <div className="input-element">
          <label htmlFor="website">Website</label>
          <input onChange={handleData} type="url" id="url" name="url" />
        </div>
        <div className="input-element">
          <label htmlFor="location">Location</label>
          <input onChange={handleData} type="text" id="location" name="location" />
        </div>
      </form>
    </>
  )
}

export default Contact