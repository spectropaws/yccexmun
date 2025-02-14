'use client';
import { slides, subheadings, full, paragraphs, agendas } from "../data";
import { useState, useEffect, useRef } from 'react';
import throttle from "lodash.throttle";
import './ui/styles.css';

const CardGrid = () => {
  const [activeSubheading, setActiveSubheading] = useState(null);

  
  const subheadingRefs = useRef([]);

  useEffect(() => {
   
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = subheadingRefs.current.indexOf(entry.target);
          if (entry.isIntersecting) {
            setActiveSubheading(index); 
          }
        });
      },
      { threshold: 0.5 } 
    );

    subheadingRefs.current.forEach((ref) => observer.observe(ref));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-0.5">
      <div className="mb-14 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center md:space-x-6 space-y-3 md:space-y-0 md:mt-10">
          {subheadings.map((_, i) => (
            <a key={i} href={`#subheading-${i + 4}`}>
              <img
                src={`/images/${i + 4}.png`}
                alt={`Go to subheading ${i + 4}`}
                className="w-[225px] h-[225px] md:w-[350px] md:h-[350px] object-cover rounded-lg cursor-pointer transition-transform duration-300 md:hover:scale-110"
              />
            </a>
          ))}
        </div>

        <p className="text-4xl mt-10 md:mt-20 bg-gradient-to-t from-[#C2A597] to-[#54250B] bg-clip-text text-transparent mb-6 font-bold pt-4 hover:scale-110 hover:text-[#54250B] transition-all duration-300 ease-in-out cursor-pointer">
          OUR CHAIRS
        </p>
      </div>

      {subheadings.map((subheading, i) => {
        const evenSlide = slides[i * 2]; // For Full title & Paragraph
        const oddSlide = slides[i * 2 + 1]; // For Agendas

        return (
          <div key={i} className="mb-16">
            <div id={`subheading-${i + 4}`} className="scroll-mt-20 md:scroll-mt-32"></div>

            {/* MOBILE VIEW */}
            <div className="md:hidden">
              <div className="px-2 py-4">
              <h1
                    ref={(el) => subheadingRefs.current[i] = el} // Assign each subheading to the ref
                    className="subheading text-3xl font-semibold mb-2 relative inline-block"
                  >
                    {subheading}
                    <span
                      className={`absolute left-0 bottom-0 h-1 bg-gradient-to-r from-[#FF7E5F] to-[#feb47b] transform transition-all duration-500 ease-in-out`}
                    ></span>
                  </h1>
                <h2 className="text-xl mb-1 font-semibold">{full[i]}</h2>
                <p className="text-lg text-left text-black mb-2 leading-tight">{paragraphs[i]}</p>
              </div>

              <div className="px-2 py-4">
                <h3 className="text-2xl font-semibold mb-2">Agendas for {subheading}</h3>
                <p className="text-lg text-left text-black mb-2 leading-tight">{agendas[i]}</p>
              </div>

              <div className="align-middle">
                {evenSlide && (
                  <div className="mt-30 mb-4">
                    <div className="w-[300px] mx-auto bg-white p-6 border border-[#D8C2A8] rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <img 
          src={evenSlide.image} 
          alt={evenSlide.name} 
          className="w-full h-48 object-cover rounded-md" 
          style={{ objectPosition: 'center top' }} 
        />
                      <div className="p-4 text-center">
                        <h3 className="text-xl font-semibold">{evenSlide.name}</h3>
                        <p className="text-lg leading-tight font-light mt-2">{evenSlide.description}</p>
                      </div>
                    </div>
                  </div>
                )}
                {oddSlide && (
                  <div className="mt-8 mb-8">
                    <div className="w-[300px] mx-auto bg-white p-6 border border-[#D8C2A8] rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <img 
          src={oddSlide.image} 
          alt={oddSlide.name} 
          className="w-full h-48 object-cover rounded-md" // Ensure it covers the space correctly
          style={{ objectPosition: 'center top' }} // Example of custom positioning
        />
                      <div className="p-4 text-center">
                        <h3 className="text-xl font-semibold">{oddSlide.name}</h3>
                        <p className="text-lg leading-tight font-light mt-2">{oddSlide.description}</p>
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
              <div className="border-t mt-2 border-[#C2A597] mb-8"></div>
              <div className="flex flex-row items-start gap-6">
                <div className="md:w-3/5 px-6 py-4">
                  <h1
                    ref={(el) => subheadingRefs.current[i] = el} //ref here
                    className="subheading text-3xl font-semibold mb-2 relative inline-block"
                  >
                    {subheading}
                    <span
                      className={`absolute left-0 bottom-0 h-1 bg-gradient-to-r from-[#FF7E5F] to-[#feb47b] transform transition-all duration-500 ease-in-out`}
                      style={{
                        width: activeSubheading === i ? '100%' : '0%', 
                        opacity: activeSubheading === i ? 1 : 0, //fade in out
                      }}
                    ></span>
                  </h1>

                  <h2 className="text-xl mb-4 font-semibold">{full[i]}</h2>
                  <p className="text-lg text-left text-black mb-6">{paragraphs[i]}</p>
                </div>
                <div className="md:w-2/5 mt-2 flex justify-end">
                  {evenSlide && (
                    <div className="w-[400px] bg-white p-6 border border-[#D8C2A8] rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                      <img 
          src={evenSlide.image} 
          alt={evenSlide.name} 
          className="w-full h-48 object-cover rounded-md" 
          style={{ objectPosition: 'center top' }} 
        />
                      <div className="p-4 text-center">
                        <h3 className="text-xl font-semibold">{evenSlide.name}</h3>
                        <p className="text-base text-left leading-tight font-light mt-2">{evenSlide.description}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              
              <div className="flex flex-row items-start mt-10 gap-6">
                
                <div className="md:w-2/5 flex justify-start">
                  {oddSlide && (
                    <div className="w-[400px] bg-white p-6 border border-[#D8C2A8] rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                      <img 
          src={oddSlide.image} 
          alt={oddSlide.name} 
          className="w-full h-48 object-cover rounded-md" 
          style={{ objectPosition: 'center top' }} 
        />
                      <div className="p-4 text-center">
                        <h3 className="text-xl font-semibold">{oddSlide.name}</h3>
                        <p className="text-base text-left leading-tight font-light mt-2">{oddSlide.description}</p>
                      </div>
                    </div>
                  )}
                </div>

               
                <div className="md:w-3/5 px-6 py-4">
                  <h3 className="text-2xl mb-10 font-semibold">Agendas for {subheading}</h3>
                  <p className="text-lg text-justify text-black mt-4">{agendas[i]}</p>

                 
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
