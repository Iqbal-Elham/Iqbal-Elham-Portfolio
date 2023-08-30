import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWrap';
import { urlFor, client } from '../../client';
import './Testimonial.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);
  const [expanded, setExpanded] = useState(false);

  const handleClick = (index) => {
    setCurrentIndex(index);
    setExpanded(false); // reset expanded state
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  return (
    <>
     <h2 className="head-text" >
        What my 
        <span> Colleagues </span>
        say
      </h2>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <LazyLoadImage src={urlFor(testimonials[currentIndex].imgurl)} alt={testimonials[currentIndex].name} />
            <div className="app__testimonial-content">
              <p className="p-text">{expanded ? testimonials[currentIndex].feedback : truncateText(testimonials[currentIndex].feedback, 400)}</p>
              <button className="see-more-button" onClick={toggleExpanded}>
              {expanded ? 'See less' : 'See more'}
            </button>
              <div>
                <a href={testimonials[currentIndex].link} target="_blank" rel="noopener noreferrer" >
                  <h4 className="bold-text">{testimonials[currentIndex].name} <BsBoxArrowUpRight /></h4>
                  </a>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <LazyLoadImage src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'Testimonials',
  'app__primarybg',
);
