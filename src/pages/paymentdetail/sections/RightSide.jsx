import { LockClosedIcon } from "@heroicons/react/24/outline";
import React from "react";

const RightSide = () => {
  return (
    <div>
      <div className="font-sans bg-white  p-5 my-5 rounded-xl h-[85vh]">
        <h1 className="text-xl font-medium py-2 mb-3">Choose how to pay</h1>
        <input
          type="number"
          placeholder="1234 1234 1234"
          className="min-w-full  border-gray-200 rounded"
        />
        <div className="flex w-full ">
          <input
            type="text"
            placeholder="MM/YY"
            className="w-1/2 rounded border-gray-200"
          />
          <input
            type="text"
            placeholder="CVC"
            className="w-1/2 rounded border-gray-200"
          />
        </div>
        <div className="flex py-2 mt-2">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              value=""
              className="w-4 h-4  border border-gray-300 "
              required
            />
          </div>
          <label for="terms" className="ml-2 text-sm  text-gray-700 ">
            Save this card for future payments
          </label>
        </div>
        <div className="py-4">
          <button className="bg-gray-200 hover:bg-primary-300 hover:text-white min-w-full p-3 rounded-xl text-gray-500 font-medium text-lg">
            Confirm payment $45.30
          </button>
        </div>
        <div className="pb-4 text-md">
          <p>By clicking "Confirm payment", you agree to</p>
          <span className="text-primary-700">
            Preply Refund and Payment Policy
          </span>
        </div>
        <div className="flex pb-2">
          <LockClosedIcon className="w-4 h-4 mr-2 my-auto" />
          <p className="text-xs text-gray-600">
            It’s safe to pay on Preply. All transactions are protected by SSL
            encryption
          </p>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default RightSide;
