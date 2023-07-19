import React from "react";

import { StarIcon } from "@heroicons/react/24/solid";
import {
  AcademicCapIcon,
  ShieldCheckIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const AvailableTeachersCards = ({
  idImg,
  firstname,
  lastname,
  country,
  language,
  level,
  rating,
  reviews,
  subject,
  pricehourly,
  lessons,
  lessonTime,
  activeStudents,
  experienceDescription,
}) => {
  return (
    <div className="bg-white pt-5 pr-5 pb-5 md:pl-0 pl-2 rounded-2xl shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 md:gap-2">
        <div className="md:px-3 flex gap-2 md:block">
          <div className="relative bg-gray-50 rounded-xl min-w-[7rem] w-28 h-28 md:min-w-[10rem] md:w-40 md:h-40">
            <span
              title="online now"
              className="absolute top-0 left-0 m-2 h-4 w-4 border-2 bg-green-500 rounded-full"
            ></span>
            <img
              className="rounded-xl h-full w-full"
              src={idImg}
              alt="Profile img"
            />
            {/* <button className="absolute top-0 right-0 m-2">
              <HeartIcon
                title="Save to my list"
                className="h-4 w-4 text-white"
              />
            </button> */}
          </div>
          {/* == */}
          <div className="md:hidden flex flex-col md:gap-3">
            <div className="flex items-center gap-2">
              <Link
                to="/detailprofile"
                className="block text-lg font-semibold line-clamp-1"
              >
                {firstname} {lastname}
              </Link>
              <img
                title="country of birth"
                className="w-4 h-4"
                src={country}
                alt=""
              />
              <ShieldCheckIcon
                title="Tutor has a verfied ID"
                className="h-5 w-4 text-primary-600 "
              />
            </div>
            <p className="flex gap-1 text-gray-400 text-xs my-2">
              <AcademicCapIcon className="h-4 w-4 text-gray-500" />
              {language}
            </p>

            <h2 className="flex gap-1 text-xs">
              <UserIcon className="h-4 w-4 text-gray-500" />
              {activeStudents} active students ~{lessons} lessons
            </h2>
          </div>
        </div>
        <div className="col-span-2">
          <div className="hidden md:flex flex-col md:gap-3">
            <div className="flex items-center gap-2">
              <Link to="/detailprofile" className="block text-lg font-semibold">
                {firstname} {lastname}
              </Link>
              <img
                title="country of birth"
                className="w-4 h-4"
                src={country}
                alt=""
              />
              <ShieldCheckIcon
                title="Tutor has a verfied ID"
                className="h-5 w-4 text-primary-600 "
              />
            </div>
            <p className="flex gap-1 text-gray-400 text-base items-center">
              <AcademicCapIcon className="h-5 w-4 text-gray-500" />
              {subject}
            </p>

            <h2 className="flex gap-1 items-center">
              <UserIcon className="h-4 w-5 text-gray-500" />
              {activeStudents} active students ~{lessons} lessons
            </h2>
          </div>
          <div className="mt-3 block">
            <p className="flex gap-1 text-sm my-2 text-gray-500 font-normal flex-wrap leading-7  items-center">
              Speaks : {language}
              <span className="bg-primary-400 text-white px-2  rounded-xl">
                {level}
              </span>
              Italian
              <span className="bg-secondary-400 text-white px-2  rounded-xl">
                {level}
              </span>
              Polish
              <span className="bg-secondary-500 px-2 text-white rounded-xl">
                {level}
              </span>
            </p>
            <p className="text-sm font-light line-clamp-2">
              {experienceDescription}
            </p>
          </div>
        </div>
        <div className="mt-3 flex-col gap-5 flex md:col-span-1 lg:col-span-3 xl:col-span-1">
          <div className="text-center grid grid-cols-2 ">
            <div>
              <h1 className="flex text-lg items-baseline justify-center gap-1 font-medium">
                <StarIcon className="h-4 w-4 text-yellow-400" />
                <span>{rating}</span>
              </h1>
              <p className="text-sm">
                {reviews}{" "}
                <span className="whitespace-nowrap text-xs text-gray-500 font-medium">
                  reviews
                </span>
              </p>
            </div>
            <div className="line-clamp-1">
              <h1 className="flex text-lg items-baseline justify-center gap-1 font-medium">
                $ {pricehourly}
              </h1>
              <p className="text-sm">
                {lessonTime}{" "}
                <span className="whitespace-nowrap text-xs text-gray-500 font-medium">
                  - min lesson
                </span>
              </p>
            </div>
          </div>

          {/* buttons */}
          <div className="flex-col gap-3 flex">
            <button className="bg-primary-400 rounded-xl hover:bg-primary-300 text-white px-2 py-2">
              Book trail lesson
            </button>{" "}
            <button className="bg-secondary-600 hover:bg-secondary-500 rounded-xl text-white px-2 py-2">
              {" "}
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableTeachersCards;
