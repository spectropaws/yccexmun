import { advisoryBoard } from "../../data";
import MemberCard from "../../components/Advisory-Board/member-card";
import React from "react";

const page = () => {
  return (
    <div className="p-10">
      <h3 className="text-5xl font-bold">Advisory Board</h3>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-8 mt-10 md:px-20 justify-center">
        {advisoryBoard.map((data) => (
          <MemberCard
            imgSrc={data.imgSrc}
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
