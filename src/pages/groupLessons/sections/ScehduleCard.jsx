import React from "react";
import { CalendarIcon } from "@heroicons/react/24/outline";

const ScehduleCard = () => {
  return (
    <div className="sticky top-24">
      <div className="bg-white rounded-2xl sticky top-24 font-sans my-5 shadow-xl">
        <h5 className="text-black text-center rounded-t-xl text-lg bg-gray-100 p-2 font-semibold ">
          Schedule
        </h5>
        <div className="  px-4  pt-3">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="font-bold">Tue, Apr 11</h3>
              <p className="my-1 text-gray-600 text-sm">05:30 – 06:25 (PDT)</p>
            </div>
            <div className=" text-center">
              {" "}
              <button
                disabled
                className="bg-primary-200 rounded-xl px-3 py-2  mt-2 text-white "
              >
                Active
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 text-black hover:bg-primary-200 hover:text-white flex justify-center rounded-b-2xl mt-5">
          <CalendarIcon className="mr-2 w-5 h-10 my-auto" />
          <button className="" type="button">
            Show more Schedule
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScehduleCard;
