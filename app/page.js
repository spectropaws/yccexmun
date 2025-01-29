"use client";

import HeroSec from "@/components/hero-sec";
import InitialLoader from "@/components/initial-loader";

export default function Home() {
  return (
    <>
      <InitialLoader />
      <div className="px-1 py-2 sm:px-2 sm:py-3  md:py-6 md:px-10">
        <HeroSec />
      </div>
    </>
  );
}
