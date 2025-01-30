import React from "react";

const Sponsors = () => {
  return (
    <div className="grid-background rounded-2xl border mt-10">
      <div className="pt-5 lg:pt-10">
        <h4 className="text-7xl font-bold text-center bg-gradient-to-t from-[#C2A597] to-[#54250B] bg-clip-text text-transparent">
          Sponsors
        </h4>
      </div>
      <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] justify-center p-5 md:p-8 lg:p-10">
        <div className="grid place-items-center">
          <img src="sponsors/sponsor1.png" alt="" />
        </div>
        <div className="grid place-items-center">
          <img src="sponsors/sponsor2.png" alt="" />
        </div>
        <div className="grid place-items-center">
          <img src="sponsors/sponsor3.png" alt="" />
        </div>
        <div className="grid place-items-center">
          <img src="sponsors/sponsor4.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
