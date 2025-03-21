import React, { useState } from "react";
import { images } from "../../constants";
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";
import { client } from "../../client";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import "./Footer.scss";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Footer = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = "Name is required!";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty!";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <p className="about__me">
        Whether you need a front-end developer, back-end developer, or graphic
        designer, I'm ready to collaborate. Let's bring your digital ideas to
        life and create memorable user-centric experiences together.
      </p>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <LazyLoadImage src={images.email} alt="email" />
          <a href="mailto:iqbal.elham7@gmail.com" className="p-text">
            iqbal.elham7@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <LazyLoadImage src={images.mobile} alt="phone" />
          <a href="tel:+93 (765) 181-256" className="p-text">
            +93 (765) 181-256
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex input-container">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
            {errors.username && <span className="error-message">{errors.username}</span>}
          </div>
          <div className="app__flex input-container">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div className="input-container">
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
      <div className="footer__footer">
        <div className="app__social-icons">
          <div>
            <a
              href="https://github.com/Iqbal-Elham"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github"
            >
              <BsGithub />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/iqbal-elham/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="linkedin"
            >
              <BsLinkedin />
            </a>
          </div>
          <div>
            <a
              href="https://www.facebook.com/iqbal.elh/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="facebook"
            >
              <FaFacebookF />
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/iqbal_elham/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="instagram"
            >
              <BsInstagram />
            </a>
          </div>
        </div>
        <div className="footer__copyright">
          <p className="p-text">2023 Iqbal Elham</p>
          <p className="p-text">&copy; All rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "Contact",
  "app__whitebg"
);
