import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";

const VideoCard = ({ img, video, name, flag, number, para }) => {
  return (
    <div className="flex flex-col shadow-lg bg-white rounded-t-2xl">
      <div className="h-56 sm:h-80 md:h-40 rounded-t-2xl bg-gray-100">
        <video
          controls
          className="rounded-t-2xl h-full w-full object-cover"
          src={video}
          poster={img}
        />
      </div>

      <div className=" flex flex-col p-5 flex-1">
        <h2 className="flex ">
          {name}{" "}
          <img className="w-5 h-3 my-auto ml-3 mr-1 " src={flag} alt=".." />
          <svg
            className="my-auto"
            width="14"
            height="14"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 19"
          >
            <path
              fill="#3BB3BD"
              d="M10.538 1.76A11.153 11.153 0 0 1 8.026 0a11.21 11.21 0 0 1-2.53 1.76A11.445 11.445 0 0 1 0 2.983c0 1.69.052 3.076.11 4.059.02.635.08 1.269.177 1.897a13.62 13.62 0 0 0 .972 3.133 12.522 12.522 0 0 0 3.726 4.6 13.745 13.745 0 0 0 3.024 1.759 13.739 13.739 0 0 0 3.03-1.788 12.52 12.52 0 0 0 3.725-4.6c.44-.998.759-2.046.949-3.121.097-.629.156-1.262.178-1.897.057-.984.109-2.37.109-4.06-1.892.055-3.77-.36-5.462-1.207v.002ZM9.05 11.43l-1.385 1.373L6.29 11.43 3.87 8.992l1.373-1.374 2.42 2.443 3.916-3.915 1.391 1.362-3.92 3.921v.001Z"
            ></path>
          </svg>
        </h2>

        <div className="flex items-center gap-1 mt-2">
          <StarIcon className="h-5 w-5 text-primary-300" />
          <span>{number}</span>
        </div>
        <p className="mt-2 text-sm text-gray-500">{para}</p>
        <div className="mt-auto pt-4">
          <button
            type="button"
            className="rounded-xl p-2 w-full text-sm font-medium flex items-center justify-center bg-gray-100 hover:bg-primary-300 hover:text-white"
          >
            Book trial lesson
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
