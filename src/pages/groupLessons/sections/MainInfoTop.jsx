import React from "react";
import { StarIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { Classes } from "../../../components/globals/Icons";
const MainInfoTop = () => {
  return (
    <div>
      <div to="/insideprofilelesson" className="flex gap-6 flex-wrap">
        <div className="sm:w-32  md:w-40 lg:w-48 h-40">
          <img
            className="rounded-md  object-left-top w-full h-full"
            src="/images/Joel.png"
            alt=""
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center ">
            <img
              className="w-10 h-10 min-w-[2.5rem] rounded-full"
              src="/images/Joelsmall.png"
              alt=".."
            />
            <div className="pl-3">
              <h3 className="text-lg font-bold">
                Taught by Joel Edward Ian W.
              </h3>
              <p className="text-gray-500 text-sm">On Preply since 2019</p>
            </div>
          </div>
          <div className=" lg:flex-row mx-2 my-auto flex-wrap sm:flex-col ">
            <div className="flex text-gray-500 my-auto">
              <ShieldCheckIcon className="w-6 h-6  mr-1 text-gray-500" />
              Verified tutor
            </div>
            <div className="flex text-gray-500 ">
              <StarIcon className="w-5 h-5 mr-1 text-gray-500" />
              4.98 (25 reviews)
            </div>
            <div className="flex text-gray-500 ">
              <Classes /> 2,957 lessons taught
            </div>
          </div>
          <div className="mb-3">
            <h3 className="font-bold ">What you will learn</h3>
            <ul className="">
              <li className="">
                Develop speaking skills on a variety of topics
              </li>
              <li className="">Practise interactive speaking skills</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainInfoTop;
