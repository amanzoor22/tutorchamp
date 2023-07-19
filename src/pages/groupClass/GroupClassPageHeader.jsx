import React from "react";

const GroupClassPageHeader = () => {
  return (
    <div>
      <div className="sm:flex items-center  justify-center ">
        <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
          <h1 className="text-7xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Online English classes to practice speaking together
          </h1>
          <p className="relative mt-6 text-base  text-gray-500 sm:max-w-md lg:max-w-none">
            Learn, speak and connect with a small group of students, guided by
            an expert tutor
          </p>
        </div>
        <div className="w-4/5">
          <img className="w-full" src="/images/onlinegrpclass.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default GroupClassPageHeader;
