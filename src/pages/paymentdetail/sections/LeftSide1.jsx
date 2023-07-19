import React from "react";
import {
  Creator,
  Professional,
  Staricon,
} from "../../../components/globals/Icons";
import {
  CheckBadgeIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

const LeftSide1 = () => {
  return (
    <div className="font-sans bg-white  py-5 px-5 mt-5 rounded-xl lg:h-[85vh]">
      <div className="my-auto flex relative">
        <img
          src="/images/modaltopimg.jpg"
          className="w-20 h-20 rounded-xl my-auto "
          alt=""
        />
        <div className="absolute left-0">
          <img
            src="/images/modalflag.svg"
            alt=""
            className="w-5 h-5 rounded-md mt-1 border-2 border-white "
          />
        </div>
        <div className="ml-4">
          <h2 className="text-gray-500 py-1">English</h2>
          <h1 className="text-xl mb-1 font-semibold">Rachel W.</h1>
          <p className="flex flex-wrap">
            <Staricon className="" />{" "}
            <span className="text-xl text-primary-700 my-auto ml-1">5.0</span>
            <span className="ml-2 text-gray-500 text-sm my-auto">
              (6 reviews)
            </span>
          </p>
        </div>
      </div>
      <div className="flex gap-3 mb-3">
        <div className="flex">
          <Creator className="" />
          <p className="ml-1">Verified</p>
        </div>
        <div className="flex">
          <Professional />
          <p>Professional</p>
        </div>
      </div>
      <hr />
      <div className="py-3">
        <p>Tuesday, May 9 at 06:00</p>
        <p className="text-gray-500 text-sm">Time is based on your location</p>
      </div>
      <hr />
      <div>
        <h1 className="text-xl  font-semibold py-2">Your order</h1>
        <div className="flex justify-between mb-2">
          <p>50-min lesson</p>
          <span>$45.00</span>
        </div>
        <div className="flex justify-between mb-2 pb-2">
          <p className="flex">
            Processing fee
            <QuestionMarkCircleIcon
              className="w-5 h-5 my-auto ml-1 text-gray-200"
              fill="gray"
            />
          </p>
          <span>$0.30</span>
        </div>
      </div>
      <hr />
      <div className="flex justify-between text-xl py-3">
        <p>Total</p>
        <span>$45.30</span>
      </div>
      <div className="mb-3">
        <p className="py-3 hover:bg-primary-100 rounded-xl p-2  text-primary-700">
          Have a promo code?
        </p>
      </div>
      <div className="bg-green-100 p-4 rounded-xl mb-4">
        <div className="flex">
          <CheckBadgeIcon
            className="w-6 h-6 mb-auto text-white mr-1"
            fill="#007913"
          />
          <p className="text-green-800 mb-1">Free replacement or refund</p>
        </div>

        <p className="text-sm">Try another tutor for free or get a refund</p>
      </div>
    </div>
  );
};

export default LeftSide1;
