import '../styles/Header.css'
import github from '../../public/github-mark-white.svg'
import Buttons from './Buttons'

function Header({loadPreset}) {
  return (
    <>
      <header>
        <div className="head">
          <h1 className="header-title">CV Generator</h1>
          <div className="buttons">
            <Buttons loadPreset={loadPreset}/>
          </div>
        </div>
        <p className='credit'>Created by <button className='link'><img className="s-icon" src={github}></img>Joseph Dorman</button></p>
      </header>
    </>
  )
}

export default Header