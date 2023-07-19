import React from "react";
import { WorldIcon } from "../globals/Icons";

const SideCard = ({ idImg, video, timeSlots }) => {
  return (
    <div>
      <video
        controls
        className="rounded-2xl h-52 w-full p-2 flex justify-center m-auto"
        src={video}
        poster={idImg}
      />
      <div className="flex items-center justify-center gap-2 my-2">
        <span className="h-4 w-4 text-gray-400">
          <WorldIcon />
        </span>
        <p className="text-sm text-gray-500">
          Times are shown in your local timezone
        </p>
      </div>
      <div className="mt-3">
        <div className="md:grid md:grid-cols bg-gray-50 rounded w-full px-2">
          <div className="flex w-full">
            <div className="min-w-[120px] " />
            <div className="flex-1 text-gray-600 text-sm grid grid-cols-7">
              <div className="p-1">Mon</div>
              <div className="p-1">Tue</div>
              <div className="p-1">Wed</div>
              <div className="p-1">Thu</div>
              <div className="p-1">Fri</div>
              <div className="p-1">Sat</div>
              <div className="p-1">Sun</div>
            </div>
          </div>
          {timeSlots.map((slot, index) => (
            <div key={index} className="flex max-w-full">
              <div className="min-w-[120px] text-sm">
                <span className="flex items-center">{slot.time}</span>
                <div className="text-gray-500 text-xs">
                  <span>{slot.range}</span>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-7">
                {slot.slots.map((bgClass, i) => (
                  <div key={i} className={`h-[48px] ${bgClass} border`}></div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="p-3 bg-gray-50 text-center hover:bg-primary-100 hover:text-white w-full rounded-2xl mt-5 font-semibold">
          View full schedule
        </button>
      </div>
    </div>
  );
};

export default SideCard;
