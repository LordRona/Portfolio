import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './Navbar.scss';
import './Logo.scss';

const Navbar = ({ activeSection }) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = (e, item) => {
    e.preventDefault();
    setToggle(false);
    const element = document.getElementById(item);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className='app__navbar'>
      {/* <div className='app__navbar-logo'>
        <img src={images.logo} alt="logo" />
      </div> */}

       <div className='app__navbar-logo' data-name="YourName">
        RON<span>ARD</span>
       </div>
      
      <ul className='app__navbar-links'>
        {['Home', 'About', 'Work', 'Skills', 'Contact'].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div />
            <a 
              href={`#${item}`}
              onClick={(e) => handleClick(e, item)}
              className={activeSection === item ? 'active' : ''}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['Home', 'About', 'Work', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item}`}
                    onClick={(e) => handleClick(e, item)}
                    className={activeSection === item ? 'active' : ''}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;