import { useEffect, useState } from "react";

import img1 from "../../../assets/img1.jpg";
import img2 from "../../../assets/img2.jpg";
import img3 from "../../../assets/img3.jpg";

import {
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import "./Hero.css";


const slides = [
  {
    id: 1,
    image: img1,

    title: "THIS IS BEAUTY",

    subtitle:
      "Designed with love & care, Fleur is all you ever wanted",

    description:
      "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor elit. Duis sed odio sit amet nibh",

    leftNumber: "1/3",
    rightNumber: "3/3",
  },

  {
    id: 2,
    image: img2,

    title: "SIMPLY CHARMING",

    subtitle:
      "Full of amazing templates and layouts",

    description: "",

    leftNumber: "2/3",
    rightNumber: "1/3",
  },

  {
    id: 3,
    image: img3,

    title: "STYLE & GRACE",

    subtitle:
      "Make your beautiful website with Fleur",

    description: "",

    leftNumber: "3/3",
    rightNumber: "2/3",
  },
];


const nextSlideMap = {
  0: 2,
  2: 1,
  1: 0,
};

const previousSlideMap = {
  0: 1,
  1: 2,
  2: 0,
};


const Hero = () => {

  const [currentSlide, setCurrentSlide] = useState(0);


  // Automatic slide change
  useEffect(() => {

    const timer = setInterval(() => {

      setCurrentSlide((current) => {
        return nextSlideMap[current];
      });

    }, 6000);


    return () => {
      clearInterval(timer);
    };

  }, []);


  // Next button
  const handleNext = () => {

    setCurrentSlide((current) => {
      return nextSlideMap[current];
    });

  };


  // Previous button
  const handlePrevious = () => {

    setCurrentSlide((current) => {
      return previousSlideMap[current];
    });

  };


  // Get the current slide
  const slide = slides[currentSlide];


  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${slide.image})`,
      }}
    >
       
      <div className="hero-overlay"></div>


      {/* Previous button */}
      <button
        className="hero-navigation hero-navigation-left"
        aria-label="previous slide"
        onClick={handlePrevious}
      >
        <FiChevronLeft />

        <span>
          {slide.leftNumber}
        </span>
      </button>


      {/* Next button */}
      <button
        className="hero-navigation hero-navigation-right"
        aria-label="next slide"
        onClick={handleNext}
      >
        <span>
          {slide.rightNumber}
        </span>

        <FiChevronRight />
      </button>


      {/* Hero content */}
      <div className="hero-content" key={slide.id}>

        <h1 className="hero-title">
          {slide.title}
        </h1>


        <div className="hero-decoration">

          <span className="hero-line"></span>

          <span className="hero-diamond">
            ◆
          </span>

          <span className="hero-line"></span>

        </div>


        <h2 className="hero-subtitle">
          {slide.subtitle}
        </h2>


        {slide.description && (
          <p className="hero-description">
            {slide.description}
          </p>
        )}


        <a
          href="#purchase"
          className="hero-purchase"
        >
          PURCHASE
        </a>

      </div>

    </section>
  );
};


export default Hero;