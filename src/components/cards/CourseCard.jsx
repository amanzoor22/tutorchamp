import React from "react";

const CourseCard = ({
  title,
  text,
  rotate,
  decsheight,
  neww,
  cardimg,
  desc,
}) => {
  return (
    <div className="shadow-md  hover:opacity-80">
      <div className="bg-white" style={{ transform: `rotate(${rotate}deg)` }}>
        <div className=" shadow-lg rounded-xl">
          <img className="rounded-xl " src={cardimg} alt="cardimg" />
          <h1 className="h-8 text-sm font-medium mx-2 leading-4  pt-2 text-secondary-900">
            {title}
          </h1>
          <p
            style={{ height: `${decsheight}px` }}
            className="text-xs font-normal  mx-2 pb-5 text-gray-500 leading-4 pt-3"
          >
            {desc}
          </p>
          <p className="text-xs flex justify-center gap-3  font-normal text-center pb-5 text-gray-500 leading-3">
            {" "}
            <span className="bg-yellow-400 ">{neww}</span>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
