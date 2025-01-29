'use client'
//under progress
import { useState } from 'react';

const slides = [
  {
    text: 'This is the first image description.',   //description of person, have to add name of person
    image: '/images/image1.jpg',
  },
  {
    text: 'This is the second image description.',
    image: '/images/image2.jpg',
  },
  {
    text: 'This is the third image description.',
    image: '/images/image3.jpg',
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="flex items-center justify-between p-6">
        <div className="w-1/2 pr-6">
          <h2 className="text-2xl font-semibold mb-4">Image {currentIndex + 1}</h2>
          <p className="text-lg">{slides[currentIndex].text}</p>
        </div>

        <div className="w-1/2">
          <img
            src={slides[currentIndex].image}
            alt={`Image ${currentIndex + 1}`}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>

      
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
