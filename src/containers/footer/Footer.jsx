import React from 'react';
import "./footer.css";
import Logo from "../../assets/logo.svg"

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding' id='footter'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>

      <div className='gpt3__footer-button'>
        <button>Request Early Access</button>
      </div>

      <div className='gpt3__footer-section'>
        
        <div className='gpt3__footer_section-sec1'>
          <img src={Logo} alt='Logo' />
          <p>GPT-3 Company, All Rights Reserved</p>
        </div>
        
        <div className='gpt3__footer_section-sec2'>
          <div className='gpt3__footer_section-pHead'>
            <p>Links</p>
          </div>
          <div  className='gpt3__footer_section-aStyle'>
            <a href='#footer'>Overons</a>
            <a href='#footer'>Social Media</a>
            <a href='#footer'>Counters</a>
            <a href='#footer'>Contact</a>
          </div>
        </div>
       
        <div className='gpt3__footer_section-sec3'>
          <div className='gpt3__footer_section-pHead'>
            <p>Company</p>
          </div>
          <div className='gpt3__footer_section-aStyle'>
            <a href='#footer'>Terms & Conditions</a>
            <a href='#footer'>Privacy Policy</a>
            <a href='#footer'>Contact</a>
          </div>
        </div>
       
        <div className='gpt3__footer_section-sec4'>
          <div className='gpt3__footer_section-pHead'>
            <p>Get in touch</p>
          </div>
          <div className='gpt3__footer_section-aStyle'>
            <a href='#footer'>Ravindra Tirdiya</a>
            <a href={"tel:+91 7891517453"}>+91 7891517453</a>
            <a href={"mailto:ravindratirdiya.22@gmail.com"}>ravindratirdiya.22@gmail.com</a>
          </div>
        </div>
      </div>

      <div className='gpt3__footer-pera'>
        <p>Created By RAVINDRA TIRDIYA</p>
      </div>
    </div>
  )
}

export default Footer