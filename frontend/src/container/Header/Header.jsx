import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images, resume } from "../../constants/index";
import AppWrap from "../../wrapper/AppWrap";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Iqbal Elham</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Full Stack Web Developer</p>
            <p className="p-text">Freelancer</p>
          </div>
          <a href={ resume } target="_blank" rel="noopener noreferrer" >
            <button className="app__resume">My Resume</button>
          </a>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <LazyLoadImage src={images.profile} alt="profile background" className="profile-pic"/>
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duratio: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.react, images.python, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <LazyLoadImage src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "Home");
