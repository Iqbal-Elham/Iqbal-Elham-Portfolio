// src/components/IconBelt.jsx
import React from 'react';
import { images } from "../../constants/index";
// import aLogo from '../assets/logos/a.svg';
// import beeLogo from '../assets/logos/bee.svg';
// import etcLogo from '../assets/logos/etc.svg';
// …import the rest

const icons = [
  images.api,
  images.figma,
  images.react,
  images.javascript,
  images.html,
  images.css,
  images.node,
  images.python,
  images.redux,
  images.sass,
  images.java,
  images.spring,
  images.mysql,
  images.postgresql,
  images.ruby,
  images.bootstrap,
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
          flex gap-16 min-w-max
          animate-scroll-left
        "
      >
        {belt.map((src, i) => (
          <li key={i} className="shrink-0">
            <img
              src={src}
              alt=""
              className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
