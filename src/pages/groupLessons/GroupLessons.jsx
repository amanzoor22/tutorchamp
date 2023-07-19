import React from "react";
import LayoutOutSide from "../../components/Layouts/LayoutOutSide";
import Container from "../../components/globals/Container";

import LessonCard from "./LessonCard";
// import NoLessonYet from "./NoLessonYet";

const GroupLessons = () => {
  return (
    <div>
      <LayoutOutSide>
        <Container>
          <div className="mx-auto max-w-2xl lg:text-center mt-8 mb-4">
            <h2 className="text-sm font-semibold leading-7 text-primary-300 uppercase">
              group classes
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Online group classes to practice and learning together
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Learn, speak, practice and connect with a small group of students,
              guided by an expert tutor
            </p>
          </div>

          <div className=" md:w-[85%] sm:w-full w-full sm:mx-auto  sm:p-4 space-y-6 mb-6">
            <LessonCard />
            <LessonCard />
            <LessonCard />
            <LessonCard />
          </div>
          {/* No lesson yet */}
          {/* <NoLessonYet /> */}
        </Container>
      </LayoutOutSide>
    </div>
  );
};

export default GroupLessons;
export const ClassTime = () => {
  return (
    <div className="    text-center sm:pr-4">
      <div className="">
        <div>
          <h3 className="font-bold text-xs sm:text-base">Tue, Apr 11</h3>
          <p className="sm:my-1 text-gray-600 text-xs sm:text-base">
            05:30 – 06:25
          </p>
        </div>
        <div className="flex flex-col sm:w-32 sm:justify-center sm:mx-auto text-xs sm:text-sm">
          {" "}
          <span className="font-bold">$9.00</span>
          <button
            type="button"
            className="bg-primary-300 rounded-xl text-xs sm:text-base sm:px-3 px-2 sm:py-2 py-1  mt-1 sm:mt-2 text-white  "
          >
            Active
          </button>
        </div>
      </div>
    </div>
  );
};
