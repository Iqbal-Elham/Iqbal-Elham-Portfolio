import React, { useState } from "react";
import { images } from "../../constants/index";
import "./Navbar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import DarkMode from "../DarkMode/DarkMode";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Work",
    "Skills",
    "Testimonials",
    "Contact",
  ];

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" className="logo-img" />
        <div className="app__navbar-logo-name">
          <p className="app__navbar-logo-firstname">Iqbal</p>
          <p className="app__navbar-logo-lastname">Elham</p>
        </div>
      </div>
      <ul className="app__navbar-links">
        {navItems.map((item) => (
          <li key={`links-${item}`} className="app__flex p-text">
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__toggle-dark">
        <div className="dark-btn">
          <DarkMode />
        </div>
        <div className="app_navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          {toggle && (
            <motion.div
              initial={{ opacity: 0 }} // Initial opacity when entering
              animate={{ opacity: 1 }} // Animation when component is present
              exit={{ opacity: 0 }}    // Animation when component is removed
              whileInView={{ x: [200, 0] }}
              transition={{ duration: 0.85, ease: "easeInOut" }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {navItems.map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
