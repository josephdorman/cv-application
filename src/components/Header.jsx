import '../styles/Header.css'
import github from '../../public/github-mark-white.svg'
import Buttons from './Buttons'

function Header() {
  return (
    <>
      <header>
        <div className="head">
          <h1 className="header-title">CV Generator</h1>
          <div className="buttons">
            <Buttons />
          </div>
        </div>
        <p className='credit'>Created by <button className='link'><img src={github}></img>Joseph Dorman</button></p>
      </header>
    </>
  )
}

export default Header