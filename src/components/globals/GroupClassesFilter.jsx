import React from "react";
import { Popover } from "@headlessui/react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  XMarkIcon,
  ChevronDownIcon,
  ChartBarIcon,
  BookOpenIcon,
  CalendarIcon,
  ClockIcon,
  AdjustmentsHorizontalIcon,
  CurrencyDollarIcon,
  AcademicCapIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";
import Logo from "./Logo";
import SelectDay from "../inputs/SelectDay";

// arrays
const englishLevels = [
  {
    id: 1,
    title: "Elementary (A1)",
    description: "I don’t speak English very well.",
  },
  {
    id: 2,
    title: "Pre Intermediate (A2)",
    description: "I can speak some English but it’s difficult.",
  },
  {
    id: 3,
    title: "Intermediate (B1)",
    description:
      "I can talk in English but need more vocabulary and still make mistakes.",
  },
  {
    id: 4,
    title: "Upper Intermediate (B2)",
    description:
      "I can confidently engage in conversation about most subjects in English.",
  },
  {
    id: 5,
    title: "Advanced (C1 - C2)",
    description: "I’ve mastered English. I’m fluent and articulate.",
  },
];

const topicArray = [
  {
    label: "English grammar & vocabulary",
  },
  {
    label: "English for Exams",
  },
  {
    label: "Business English",
  },
  {
    label: "Conversational English",
  },
];

const timeArray = [
  {
    label: "Morning",
    time: "Classes before 12 pm",
  },
  {
    label: "Afternoon",
    time: "Classes after 12 pm",
  },
  {
    label: "Evening",
    time: "Classes after 6 pm",
  },
];

const formatArray = [
  {
    label: "One-time classes",
    text: "Single lessons that focus on a specific topic or on building a skill",
  },
  {
    label: "Multi-week courses",
    text: "Bundle of classes with a progressive set of learning outcomes",
  },
];

const radioList = [
  { id: "license", label: "Our top picks" },
  { id: "id", label: "Highest rated" },
  { id: "millitary", label: "Most popular" },
  { id: "passport-low", label: "Price low to high" },
  { id: "passport-high", label: "Price high to low" },
  { id: "newest", label: "Newest first" },
];

