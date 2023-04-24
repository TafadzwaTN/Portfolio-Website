import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {MdWorkOutline} from 'react-icons/md'
import {TiContacts} from 'react-icons/ti'
import {BsTools} from 'react-icons/bs'
import { useState } from 'react'

const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav className='navigation'>
      <a href="#home" onClick={()=>setActiveNav('#')} className={activeNav === '#'? 'active':''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about'? 'active':''}><CgProfile/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience'? 'active':''}><MdWorkOutline/></a> 
      <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav === '#services'? 'active':''}><BsTools/></a>
      <a href="#contacts" onClick={()=>setActiveNav('#contacts')} className={activeNav === '#contacts'? 'active':''}><TiContacts/></a>

    </nav>
  )
}

export default Nav