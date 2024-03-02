import React from "react";
import "./App.scss";
import About from "./container/About/About";
import Footer from "./container/Footer/Footer";
import Header from "./container/Header/Header";
import Skills from "./container/Skills/Skills";
import Testimonial from "./container/Testimonial/Testimonial";
import Work from "./container/Work/Work";
import Navbar from "./components/Navbar/Navbar";
import SocialMedia from "./components/SocialMedia";
import SecondHeader from "./container/Header/SecondHeader";

function App() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/service-worker.js") // Path to your service worker file
        .then((registration) => {
          console.log(
            "ServiceWorker registered with scope:",
            registration.scope
          );
        })
        .catch((error) => {
          console.error("ServiceWorker registration failed:", error);
        });
    });
  }
  return (
    <div className="app">
      <Navbar />
      <SecondHeader />
      {/* <Header /> */}
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
      <SocialMedia />
    </div>
  );
}

export default App;
