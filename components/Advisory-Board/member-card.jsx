import Image from "next/image";
import React from "react";

const MemberCard = ({ imgSrc, position, name, description }) => {
  return (
    <div className="border p-4 rounded-sm shadow-md hover:shadow-xl hover:scale-[1.03] duration-300">
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
    </div>
  );
};

export default MemberCard;
