import React from "react";

const BestTutorcCard = ({ level, title, skils, boximg }) => {
  return (
    <>
      <div className="bg-gray-100 py-5 pl-5 pr-3 my-5 rounded-xl flex ">
        <div className="">
          <p className="text-xs my-2 font-roboto text-primary-300 font-semibold">
            {level}
          </p>
          <h1 className="text-lg font-serif my-2 font-semibold">{title}</h1>
          <div className="">
            <p className="text-base font-roboto my-2 font-normal text-gray-500">
              {skils}
            </p>
            <button className="bg-gray-800 hover:bg-primary-400  active:scale-105 text-white py-2 my-2 px-3 rounded-lg">
              Explore
            </button>
          </div>
        </div>
        <img className="opacity-50 w-40 h-32 mt-5" src={boximg} alt="boximg" />
      </div>
    </>
  );
};

export default BestTutorcCard;
