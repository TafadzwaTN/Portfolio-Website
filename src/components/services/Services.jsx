import React from 'react'
import './services.css'
import ReactImg from '../../assets/reactPNG.png';
import FlutterImg from '../../assets/flutterPNG.png';
import JavaImg from '../../assets/JavaPNG.png';
import ArduinoImg from '../../assets/arduinoPNG.png';

const Services = () => {
  return (
    <section id='services' className='sections'>
      <div className="section__title">
      <h1 className="section__heading1">What We Do</h1>
      </div>
      
      <div className="contents">
      <div className="container services__container">
        <div className="service__component__icon">
          <div className="react__img">
            <img className='services__img' src={ReactImg} alt="" />
          </div>
          
        </div>
        <div className="service__component__icon">
          <div className="flutter__img">
            <img className='services__img' src={FlutterImg} alt="" />
          </div>
        </div>
        <div className="service__component__icon">
        <div className="java__img">
            <img className='services__img' src={JavaImg} alt="" />
          </div>
        </div>
        <div className="service__component__icon">
        <div className="arduino__img">
            <img className='services__img' src={ArduinoImg} alt="" />
          </div>
        </div>
      </div>
      <div className="container services__container">
        <div className="service__component__content">
        <h3 className="section__heading3">React and React-Native</h3>
        </div>
        <div className="service__component__content">
        <h3 className="section__heading3">Flutter</h3>
        </div>
        <div className="service__component__content">
        <h3 className="section__heading3">Java Coding</h3>
        </div>
        <div className="service__component__content">
        <h3 className="section__heading3">Arduino Prototyping</h3>
        </div>
      </div>
      </div>
      
    </section>
  )
}

export default Services