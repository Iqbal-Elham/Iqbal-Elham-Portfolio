import React from "react";

const NavigationDots = ({ active, onItemClick }) => {
  const navItems = ["Home", "About", "Work", "Skills", "Testimonials", "Contact"];

  const handleDotClick = (index) => {
    onItemClick(index);
    scrollToSection(navItems[index]);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app__navigation">
      {navItems.map((item, index) => (
        // eslint-disable-next-line
        <a
          key={item + index}
          href={`#${item}`}
          className={`app__navigation-dot ${active === index ? 'active' : ''}`}
          onClick={() => handleDotClick(index)}
        />
      ))}
    </div>
  );
};

export default NavigationDots;

