import React from "react";
import {
  QuestionMarkCircleIcon,
  StarIcon,
  ClockIcon,
  CalendarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { Classes, Level } from "../../../components/globals/Icons";

const Justspeak = () => {
  return (
    <div className=" py-16 font-sans lg:px-10">
      <h3 className="text-gray-600 flex">
        One-time class
        <span>
          <QuestionMarkCircleIcon className="w-5 h-6 ml-2" />
        </span>
      </h3>
      <div className="py-2">
        <h1 className="text-3xl font-bold mb-2">Just Speak!</h1>
        <p className="">Conversational English online course</p>
      </div>
      <div className="flex flex-row mt-2 flex-wrap">
        <img
          className="w-6 h-6 rounded-full"
          src="/images/Joelsmall.png"
          alt=".."
        />
        <p className="ml-1 text-primary-600">Taught by Joel Edward Ian W.</p>
        <StarIcon className="w-5 h-5 my-auto ml-2 mr-1 text-yellow-300 fill-yellow-400" />
        <p>
          4.98<span className="text-primary-600 ml-1">(25 reviews)</span>
        </p>
        <span className="bg-purple-200 text-purple-700 font-bold px-2 rounded ml-2">
          Likely to sell out
        </span>
      </div>
      <div className="h-full w-full object-cover  mx-auto py-7">
        <img className=" rounded-2xl " src="/images/Joel.png" alt=".." />
      </div>
      <div className="text-gray-500 mb-5 pb-5">
        <div className="flex flex-row justify-between py-2 ">
          <h3 className="flex">
            <span>
              <Level />
            </span>
            Level
          </h3>
          <span className="text-black font-bold">B2</span>
        </div>
        <div className="flex flex-row justify-between py-2">
          <h3 className="flex">
            <span>
              <Classes />
            </span>
            Number of classes
          </h3>
          <span className="text-black font-bold ">1</span>
        </div>
        <div className="flex flex-row justify-between py-2">
          <h3 className="flex">
            <span>
              <ClockIcon className="w-5 h-6 my-auto mr-2" />
            </span>
            Class length
          </h3>
          <span className="text-black font-bold">55 minutes</span>
        </div>
        <div className="flex flex-row justify-between py-2">
          <h3 className="flex">
            <span>
              <CalendarIcon className="w-5 h-5 my-auto mr-2" />
            </span>
            Frequency
          </h3>
          <span className="text-black font-bold">One-time</span>
        </div>
        <div className="flex flex-row justify-between py-2">
          <h3 className="flex">
            <span>
              <UserGroupIcon className="w-5 h-5 my-auto mr-2" />
            </span>
            Group size
          </h3>
          <span className="text-black font-bold">2-7 students</span>
        </div>
      </div>
      <div className="border-b border-2  border-gray-300/50"></div>
    </div>
  );
};

export default Justspeak;
