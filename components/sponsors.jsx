import React from "react";

const Sponsors = () => {
  return (
    <div className="px-3 md:px-0">
      <div className="grid-background rounded-2xl border mt-10 shadow-lg overflow-hidden">
        <div className="pt-5 lg:pt-10">
          <h4 className="text-5xl md:text-7xl font-bold text-center bg-gradient">
            Sponsors
          </h4>
        </div>
        <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] justify-center p-5 md:p-8 lg:p-10 duration-200">
          <div className="grid place-items-center hover:scale-125 duration-300">
            <img src="sponsors/sponsor1.png" alt="" />
          </div>
          <div className="grid place-items-center hover:scale-125 duration-300">
            <img src="sponsors/sponsor2.png" alt="" />
          </div>
          <div className="grid place-items-center hover:scale-125 duration-300">
            <img src="sponsors/sponsor3.png" alt="" />
          </div>
          <div className="grid place-items-center hover:scale-125 duration-300">
            <img src="sponsors/sponsor4.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
