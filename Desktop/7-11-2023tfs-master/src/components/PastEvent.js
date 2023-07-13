import React, { useState, useEffect } from 'react';
import './PastEvent.css';
import img1 from '../img/card1.jpg';
import img3 from '../img/card3.jpg';
import { useNavigate } from 'react-router';

const images = [img1, img3, img1, img3];

const PastEvent = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handlePrevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handleSeePortfolio = () => {
    window.open('/our-event', '_blank');
  };


  return (
    <div className="past-event-container">
      <h1 className="myservicesheading">PAST EVENTS</h1>
      <div className="image-slider">
        <button className="prev-btn" onClick={handlePrevImage}>
          &lt;
        </button>
        <div className="image-container">
          <img src={images[currentImage]} alt={`Event ${currentImage + 1}`} className="event-image" />
          <div className='button-container'>
            <button className="portfolio-btn" onClick={handleSeePortfolio}>SEE OUR PORTFOLIO</button>
          </div>
        </div>
        <button className="next-btn" onClick={handleNextImage}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default PastEvent;
