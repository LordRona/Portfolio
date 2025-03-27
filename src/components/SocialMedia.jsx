import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const SocialMedia = () => {

  const socialLinks = {
    twitter: "https://twitter.com/lord_rona_",
    whatsapp: "https://wa.me/237653979891",
    email: "mailto:ronardsauh@gmail.com"
  };

  return (
    <div className='app__social'>
      <a 
        href={socialLinks.twitter} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Twitter (X) Profile"
      >
        <BsTwitterX />
      </a>
      
      <a 
        href={socialLinks.whatsapp} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
      
      <a 
        href={socialLinks.email} 
        aria-label="Send Email"
      >
        <SiGmail />
      </a>
    </div>
  );
};

export default SocialMedia;