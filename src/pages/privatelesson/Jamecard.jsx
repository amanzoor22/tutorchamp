import React from "react";
import { Circle, Creator, Hat, Message } from "../../components/globals/Icons";
import { Link } from "react-router-dom";

const Jamecard = () => {
  return (
    <div>
      {/* Jamescard */}

      <div className="sm:flex rounded-2xl p-2 bg-white shadow-lg ">
        <div className="flex-none relative h-50">
          <img
            className="rounded-3xl h-full"
            src="/images/detailcardimg.png"
            alt=""
          />
          <span
            title="online now"
            className="absolute bottom-0 left-0 border-[3px] bg-gray-400 h-4  w-4 rounded-full m-3 "
          ></span>
        </div>
        <title>online</title>
        <div className="flex flex-col lg:ml-3  sm:px-1 mt-2 lg:mt-0">
          <div className="flex flex-row">
            <h1 className="text-gray-800 font-bold  text-lg mr-1">James W.</h1>
            <img
              className="h-4 w-5 my-auto mx-1"
              src="/images/usflag.svg"
              alt=""
            />
            <Creator />
          </div>
          <p className="text-sm mb-3 text-gray-700 line-clamp-3">
            Certified English teacher, specialize in business:finance/econ,
            TOEFL/IELTS prep & accent neutrality Certified English teacher,
            specialize in business:finance/econ, TOEFL/IELTS prep & accent
          </p>
          <div className="flex flex-col ">
            <div className="flex flex-row mb-2 ">
              <span className="text-gray-400 my-auto">
                <Hat />
              </span>
              <p className="text-sm ml-2">Teaches English lessons</p>
            </div>
            <div className="flex flex-row mb-1">
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
            <div className="flex flex-row ">
              <Circle />
              <p className="text-sm ml-2 my-auto">5,991 lessons taught</p>
              <Link to="/jamesdetailpage" className="d-block ml-auto">
                <button className="bg-primary-200 hover:bg-primary-500 px-2 text-white rounded-md py-1">
                  View details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jamecard;
