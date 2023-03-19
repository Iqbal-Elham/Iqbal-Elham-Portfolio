import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import AppWrap from "../../wrapper/AppWrap";
import { urlFor, client } from "../../client";
import "./Work.scss";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setanimateCard] = useState(initialState);
  const items = ["UI/UX", "Web App", "Mobile App", "React JS", "All"];
  const handleWorkFilter = (item) => {};
  return (
    <>
      <h2 className="head-text">
        My Creative
        <span> Portfolio </span>
        section
        <span> (My Projects) </span>
      </h2>

      <div className="app__work-filter">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >{item}</div>
        ))}
        <motion.div
        animate= {animateCard}
        transition = {{ duration: 0.6,  }}
        >

        </motion.div>
      </div>
    </>
  );
};

export default Work;
