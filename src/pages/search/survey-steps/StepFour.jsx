import { UserIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const StepFour = () => {
  const [select, setSelect] = useState(null);

  const handleSelect = (option) => {
    if (select === option) {
      // If the same option is clicked again, deselect it
      setSelect(null);
    } else {
      setSelect(option);
    }
  };

  return (
    <fieldset>
      <div>
        <div>
          <h1 className="text-2xl mb-3 font-semibold">
            What type of lessons are you interested in?
          </h1>
        </div>
        <div className="space-y-5">
          <div
            onClick={() => handleSelect("Private lessons")}
            className={`flex items-center px-4 cursor-pointer py-3 hover:bg-white bg-gray-50 gap-4 rounded-xl ${
              select === "Private lessons" && "ring-2 ring-primary-300"
            }`}
          >
            <UserIcon className="h-8 w-8 min-w-[2rem] text-primary-300" />
            <label className="" htmlFor="Private lessons">
              <h1 className="text-lg font-normal">Private lessons</h1>
              <p className="text-sm font-normal text-gray-500">
                Take online lessons with a private tutor
              </p>{" "}
            </label>
            <input
              type="checkbox"
              className="w-4 h-4 border-gray-300 text-primary-300 hover:border-gray-500 mx-2 dark:focus:ring-primary-300 focus:ring-0"
              id="Private lessons"
              checked={select === "Private lessons"}
            />
          </div>
          <div
            onClick={() => handleSelect("Group classes")}
            className={`flex items-center px-4 cursor-pointer py-3 hover:bg-white bg-gray-50 gap-4 rounded-xl ${
              select === "Group classes" && "ring-2 ring-primary-300"
            }`}
          >
            <UserGroupIcon className="h-8 w-8 min-w-[2rem] text-primary-300" />
            <label htmlFor="Group classes">
              <h1 className="text-lg font-normal">Group classes</h1>
              <p className="text-sm font-normal text-gray-500">
                Learn online in a small group, guided by an expert tutor
              </p>{" "}
            </label>
            <input
              type="checkbox"
              className="w-4 h-4 border-gray-300 text-primary-300 hover:border-gray-500 mx-2 dark:focus:ring-primary-300 focus:ring-0"
              id="Group classes"
              checked={select === "Group classes"}
            />
          </div>
        </div>
      </div>
    </fieldset>
  );
};

export default StepFour;
