"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRight, Dot } from "lucide-react";
import React, { useRef } from "react";

const HeroSec = () => {
  const card = useRef(null);
  const recEff = useRef(null);
  const svgImg = useRef(null);
  const earth = useRef(null);

  useGSAP(() => {
    const timline = gsap.timeline();

    timline.from(".hero-heading", {
      y: 200,
      duration: 0.5,
      stagger: 0.3,
      delay: 1.5,
    });
    timline.from(recEff.current, {
      opacity: 0,
    });
    timline.from(card.current, {
      width: 0,
      ease: "back.out(1.7)",
      padding: 0,
      opacity: 0,
      //   paddingTop: "1.5rem"
    });
    gsap.from(earth.current, {
      opacity: 0,
      delay: 3,
    });

    gsap.from(svgImg.current, {
      opacity: 0,
      duration: 0.7,
      delay: 2,
    });
  });

  return (
    <div className="bg-[#EFE7E4] w-full h-full px-4 md:px-10 py-10 md:py-20 rounded-2xl">
      <div
        ref={recEff}
        className="border border-red-500 rounded-lg flex items-center px-4 py-1 gap-4 w-max opacity-100 mb-5"
      >
        YCCE IS WAITING
        <span className="h-4 w-4 rounded-full bg-red-500 animate-pulse"></span>
      </div>
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="flex flex-col justify-between lg:w-1/2">
          <div className="mt-10 lg:mt-0">
            <div className=" overflow-hidden">
              <h3 className="hero-heading text-5xl md:text-7xl font-bold text-[#54250B] tracking-widest">
                YCCE PRESENTS
              </h3>
            </div>
            <div className=" overflow-hidden">
              <h3 className="hero-heading text-5xl md:text-7xl font-bold text-[#54250B] tracking-widest">
                MUN
              </h3>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div ref={card} className="w-full md:w-[70%]">
              <div className="border border-[#54250B] rounded-xl p-3 md:p-6 flex overflow-hidden relative md:gap-6">
                <div className=" w-full md:w-1/2 z-10">
                  <h5 className="text-3xl text-nowrap">
                    Book Your Seat <br /> Now
                  </h5>
                  <button className="text-nowrap px-3 py-1 border rounded-lg bg-[#C2A597] border-[#54250B] mt-5 flex items-center gap-3">
                    Book seat
                    <ArrowUpRight size={20} />
                  </button>
                </div>
                <div
                  ref={earth}
                  className="absolute right-0 top-0 translate-y-4"
                >
                  <img src="/earth.png" alt="earth" className="w-44" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2" ref={svgImg}>
          <img src="/hero-img.png" className="mx-auto" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
