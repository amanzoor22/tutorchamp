import React from "react";
import ProfilePics from "../button/ProfilePics";
import { ShieldCheckIcon, StarIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
const GroupClassesCard = ({
  thumbnail,
  tag1,
  tag2,
  title,
  verifiedWith,
  rating,
  classesTeach,
  time,
  price,
}) => {
  return (
    <div className="bg-white">
      <Link
        to="/carddetail"
        className="rounded-lg  shadow-lg min-w-[260px] cursor-pointer"
      >
        <div className="">
          <img className="rounded-lg relative" src={thumbnail} alt="" />
          <div className="flex">
            <p className="font-semibold  left-5 px-2 items-stretch  rounded-sm border-[3px] border-black text-[12px] bg-white  relative bottom-3">
              {tag1}
            </p>
            <p className="font-semibold bg-primary-50  left-8 px-2  rounded-sm border-[3px] border-black text-[12px]  relative bottom-3">
              {tag2}
            </p>
          </div>
        </div>
        <div className="p-2">
          <h1 className="text-lg line-clamp-2 font-semibold h-10 font-roboto leading-5 mb-3">
            {title}
          </h1>
          <p className="flex text-xs font-normal">
            With {verifiedWith}
            <ShieldCheckIcon className="h-4 w-4 text-primary-600 " />
          </p>
          <p className="flex items-center gap-2 text-sm font-semibold">
            <StarIcon className="h-4 w-4 text-yellow-500" />
            {rating}
            <span className="font-normal text-gray-500">
              {" "}
              {classesTeach} Classes taught
            </span>
          </p>
          <button className="font-medium  my-4  py-[2px] px-2 text-[12px] outline-1 outline border-solid ">
            {time}
          </button>
          <hr />
          <div className="">
            <h1 className="flex text-sm font-semibold justify-between my-3">
              <div className="">
                ${price}
                <span className="text-gray-500 font-normal">/class</span>
              </div>
              <span>
                <ProfilePics />
              </span>
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GroupClassesCard;
