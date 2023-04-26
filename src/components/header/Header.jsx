import React from 'react'
import './header.css'
import Me_jpg from '../../assets/taf-removebg-preview.png'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'




const Header = () => {
  
  return (
    <header id='home'>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Tafadzwa Ndingindi</h1>
        <h5 className="text-light">BEng in Electrical and Electronics Engineering / Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={Me_jpg} alt="Me" />
        </div>
        <a href="#contacts" className='scroll_down' >Scroll Down</a>
      </div>
    </header>
  )
}

export default Header