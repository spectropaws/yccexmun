import React from "react";

const ImportantDates = () => {
  const dates = [
    { event: "Registration Deadline", date: "18 Feb 2025" },
    { event: "Selected Teams Announcement", date: "03 Mar 2025" },
    { event: "Final Debate", date: "22-23 Mar 2025" },
  ];

  return (
    <div className="bg-opacity-20 rounded-lg p-8 max-w-xl mx-auto mt-10">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Important Dates
      </h2>
      <ul className="space-y-4">
        {dates.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-800 bg-opacity-10 rounded-lg p-3 transition-all hover:shadow-md border hover:border-[#C2A597]"
          >
            <div className="text-lg font-semibold text-gray-700">
              {item.event}
            </div>
            <div className="text-lg font-semibold text-blue-500">
              {item.date}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImportantDates;
