import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Contacts = () => {
  const form = useRef();
  const [sendSuccess,setSendSuccess] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2j34nv2', 'template_kpjnagn', form.current, 'bPqxhMC36iJWLzCaG')
      .then((result) => {
          console.log(result.text);
          setSendSuccess(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contacts' className='sections'>
      <div className="section__title">
      <h1 className='section__heading1'>Leave Us a Message</h1>
      </div>
      {!sendSuccess&&<form ref={form} onSubmit={sendEmail}>
      <label className='form__label'>Name</label>
      <input className='form__input' type="text" name="user_name" />
      <label className='form__label'>Email</label>
      <input className='form__input' type="email" name="user_email" />
      <label className='form__label'>Message</label>
      <textarea className='form__text' name="message" />
      <input className='submit__btn' type="submit" value="Send" />
    </form>}
    {sendSuccess&&<div className='thank__you'>
      <h1 className='thank__you_h1'>Thank You!! &#128525;</h1>
      <h2 className='thank__you_h2'>We'll be in touch soon!</h2>
      </div>}
      
    </section>
  )
}

export default Contacts