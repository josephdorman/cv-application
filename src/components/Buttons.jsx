import '../styles/Buttons.css'
import reset from '/reset.svg'
import autofill from '/autofill.svg'
import download from '/download.svg'

function Buttons() {
  return (
    <>
      <button className="reset icon"><img src={reset}></img></button>
      <button className="autofill icon"><img src={autofill}></img></button>
      <button className="download icon"><img src={download}></img></button>
    </>
  )
}

export default Buttons