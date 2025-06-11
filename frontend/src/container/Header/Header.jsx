import React, { useEffect, useMemo, useState } from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import AppWrap from "../../wrapper/AppWrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css"; // Import the opacity effect CSS
import { images, resume } from "../../constants/index";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import TypingGreeting from "./TypingGreeting";
import IconBelt from "./IconBelt";

const Header = () => {
  const [init, setInit] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);


  useEffect(() => {
    // Check initial theme
    const selectedTheme = localStorage.getItem("selectedTheme");
    setIsDarkMode(selectedTheme === "dark");

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-theme") {
          const html = document.querySelector("html");
          setIsDarkMode(html.getAttribute("data-theme") === "dark");
        }
      });
    });

    observer.observe(document.querySelector("html"), {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: false,
        zIndex: 0
      },
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 7,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: isDarkMode ? "#ffffff" : "#000000",
        },
        links: {
          color: isDarkMode ? "#ffffff" : "#000000",
          distance: 120,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800
          },
          value: 180,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 4 },
        },
      },
      detectRetina: true,
    }),
    [isDarkMode]
  );

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

  return (
    <div className="app__header">
      <div className="particles-wrapper">
        {init && (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
            className="particles-container"
          />
        )}
      </div>

      <div className="max-w-7xl flex flex-col md:flex-row justify-center items-center md:justify-between w-full h-full mx-auto relative">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="app__header-info md:pt-16"
        >
          <div className="app__header-badge">
            <div className="badge-cmp app__flex !px-3 md:!px-6">
              <span>👋</span>
              <div style={{ marginLeft: 20 }}>
                <TypingGreeting />
                {/* <p className="p-text">I am</p>
                  <h1 className="head-text">Iqbal Elham</h1> */}
              </div>
            </div>
            <div className="tag-cmp app__flex !px-3 md:!px-6">
              <p className="head-text !text-xl md:!text-2xl">Full Stack <span className="!text-xl md:!text-3xl">Web Developer</span></p>
            </div>
            <div className="md:py-8 py-2 tag-cmp !px-3 md:!px-6">
              <div className="!text-xl md:!text-2xl head-text !font-light">Transforming ideas into scalable, elegant web applications that elevate startups and delight users worldwide.</div>
            </div>
            {/* <a href={resume} target="_blank" rel="noopener noreferrer">
                <button className="app__resume">My Resume</button>
              </a> */}
            <div className="flex gap-x-2 my-6 md:my-3">
              <svg width="0" height="0" style={{ position: 'absolute' }}>
                <defs>
                  <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
                    <path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5" />
                  </clipPath>
                </defs>
              </svg>

              <div className="relative">
                <div className="absolute inset-0 bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl"></div>

                <div className="relative flex items-end gap-x-4 p-2">
                  {/* GitHub Icon */}
                  <a href="https://github.com/iqbal-elham" target="_blank" rel="noopener noreferrer" className="relative">
                    <div
                      style={{ clipPath: 'url(#squircleClip)' }}
                      className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center shadow-lg border border-gray-600/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-7 w-7 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </div>
                  </a>

                  {/* LinkedIn Icon */}
                  <a href="https://www.linkedin.com/in/iqbal-elham/" target="_blank" rel="noopener noreferrer" className="relative">
                    <div
                      style={{ clipPath: 'url(#squircleClip)' }}
                      className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg border border-blue-500/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-7 w-7 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                  </a>

                  {/* Instagram Icon */}
                  <a href="https://www.instagram.com/iqbal_elham" target="_blank" rel="noopener noreferrer" className="relative">
                    <div
                      style={{ clipPath: 'url(#squircleClip)' }}
                      className="w-10 h-10 bg-gradient-to-br from-pink-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg border border-pink-500/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-7 w-7 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7.5 2C4.46243 2 2 4.46243 2 7.5v9C2 19.5376 4.46243 22 7.5 22h9c3.0376 0 5.5-2.4624 5.5-5.5v-9C22 4.46243 19.5376 2 16.5 2h-9zM12 7c2.7614 0 5 2.2386 5 5s-2.2386 5-5 5-5-2.2386-5-5 2.2386-5 5-5zm0 2c-1.6569 0-3 1.3431-3 3s1.3431 3 3 3 3-1.3431 3-3-1.3431-3-3-3zm4.75-2c.6904 0 1.25.5596 1.25 1.25s-.5596 1.25-1.25 1.25-1.25-.5596-1.25-1.25S16.0596 7 16.75 7z" />
                      </svg>
                    </div>
                  </a>

                  {/* Facebook Icon */}
                  <a href="https://www.facebook.com/iqbal.elh" target="_blank" rel="noopener noreferrer" className="relative">
                    <div
                      style={{ clipPath: 'url(#squircleClip)' }}
                      className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg border border-blue-500/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-7 w-7 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22 12c0-5.5228-4.4772-10-10-10S2 6.4772 2 12c0 4.9918 3.6571 9.1283 8.438 9.8777v-6.987h-2.54v-2.89h2.54V9.7978c0-2.5066 1.4928-3.8902 3.7775-3.8902 1.0948 0 2.2384.1952 2.2384.1952v2.46h-1.2607c-1.2424 0-1.6307.7713-1.6307 1.5622v1.8752h2.7731l-.4439 2.89h-2.3292v6.987C18.3429 21.1283 22 16.9918 22 12z" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>


        <div className="relative w-[24rem] h-[60vh] md:w-[28rem] md:h-[60vh] group cursor-pointer">
          <div
            className="absolute inset-0 bg-[#c52d28]"
            style={{
              clipPath:
                'polygon(10% 0%, 100% 0%, 100% 88%, 88% 100%, 0% 100%, 0% 12%)',
            }}>
            <LazyLoadImage
              src={images.profile}
              alt="profile background"
              className="
        absolute inset-0 w-full h-full
          object-cover origin-center
          transition-all duration-300 ease-out
          grayscale
          hover:grayscale-0
          group-hover:scale-110
          "
            />
          </div>
        </div>

        {/* 
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
        >
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile circle"
          className="overlay_circle"
          />
        <LazyLoadImage
        src={images.profile}
        alt="profile background"
        className="profile-pic"
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
             */}
      </div>

      <div className="max-w-7xl mx-auto w-full mt-12">
        <IconBelt />
      </div>
    </div>
  );
};

export default AppWrap(Header, "Home");
