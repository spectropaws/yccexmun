"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight, ArrowUpRight, Dot } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { carouselImages } from "../data";

const HeroSec = () => {
  const [navHeight, setNavHeight] = useState(0);

  const card = useRef(null);
  const recEff = useRef(null);
  const dates = useRef(null);
  const earth = useRef(null);

  useGSAP(() => {
    const timline = gsap.timeline();

    timline.from(".hero-heading", {
      y: 200,
      duration: 0.8,
      stagger: 0.3,
      delay: 1.5,
    });
    timline.from(recEff.current, {
      opacity: 0,
    });
    timline.from(card.current, {
      width: 0,
      ease: "back.out(1.7)",
      // padding: 0,
      // opacity: 0,
      //   paddingTop: "1.5rem"
    });
    gsap.from(earth.current, {
      opacity: 0,
      delay: 3,
    });

    gsap.from(dates.current, {
      opacity: 0,
      duration: 0.9,
      delay: 2.5,
    });
  });

  useEffect(() => {
    setNavHeight(document.querySelector(".nav-bar").offsetHeight);
    function handleResize() {
      setNavHeight(document.querySelector(".nav-bar").offsetHeight);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function getSlideActive() {
    const swiperSlide = useSwiperSlide();
    return swiperSlide.isActive;
  }

  return (
    <div className="bg-[#EFE7E4] w-full rounded-2xl relative">
      <div className="">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          loop
          fadeEffect={{
            crossFade: true,
          }}
          speed={3000}
          allowTouchMove={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Autoplay]}
          className="w-full h-[550px] md:h-auto"
        >
          {carouselImages.map((src, index) => {
            if (src.startsWith("/carousel/img")) {
              return (
                <SwiperSlide
                  className={`!w-full !overflow-hidden relative`}
                  style={{ height: `calc(100vh - ${navHeight}px)` }}
                  key={index}
                >
                  <div className="absolute top-0 left-0 bg-[#EFE7E4]/70 blur-lg w-full scale-105 h-full"></div>
                  <img
                    src={src}
                    className="w-full h-full object-cover object-center"
                  />
                </SwiperSlide>
              );
            } else {
              return (
                <SwiperSlide
                  className={`!w-full !overflow-hidden relative`}
                  style={{ height: `calc(100vh - ${navHeight}px)` }}
                  key={index}
                >
                  <div className="absolute top-0 left-0 bg-[#EFE7E4]/70 blur-lg w-full scale-105 h-full"></div>
                  <video
                    src={src}
                    className="w-full h-full object-cover object-center"
                    autoPlay
                    loop
                    muted
                  ></video>
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
      </div>

      <div className="absolute top-0 py-5 z-10 w-full h-full flex flex-col sm:justify-center items-center">
        <div
          ref={recEff}
          className="border md:mt-0 sm:mt-0 mt-3 border-red-500 rounded-lg flex items-center px-4 py-1 gap-4 w-max opacity-100 mb-5"
        >
          YCCE IS WAITING
          <span className="h-4 w-4 rounded-full bg-red-500 animate-pulse"></span>
        </div>
        <div>
          <div className="mt-1 lg:mt-0 text-center w-full">
            <div className=" overflow-hidden">
              <h3 className="hero-heading px-2 sm:px-10 lg:px-0 text-5xl sm:text-6xl md:text-8xl font-bold text-[#54250B] tracking-widest">
                YCCE PRESENTS
              </h3>
            </div>
            <div className=" overflow-hidden">
              <h3 className="hero-heading px-2 sm:px-10 lg:px-0 text-5xl md:text-8xl font-bold text-[#54250B] tracking-widest">
                MUN
              </h3>
            </div>
          </div>
        </div>
        <div
          ref={dates}
          className="flex flex-col justify-center items-center border-b border-t px-6 py-3 mt-5"
        >
          <div className="flex items-center gap-4">
            <span className="p-2 border border-[#54250B] rounded-sm text-lg sm:text-xl md:text-2xl font-bold text-[#54250B]">
              22
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl">-</span>
            <span className="p-2 border border-[#54250B] rounded-sm text-lg sm:text-xl md:text-2xl font-bold text-[#54250B]">
              23
            </span>
          </div>
          <div className="text-lg mt-1 sm:text-xl md:text-3xl tracking-tighter font-bold text-[#54250B]">
            MARCH
          </div>
        </div>
        <div ref={card} className="mt-5 md:mt-5 overflow-hidden px-1">
          <div className="py-6 px-10 border mx-1 border-[#54250B] bg-[#EFE7E4]/30 backdrop-blur-sm rounded-md relative">
            <div className="z-20 relative">
              <h5 className="md:text-2xl  text-nowrap">Book You seat Now</h5>
              <button
                className="text-nowrap mx-auto group hover:-translate-y-2 hover:scale-110 hover:shadow-lg px-3 py-1 border rounded-[0.5rem] bg-[#C2A597] hover:bg-transparent duration-200 border-[#54250B] mt-5 flex items-center gap-3"
                onClick={() =>
                  document.getElementById("hero_modal").showModal()
                }
              >
                Book seat
                <span className="w-8 overflow-hidden">
                  <div className="flex gap-4 -translate-x-[100%] group-hover:translate-x-[30%] duration-500">
                    <div className="">
                      <ArrowRight
                        className="group-hover:rotate-0 duration-200 group-hover:"
                        size={20}
                      />
                    </div>
                    <div>
                      <ArrowRight
                        className="group-hover:rotate-0 duration-200 group-hover:"
                        size={20}
                      />
                    </div>
                  </div>
                </span>
              </button>
              {/* ---------------------------Dialog Box--------------------- */}
              <dialog id="hero_modal" className="modal">
                <div className="modal-box h-[700px] bg-white">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <h3 className="font-bold text-lg text-start">
                    Register Here
                  </h3>
                  <div>
                    <iframe
                      src="https://konfhub.com/widget/ycce-x-mun?desc=false&secondaryBg=F7F7F7&ticketBg=F7F7F7&borderCl=F7F7F7&bg=FFFFFF&fontColor=572148&ticketCl=572148&btnColor=fb5850&fontFamily=Prompt&borderRadius=10"
                      id="konfhub-widget"
                      title="Register for YCCE X MUN"
                      width="100%"
                      height="570"
                    ></iframe>
                  </div>
                </div>
              </dialog>
            </div>
            <div ref={earth} className="absolute left-20 top-0 z-0">
              <img src="/earth.png" alt="earth" className="w-32" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
