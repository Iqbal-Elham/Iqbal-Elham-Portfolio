// src/components/IconBelt.jsx
import React from 'react';
import { images } from "../../constants/index";
// import aLogo from '../assets/logos/a.svg';
// import beeLogo from '../assets/logos/bee.svg';
// import etcLogo from '../assets/logos/etc.svg';
// …import the rest

const icons = [
  { src: images.api, width: 48, height: 48 },
  { src: images.figma, width: 48, height: 48 },
  { src: images.react, width: 48, height: 48 },
  { src: images.javascript, width: 48, height: 48 },
  { src: images.html, width: 48, height: 48 },
  { src: images.css, width: 48, height: 48 },
  { src: images.node, width: 48, height: 48 },
  { src: images.python, width: 48, height: 48 },
  { src: images.typescript, width: 48, height: 48 },
  { src: images.vue, width: 48, height: 48 },
  { src: images.redux, width: 48, height: 48 },
  { src: images.sass, width: 48, height: 48 },
  { src: images.java, width: 48, height: 48 },
  { src: images.spring, width: 48, height: 48 },
  { src: images.mysql, width: 48, height: 48 },
  { src: images.postgresql, width: 48, height: 48 },
  { src: images.ruby, width: 48, height: 48 },
  { src: images.bootstrap, width: 48, height: 48 },
  // …add as many as you like
];

export default function IconBelt() {
  // duplicate the list so the scroll looks seamless
  const belt = [...icons, ...icons];

  return (
    <div
      className="
        relative overflow-hidden
        py-8
      "
      style={{
        /* 👇 fade edges (Firefox & Chromium/WebKit) */
        maskImage:
          'linear-gradient(to right, transparent 0%, #000 10%, #000 90%, transparent 100%)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0%, #000 10%, #000 90%, transparent 100%)',
      }}
    >
      <ul
        className="
          flex gap-8 md:gap-14 min-w-max
          animate-scroll-left
        "
      >
        {belt.map((icon, i) => (
          <li key={i} className="shrink-0">
            <img
              src={icon.src}
              alt=""
              width={icon.width}
              height={icon.height}
              className="opacity-90 hover:opacity-100 transition-opacity"
              loading="lazy"
              decoding="async"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
