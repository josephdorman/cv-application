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
        <p className='credit'>Created by <span className='link'><img src={github}></img>Joseph Dorman</span></p>
      </header>
    </>
  )
}

export default Header