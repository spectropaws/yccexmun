// components/Carousel.js
import { useState } from 'react';

const images = [
  '/public/image1.jpg',
  '/public/image2.jpg',
  '/public/image3.jpg',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="overflow-hidden">
        <img
          src={images[currentIndex]}
          alt="Carousel Image"
          className="w-full h-auto transition-all duration-500"
        />
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        &#10094;
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
