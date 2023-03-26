import React, { useState, useEffect } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { images } from "../../constants/index";
import { urlFor, client } from "../../client";
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className="head-text">
        A little
        <span> About me</span>
      </h2>
      <p className="about__me">
        I completed my bachelor's degree in computer science, and now I work as a
        full-stack web developer, specializing in building websites for small
        startups using JavaScript, React, Ruby on Rails, and Python. I have a
        strong interest in new technology and develop cutting-edge services. I'm
        now enrolled in Microverse, an online course that teaches software
        development through pair programming and real-world projects.
      </p>

      <div className="app__profile">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "About",
  "app__whitebg"
);
