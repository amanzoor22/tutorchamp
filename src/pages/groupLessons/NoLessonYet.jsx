import React from "react";
import { Link } from "react-router-dom";
const NoLessonYet = () => {
  return (
    <div>
      <div className="flex flex-col justify-center mx-auto text-center bg-white items-center my-5 w-[70%] pb-4">
        <div className="w-1/3 p-4 space-y-5">
          <img src="/images/groupLesson.png" alt="" />
          <h1 className="text-2xl font-medium">No lessons yet</h1>
          <p className="font-medium text-base text-gray-500">
            As soon as you find a suitable tutor and book your first lesson,
            you'll see it here
          </p>
          <div className="">
            <Link
              to="/groupClasses"
              className="bg-primary-300 rounded-sm hover:bg-primary-400 text-white p-3 "
            >
              Find a group lesson
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoLessonYet;
