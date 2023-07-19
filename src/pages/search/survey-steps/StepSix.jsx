import React, { useState } from "react";
import {
  Morning,
  LateMorning,
  Afternoon,
  LateAfternoon,
  Evening,
  LateEvening,
  Night,
  LateNight,
} from "../../../components/globals/Icons";

const timeSlots = [
  {
    component: <Morning />,
    time: "6-9",
    description: "Morning",
  },
  {
    component: <LateMorning />,
    time: "9-12",
    description: "Late morning",
  },
  {
    component: <Afternoon />,
    time: "12-15",
    description: "Afternoon",
  },
  {
    component: <LateAfternoon />,
    time: "15-18",
    description: "Late afternoon",
  },
  {
    component: <Evening />,
    time: "18-21",
    description: "Evening",
  },
  {
    component: <LateEvening />,
    time: "21-24",
    description: "Late evening",
  },
  {
    component: <Night />,
    time: "0-3",
    description: "Night",
  },
  {
    component: <LateNight />,
    time: "3-6",
    description: "Late Night",
  },
];

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const StepSix = () => {
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [selectedDays, setSelectedDays] = useState([]);

  const handleTimeSlotClick = (time) => {
    // Check if the time slot is already selected
    if (selectedTimes.includes(time)) {
      // If it is, remove it from the selected times array
      setSelectedTimes(selectedTimes.filter((t) => t !== time));
    } else {
      // If it's not, add it to the selected times array
      setSelectedTimes([...selectedTimes, time]);
    }
  };

  const handleDayClick = (day) => {
    // Check if the day is already selected
    if (selectedDays.includes(day)) {
      // If it is, remove it from the selected days array
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      // If it's not, add it to the selected days array
      setSelectedDays([...selectedDays, day]);
    }
  };

  return (
    <fieldset>
      {" "}
      <div className=" ">
        <div>
          <h1 className="text-2xl   mb-3 font-semibold">
            When would you like to take lessons?
          </h1>
        </div>
        <h1 className="text-lg font-medium">
          Time of the day{" "}
          <span className="text-gray-400 text-base">(in your time zone)</span>
        </h1>
        <div className="grid grid-cols-4 gap-2 mt-4">
          {timeSlots.map((timeSlot, index) => (
            <div
              key={index}
              onClick={() => handleTimeSlotClick(timeSlot.time)}
              className={`flex flex-col items-center hover:shadow-sm shadow-sm gap-1 px-2 py-3 cursor-pointer hover:bg-white bg-gray-50 rounded-xl ${
                selectedTimes.includes(timeSlot.time) &&
                "ring-2 ring-primary-300"
              }`}
            >
              {timeSlot.component}
              <h1 className="font-medium text-sm">{timeSlot.time}</h1>
              <p className="text-xs text-center font-medium text-gray-400">
                {timeSlot.description}
              </p>
            </div>
          ))}
        </div>
        <h1 className="text-lg font-medium mt-4">Days of the week </h1>
        <div className="grid grid-cols-7 gap-2 mt-4">
          {daysOfWeek.map((day, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleDayClick(day)}
              className={`px-1 py-3 text-xs border hover:shadow-lg border-gray-400 shadow-sm hover:bg-white bg-gray-50 rounded-xl ${
                selectedDays.includes(day) && "ring-2 ring-primary-300"
              }`}
            >
              <span>{day}</span>
            </button>
          ))}
        </div>
      </div>
    </fieldset>
  );
};

export default StepSix;
