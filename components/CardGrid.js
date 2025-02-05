'use client';
import { slides, subheadings, full, paragraphs, agendas } from "../data";
import { useState, useEffect } from 'react';

const CardGrid = () => {
  const [activeSubheading, setActiveSubheading] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const subheadingElements = document.querySelectorAll('.subheading');
      subheadingElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setActiveSubheading(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="mt-2 mb-10 text-center">
        <p className="text-4xl bg-gradient-to-t from-[#C2A597] to-[#54250B] bg-clip-text text-transparent mb-6 font-bold pt-4 hover:scale-110 hover:text-[#54250B] transition-all duration-300 ease-in-out cursor-pointer">
          OUR CHAIRS
        </p>
      </div>

      {subheadings.map((subheading, i) => {
        const evenSlide = slides[i * 2];     // For Full title & Paragraph
        const oddSlide = slides[i * 2 + 1];    // For Agendas
        return (
          <div key={i} className="mb-16">
            {/* MOBILE VIEW */}
            <div className="md:hidden">
              <div className="px-6 py-4">
                <h1 className="text-3xl font-semibold mb-4 subheading gradient-underline">
                  {subheading}
                </h1>
                <h2 className="text-xl mb-2 font-semibold">{full[i]}</h2>
                <p className="text-lg text-justify text-black mb-4">{paragraphs[i]}</p>
              </div>
              <div className="px-6 py-4">
                <h3 className="text-2xl font-semibold mb-2">Agendas for {subheading}</h3>
                <p className="text-lg text-black text-justify">{agendas[i]}</p>
              </div>
              
              <div className="px-6 py-4">
                {evenSlide && (
                  <div className="mb-4">
                    <div className="w-[300px] mx-auto bg-white p-6 border border-[#D8C2A8] rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                      <img src={evenSlide.image} alt={evenSlide.name} className="w-full h-48 object-cover rounded-md" />
                      <div className="p-4 text-center">
                        <h3 className="text-xl font-semibold">{evenSlide.name}</h3>
                        <p className="text-sm font-light mt-2">{evenSlide.description}</p>
                      </div>
                    </div>
                  </div>
                )}
                {oddSlide && (
                  <div className="mb-4">
                    <div className="w-[300px] mx-auto bg-white p-6 border border-[#D8C2A8] rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                      <img src={oddSlide.image} alt={oddSlide.name} className="w-full h-48 object-cover rounded-md" />
                      <div className="p-4 text-center">
                        <h3 className="text-xl font-semibold">{oddSlide.name}</h3>
                        <p className="text-sm font-light mt-2">{oddSlide.description}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex justify-center mt-4">
                <a
                  href="/background_guide.pdf"
                  download
                  className="bg-[#C2A597] py-2 px-6 rounded-md text-lg hover:bg-gradient-to-r hover:from-[#FF7E5F] hover:to-[#feb47b] transition-all ease-in-out duration-500"
                >
                  Background Guide
                </a>
              </div>
            </div>

            {/* DESKTOP VIEW */}
            <div className="hidden md:block">
              {/* Even Block: Text on Left, Image on Right */}
              <div className="flex flex-row items-center">
                <div className="md:w-2/3 px-6 py-4">
                  <h1 className={`text-3xl font-semibold mb-7 subheading gradient-underline ${activeSubheading === i ? 'active' : ''}`}>
                    {subheading}
                  </h1>
                  <h2 className="text-xl mb-4 font-semibold">{full[i]}</h2>
                  <p className="text-lg mt-4 text-justify text-black mb-6">{paragraphs[i]}</p>
                </div>
                <div className="md:w-1/3 flex justify-end">
                  {evenSlide && (
                    <div className="w-[300px] h-auto bg-white p-6 border border-[#D8C2A8] rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                      <img src={evenSlide.image} alt={evenSlide.name} className="w-full h-48 object-cover rounded-md" />
                      <div className="p-4 text-center">
                        <h3 className="text-xl font-semibold">{evenSlide.name}</h3>
                        <p className="text-sm font-light mt-2">{evenSlide.description}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* Odd Block: Image on Left, Agendas on Right with button below agenda text */}
              <div className="flex flex-row items-center mt-10">
                <div className="md:w-1/3 flex justify-start">
                  {oddSlide && (
                    <div className="w-[300px] h-auto bg-white p-6 border border-[#D8C2A8] rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                      <img src={oddSlide.image} alt={oddSlide.name} className="w-full h-48 object-cover rounded-md" />
                      <div className="p-4 text-center">
                        <h3 className="text-xl font-semibold">{oddSlide.name}</h3>
                        <p className="text-sm font-light mt-2">{oddSlide.description}</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="md:w-2/3 px-6 py-4">
                  <h3 className="text-2xl font-semibold">Agendas for {subheading}</h3>
                  <p className="text-lg text-black text-justify mt-4">{agendas[i]}</p>
                  <div className="flex justify-end mt-4">
                    <a 
                      href="/background_guide.pdf" 
                      download 
                      className="bg-[#C2A597] py-2 px-6 rounded-md text-lg hover:bg-gradient-to-r hover:from-[#FF7E5F] hover:to-[#feb47b] transition-all ease-in-out duration-500"
                    >
                      Background Guide
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardGrid;
