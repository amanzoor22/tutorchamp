import { Popover } from "@headlessui/react";

import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Logo from "./Logo";
import Slider from "rc-slider";

export const DropDownFilterBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [showText, setShowText] = useState(true);
  const [priceRange, setPriceRange] = useState([50, 100]);

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  const handleToggle = () => {
    setShowText(!showText);
    setShowInput(!showInput);
  };
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-8 gap-4">
        <Popover as="div" className="relative xl:col-span-2">
          <Popover.Button className="h-full flex flex-col  rounded-lg  w-full justify-center gap-x-1.5  bg-white px-3 py-2 shadow-lg focus:outline-none hover:bg-gray-50">
            <div className="flex justify-between items-center w-full">
              <div className="">
                <div className="flex text-gray-500 text-xs font-normal">
                  {" "}
                  I WANT TO LEARN
                </div>
                <div className="grid grid-cols-2 justify-between items-center ">
                  <div className="text-sm my-1 font-normal">Language</div>
                </div>
              </div>
              <div className="">
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />{" "}
              </div>
            </div>
          </Popover.Button>

          <Popover.Panel className="absolute right-0 z-10 mt-2  w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="relative block text-left">
              <input
                placeholder="Select Subject"
                className="block focus:outline-none w-full bg-white p-2 hover:bg-gray-50"
              />
            </div>
            <div className="flex flex-col gap-2">
              <a className="hover:bg-slate-100 p-2" href="//">
                English
              </a>

              <a className="hover:bg-slate-100 p-2" href="//">
                Spanish
              </a>

              <a className="hover:bg-slate-100 p-2" href="//">
                French
              </a>

              <a className="hover:bg-slate-100 p-2" href="//">
                React Js
              </a>

              <a className="hover:bg-slate-100 p-2" href="//">
                Node Js
              </a>

              <a className="hover:bg-slate-100 p-2" href="//">
                Urdu
              </a>
            </div>
          </Popover.Panel>
        </Popover>

        <Popover as="div" className="relative xl:col-span-2">
          <Popover.Button
            onClick={handleToggle}
            className="h-full flex flex-col  rounded-lg  w-full justify-center gap-x-1.5  bg-white px-3 py-2 shadow-lg  hover:bg-gray-50"
          >
            {" "}
            <div className="flex justify-between items-center w-full">
              <div className="">
                <div className="flex text-gray-500 text-xs font-normal">
                  {" "}
                  PRICE PER LESSON
                </div>
                <div className="grid grid-cols-2 justify-between items-center ">
                  <div className="text-sm my-1 font-normal">
                    {priceRange[0]} - {priceRange[1]} $
                  </div>
                </div>
              </div>
              <div className="">
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />{" "}
              </div>
            </div>
          </Popover.Button>

          <Popover.Panel className="absolute right-0 z-10 mt-2 lg:w-72 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="flex flex-col justify-center items-center gap-4 p-4">
              <h1 className="font-normal text-lg">
                {priceRange[0]} - {priceRange[1]} $
              </h1>
              <Slider
                range={true}
                className="w-full"
                min={0}
                max={100}
                defaultValue={priceRange}
                onChange={handlePriceChange}
              />
            </div>
          </Popover.Panel>
        </Popover>

        <Popover as="div" className="relative xl:col-span-2">
          <Popover.Button
            onClick={handleToggle}
            className="h-full flex flex-col rounded-lg w-full justify-center gap-x-1.5  bg-white px-3 py-2 shadow-lg  hover:bg-gray-50"
          >
            <div className="flex justify-between items-center w-full">
              <div className="">
                <div className="flex text-gray-500 text-xs font-normal">
                  {" "}
                  COUNTRY OF BIRTH
                </div>
                <div className="grid grid-cols-2 justify-between items-center ">
                  <div className="text-sm my-1 font-normal">Any country</div>
                </div>
              </div>
              <div className="">
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />{" "}
              </div>
            </div>
          </Popover.Button>

          <Popover.Panel className="absolute right-0 z-10 mt-2  lg:w-72 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="p-1">
              <input
                placeholder="Type to Search..."
                className="w-full"
                type="search"
              />
            </div>

            <h1 className="mx-2 my-2 text-xs font-normal">POPULAR</h1>

            <div className="flex items-center">
              <input type="checkbox" id="pakistan" className=" rounded mx-2" />
              <label htmlFor="pakistan" className=" text-base text-gray-500">
                Pakistan
              </label>
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="us" className=" rounded mx-2" />
              <label htmlFor="us" className=" text-base text-gray-500">
                United States Of America
              </label>
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="uk" className=" rounded mx-2" />
              <label htmlFor="uk" className=" text-base text-gray-500">
                United Kingdom
              </label>
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="as" className=" rounded mx-2" />
              <label htmlFor="as" className=" text-base text-gray-500">
                Australia
              </label>
            </div>

            <h1 className=" mx-2 my-2 text-xs font-normal">ALL COUNTRIES</h1>

            <div className="flex items-center">
              <input type="checkbox" id="india" className=" rounded mx-2" />
              <label htmlFor="india" className=" text-base text-gray-500">
                India
              </label>
            </div>

            <div className="flex items-center pb-2">
              <input type="checkbox" id="italy" className="rounded  mx-2" />
              <label htmlFor="italy" className=" text-base  text-gray-500">
                Italy
              </label>
            </div>
          </Popover.Panel>
        </Popover>

        <Popover as="div" className="relative xl:col-span-2">
          <Popover.Button
            onClick={handleToggle}
            className="h-full flex flex-col  rounded-lg w-full justify-center gap-x-1.5  bg-white px-3 py-2 shadow-lg  hover:bg-gray-50"
          >
            <div className="flex justify-between items-center w-full">
              <div className="">
                <div className="flex text-gray-500 text-xs font-normal">
                  {" "}
                  I'M AVAILABLE
                </div>
                <div className="grid grid-cols-2 justify-between items-center ">
                  <div className="text-sm my-1 font-normal">Any Time</div>
                </div>
              </div>
              <div className="">
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />{" "}
              </div>
            </div>
          </Popover.Button>

          <Popover.Panel className="absolute right-0 z-10 mt-2 lg:w-72 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="p-1">
              <input placeholder="Select Time" type="time" className="w-full" />
            </div>
          </Popover.Panel>
        </Popover>

        <Popover as="div" className="relative xl:col-span-1">
          <Popover.Button className="h-full rounded-lg w-full  gap-x-1.5  bg-white px-3 py-2 shadow-lg  hover:bg-gray-50">
            <div className="flex justify-between items-center ">
              <div className="text-sm my-1 font-normal">Specialties</div>
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />{" "}
            </div>
          </Popover.Button>

          <Popover.Panel className="absolute left-0 z-10 mt-2 pb-2 lg:w-60 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <h1 className="mx-2 my-2 text-xs font-normal">SUBJECTS</h1>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="Businessenglish"
                className="rounded mx-2 "
                base
              />
              <label
                htmlFor="Businessenglish"
                className=" text-sm text-gray-500"
              >
                Business English
              </label>
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="ce" className="rounded mx-2 " />
              <label htmlFor="ce" className=" text-base text-gray-500">
                Conversation English
              </label>
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="ie" className="rounded mx-2 " />
              <label htmlFor="ie" className=" text-base text-gray-500">
                Intense English
              </label>
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="be" className="rounded mx-2 " />
              <label htmlFor="be" className=" text-base text-gray-500">
                Business English
              </label>
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="cne" className="rounded mx-2 " />
              <label htmlFor="cne" className=" text-base text-gray-500">
                Conversation English
              </label>
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="iee" className="rounded mx-2 " />
              <label htmlFor="iee" className=" text-base text-gray-500">
                Intense English
              </label>
            </div>
          </Popover.Panel>
        </Popover>

        <Popover as="div" className="relative xl:col-span-1">
          <Popover.Button className="h-full rounded-lg w-full  gap-x-1.5  bg-white px-3 py-2 shadow-lg  hover:bg-gray-50">
            <div className="flex justify-between items-center ">
              <div className="text-sm my-1 font-normal">Also Speaks</div>
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
          </Popover.Button>

          <Popover.Panel className="absolute left-0 z-10 mt-2 pb-1 lg:w-60 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="p-1">
              <input
                placeholder="Type to Search..."
                className="w-full"
                type="search"
              />
            </div>

            <div className="flex items-center">
              <input type="checkbox" className="rounded mx-2" id="urdu" />
              <label htmlFor="urdu" className=" text-base text-gray-500">
                Urdu
              </label>
            </div>

            <div className="flex items-center">
              <input type="checkbox" className="rounded mx-2" id="english" />
              <label htmlFor="english" className=" text-base text-gray-500">
                English
              </label>
            </div>

            <div className="flex items-center">
              <input type="checkbox" className="rounded mx-2" id="Arabic" />
              <label htmlFor="Arabic" className=" text-base text-gray-500">
                Arabic
              </label>
            </div>

            <div className="flex items-center">
              <input type="checkbox" className="rounded mx-2" id="hindi" />
              <label htmlFor="hindi" className=" text-base text-gray-500">
                Hindi
              </label>
            </div>

            <div className="flex items-center">
              <input type="checkbox" className="rounded mx-2" id="spanis" />
              <label htmlFor="spanis" className=" text-base text-gray-500">
                Spanish
              </label>
            </div>

            <div className="flex items-center">
              <input type="checkbox" className="rounded mx-2" id="italian" />
              <label htmlFor="italian" className=" text-base text-gray-500">
                Italian
              </label>
            </div>
          </Popover.Panel>
        </Popover>

        <Popover as="div" className="relative xl:col-span-1">
          <Popover.Button className="h-full rounded-lg w-full  gap-x-1.5  bg-white px-3 py-2 shadow-lg  hover:bg-gray-50">
            <div className="flex justify-between items-center ">
              <div className="text-sm my-1 font-normal">Professional</div>
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />{" "}
            </div>
          </Popover.Button>

          <Popover.Panel className="absolute  left-0 z-10 mt-2 pb-1 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="flex items-center pt-1">
              <input
                type="checkbox"
                id=" Only professional tutors"
                className="mx-2 rounded"
              />
              <label
                htmlFor=" Only professional tutors"
                className=" text-base text-gray-500 "
              >
                Only professional tutors
              </label>
            </div>
            <h1 className="mx-2 text-gray-500 text-xs text-center font-normal">
              Only show tutors with a teaching certificate or releavant
              education
            </h1>
          </Popover.Panel>
        </Popover>

        <Popover as="div" className="relative xl:col-span-2">
          <Popover.Button className="h-full rounded-lg  w-full  gap-x-1.5  bg-white px-3 py-2 shadow-lg  hover:bg-gray-50">
            <div className="flex justify-between items-center ">
              <div className="text-sm my-1 font-normal whitespace-nowrap">
                Sort by: Relevance
              </div>
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />{" "}
            </div>
          </Popover.Button>

          <Popover.Panel className="absolute right-0 z-10 mt-2 py-1 lg:w-72 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="flex items-center">
              <input type="checkbox" id=" Relevance" className="rounded mx-2" />
              <label htmlFor=" Relevance" className=" text-md text-gray-500">
                Relevance
              </label>
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="Popularity" className="rounded mx-2" />
              <label htmlFor="Popularity" className=" text-md text-gray-500">
                Popularity
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id=" Price: highest first"
                className="rounded mx-2"
              />
              <label
                htmlFor=" Price: highest first"
                className=" text-md text-gray-500"
              >
                Price: highest first
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id=" Price: lowest first"
                className="rounded mx-2"
              />
              <label
                htmlFor=" Price: lowest first"
                className=" text-md text-gray-500"
              >
                Price: lowest first
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="Number of Reviews"
                className="rounded mx-2"
              />
              <label
                htmlFor="Number of Reviews"
                className=" text-md text-gray-500"
              >
                Number of Reviews
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="   Best Rating"
                className="rounded mx-2"
              />
              <label
                htmlFor="   Best Rating"
                className=" text-md text-gray-500"
              >
                Best Rating
              </label>
            </div>
          </Popover.Panel>
        </Popover>

        <form noValidate className="relative hidden lg:flex xl:col-span-3">
          <div className="flex items-center w-full relative">
            <input
              type="search"
              placeholder="Search by name or keyword"
              className="flex-1 border-0 focus:outline-none pl-3 pr-10 rounded-lg bg-white py-2 shadow-lg hover:bg-gray-50"
            />
            <MagnifyingGlassIcon className="h-6 w-6 absolute right-2 text-gray-500" />
          </div>
        </form>
      </div>
    </>
  );
};

export const DropDownMobFilterBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="bg-gray-100 p-4 lg:hidden">
      <div className=" flex justify-between items-center">
        <div className="flex items-center lg:hidden  ">
          <input
            placeholder="Search by name"
            className="flex flex-col focus:outline-none placeholder:text-gray-500  rounded-lg sm:w-72 w-full justify-center gap-x-1.5  bg-white px-3 py-2 shadow-md  hover:bg-gray-50"
          />
          <MagnifyingGlassIcon className="h-6 w-6 relative right-8 text-gray-500" />
        </div>
        <button
          type="button"
          className=" bg-white shadow-md inline-flex gap-2 font-normal hover:bg-gray-50 items-center lg:hidden  justify-center rounded-md p-2 "
          onClick={() => setMobileMenuOpen(true)}
        >
          {" "}
          Filter
          <Bars3Icon className="h-6 w-6 text-gray-950" aria-hidden="true" />
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
          <DropDownFilterBar />
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};
