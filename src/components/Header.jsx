import '../styles/Header.css'
import github from '../../public/github-mark-white.svg'
import Buttons from './Buttons'

function Header({downloadResume,resetForm, loadPreset}) {
  return (
    <>
      <header>
        <div className="head">
          <h1 className="header-title">CV Generator</h1>
          <div className="buttons">
            <Buttons downloadResume={downloadResume} resetForm={resetForm} loadPreset={loadPreset}/>
          </div>
        </div>
        <p className='credit'>Created by <button className='link'><img className="s-icon" src={github}></img>Joseph Dorman</button></p>
      </header>
    </>
  )
}

export default Header