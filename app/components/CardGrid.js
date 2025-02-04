'use client';
import { useState, useEffect } from 'react';

const slides = [
  { name: 'Piyush Pariwakam', image: '/images/Piyush.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { name: 'Varad Dorlikar', image: '/images/Varad.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { name: 'Swara Dalvi', image: '/images/Swara.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { name: 'Swayam Kaushik', image: '/images/Swayam.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { name: 'Sarthak Pandit', image: '/images/Sarthak.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { name: 'Garv Chawla', image: '/images/Garv.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
];

const subheadings = ['AIPPM', 'UNHRC', 'UNGA']; // Subheadings for each group

const CardGrid = () => {
  const [activeSubheading, setActiveSubheading] = useState(null);

  const chunkedSlides = [];

  // Divide the slides into groups of 2
  for (let i = 0; i < slides.length; i += 2) {
    chunkedSlides.push(slides.slice(i, i + 2));
  }

  // Scroll event handler to add/remove active class to subheadings
  useEffect(() => {
    const handleScroll = () => {
      const subheadingElements = document.querySelectorAll('.subheading');
      subheadingElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setActiveSubheading(index); // Add active class for in-view subheading
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="py-16 mt-4 bg-[url('/images/background-overlay-overlay.png')]">
      <div className="text-center">
        <div className="mt-2">
        <h1 className="text-4xl font-bold mb-8 relative pt-4 hover:scale-110 hover:text-[#C2A597] transition-all duration-300 ease-in-out cursor-pointer flex flex-col items-center justify-center md:hidden">
        <span className="relative z-10 px-4">Our</span>
        <span className="border-t-2 border-[#C2A597] w-16 mt-2"></span>
        <span className="relative z-10 px-4">Chairs</span>
      </h1>
      {/* Desktop View: "Our Chairs" with lines on both sides */}
      <p className="text-4xl font-bold mx-0 mb-4 pt-4 hover:scale-110 hover:text-[#C2A597] transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center">
            <span className="border-t border-[#C2A597] w-16 mr-2"></span>
            Our Chairs
            <span className="border-t border-[#C2A597] w-16 ml-2"></span>
          </p>
        </div>

        {/* Groups of Cards */}
        {chunkedSlides.map((group, index) => (
          <div key={index} className="mb-12">
            {/* Subheading for each group */}
            <h1
              className={`text-3xl font-semibold mb-7 subheading gradient-underline ${activeSubheading === index ? 'active' : ''}`}
            >
              {subheadings[index]}
            </h1>

            <div className="flex flex-wrap justify-center gap-20 lg:gap-[30%] sm:gap-[20%]">
              {group.map((slide, index) => (
                <div
                  key={index}
                  className="w-[300px] h-auto bg-white p-6 border border-[#D8C2A8] rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl rounded-lg shadow-lg relative flex flex-col justify-between"
                >
                  {/* Red Pin Icon */}
                  <img
                    src="https://www.freepnglogos.com/uploads/pin-png/pin-pins-png-clipart-best-4.png"
                    alt="Red Pin"
                    className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-10 h-10 z-20"
                  />
                  {/* Card Image */}
                  <img src={slide.image} alt={slide.name} className="w-full h-48 object-cover " />
                  <div className="p-4 flex flex-col justify-between h-full">
                    <h3 className="text-xl font-semibold text-center">{slide.name}</h3> {/* Reduced margin between image and name */}
                    <h4 className="text-sm font-light text-center">{slide.description}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
