import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { MotionWrap, AppWrapper } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) => {
        setAbouts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div id='About'>
      <h2 className="head-text">
        I Know that <span>Good Apps</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.length > 0 ? (
          abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={urlFor(about?.imgUrl)} alt={about?.description || 'About image'} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>{about?.title || 'Title'}</h2>
              <p className="p-text" style={{ marginTop: 10 }}>{about?.description || 'Description'}</p>
            </motion.div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default AppWrapper(
  MotionWrap(About, 'app__about'), 
  'about',
  "app__whitebg"
);