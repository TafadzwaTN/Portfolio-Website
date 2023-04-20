import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons'
import {AiOutlineHome} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {MdWorkOutline} from 'react-icons/md'
import {TiContacts} from 'react-icons/ti'

const Nav = () => {
  return (
    <nav>
      <a href=""><AiOutlineHome/></a>
      <a href=""><CgProfile/></a>
      <a href=""><MdWorkOutline/></a> 
      <a href=""><TiContacts/></a>

    </nav>
  )
}

export default Nav