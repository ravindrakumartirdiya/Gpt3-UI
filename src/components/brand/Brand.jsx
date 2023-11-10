import React from 'react';
import "./brand.css";
import google from "../../assets/google.png";
import slack from "../../assets/slack.png";
import dropBox from "../../assets/dropbox.png";
import sopify from "../../assets/shopify.png";
import atla from "../../assets/atlassian.png";

const Brand = () => {
  return (
    <div className='gpt3__brand-section'>
      <img src={google} alt='google' />
      <img src={slack} alt='slack' />
      <img src={dropBox} alt='dropbox' />
      <img src={sopify} alt='sopify' />
      <img src={atla} alt='atla' />
    </div>
  )
}

export default Brand;