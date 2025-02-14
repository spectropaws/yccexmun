"use client";
import HeroSec from "../components/hero-sec";
import InitialLoader from "../components/initial-loader";
import GenSecLetter from "../components/GenSecLetter";
import "../components/ui/styles.css";
import ContentSection from "../components/ContentSection";
import ImportantDates from "../components/ImportantDates";
import Sponsors from "../components/sponsors";

const Page = () => {
  return (
    <>
      <InitialLoader />
      <div className="page-container">
        <div className="">
          <HeroSec />
        </div>
        <div className="px-1 py-2 sm:px-2 sm:py-3  md:py-6 md:px-10">
          <GenSecLetter/>
          <ContentSection />
          {/* <Sponsors /> */}
          <ImportantDates />
        </div>
      </div>
    </>
  );
};

export default Page;