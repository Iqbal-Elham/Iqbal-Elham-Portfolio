import React, { useEffect } from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import { images } from "../../constants/index";
import "./DarkMode.css";

const DarkMode = () => {
  const setDarkMode = () => {
    document.querySelector("html").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
    document.querySelector(".logo-img").src = images.lightLogo;
  };
  const setLightMode = () => {
    document.querySelector("html").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
    document.querySelector(".logo-img").src = images.logo;

  };

  const selectedTheme = localStorage.getItem("selectedTheme");

  useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme");

    if (selectedTheme === "dark") {
      setDarkMode();
    }
  }, []);

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        defaultChecked={selectedTheme === "dark"}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;
