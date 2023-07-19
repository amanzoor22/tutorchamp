import React from "react";

import {
  Circle,
  Creator,
  Hat,
  Message,
} from "../../../components/globals/Icons";
import { StarIcon } from "@heroicons/react/24/outline";

const Jamesdetail = () => {
  return (
    <div className="px-5">
      <div className="    flex flex-col ">
        <div className="flex flex-row mt-2 flex-wrap">
          <img
            className="w-6 h-6 rounded-full"
            src="/images/detailcardimg.png"
            alt=".."
          />
          <p className="ml-1 font-semibold mb-3">Taught by James W.</p>
          <StarIcon className="w-5 h-5 mb-auto ml-1 text-yellow-300 fill-yellow-400" />
        </div>
        <div className="sm:flex ">
          <div className="  mx-auto  h-40  ">
            <img
              className=" rounded-2xl  "
              src="/images/detailcardimg.png"
              alt=".."
            />
          </div>
          <div className="text-gray-500 flex-[2] mb-4 lg:pl-3 md:pl-3 ">
            <div className="flex flex-row">
              <h1 className="text-gray-800 font-bold  text-lg">James W.</h1>
              <img
                className="h-4 w-5 my-auto mx-1"
                src="/images/usflag.svg"
                alt=""
              />
              <Creator />
            </div>
            <p className="text-sm mb-3 text-gray-700">
              Certified English teacher, specialize in business:finance/econ,
              TOEFL/IELTS
              <br /> prep & accent neutrality
            </p>
            <div className="flex flex-col ">
              <div className="flex flex-row mb-2">
                <span className="text-gray-400 my-auto">
                  <Hat />
                </span>
                <p className="text-sm ml-2">Teaches English lessons</p>
              </div>
              <div className="flex flex-row mb-2">
                <span className="text-gray-400">
                  <Message />
                </span>
                <p className="text-sm ml-2 ">
                  Speaks English{" "}
                  <span className="text-green-600 bg-green-100">Native</span>{" "}
                  Spanish{" "}
                  <span className="text-primary-600 bg-primary-100">A2</span>
                </p>
              </div>
              <div className="flex flex-row">
                <Circle />
                <p className="text-sm ml-2">5,991 lessons taught</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jamesdetail;
