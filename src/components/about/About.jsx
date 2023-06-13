import React from 'react'
import './about.css'

import GradMe from '../../assets/IMG_1181.JPG'
import Logo from '../../assets/logo2-removebg-preview.png'

const About = () => {
  return (
    <section id='about' className='sections'>
      <div className="section__title">
      <h1 className='section__heading1'> About the Company</h1>
      </div>
      
      <div className="container about__container">
        <div className="about__company">
          <h3 className="section__heading3">Who are Ndingindi Trading</h3>
          <article>
            <small>Ndingindi Trading is a forward-thinking company founded by brothers Tafadzwa and Takudzwa Ndingindi. Specializing in logistics and software engineering, we provide innovative solutions to streamline supply chains and develop cutting-edge software applications. Our comprehensive logistics services encompass transportation, warehousing, inventory management, and distribution, all tailored to meet our clients' unique needs.

Driven by a customer-centric approach, we collaborate closely with our clients, understanding their challenges and delivering high-quality, industry-standard solutions. With a strong focus on integrity, innovation, and reliability, we continuously learn and adapt to evolving market trends, staying at the forefront of technology and logistics advancements.

Our team of skilled software engineers creates scalable, secure, and user-friendly applications that drive productivity and help businesses thrive in the digital age. We prioritize long-term partnerships and work hand-in-hand with our clients to achieve their goals.

Join us on a transformative journey of growth and innovation.</small>
          </article>
        </div>
        <div className="company__logo">
          <img src={Logo} alt="" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__cards'>
              <h3 className='section__heading3'>Bio</h3>
              <small>Tafadzwa Ndingindi is an Electrical and Electronics Engineering graduate from the University of Johannesburg. He graduated with an Honours Degree in 2022. He's always interested and ready to learn new things, because of this Tafadzwa managed to self-teach himself programming which had been sparked by a couple of engineering modules that he had to take for his honours degree that included some form of OOP programming. Tafadzwa's main hobby is playing around and experimenting with IoT projects. He also enjoys watching Formula 1.</small>
            </article>
          </div>
        </div>
        <div className="about__me">
          <div className="about__me-img">
            <img src={GradMe} alt="Me Working" srcset="" className='about__me_pic' />
          </div>
        </div>
        <div className="areas_of_expertise">
        <h3 className="section__heading3">Areas of Expertise</h3>
              <small><ol>
                <li>Electrical Engineering</li>
                <li>Electronics Engineering</li>
                <li>Fullstack Development</li>
                <li>Mobile App Development</li>
                <li>Three.js</li>
                </ol></small>
        </div>
      </div>
    </section>
  )
}

export default About