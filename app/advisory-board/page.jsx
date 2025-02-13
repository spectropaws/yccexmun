import { advisoryBoard } from "../../data";
import MemberCard from "../../components/Advisory-Board/member-card";
import React from "react";

const page = () => {
  return (
    <div className="md:p-10 p-5">
      <h3 className="text-4xl font-bold mx-20 text-center bg-gradient mt-5">Advisory Board</h3>
      <div className="mt-10 lg:px-20 justify-center">
        {advisoryBoard.map((data, index) => (
          <MemberCard
            imgSrc={data.imgSrc}
            index={index}
            position={data.position}
            name={data.name}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
