'use client';
import {
  hoverButtonGradient,
} from "./ui/navigation-menu";

import { useState, useEffect } from 'react';

const slides = [
  { name: 'Piyush Pariwakam', image: '/images/Piyush.jpg', description: 'Piyush Pariwakam, a seasoned debater with over five years of MUN experience, excels in all roles. He serves as Ambassador of the University Grants Commission, India, advocating Equality, Equity, and Democratic Principles. Get ready for an engaging and insightful AIPPM at YCCE X MUN!' },
  { name: 'Varad Dorlikar', image: '/images/Varad.jpg', description: 'Varad Dorlikar, a seasoned MUN veteran with 60+ conferences, excels in Indian committees, legal discourse, and parliamentary debates. With experience as Secretary General, President, and Chairperson, he ensures impactful debates and resolutions at YCCE X MUN.' },
  { name: 'Swara Dalvi', image: '/images/Swara.jpg', description: 'Swara Dalvi, with exceptional skills in diplomacy, legal reasoning, and international affairs, is a powerhouse in the MUN circuit. A distinguished orator and accomplished MUNer, she ensures balanced, thought-provoking debates and an intellectually charged experience at UNHRC.' },
  { name: 'Swayam Kaushik', image: '/images/Swayam.jpg', description: 'Swayam Kaushik, a seasoned debater and legal enthusiast, brings his expertise in law, diplomacy, and international affairs to UNHRC at YCCE X MUN. With extensive experience in moot courts and MUNs, he ensures rigorous, solution-driven debates and impactful resolutions.' },
  { name: 'Sarthak Pandit', image: '/images/Sarthak.jpg', description: 'Sarthak Pandit, Chair of the UNGC Committee at YCCE X MUN, is a seasoned diplomat with 120+ MUNs and experience at Harvard Kennedy and Stanford. As Founder of the Nagpur Diplomatic Summit, he ensures engaging, solution-driven debates fostering global cooperation.' },
  { name: 'Garv Chawla', image: '/images/Garv.jpg', description: 'Garv Chawla, Chair of the UNGC Committee at YCCE X MUN, is an experienced leader with 60+ conferences and multiple Best Delegate awards. Known for his strategic thinking and diplomatic expertise, he ensures an enriching MUN experience focused on diplomacy and global issues.' },
];

const subheadings = ['AIPPM', 'UNHRC', 'UNGA'];
const full = ['All India Political Parties Meet', 'United Nations Human Rights Council', 'United Nations General Assembly'];

const paragraphs = [
  "The All India Political Parties Meet is a non-technical yet powerful committee introduced in order to emulate political realities by bringing to light various layers of polity and governance in India. It helps participants grasp the multi-layered processes that go behind policy-making and governance in India, providing them with a hands-on approach to the impediments and challenges that confront political parties in modern times.",
  "This is the paragraph for UNHRC. It describes the significance of the United Nations Human Rights Council and the discussions held within.",
  "This is the paragraph for UNGA. It covers the United Nations General Assembly and its role in addressing global issues."
];

const agendas = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",  // AIPPM Agenda
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",  // UNHRC Agenda
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."  // UNGA Agenda
];

const CardGrid = () => {
  const [activeSubheading, setActiveSubheading] = useState(null);

  const chunkedSlides = [];

  for (let i = 0; i < slides.length; i += 2) {
    chunkedSlides.push(slides.slice(i, i + 2));
  }

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
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="py-16 mt-4 bg-[url('/images/background-overlay-overlay.png')] flex justify-center items-center min-h-screen">
      <div className="w-full max-w-4xl text-center px-4">
        
        <div className="mt-2 mb-10">
          <h1 className="text-4xl font-bold mb-8 relative pt-4 hover:scale-110 hover:text-[#54250B] transition-all duration-300 ease-in-out cursor-pointer flex flex-col items-center justify-center md:hidden">
            <span className="relative z-10 px-4">Our</span>
            <span className="border-t-2 border-[#C2A597] w-16 mt-2"></span>
            <span className="relative z-10 px-4">Chairs</span>
          </h1>

          <p className="text-4xl font-bold mx-0 mb-4 pt-4 hover:scale-110 hover:text-[#54250B] transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center hidden md:flex">
            <span className="border-t border-[#C2A597] w-16 mr-2"></span>
            Our Chairs
            <span className="border-t border-[#C2A597] w-16 ml-2"></span>
          </p>
        </div>

        {subheadings.map((subheading, index) => (
          <div key={index} className="mb-12">
          <div className="py-10 mt-4 bg-[url('/images/brown.png')] bg-cover mb-6 rounded-xl z-10">
            
            <div className="px-6 py-4">
              <h1 className={`text-3xl text-white font-semibold mb-7 subheading gradient-underline ${activeSubheading === index ? 'active' : ''}`}>
                {subheading}
              </h1>
              <h2 className="text-white text-xl mb-4 font-semibold">{full[index]}</h2>
        
              <p className="text-lg text-[#FFF4E2] mt-4 mb-6">{paragraphs[index]}</p>
        
              <div className="text-center text-[#FFF4E2] mb-8">
                <h3 className="text-2xl mt-8 font-semibold">Agendas for {subheading}</h3>
                <p className="text-lg mt-4">{agendas[index]}</p>
              </div>
              <div className="flex flex-wrap justify-center gap-28">
                {chunkedSlides[index] && chunkedSlides[index].map((slide, slideIndex) => (
                  <div
                    key={slideIndex}
                    className="w-[300px] h-auto bg-white p-6 border border-[#D8C2A8] rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl rounded-lg shadow-lg relative flex flex-col justify-between"
                  >
                    <img
                      src="https://www.freepnglogos.com/uploads/pin-png/pin-pins-png-clipart-best-4.png"
                      alt="Red Pin"
                      className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-10 h-10 z-20"
                    />
                    <img src={slide.image} alt={slide.name} className="w-full h-48 object-cover" />
                    <div className="p-4 flex flex-col justify-between h-full">
                      <h3 className="text-xl font-semibold text-center">{slide.name}</h3>
                      <h4 className="text-sm font-light text-center">{slide.description}</h4>
                    </div>
                  </div>
                ))}
              </div>
        
              <div className="flex justify-center mt-10 mb-10"><a href="/background_guide.pdf"download className={`bg-[#C2A597] text-white py-2 px-6 rounded-md text-lg hover:bg-gradient-to-r hover:from-[#FF7E5F] hover:to-[#feb47b] transition-all ease-in-out duration-500`}>Background Guide</a></div>

            </div>
          </div>
        </div>
        
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
