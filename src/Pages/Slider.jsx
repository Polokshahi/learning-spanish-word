import React, { useState } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 4;

  // Function to handle next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide % totalSlides) + 1);
  };

  // Function to handle previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 1 ? totalSlides : prevSlide - 1));
  };

  return (
    <div className="max-w-6xl mx-auto py-4 flex justify-center">
      <div className="carousel rounded-lg w-[70%]">
        <div
          id="slide1"
          className={`carousel-item relative w-full ${currentSlide === 1 ? "block" : "hidden"}`}
        >
          <img
            src="https://c8.alamy.com/comp/2GCA8M7/business-concept-background-translation-word-cloud-design-vector-template-2GCA8M7.jpg"
            alt="Translation Concept"
            className="w-full"
          />
        </div>
        <div
          id="slide2"
          className={`carousel-item relative w-full ${currentSlide === 2 ? "block" : "hidden"}`}
        >
          <img
            src="https://languagethrone.b-cdn.net/wp-content/uploads/2023/11/HOW-TO-SAY-FRIEND-IN-SPANISH-12-DIFFERENT-WAYS-1.jpg"
            alt="Vocabulary Video"
            className="w-full"
          />
        </div>
        <div
          id="slide3"
          className={`carousel-item relative w-full ${currentSlide === 3 ? "block" : "hidden"}`}
        >
          <img
            src="https://gogoespana.com/wp-content/uploads/2021/04/is-spanish-easy-to-learn-2048x934.png"
            alt="Vocabulary Cloud"
            className="w-full"
          />
        </div>
        <div
          id="slide4"
          className={`carousel-item relative w-full ${currentSlide === 4 ? "block" : "hidden"}`}
        >
          <img
            src="https://t3.ftcdn.net/jpg/02/62/03/44/360_F_262034433_1dJJnOpmBaonv8fibQ6qAKfZ1K9ngb2X.jpg"
            alt="Learning Video"
            className="w-full"
          />
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button
            onClick={prevSlide} // Handle previous slide click
            className="btn btn-circle"
          >
            ❮
          </button>
          <button
            onClick={nextSlide} // Handle next slide click
            className="btn btn-circle"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
