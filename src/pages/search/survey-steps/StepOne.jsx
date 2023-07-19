import React, { useState } from "react";
import {
  Globeicon,
  Emoji,
  PreSearch,
  Pencil,
  Culture,
} from "../../../components/globals/Icons";

const items = [
  {
    icon: <Globeicon />,
    title: "Career and business",
  },
  {
    icon: <Emoji />,
    title: "Lessons for kids",
  },
  {
    icon: <PreSearch />,
    title: "Living abroad",
  },
  {
    icon: <Pencil />,
    title: "Exams and coursework",
  },
  {
    icon: <Culture />,
    title: "Culture, travel and hobby",
  },
];

const StepOne = () => {
  const [select, setSelect] = useState(null);

  return (
    <fieldset>
      <div>
        <h1 className="text-2xl mb-3 font-semibold">
          What motivates you to look for a tutor?
        </h1>
      </div>
      <div className="space-y-5">
        {items.map((item, index) => (
          <button
            type="button"
            onClick={() => setSelect(item.title)}
            key={index}
            className={`w-full flex items-center hover:shadow-sm px-4 cursor-pointer py-4 hover:bg-white bg-gray-50 border hover:border-primary-300 gap-4 rounded-xl ${
              select === item.title && "ring-2 ring-primary-300"
            }`}
          >
            {item.icon}
            <h1 className="text-lg font-normal">{item.title}</h1>
          </button>
        ))}
      </div>
    </fieldset>
  );
};

export default StepOne;
