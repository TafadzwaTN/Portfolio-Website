import React from 'react'
import {BsLinkedin, BsWhatsapp} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com/in/tafadzwa-ndingindi-15336617b" target='_blank' rel='noreferrer'><BsLinkedin/></a>
        <a href="https://wa.me/+27623085980" target='_blank' rel='noreferrer'><BsWhatsapp/></a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tafadzwandingindi@outlook.com" target='_blank' rel='noreferrer'>@</a>
    </div>
  )
}

export default HeaderSocials