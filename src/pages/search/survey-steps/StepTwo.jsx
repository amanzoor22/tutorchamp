import React, { useState } from "react";

const items = [
  {
    title: "I'm just starting",
    description: "I can't say much yet",
  },
  {
    title: "I know the basics",
    description: "I can talk about simple topics",
  },
  {
    title: "I'm Conversational",
    description:
      "I can speak about my experiences, make plans and tell stories",
  },
  {
    title: "I can express myself fluently",
    description: "I can use complex grammar and phrases but I lack nuance",
  },
];

const StepTwo = () => {
  const [select, setSelect] = useState(null);

  return (
    <fieldset>
      <div>
        <h1 className="text-2xl mb-3 font-semibold">
          What’s your English level now?
        </h1>
      </div>
      <div className="space-y-5">
        {items.map((item, index) => (
          <div
            onClick={() => setSelect(item.title)}
            key={index}
            className={`items-center px-4 cursor-pointer py-3 hover:bg-white bg-gray-50 border hover:border-primary-300 gap-4 rounded-xl ${
              select === item.title && "ring-2 ring-primary-300"
            }`}
          >
            <h1 className="text-lg font-normal">{item.title}</h1>
            <p className="text-base font-normal text-gray-500">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default StepTwo;
