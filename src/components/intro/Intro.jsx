import React, { useState, useEffect } from "react";
import "./intro.scss";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

export default function Intro() {
  const slides = [
    {
      image: "/assets/intro/pexels-photo.jpg",
      text: "Alg hukuk burosu olarak hakkinizi icin ozle savunma",
    },
    {
      image: "/assets/intro/slide-boardroom.jpg",
      text: "Alg hukuk burosue, yillarin deneyimi ile yasal haklariniza sahip cikar",
    },
    {
      image: "/assets/intro/slide-terazi.jpg",
      text: "Alg hukuk burosu guvenin",
    },
    {
      image: "/assets/intro/slide-zoom.jpg",
      text: "Algi hukuk burosu sizin bugun, yarin ve herzaman yaninizda.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={slides[currentSlide].image} alt="" />
          <span className="overlayText">{slides[currentSlide].text}</span>
          <div
            className="slideIcon"
            onClick={() =>
              setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
            }
          >
            <ChevronRightIcon className="slideIcon" />
          </div>
        </div>
      </div>
      {/* <div className="right">
        <a href="#portfolio">
          <img src="/assets/down.png" alt="/" />
        </a>
      </div> */}
    </div>
  );
}
