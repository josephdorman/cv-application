import '../styles/Header.css'
import github from '../../public/github-mark-white.svg'

function Header() {
  return (
    <>
      <header>
        <div className="head">
          <h1 className="header-title">CV Generator</h1>
          <div className="buttons"></div>
        </div>
        <div className="link">
          <img src={github}></img>
          <p>Created by Joseph Dorman</p>
        </div>
      </header>
    </>
  )
}

export default Header