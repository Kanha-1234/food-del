import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className='footer-content-left'>
         <img src={assets.logo} alt=""/>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, atque labore, consectet</p>
         <div className="foter-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
         </div>

        </div>
        <div className='footer-content-center'>
           <h2>Company</h2>
           <ul>
            <li>home</li>
            <li>about us</li>
            <li>Delivary</li>
            <li>Privacy policy</li>
           </ul>
        </div>
        <div className='footer-content-right'>
            <h2>Get in touch</h2>
            <ul>
                <li>+91-9668398524</li>
                <li>ashutoshnayak0001@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr></hr>
      <p className='footer-copyright'>copyright claim 2024@ashutoshnayak0001-All Rights Reserve</p>
    </div>
  )
}

export default Footer
