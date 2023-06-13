import React from 'react'
import './header.css'
import HeaderSocials from './HeaderSocials'
import ActiveLogo from './ActiveLogo'
import { BsArrowRight } from 'react-icons/bs'




const Header = () => {
  
  return (
    <header id='home'>
      <div className='container header__container'>
        <HeaderSocials/>
        <ActiveLogo/>
        <a href="#footer" className='scroll_down' ><BsArrowRight size={28}/></a>
      </div>
    </header>
  )
}

export default Header