import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const ScheduleCard = () => {
  const initialStartDate = new Date(); // May 30, 2023
  const [startDate, setStartDate] = useState(initialStartDate);

  const handlePrevWeek = () => {
    const newStartDate = new Date(startDate);
    newStartDate.setDate(startDate.getDate() - 7);
    setStartDate(newStartDate);
  };

  const handleNextWeek = () => {
    const newStartDate = new Date(startDate);
    newStartDate.setDate(startDate.getDate() + 7);
    setStartDate(newStartDate);
  };

  const formatDate = (date) => {
    const month = date.toLocaleString("default", { month: "short" });
    const day = date.getDate();
    return `${month} ${day}`;
  };

  const scheduleItems = [
    {
      day: "Tue",
      times: ["6:00"],
    },
    {
      day: "Wed",
      times: ["6:00"],
    },
    {
      day: "Thu",
      times: ["6:00"],
    },
    {
      day: "Fri",
      times: ["2:00", "6:00", "8:00", "10:00"],
    },
    {
      day: "Sat",
      offDay: true,
    },
    {
      day: "Sun",
      offDay: true,
    },
    {
      day: "Mon",
      times: ["2:00"],
    },
  ];

  return (
    <>
      <div className="py-5 px-2">
        <div className="flex items-center">
          <button
            className="p-1 bg-gray-100 hover:bg-primary-300 hover:text-white"
            type="button"
            onClick={handlePrevWeek}
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <span className="mx-auto">
            {formatDate(startDate)} –{" "}
            {formatDate(
              new Date(startDate.getTime() + 6 * 24 * 60 * 60 * 1000)
            )}
          </span>
          <button
            className="p-1 bg-gray-100 hover:bg-primary-300 hover:text-white"
            type="button"
            onClick={handleNextWeek}
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {scheduleItems.map((item, index) => {
          const itemDate = new Date(startDate);
          itemDate.setDate(startDate.getDate() + index);

          return (
            <div
              className={`flex flex-col mx-auto items-center border-t-4 min-w-full ${
                item.offDay ? "border-gray-300" : "border-primary-100"
              }`}
              key={`schedule-${index}`}
            >
              <div className="p-1 mt-3 day">
                {itemDate.toLocaleString("en-US", { weekday: "short" })}
              </div>
              <span className="mx-auto date">{itemDate.getDate()}</span>
              {item.times &&
                item.times.map((time, timeIndex) => (
                  <button
                    key={timeIndex}
                    type="button"
                    className="select-time mx-auto text-sm font-bold text-primary-300 py-1 px-2 focus:bg-primary-50 focus:text-primary-300 mt-3"
                  >
                    {time}
                  </button>
                ))}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ScheduleCard;
