import React from "react";

const NavigationDots = ({ active }) => {
  const navItems = ["Home", "About", "Work", "Skills", "Testimonials", "Contact"];
  return (
    <div className="app__navigation">
      {navItems.map((item, index) => (
        <a 
        key={item + index}
        href={`#${item}`} 
        className= 'app__navigation-dot'
        style = {active === item ? { backgroundColor: '#c52d28' } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
