"use client";
import Sponsors from "../components/sponsors";
import HeroSec from "../components/hero-sec";
import InitialLoader from "../components/initial-loader";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import "./components/ui/styles.css";
import "./styles/globals.css";

const Page = () => {
  return (
    <>
      <Navbar />
      <InitialLoader />
      <div className="page-container">
        <div className="px-1 py-2 sm:px-2 sm:py-3  md:py-6 md:px-10">
          <HeroSec />
          <Carousel />
          <Sponsors />
        </div>
      </div>
    </>
    //   <>
    //   <InitialLoader />
    //   <div className="px-1 py-2 sm:px-2 sm:py-3  md:py-6 md:px-10">
    //     <HeroSec />
    //   </div>
    //   <div className="px-1 py-2 sm:px-2 sm:py-3  md:py-6 md:px-10">
    //     <Sponsors />
    //   </div>
    // </>
  );
};

export default Page;
