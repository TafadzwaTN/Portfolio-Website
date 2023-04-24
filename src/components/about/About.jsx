import React from 'react'
import './about.css'
import MeWorkShop from '../../assets/IMG_0357.jpg'

const About = () => {
  return (
    <section id='about'>
      <h1 className='about__heading'> About me</h1>
      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className='about__cards'>
              <h3 className='about__h3'>Bio</h3>
              <small>Tafadzwa Ndingindi is an Electrical and Electronics Engineering graduate from the University of Johannesburg. He graduated with an Honours Degree in 2022. He's always interested and ready to learn new things, because of this Tafadzwa managed to self-teach himself programming which had been sparked by a couple of engineering modules that he had to take for his honours degree that included some form of OOP programming. Tafadzwa's main hobby is playing around and experimenting with IoT projects. He also enjoys watching Formula 1.</small>
              <h3 className="about__h3">Areas of Expertise</h3>
              <small><ol>
                <li>Electrical Engineering</li>
                <li>Electronics Engineering</li>
                <li>Fullstack Development</li>
                <li>Mobile App Development</li>
                <li>Three.js</li>
                </ol></small>
            </article>
          </div>
        </div>
        <div className="about__me">
          <div className="about__me-img">
            <img src={MeWorkShop} alt="" srcset="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About