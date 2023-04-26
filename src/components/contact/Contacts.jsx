import React from 'react'
import './contact.css'


const Contacts = () => {
  return (
    <section id='contacts' className='contacts__section'>
      <h1 className="section__heading1">Contact Details</h1>
      <div className="contacts__container">
        <div className="address__component">
        <address><br />Roodepoort <br />1709 <br />Gauteng <br />South Africa</address>
        <p>Email: tafadzwandingindi@outlook.com</p>
        <p>Cell: +27 62 308 5980 / +27 73 027 2831</p>
        </div>
        <div className="contact_methods_component">
          <div className="image" id='image_1'></div>
          <div className="image" id='image_2'></div>
          <div className="image" id='image_3'></div>
          <div className="image" id='image_4'></div>
        </div>
      </div>
      
    </section>
  )
}

export default Contacts