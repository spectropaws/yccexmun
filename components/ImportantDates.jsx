import { EventDates } from "../data";
import React from "react";

const ImportantDates = () => {
  const currentDate = new Date();

  const isEventPassed = (eventDate) => {
    const eventDateObj = new Date(eventDate);
    return eventDateObj < currentDate;
  };

  const timelineStartStyles = "timeline-start bg-white border-zinc-300 rounded-md px-4 py-2 transition-all ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-[#F9F9F9] border-2 border-transparent hover:border-[#C2A597]";
  const timelineEndStyles = "timeline-end bg-white border-zinc-300 rounded-md px-4 py-2 transition-all ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-[#F9F9F9] border-2 border-transparent hover:border-[#C2A597]";

  return (
    <div className="bg-[#F5F5F5] rounded-lg p-8 max-w-2xl mx-3 md:mx-auto mt-10 mb-5">
      <h2 className="text-4xl font-bold text-center bg-gradient-to-t from-[#C2A597] to-[#54250B] bg-clip-text text-transparent mb-8">
        Important Dates
      </h2>
      <ul className="timeline timeline-vertical">
        {EventDates.map((event, index) => {
          const eventPassed = isEventPassed(event.date);
          const hrColor = eventPassed ? "bg-[#54250B]" : "bg-gray-400";
          const iconColor = eventPassed ? "#54250B" : "#D1D5DB";
          
          return (
            <li key={index}>
              {index !== 0 && <hr className={hrColor} />}
              
              {index % 2 === 0 ? (
                <div className={timelineStartStyles}>
                  {event.event}
                </div>
              ) : (
                <div className="timeline-start">{event.date}</div>
              )}

              <div className="timeline-middle">
                <CheckCircleIcon color={iconColor} />
              </div>

              {index % 2 === 0 ? (
                <div className="timeline-end">{event.date}</div>
              ) : (
                <div className={timelineEndStyles}>
                  {event.event}
                </div>
              )}

              {index !== EventDates.length - 1 && <hr className={hrColor} />}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ImportantDates;

const CheckCircleIcon = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill={color}
      className="text-primary h-5 w-5"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};