import React, { useState, useEffect } from 'react';

import { images } from '../../constants';
import { AppWrapper, MotionWrap } from '../../wrapper';
import { client } from '../../client';

import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name,  email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({...formData, [name]: value });
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact)
    .then(() => {
      setLoading(false)
      setIsFormSubmitted(true)
    })
  }

  return (
    <div id='Contact'>
    <h2 className="head-text">Take a coffee & chat with me</h2>
    <div className="app__footer-cards">
      <div className="app__footer-card">
        <img src={images.email} alt="email" />
        <a href="mailto:ronardsauh@gmail.com" className='p-text'>ronardsauh@gmail.com</a>
      </div>
      <div className="app__footer-card">
        <img src={images.mobile} alt="mobile" />
        <a href="tel: +237 6 53 97 98 91" className='p-text'>+237 6 53 97 98 91</a>
      </div>
    </div>

    { !isFormSubmitted ? (
    <div className="app__footer-form app__flex">
      <div className="app__flex">
        <input className='p-text' type="text" placeholder='Your Name' name='name' value={name} onChange={handleChangeInput} />
      </div>
      <div className="app__flex">
        <input className='p-text' type="email" placeholder='Your Email' name='email' value={email} onChange={handleChangeInput} />
      </div>
      <div>
        <textarea  name='message' value={message} placeholder='Your Message' className="p-text" onChange={handleChangeInput} />
      </div>
      <button type='button' className='p-text' onClick={handleSubmit}>{loading? 'Sending': 'Send Message'}</button>
    </div> ) : (
    <div>
      <h3 className='head-text'>Thank you for getting in touch!</h3>
    </div>
    )}
    </div>
  )
}

export default AppWrapper(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)