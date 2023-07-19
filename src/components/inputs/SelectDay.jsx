import { CalendarIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const SelectDay = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckedItems([...checkedItems, value]);
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== value));
    }
  };

  const handleClearClick = () => {
    setCheckedItems([]);
  };

  const checkboxes = [
    {
      value: "Sun",
      checked: checkedItems.includes("Sun"),
      label: "Sun",
    },
    {
      value: "Mon",
      checked: checkedItems.includes("Mon"),
      label: "Mon",
    },
    {
      value: "Tue",
      checked: checkedItems.includes("Tue"),
      label: "Tue",
    },
    {
      value: "Wed",
      checked: checkedItems.includes("Wed"),
      label: "Wed",
    },
    {
      value: "Thu",
      checked: checkedItems.includes("Thu"),
      label: "Thu",
    },
    {
      value: "Fri",
      checked: checkedItems.includes("Fri"),
      label: "Fri",
    },
    {
      value: "Sat",
      checked: checkedItems.includes("Sat"),
      label: "Sat",
    },
  ];

  return (
    <div className="">
      <div className="grid mt-2 grid-cols-2">
        {/* Checkbox 1 */}
        <div className="flex items-center">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 mx-2 text-primary-300 focus:ring-primary-400"
            id="Today"
            value="Today"
            checked={checkedItems.includes("Today")}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="Today" className=" text-lg ">
            Today
          </label>
        </div>
        {/* Checkbox 2 */}
        <div className="flex items-center">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 mx-2 text-primary-300 focus:ring-primary-400"
            id="Tomorrow"
            value="Tomorrow"
            checked={checkedItems.includes("Tomorrow")}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="Tomorrow" className=" text-lg ">
            Tomorrow
          </label>
        </div>
      </div>
      <hr />
      <div className="grid mt-2 grid-cols-3 gap-2">
        {checkboxes.map((checkbox) => (
          <div className="flex items-center" key={checkbox.value}>
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 mx-2 text-primary-300 focus:ring-primary-400"
              id={checkbox.value}
              value={checkbox.value}
              checked={checkbox.checked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={checkbox.value} className="text-lg ">
              {checkbox.label}
            </label>
          </div>
        ))}
      </div>
      <hr className="mt-4" />
      <div className="flex justify-center mt-4 gap-2 font-medium items-center">
        {/* "Clear" button */}
        <CalendarIcon className="h-4 w-4 text-primary-300" />
        <button onClick={handleClearClick}>Clear</button>
      </div>
    </div>
  );
};

export default SelectDay;
