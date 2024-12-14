import React from 'react'
import logo from "../assets/images/logo.png"
const Navbar = () => {
  return (
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
  )
}

export default Navbar
