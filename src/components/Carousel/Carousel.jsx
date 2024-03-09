import React, { useState } from 'react';
import '../Carousel/Carousel.css'

function Carousel({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    
  
    const handlePrevClick = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
      );
    };
  
    const handleNextClick = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
      );
    };

    if (pictures.length === 1) {
        return (
          <div className="carousel">
            <img src={pictures[0]} alt="Apartment" />
          </div>
        );
      }
  
    return (
      <div className="carousel">
        <button className="prev" onClick={handlePrevClick}>
          &lt;
        </button>
        <img src={pictures[currentIndex]} alt="Apartment" />
        <button className="next" onClick={handleNextClick}>
          &gt;
        </button>
        <div className="slide-number">{currentIndex + 1} / {pictures.length}</div>
      </div>
    );
  }

export default Carousel;