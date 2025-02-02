import { EventDates } from "../data";
import React from "react";

const ImportantDates = () => {

  return (
    <div className="bg-[#F5F5F5] rounded-lg p-8 max-w-xl mx-auto mt-10 mb-5">
      <h2 className="text-4xl font-bold text-center bg-gradient-to-t from-[#C2A597] to-[#54250B] bg-clip-text text-transparent mb-8">
        Important Dates
      </h2>
      <ul className="space-y-6">
        {EventDates.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white rounded-lg p-4 transition-all ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-[#F9F9F9] border-2 border-transparent hover:border-[#C2A597]"
          >
            <div className="text-lg font-medium text-[#333]">{item.event}</div>
            <div className="text-lg font-semibold text-[#54250B]">{item.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImportantDates;