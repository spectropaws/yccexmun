"use client";
import styled from "styled-components";
import Image from "next/image";
import { patrons } from "../data"

const ImageWrap = styled.span`
  margin: 32px auto;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
  }
`;

const StyledImg = styled(Image)`
  border: 2px solid rgba(200, 150, 80, 0.5); /* Initial border style */
  border-radius: 50%;
  position: relative;
  box-shadow: 0 0 8px rgba(200, 150, 80, 0.6); /* Initial shadow */

  /* Create the glowing ring effect */
  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 50%;
    border: 2px solid rgba(200, 150, 80, 0.8);
    box-sizing: border-box;
    animation: rotate-glow 2s infinite linear, pulse-glow 2s infinite alternate;
  }

  /* Rotation animation */
  @keyframes rotate-glow {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  /* Pulsing glow animation */
  @keyframes pulse-glow {
    0% {
      box-shadow: 0 0 15px rgba(200, 150, 80, 0.9), 0 0 25px rgba(200, 150, 80, 0.6);
    }
    50% {
      box-shadow: 0 0 25px rgba(200, 150, 80, 1), 0 0 35px rgba(200, 150, 80, 1);
    }
    100% {
      box-shadow: 0 0 15px rgba(200, 150, 80, 0.9), 0 0 25px rgba(200, 150, 80, 0.6);
    }
  }
`;



const PatronsPage = () => {
  return (
    <div className="min-h-screen bg-[#F5F3F0] py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-5xl lg:text-5xl font-bold bg-gradient-to-t from-[#C2A597] to-[#54250B] bg-clip-text text-transparent text-center mb-12">
  Meet our Patrons
</h2>


      
      <div className="w-[300px] h-[350px] mx-auto border border-[#D8C2A8] rounded-xl shadow-lg bg-white overflow-hidden flex flex-col items-center text-center p-6 mb-16 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="w-40 h-40 mb-6 mx-auto mt-6 relative">
          <StyledImg
            src={patrons[0].photo}
            alt={patrons[0].name}
            width={160}
            height={160}
            className="rounded-full object-cover"
          />
        </div>
        <h2 className="text-xl font-semibold text-[#54250B] mb-1">{patrons[0].name}</h2>
        <p className="text-sm text-gray-600">{patrons[0].position}</p>
      </div>

  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {patrons.slice(1).map((patron, index) => (
    <div key={index} className="w-[290px] h-[360px] mx-auto border border-[#D8C2A8] rounded-xl shadow-lg bg-white overflow-hidden flex flex-col items-center text-center p-6 mb-16 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="w-40 h-40 mb-6 mx-auto mt-6 relative">
        <StyledImg
          src={patron.photo}
          alt={patron.name}
          width={160}
          height={160}
          className="rounded-full object-cover"
        />
      </div>
      <h2 className="text-xl font-semibold text-[#54250B] mb-1">{patron.name}</h2>
      <p className="text-sm text-gray-600">{patron.position}</p>
    </div>
  ))}
</div>
</div>
  );
};

export default PatronsPage;