export const GroupClassesFilter = () => {
  const [checkedTopics, setCheckedTopics] = useState({});
  const [checkedTime, setCheckedTime] = useState({});
  const [checkedFormat, setCheckedFormat] = useState({});

  const handleCheckboxChange = (label) => {
    setCheckedTopics((prevCheckedTopics) => ({
      ...prevCheckedTopics,
      [label]: !prevCheckedTopics[label],
    }));
  };

  const handleClearTopic = () => {
    // Clear all checkboxes
    setCheckedTopics({});
  };

  const handleTimeChange = (label) => {
    setCheckedTime((checkedTime) => ({
      ...checkedTime,
      [label]: !checkedTime[label],
    }));
  };

  const handleClearTime = () => {
    // Clear all checkboxes
    setCheckedTime({});
  };

  const handleFormatChange = (label) => {
    setCheckedFormat((checkedFormat) => ({
      ...checkedFormat,
      [label]: !checkedFormat[label],
    }));
  };

  const handleClearFormat = () => {
    // Clear all checkboxes
    setCheckedFormat({});
  };

  return (
    <div className="lg:flex justify-center bg-gray-50 p-5 flex-wrap gap-5 my-4">
      <Popover className="relative">
        <Popover.Button className=" rounded-lg  my-2 focus:outline-none w-full justify-center gap-x-1.5  bg-white px-3 py-2 shadow-lg  hover:bg-gray-50">
          <div className="flex justify-between items-center gap-1">
            <div className="text-sm flex items-center gap-3 my-1 font-normal whitespace-nowrap">
              <ChartBarIcon className="h-6 w-6 text-primary-300" />
              English Level
            </div>
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />{" "}
          </div>
        </Popover.Button>

        <Popover.Panel className="absolute z-10  w-full py-4 lg:w-[520px] mt-2  origin-top-right divide-y divide-gray-100 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div>
            {englishLevels.map((level) => (
              <div key={level.id}>
                <div className="flex mt-2 gap-1">
                  <input
                    id={`color-${level.id}-mobile`}
                    type="checkbox"
                    className="h-5 w-5 rounded border-gray-300 mx-2 text-primary-300 focus:ring-primary-400 mt-1"
                  />
                  <label htmlFor={`color-${level.id}-mobile`}>
                    <h1 className="text-lg font-medium">{level.title}</h1>
                    <p className="text-gray-500 text-sm">{level.description}</p>
                  </label>
                </div>
              </div>
            ))}
            <hr className="mt-4" />
            <div className="flex justify-center mt-4 gap-2 font-medium items-center">
              <ChartBarIcon className="h-4 w-4 " />
              Identify your level
            </div>
          </div>
        </Popover.Panel>
      </Popover>
      <Popover className="relative">
        <Popover.Button className=" rounded-lg focus:outline-none w-full my-2 justify-center gap-x-1.5  bg-white px-3 py-2 shadow-lg  hover:bg-gray-50">
          <div className="flex justify-between items-center gap-1 ">
            <div className="text-sm flex items-center gap-3 my-1 font-medium whitespace-nowrap">
              <BookOpenIcon className="h-6 w-6 text-primary-300" />
              Topic
            </div>
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />{" "}
          </div>
        </Popover.Button>

        <Popover.Panel className="absolute z-10  w-full  py-4 lg:w-[300px] mt-2 origin-top-right divide-y divide-gray-100 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div>
            {topicArray.map((topic, index) => (
              <div key={index}>
                <div className="flex mt-2 items-center">
                  <input
                    id={topic.label}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 mx-2 text-primary-300 focus:ring-primary-400"
                    checked={checkedTopics[topic.label] || false}
                    onChange={() => handleCheckboxChange(topic.label)}
                  />
                  <label htmlFor={topic.label} className="text-base ">
                    {topic.label}
                  </label>
                </div>
              </div>
            ))}
            <hr className="mt-4" />
            <button
              type="button"
              onClick={handleClearTopic}
              className="w-full flex justify-center mt-4 gap-2 font-medium items-center"
            >
              <BookOpenIcon className="h-4 w-4 text-primary-300" />
              <span>Clear</span>
            </button>
          </div>
        </Popover.Panel>
      </Popover>
      <Popover className="relative">
        <Popover.Button className=" rounded-lg focus:outline-none w-full my-2  justify-center gap-x-1.5  bg-white px-3 py-2 shadow-lg  hover:bg-gray-50">
          <div className="flex gap-1 justify-between items-center ">
            <div className="text-sm flex items-center gap-3 my-1 font-normal whitespace-nowrap">
              <CalendarIcon className="h-6 w-6 text-primary-300" />
              Day
            </div>
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />{" "}
          </div>
        </Popover.Button>

        <Popover.Panel className="absolute z-10 w-full lg:w-[300px] py-3  mt-2  origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <SelectDay />
        </Popover.Panel>
      </Popover>
      <Popover className="relative">
        <Popover.Button className=" rounded-lg focus:outline-none w-full my-2  justify-center gap-x-1.5  bg-white px-3 py-2 shadow-lg  hover:bg-gray-50">
          <div className="flex gap-1 justify-between items-center ">
            <div className="text-sm flex items-center gap-3 my-1 font-normal whitespace-nowrap">
              <ClockIcon className="h-6 w-6 text-primary-300" />
              Time
            </div>
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />{" "}
          </div>
        </Popover.Button>

        <Popover.Panel className="absolute z-10  w-full lg:w-[300px] mt-2 py-4  origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div>
            {timeArray.map((time, index) => (
              <div key={index}>
                <div className="flex mt-2 gap-1">
                  <input
                    type="checkbox"
                    className="h-5 w-5 rounded border-gray-300 mx-2 text-primary-300 focus:ring-primary-400 mt-1"
                    id={time.label}
                    checked={checkedTime[time.label] || false}
                    onChange={() => handleTimeChange(time.label)}
                  />
                  <label htmlFor={time.label}>
                    <h1 className="text-base font-medium text-gray-800">
                      {time.label}
                    </h1>
                    <p className="text-gray-500 text-sm">{time.time}</p>
                  </label>
                </div>
              </div>
            ))}
            <hr className="mt-4" />
            <button
              type="button"
              onClick={handleClearTime}
              className="w-full flex justify-center mt-4 gap-2 font-medium items-center"
            >
              <ClockIcon className="h-4 w-4 text-primary-300" />
              <span>Clear</span>
            </button>
          </div>
        </Popover.Panel>
      </Popover>
      <Popover className="relative">
        <Popover.Button className=" rounded-lg focus:outline-none  w-full my-2 justify-center gap-x-1.5  bg-white px-3 py-2 shadow-lg  hover:bg-gray-50">
          <div className="flex gap-1 justify-between items-center ">
            <div className="text-sm flex items-center gap-3 my-1 font-normal whitespace-nowrap">
              <CurrencyDollarIcon className="h-6 w-6 text-primary-300" />
              Price
            </div>
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />{" "}
          </div>
        </Popover.Button>

        <Popover.Panel className="absolute z-10 w-full lg:w-[300px] mt-2  origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="flex lg:justify-between justify-center gap-4 mx-4 my-3">
            <div className="">
              <label className="font-medium text-gray-400">Min Price</label>{" "}
              <br />
              <input
                className="w-32 border-gray-300 hover:border-primary-300 focus:border-primary-300 focus:ring-0  rounded"
                type="number"
                placeholder="PKR"
              />
            </div>
            <div className="">
              <label className="font-medium text-gray-400">Max Price</label>{" "}
              <br />
              <input
                className="w-32 border-gray-300 hover:border-primary-300 focus:border-primary-300 focus:ring-0  rounded"
                placeholder="PKR"
                type="number"
              />
            </div>
          </div>
          <hr />
          <div className="flex justify-center my-4 gap-2 font-medium items-center">
            <CurrencyDollarIcon className="h-4 w-4 text-primary-300" />
            <button>Clear</button>
          </div>
        </Popover.Panel>
      </Popover>
      <Popover className="relative">
        <Popover.Button className=" rounded-lg focus:outline-none w-full my-2  justify-center gap-x-1.5  bg-white px-3 py-2 shadow-lg  hover:bg-gray-50">
          <div className="flex justify-between items-center gap-1">
            <div className="text-sm flex items-center gap-3 my-1 font-normal whitespace-nowrap">
              <AcademicCapIcon className="h-6 w-6 text-primary-300" />
              Format
            </div>
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />{" "}
          </div>
        </Popover.Button>

        <Popover.Panel className="absolute z-10 w-[300px] mt-2  origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div>
            {formatArray.map((item, index) => (
              <div key={index} className="p-2">
                <div className="flex mt-2 gap-1">
                  <input
                    type="checkbox"
                    className="h-5 w-5 rounded border-gray-300 mx-2 text-primary-300 focus:ring-primary-400 mt-1"
                    id={item.label}
                    checked={checkedFormat[item.label] || false}
                    onChange={() => handleFormatChange(item.label)}
                  />
                  <label htmlFor={item.label}>
                    <h1 className="text-base font-medium text-gray-800">
                      {item.label}
                    </h1>
                    <p className="text-gray-500 text-sm">{item.text}</p>
                  </label>
                </div>
              </div>
            ))}
            <hr />
            <button
              type="button"
              onClick={handleClearFormat}
              className="w-full flex justify-center my-4 gap-2 font-medium items-center"
            >
              <AcademicCapIcon className="h-4 w-4 text-primary-300" />
              <span>Clear</span>
            </button>
          </div>
        </Popover.Panel>
      </Popover>
      <Popover className="relative">
        <Popover.Button className=" rounded-lg focus:outline-none  w-full my-2 justify-center gap-x-1.5  bg-white px-3 py-2 shadow-lg  hover:bg-gray-50">
          <div className="flex justify-between items-center gap-1">
            <div className="text-sm flex gap-1 items-center my-1 font-normal whitespace-nowrap">
              <SwatchIcon className="h-6 w-6 text-primary-300" />
              Sort by
            </div>
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />{" "}
          </div>
        </Popover.Button>

        <Popover.Panel className="absolute z-10 w-full lg:w-[250px] mt-2  origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="pt-3">
            <ul className="space-y-2">
              {radioList.map((radio, index) => (
                <li key={index} className="w-full">
                  <div className="flex items-center pl-3">
                    <input
                      id={`list-radio-${radio.id}`}
                      type="radio"
                      defaultValue=""
                      name="list-radio"
                      className="w-5 h-5 text-primary-300  border-gray-300 focus:ring-primary-300 focus:ring-2"
                    />
                    <label
                      htmlFor={`list-radio-${radio.id}`}
                      className="w-full ml-2 text-base font-medium  "
                    >
                      {radio.label}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
            <hr className="mt-4" />
            <div className="flex justify-center my-4 gap-2 font-medium items-center">
              <SwatchIcon className="h-4 w-4 text-primary-300" />
              <button>Clear</button>
            </div>
          </div>
        </Popover.Panel>
      </Popover>
    </div>
  );
};
export const GroupClassesFilterMob = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="bg-gray-100">
      <div className=" flex justify-center">
        <button
          type="button"
          className=" bg-white shadow-md w-[350px] my-5 flex justify-between gap-2 font-normal hover:bg-gray-50 items-center lg:hidden   rounded-md p-2 "
          onClick={() => setMobileMenuOpen(true)}
        >
          {" "}
          Filter
          <AdjustmentsHorizontalIcon
            className="h-6 w-6 text-primary-300"
            aria-hidden="true"
          />
        </button>
      </div>
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel className="fixed inset-0 z-30 overflow-y-auto bg-gray-50 px-6 py-6 lg:hidden">
          <div className="flex items-center justify-between mb-4">
            <Logo />
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <GroupClassesFilter />
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};
