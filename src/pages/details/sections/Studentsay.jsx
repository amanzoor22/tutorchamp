import React from "react";
import { Staricon } from "../../../components/globals/Icons";

const Studentsay = () => {
  return (
    <div>
      <section className="mt-5 bg-white shadow-lg  mx-auto rounded-2xl mb-5">
        <h1 className="p-5 font-semibold">What students say</h1>
        <hr />
        <div className="sm:flex  py-4 w-full">
          <div className="flex sm:flex-col  lg:w-[30%] px-3 justify-center items-center">
            <div></div>
            <div></div>
            <span className="text-5xl font-bold text-gray-700">4.9</span>

            <div className="flex items-center">
              <Staricon />
              <Staricon />
              <Staricon />
              <Staricon />
              <Staricon />
            </div>
            <h4 className="mt-1">62 reviews</h4>
          </div>
          <>
            <div className="flex-1">
              <div className="flex items-center justify-center mt-4 ">
                <span className="text-sm font-medium text-black ">5 stars</span>
                <div className="w-2/4 h-5 mx-4 bg-gray-300 rounded ">
                  <div
                    className="h-5 bg-yellow-400 rounded"
                    style={{ width: "70%" }}
                  />
                </div>
                <span className="text-sm font-medium text-black ">(61)</span>
              </div>
              <div className="flex items-center justify-center mt-4">
                <span className="text-sm font-medium text-black ">4 stars</span>
                <div className="w-2/4 h-5 mx-4 bg-gray-300 rounded ">
                  <div
                    className="h-5 bg-yellow-400 rounded"
                    style={{ width: "17%" }}
                  />
                </div>
                <span className="text-sm font-medium text-black ">(0)</span>
              </div>
              <div className="flex items-center justify-center mt-4">
                <span className="text-sm font-medium text-black ">3 stars</span>
                <div className="w-2/4 h-5 mx-4 bg-gray-300 rounded ">
                  <div
                    className="h-5 bg-yellow-400 rounded"
                    style={{ width: "8%" }}
                  />
                </div>
                <span className="text-sm font-medium text-black ">(0)</span>
              </div>
              <div className="flex items-center justify-center mt-4">
                <span className="text-sm font-medium text-black ">2 stars</span>
                <div className="w-2/4 h-5 mx-4 bg-gray-300 rounded ">
                  <div
                    className="h-5 bg-yellow-400 rounded"
                    style={{ width: "4%" }}
                  />
                </div>
                <span className="text-sm font-medium text-black ">(0)</span>
              </div>
              <div className="flex items-center justify-center mt-4">
                <span className="text-sm font-medium text-black ">1 star</span>
                <div className="w-2/4 h-5 mx-4 bg-gray-300 rounded ">
                  <div
                    className="h-5 bg-yellow-400 rounded"
                    style={{ width: "1%" }}
                  />
                </div>
                <span className="text-sm font-medium text-black ">(1)</span>
              </div>
            </div>
          </>
        </div>
        <hr />
      </section>
    </div>
  );
};

export default Studentsay;
