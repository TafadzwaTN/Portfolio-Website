import React, { useState } from 'react'
import './experience.css'

const Experience = () => {
  const [moreInfoLogistics,setMoreInfoLogistics] = useState(false);
  const [moreInfoSoftware,setMoreInfoSoftware] = useState(false);
  return (
    <section id='experience' className='sections'>
      <div className="section__title">
      <h1 className='section__heading1'>Our Work</h1>
      </div>
      <div className="our__work">
        <div className="sub__section">
          {!moreInfoLogistics&&<div>
          <h3 className="section__heading3">
          Logistics Division
        </h3>
        <small>Our logistics division boasts a fleet of 5 30-ton trucks, equipped with advanced tracking systems and maintained to the highest standards. This allows us to handle various types of cargo with precision and care.</small>
        <div className="centred__btn">
        <button className="see__more" onClick={()=>setMoreInfoLogistics(true)}>See more</button>
        </div>
          </div>}
          {moreInfoLogistics&&<div className="popup__info">
            <div className="popup__contents">
            <h2>Local Transport</h2>
            <small>We specialize in transporting cargo within South Africa, connecting cities and regions seamlessly. Our experienced drivers and well-organized logistics processes ensure timely and secure deliveries.</small>
            <h2>International Transport</h2>
            <small>As a trusted logistics provider, we have a strong network and expertise in transporting cargo across countries in the Southern African Development Community (SADC). Whether it's moving goods across borders or delivering shipments to neighboring countries, our team has the necessary knowledge and resources to handle international logistics operations effectively.</small>
            <h2>Proven Partnerships</h2>
            <small>We take pride in our partnerships with reputable companies in the industry. We have successfully worked and contracted with esteemed organizations like <a href="http://" target="_blank" rel="noopener noreferrer">Premier Logistics Solution</a> and <a href="http://" target="_blank" rel="noopener noreferrer">Anderson Services</a>, demonstrating our ability to meet their logistics needs with professionalism and reliability.</small>
            </div>
            
            <button className="close__btn" onClick={()=>setMoreInfoLogistics(false)}>&times;</button>
          </div>}
        
        </div>
        <div className="sub__section">
        <h3 className="section__heading3">
          Software Engineering
        </h3>
        </div>
        
      </div>
    </section>
  )
}

export default Experience