import React, { useState, useEffect } from "react";
import "./Slider.css";
import image1 from "../../img/1.png";
import image2 from "../../img/2.png";
import image3 from "../../img/3.png";
import image4 from "../../img/4.png";
const Slider = () => {
  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentPosition < 3) {
        setCurrentPosition(currentPosition + 1);
      } else {
        setCurrentPosition(0);
      }
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, [currentPosition]);

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{ transform: `translateX(-${currentPosition * 100}%)` }}
      >
        <div className="carousel-item">
          <img src={image1} alt="portachiavi 1" width="370" height="296" />
        </div>
        <div className="carousel-item">
          <img src={image2} alt="automezzo 2" width="370" height="296" />
        </div>
        <div className="carousel-item">
          <img src={image3} alt="maglietta 3" width="370" height="296" />
        </div>
        <div className="carousel-item">
          <img src={image4} alt="cappellino 4" width="370" height="296" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
