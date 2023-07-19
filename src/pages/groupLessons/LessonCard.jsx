import React from "react";
import { Link } from "react-router-dom";
import { Hat } from "../../components/globals/Icons";

import {
  QuestionMarkCircleIcon,
  StarIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
const LessonCard = () => {
  return (
    <div>
      <div className=" items-center bg-white rounded-2xl shadow-md   pl-2 py-2">
        <Link
          to="/insideprofilelesson"
          className="sm:grid sm:grid-cols-4 grid-cols-2 gap-5 flex sm:gap-0  items-center  "
        >
          <div className="sm:w-32 md:w-40 lg:w-48 sm:h-44 w-1/2   sm:col-span-1">
            <img
              className="rounded-md sm:w-full sm:h-full h-20 w-72   "
              src="/images/Joel.png"
              alt=""
            />
            {/* mobile display  */}
            <div className="sm:hidden ">
              <ClassTime />
            </div>
          </div>
          <div className="flex flex-col lg:ml-3 sm:col-span-2 space-y-2  mt-2 lg:mt-0">
            <div className="flex flex-row">
              <Link to="" className="text-gray-800 font-bold  text-lg">
                Just Speak!
              </Link>
            </div>
            <div className="flex items-center  gap-2 text-[10px] sm:text-base flex-wrap ">
              <img
                className="sm:w-6 sm:h-6 h-4 w-4 rounded-full"
                src="/images/Joelsmall.png"
                alt=".."
              />
              <p className=" text-gray-500">Taught by Joel Edward Ian W.</p>
              <p className="flex items-center ">
                4.98
                <StarIcon className="w-3 sm:w-5 sm:h-4 h-3  text-yellow-300 fill-yellow-400" />
                <span className="text-gray-400 text-xs ml-1">(25 reviews)</span>
              </p>
            </div>
            <p className="sm:text-sm text-xs  text-gray-700">
              Conversational English online course
            </p>
            <div className="sm:flex  text-xs flex-col ">
              <div className="flex flex-row ">
                <span className="text-gray-400 my-auto">
                  <Hat />
                </span>
                <p className="sm:text-sm text-xs  ml-2">
                  Teaches English lessons
                </p>
              </div>
              <div className="">
                <h3 className="flex items-center text-xs sm:text-sm">
                  <span>
                    <ClockIcon className="sm:w-4 sm:h-4 w-3 h-3 my-auto mr-2" />
                  </span>
                  Class length
                </h3>
              </div>
              <div className="">
                <h3 className=" flex gap-x-2 text-xs sm:text-sm items-center">
                  <QuestionMarkCircleIcon className="sm:w-4 sm:h-4 w-3 h-3" />
                  One-time class
                </h3>
              </div>
            </div>
          </div>
          <div className="hidden sm:block col-span-1">
            <ClassTime />
          </div>
        </Link>
      </div>
      {/* </div> */}
    </div>
  );
};

export default LessonCard;

export const ClassTime = () => {
  return (
    <div className=" mt-2 sm:mt-0    text-center sm:pr-4">
      <div className="">
        <div>
          <h3 className="font-bold text-xs sm:text-base">Tue, Apr 11</h3>
          <p className="sm:my-1 text-gray-600 text-xs sm:text-base">
            05:30 – 06:25
          </p>
        </div>
        <div className="flex flex-col sm:w-32 sm:justify-center sm:mx-auto text-xs sm:text-sm">
          {" "}
          <span className="font-bold">$9.00</span>
          <button
            disabled
            className="bg-primary-300 rounded-xl text-xs sm:text-base sm:px-3 px-2 sm:py-2 py-1  mt-1 sm:mt-2 text-white  "
          >
            Active
          </button>
        </div>
      </div>
    </div>
  );
};
