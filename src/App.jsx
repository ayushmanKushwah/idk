import Navbar from "./components/navbar"
import hero from "./assets/images/hero.png"

function App() {

  return (
    <div>
      <Navbar />
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
