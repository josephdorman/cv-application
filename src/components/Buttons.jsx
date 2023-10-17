import '../styles/Buttons.css'
import reset from '/reset.svg'
import autofill from '/autofill.svg'
import download from '/download.svg'

function Buttons() {
  return (
    <>
      <button className="reset"><img className="icon" src={reset}></img></button>
      <button className="autofill"><img className="icon" src={autofill}></img></button>
      <button className="download"><img className="icon" src={download}></img></button>
    </>
  )
}

export default Buttons