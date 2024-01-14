import React, { useState, useEffect } from "react";
import "./intro.scss";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

export default function Intro() {
  const slides = [
    {
      image: "/assets/intro/slide-terazi.jpg",
      text: "Alg hukuk burosu guven verir",
    },
    {
      image: "/assets/intro/pexels-photo.jpg",
      text: "Alg hukuk burosu olarak hakkinizi icin ozel savunma",
    },
    {
      image: "/assets/intro/slide-boardroom.jpg",
      text: "Alg hukuk burosu, yillarin deneyimi ile yasal haklariniza sahip cikar",
    },
    {
      image: "/assets/intro/slide-zoom.jpg",
      text: "Algi hukuk burosu sizin bugun, yarin ve her zaman yaninizda.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 9000);
    return () => clearInterval(interval);
  }, [slides.length]);
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };
  return (
    <div className="intro" id="intro">
      <div className="imgContainer">
        <img src={slides[currentSlide].image} alt="" />
        <span className="overlayText">{slides[currentSlide].text}</span>
        <div className="slideIcon" onClick={nextSlide}></div>
        <ChevronLeftIcon className="slideIcon left" onClick={prevSlide} />{" "}
        {/* Add the previous button */}
        <ChevronRightIcon className="slideIcon right" onClick={nextSlide} />
      </div>
    </div>
  );
}
