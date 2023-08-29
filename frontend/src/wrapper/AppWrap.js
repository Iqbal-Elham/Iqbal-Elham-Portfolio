import React, { useState } from 'react';
import SocialMedia from '../components/SocialMedia';
// import NavigationDots from '../components/NavigationDots';

const AppWrap = (Component, idName, classNames) => function HOC() {
    // const navItems = ["Home", "About", "Work", "Skills", "Testimonials", "Contact"];
    // const activeIndex = navItems.indexOf(idName);
    // const [activeDot, setActiveDot] = useState(0);

    // const handleDotClick = (index) => {
    //   setActiveDot(index);
    // };
    return (
        <div id={idName} className={`app__container ${classNames}`}>
            {/* <SocialMedia /> */}

            <div className='app__wrapper app__flex'>
                <Component />

                {/* <div className='copyright'>
                        <p className='p-text'>@2023 Iqbal Elham</p>
                        <p className='p-text'>All rights reserved</p>
                </div> */}
            </div>
             {/* <NavigationDots active={activeDot} onItemClick={handleDotClick} /> */}
        </div>
    );
}

export default AppWrap;
