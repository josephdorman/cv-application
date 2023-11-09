import '../styles/Buttons.css'
import reset from '/reset.svg'
import autofill from '/autofill.svg'
import download from '/download.svg'

function Buttons({loadPreset}) {
  return (
    <>
      <button className="reset"><img className="m-icon" src={reset}></img></button>
      <button className="autofill" onClick={loadPreset}><img className="m-icon" src={autofill}></img></button>
      <button className="download"><img className="m-icon" src={download}></img></button>
    </>
  )
}

export default Buttons