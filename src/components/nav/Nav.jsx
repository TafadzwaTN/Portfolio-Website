import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {MdWorkOutline} from 'react-icons/md'
import {TiContacts} from 'react-icons/ti'
import {BsTools} from 'react-icons/bs'

const Nav = () => {
  return (
    <nav className='navigation'>
      <a href="#home"><AiOutlineHome/></a>
      <a href="#about"><CgProfile/></a>
      <a href="#Experience"><MdWorkOutline/></a> 
      <a href="#Contacts"><TiContacts/></a>
      <a href="#Services"><BsTools/></a>

    </nav>
  )
}

export default Nav