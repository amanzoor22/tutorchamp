import React, { useState } from "react";
import { GlobeAltIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AppContext } from "../TutorSignupPage";
import { useContext } from "react";
const Availability = () => {
  const [sunday, setsunday] = useState(false);
  const [saturday, setsaturday] = useState(false);
  const [monday, setmonday] = useState(false);
  const [tuesday, settuesday] = useState(false);
  const [wednesday, setwednesday] = useState(false);
  const [thursday, setthursday] = useState(false);
  const [friday, setfriday] = useState(false);
  const { step, setSteps } = useContext(AppContext);
  const schema = yup.object().shape({
    // monday: yup.bool().required("This is required"),
    //mondayto: yup.string().required("This is required"),
    //password: yup.string().min(8).required("Password is required")
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitAvailability = (data) => {
    console.log(data);
    setSteps(step + 1);
  };

  const [show, setShow] = useState(true);
  const [showDetail, setShowDetail] = useState(false);

  const handleToggle = () => {
    setShowDetail(true);
    setShow(false);
  };
  return (
    <form
      onSubmit={handleSubmit(submitAvailability)}
      className="bg-white p-6 lg:shadow lg:max-w-2xl mx-auto"
    >
      <fieldset>
        <div>
          <div className=" space-y-2">
            <h1 className="text-xl font-semibold py-2">Avalability</h1>
            <h2 className="text-base font-semibold sm:ml-2 my-1">
              Set your Timezone
            </h2>
          </div>
          {show && (
            <div className="sm:ml-2 space-y-2 pb-6">
              <p className="text-base font-medium mt-3 text-gray-500">
                Is this is your current timezone ?
              </p>
              <p className="flex gap-x-2 font-semibold text-bold">
                <GlobeAltIcon className="h-6 w-6 text-primary-300" />
                Live time shown here
              </p>
              <div className="py-2 flex">
                <button
                  type="button"
                  onClick={handleToggle}
                  className="rounded w-14 bg-white disabled:hover:bg-transparent text-primary-300 border-2 border-primary-200 hover:text-white hover:bg-primary-200  px-3 py-1"
                >
                  Yes
                </button>
                <button
                  type="button"
                  className="ml-2 rounded w-14 bg-primary-200 hover:bg-primary-300 text-white  px-3 py-1"
                >
                  No
                </button>
              </div>
            </div>
          )}
          {showDetail && (
            <div className="sm:ml-2">
              <div className="space-y-2">
                <p className="text-base font-medium text-gray-500">
                  A correct timezone is essential to cordinate lessons with
                  international students
                </p>
                <div className="flex flex-col w-full">
                  <label className="text-base font-semibold">
                    Chose your timezone
                  </label>
                  <select
                    className="flex-1  min-w-full border-2 border-gray-300 py-1.5 font-medium capitalize   shadow-sm placeholder:text-primary-500  text-base text-secondary-900 sm:leading-6 rounded"
                    type="search"
                  >
                    <option value="19:21 ( GMT + 2 ) - Europe, Berlin">
                      19:21 ( GMT + 2 ) - Europe, Berlin
                    </option>
                    <option value="19:21 ( GMT + 2 ) - Europe, Berlin">
                      19:21 ( GMT + 2 ) - Europe, Berlin
                    </option>
                    <option value="19:21 ( GMT + 2 ) - Europe, Berlin">
                      19:21 ( GMT + 2 ) - Europe, Berlin
                    </option>
                  </select>
                </div>
              </div>
              <div className="mt-10 space-y-2 ">
                <h2 className="text-base font-semibold  my-1">
                  Set your Avalibillity
                </h2>
                <p className="text-base font-medium text-gray-500">
                  Avalibillity shows your potential working hours. Students can
                  book lesson at these times
                </p>
                <div className=" p-4 bg-gray-100">
                  <h1 className="flex sm:text-base text-sm font-medium items-center gap-1 ">
                    <ArrowTrendingUpIcon className="sm:h-6 sm:w-6 h-4 w-4  text-primary-300" />
                    Add peak hours to get more students
                  </h1>
                  <p className="text-sm font-normal">
                    Many students books lessons between 21:00 and 24:00. Add
                    time stats during these peak hours to increase your chances
                    level of getting booked
                  </p>
                </div>
              </div>
              <div className="mt-10 space-y-2 pb-4">
                <div className=" space-y-2">
                  <div className="flex  items-center gap-2">
                    <div className="flex items-center h-5">
                      <input
                        id="monday"
                        type="checkbox"
                        value=""
                        className="rounded"
                        {...register("monday")}
                        onChange={(event) => {
                          if (event.currentTarget.checked) {
                            alert("checked");
                            setmonday(true);
                          } else {
                            alert("not checked");
                            setmonday(false);
                          }
                        }}
                      />
                    </div>
                    <label htmlFor="monday" className="text-base font-semibold">
                      Monday
                    </label>
                  </div>
                  <div className=" flex  sm:gap-4 gap-2 items-center">
                    <input className="border-gray-400 h-9" type="time" />
                    <p>-</p>
                    <input
                      type="time"
                      className="border-gray-400 h-9"
                      {...register("mondayfrom")}
                    />
                    <button
                      type="button"
                      className="text-lg font-semibold bg-gray-100 px-2"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className=" space-y-2">
                  <div className="flex  items-center gap-2">
                    <div className="flex items-center h-5">
                      <input
                        id="Tuesday"
                        type="checkbox"
                        value=""
                        className="rounded bg-gray-50 focus:ring-3  dark:border-primary-400 :focus:ring-primary-400:ring-offset-primary-400 :focus:ring-offset-primary-400"
                        onChange={(event) => {
                          if (event.currentTarget.checked) {
                            alert("checked");
                            settuesday(true);
                          } else {
                            alert("not checked");
                            settuesday(false);
                          }
                        }}
                      />
                    </div>
                    <label
                      htmlFor="Tuesday"
                      className="text-base font-semibold"
                    >
                      Tuesday
                    </label>
                  </div>
                  <div className=" flex  sm:gap-4 gap-2 items-center">
                    <input className="border-gray-400 h-9" type="time" />
                    <p>-</p>
                    <input type="time" className="border-gray-400 h-9" />
                    <button
                      type="button"
                      className="text-lg font-semibold bg-gray-100 px-2"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className=" space-y-2">
                  <div className="flex  items-center gap-2">
                    <div className="flex items-center h-5">
                      <input
                        id="Wednesday"
                        type="checkbox"
                        value=""
                        className="rounded bg-gray-50 focus:ring-3  dark:border-primary-400 :focus:ring-primary-400:ring-offset-primary-400 :focus:ring-offset-primary-400"
                        onChange={(event) => {
                          if (event.currentTarget.checked) {
                            alert("checked");
                            setwednesday(true);
                          } else {
                            alert("not checked");
                            setwednesday(false);
                          }
                        }}
                      />
                    </div>
                    <label
                      htmlFor="Wednesday"
                      className="text-base font-semibold"
                    >
                      Wednesday
                    </label>
                  </div>
                  <div className=" flex  sm:gap-4 gap-2 items-center">
                    <input className="border-gray-400 h-9" type="time" />
                    <p>-</p>
                    <input type="time" className="border-gray-400 h-9" />
                    <button
                      type="button"
                      className="text-lg font-semibold bg-gray-100 px-2"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className=" space-y-2">
                  <div className="flex  items-center gap-2">
                    <div className="flex items-center h-5">
                      <input
                        id="Thursday"
                        type="checkbox"
                        value=""
                        className="rounded bg-gray-50 focus:ring-3  dark:border-primary-400 :focus:ring-primary-400:ring-offset-primary-400 :focus:ring-offset-primary-400"
                        onChange={(event) => {
                          if (event.currentTarget.checked) {
                            alert("checked");
                            setthursday(true);
                          } else {
                            alert("not checked");
                            setthursday(false);
                          }
                        }}
                      />
                    </div>
                    <label
                      htmlFor="Thursday"
                      className="text-base font-semibold"
                    >
                      Thursday
                    </label>
                  </div>
                  <div className=" flex  sm:gap-4 gap-2 items-center">
                    <input className="border-gray-400 h-9" type="time" />
                    <p>-</p>
                    <input type="time" className="border-gray-400 h-9" />
                    <button
                      type="button"
                      className="text-lg font-semibold bg-gray-100 px-2"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className=" space-y-2">
                  <div className="flex  items-center gap-2">
                    <div className="flex items-center h-5">
                      <input
                        id="Friday"
                        type="checkbox"
                        value=""
                        className="rounded bg-gray-50 focus:ring-3  dark:border-primary-400 :focus:ring-primary-400:ring-offset-primary-400 :focus:ring-offset-primary-400"
                        onChange={(event) => {
                          if (event.currentTarget.checked) {
                            alert("checked");
                            setfriday(true);
                          } else {
                            alert("not checked");
                            setfriday(false);
                          }
                        }}
                      />
                    </div>
                    <label htmlFor="Friday" className="text-base font-semibold">
                      Friday
                    </label>
                  </div>
                  <div className=" flex  sm:gap-4 gap-2 items-center">
                    <input className="border-gray-400 h-9" type="time" />
                    <p>-</p>
                    <input type="time" className="border-gray-400 h-9" />
                    <button
                      type="button"
                      className="text-lg font-semibold bg-gray-100 px-2"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className=" space-y-2">
                  <div className="flex  items-center gap-2">
                    <div className="flex items-center h-5">
                      <input
                        id="Saturday"
                        type="checkbox"
                        value=""
                        className="rounded bg-gray-50 focus:ring-3  dark:border-primary-400 :focus:ring-primary-400:ring-offset-primary-400 :focus:ring-offset-primary-400"
                        onChange={(event) => {
                          if (event.currentTarget.checked) {
                            alert("checked");
                            setsaturday(true);
                          } else {
                            alert("not checked");
                            setsaturday(false);
                          }
                        }}
                      />
                    </div>
                    <label
                      htmlFor="Saturday"
                      className="text-base font-semibold"
                    >
                      Saturday{" "}
                    </label>
                  </div>
                  <div className=" flex  sm:gap-4 gap-2 items-center">
                    <input className="border-gray-400 h-9" type="time" />
                    <p>-</p>
                    <input type="time" className="border-gray-400 h-9" />
                    <button
                      type="button"
                      className="text-lg font-semibold bg-gray-100 px-2"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className=" space-y-2">
                  <div className="flex  items-center gap-2">
                    <div className="flex items-center h-5">
                      <input
                        id="Sunday"
                        type="checkbox"
                        value=""
                        className="rounded bg-gray-50 focus:ring-3  dark:border-primary-400 :focus:ring-primary-400:ring-offset-primary-400 :focus:ring-offset-primary-400"
                        onChange={(event) => {
                          if (event.currentTarget.checked) {
                            alert("checked");
                            setsunday(true);
                          } else {
                            alert("not checked");
                            setsunday(false);
                          }
                        }}
                      />
                    </div>
                    <label htmlFor="Sunday" className="text-base font-semibold">
                      Sunday
                    </label>
                  </div>
                  <div className=" flex  sm:gap-4 gap-2 items-center">
                    <input className="border-gray-400 h-9" type="time" />
                    <p>-</p>
                    <input type="time" className="border-gray-400 h-9" />
                    <button
                      type="button"
                      className="text-lg font-semibold bg-gray-100 px-2"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </fieldset>
      <div className="mt-6 w-full flex gap-6">
        <button
          type="button"
          disabled
          className="rounded w-1/2 bg-white disabled:hover:bg-transparent disabled:text-gray-600 text-primary-400 border-2 border-primary-300 hover:text-white hover:bg-primary-300 mx-auto px-3 py-2 disabled:border-gray-400 disabled:opacity-40"
        >
          Back
        </button>
        <button
          type="submit"
          className="rounded w-1/2 bg-primary-300 hover:bg-primary-400 text-white mx-auto px-3 py-2"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Availability;
