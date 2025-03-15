"use client";
import styled from "styled-components";
import Image from "next/image";
import { patrons } from "../data";

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
  border: 2px solid rgba(200, 150, 80, 0.5);
  border-radius: 50%;
  position: relative;
  box-shadow: 0 0 8px rgba(200, 150, 80, 0.6);

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

  @keyframes rotate-glow {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 15px rgba(200, 150, 80, 0.9), 0 0 25px rgba(200, 150, 80, 0.6); }
    50% { box-shadow: 0 0 25px rgba(200, 150, 80, 1), 0 0 35px rgba(200, 150, 80, 1); }
  }
`;

const PatronsPage = () => {
  return (
    <div className="min-h-screen bg-[#F5F3F0] py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-t from-[#C2A597] to-[#54250B] bg-clip-text text-transparent text-center mb-12">
        Visionary
      </h2>
      <div className="w-[300px] h-[350px] mx-auto border border-[#D8C2A8] rounded-xl shadow-lg bg-white flex flex-col items-center text-center p-6 mb-16">
        <div className="w-40 h-40 mb-6 mx-auto mt-6 relative">
          <StyledImg src={patrons[0].photo} alt={patrons[0].name} width={160} height={160} className="rounded-full object-cover" />
        </div>
        <h2 className="text-xl font-semibold text-[#54250B] mb-1">{patrons[0].name}</h2>
        <p className="text-sm text-gray-600">{patrons[0].position}</p>
      </div>
      <div className="relative w-full flex flex-col items-center">
      <hr className="w-3/4 sm:w-1/2 border-t-[1px] border-[#C2A597] mb-6 mt-10" />
      <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-t from-[#C2A597] to-[#54250B] bg-clip-text text-transparent text-center mb-12">
        Chief Patrons
      </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {patrons.slice(1, 4).map((patron, index) => (
          <div key={index} className="w-[290px] h-[360px] mx-auto border border-[#D8C2A8] rounded-xl shadow-lg bg-white flex flex-col items-center text-center p-6 mb-16">
            <div className="w-40 h-40 mb-6 mx-auto mt-6 relative">
              <StyledImg src={patron.photo} alt={patron.name} width={160} height={160} className="rounded-full object-cover" />
            </div>
            <h2 className="text-xl font-semibold text-[#54250B] mb-1">{patron.name}</h2>
            <p className="text-sm text-gray-600">{patron.position}</p>
          </div>
        ))}
      </div>
      <div className="relative w-full flex flex-col items-center">
      <hr className="w-3/4 sm:w-1/2 border-t-[1px] border-[#C2A597] mb-6 mt-10" />
      <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-t from-[#C2A597] to-[#54250B] bg-clip-text text-transparent text-center mb-12">
        Patrons
      </h2>
      </div>
      <div className="flex flex-wrap justify-center sm:flex-nowrap md:gap-20">
  {patrons.slice(5, 7).map((patron, index) => (
    <div key={index} className="w-[290px] h-[360px] border border-[#D8C2A8] rounded-xl shadow-lg bg-white flex flex-col items-center text-center p-6 mb-16">
      <div className="w-40 h-40 mb-6 mx-auto mt-6 relative">
        <StyledImg src={patron.photo} alt={patron.name} width={160} height={160} className="rounded-full object-cover" />
      </div>
      <h2 className="text-xl font-semibold text-[#54250B] mb-1">{patron.name}</h2>
      <p className="text-sm text-gray-600 mb-4">{patron.position}</p>
    </div>
  ))}
</div>
<div className="relative w-full flex flex-col items-center">
<hr className="w-3/4 sm:w-1/2 border-t-[1px] border-[#C2A597] mb-6 mt-10" />
<h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-t from-[#C2A597] to-[#54250B] bg-clip-text text-transparent text-center">
        Organizing Committee
      </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-6 mt-20">
        {patrons.slice(7, 17).map((patron, index) => (
          <div key={index} className="w-[290px] h-[360px] mx-auto border border-[#D8C2A8] rounded-xl shadow-lg bg-white flex flex-col items-center text-center p-6 mb-12">
            <div className="w-40 h-40 mb-6 mx-auto mt-6 relative">
              <StyledImg src={patron.photo} alt={patron.name} width={160} height={160} className="rounded-full object-cover" />
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