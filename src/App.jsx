import hero from "./assets/images/hero.png"
import logo from "./assets/images/logo.png"
function App() {

  return (
    <div>
      <nav className="navbar">
      <div className='nav-logo'>
        <img src={logo} />
      </div>

      <div className='nav-links'>
        <p className='nav-links-sample'>What we do</p>
        <p className='nav-links-sample'>What we think</p>
        <p className='nav-links-sample'>Who we are</p>
        <div className='nav-contact'>
          <p className='nav-links-sample'>
            Follow us
          </p>
          <p className='nav-icons'>
            <i class="fa-brands fa-x-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-instagram"></i>
          </p>
        </div>
      </div>
    </nav>
      <div className="hero">
        <div className="hero-title">
          AI/ML solution to Elevate your customer Trust and
          Transform your business
        </div>
        <div className="sub-hero">
          <div className="su-hero-title-and-vedio">

            <div className="sub-hero-title">
              Start your Trusted AI/ML implementation partner journey to build cutting edge AI/ML solutions
            </div>
            <div className="sub-hero-vedio">
              <div className="hero-vedio">
                Vedio here
              </div>
            </div>
          </div>
          <div className="hero-img-container">
            <img src={hero} className="hero-img"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
