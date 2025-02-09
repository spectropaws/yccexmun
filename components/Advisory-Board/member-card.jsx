import Image from "next/image";
import React from "react";

const MemberCard = ({ imgSrc, position, name, description, index }) => {
  return (
    <div
      className={`flex gap-10 ${
        index % 2 === 0
          ? "md:flex-row flex-col"
          : "md:flex-row-reverse flex-col"
      }  mt-20`}
    >
      <div className="md:w-[40%] w-full overflow-hidden rounded-lg hover:shadow-lg">
        <img
          src={imgSrc}
          alt={name}
          className=" h-full object-cover object-center"
        />
      </div>
      <div className="md:w-[60%] w-full group ">
        <h5 className="text-3xl font-semibold tracking-wide w-max relative after:absolute after:content-[''] after:h-1 after:w-0 group-hover:after:w-full after:duration-300 after:bg-black after:left-0 after:bottom-0">
          {name}
        </h5>
        <p className={`mt-5 text-justify`}>{description}</p>
      </div>
    </div>
  );
};

export default MemberCard;

{
  /* <div className="border p-4 rounded-sm shadow-md hover:shadow-xl hover:scale-[1.03] duration-300">
      <div className="">
        <img
          src={imgSrc}
          alt="Model United Nations"
          className="h-52 w-full aspect-square  object-cover mx-auto"
        />
      </div>
      <h6 className="text-xl font-semibold mt-5 underline">{position}</h6>
      <h5 className="text-xl text-center font-semibold mt-3">{name}</h5>
      <p className="text-justify mt-2">{description}</p>
    </div> */
}
