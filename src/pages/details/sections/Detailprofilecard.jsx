import React from "react";
import {
  Circle,
  Creator,
  Hat,
  Message,
  Tutor,
} from "../../../components/globals/Icons";

const Detailprofilecard = () => {
  return (
    <section>
      <div className="">
        {/* Jamescard */}
        <div className=" pt-5  pb-5 rounded-2xl mt-3  font-sans">
          <div className="flex flex-wrap ">
            <div className="flex-none relative">
              <img
                className="rounded-3xl"
                src="/images/detailcardimg.png"
                alt=""
              />
              <span
                title="online now"
                className="absolute bottom-0 left-0 border-[3px] bg-gray-400 p-1.5 rounded-full m-3 "
              ></span>
            </div>
            <title>online</title>
            <div className="flex flex-col lg:ml-3  sm:px-5 mt-2 lg:mt-0">
              <div className="flex flex-row">
                <h1 className="text-gray-800 font-bold  text-lg">James W.</h1>
                <img
                  className="h-4 w-5 my-auto ml-1"
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
                    <span className="text-primary-600 bg-primary-50">A2</span>
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
        {/* super tutor */}
        <div className="lg:p-5">
          <div className="bg-white shadow-lg rounded-2xl px-2  mx-auto mt-4 ">
            <div className="flex">
              <Tutor />
              <div className="flex flex-col p-3">
                <h1>Super tutor</h1>

                <p className="text-gray-500 text-sm">
                  A highly rated and reliable tutor.
                  <a href className="underline ml-1">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detailprofilecard;
