import React from "react";
import { useForm } from "react-hook-form";
import {
  TrashIcon,
  MinusIcon,
  PlusCircleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AppContext } from "../TutorSignupPage";
import { useContext } from "react";
const Education = () => {
  const { step, setSteps, signupTutorData, tutorData, setTutorData } =
    useContext(AppContext);
  const schema = yup.object().shape({
    uni: yup.string().required("University is required"),
    degree: yup.string().required("Degree is required"),
    degreetype: yup.string().required("Degree Type is required"),
    spec: yup.string().required("Sepcialization  is required"),

    //password: yup.string().min(8).required("Password is required")
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitEducation = (data) => {
    Object.assign(signupTutorData, data);
    //signupData = { ...signupData, ...data };
    //setTutorData(...tutorData, ...data);
    setTutorData((prevState) => ({
      ...prevState,
      ...data,
    }));
    console.log("1", tutorData);
    console.log("2", signupTutorData);
    // console.log("3", signupData);
    setSteps(step + 1);
    console.log(step);
  };
  const handlePrev = () => {
    setSteps(step - 1);
  };
  return (
    <form
      onSubmit={handleSubmit(submitEducation)}
      className="bg-white p-6 lg:shadow lg:max-w-2xl mx-auto"
    >
      <div>
        {/* Education */}

        <div className="py-2">
          <h1 className="text-xl font-semibold py-2">Education</h1>
          <p className="text-gray-500 text-sm">
            Tell students more about the higher education that you have
            completed
          </p>
          <ul>
            <li className="py-2">
              <label> University</label>
              <div className="flex ">
                <input
                  {...register("uni")}
                  type="text"
                  placeholder="Bedfordshire"
                  className="flex-1 rounded"
                />
                <TrashIcon className="h-5 w-5 my-auto pl-1" />
              </div>
              <span className="text-red-400"> {errors.uni?.message}</span>
            </li>
            <li className="py-2">
              <label> Degree</label>

              <input
                {...register("degree")}
                type="text"
                placeholder="Masters in international business"
                className="w-full rounded"
              />
              <span className="text-red-400"> {errors.degree?.message}</span>
            </li>
            <li className="py-2">
              <label> Degree type</label>

              <select
                {...register("degreetype")}
                className="w-full rounded"
                type="text"
                placeholder="Search by language or specialty"
              >
                <option value="Other degree">Other degree</option>
                <option value="MBA">MBA</option>
              </select>
              <span className="text-red-400">
                {" "}
                {errors.degreetype?.message}
              </span>
            </li>
            <li className="py-2">
              <label> Specialization</label>

              <input
                {...register("spec")}
                type="text"
                placeholder="Teaching English as a foriegn language"
                className="w-full rounded"
              />
              <span className="text-red-400"> {errors.spec?.message}</span>
              <div className="py-2 w-full">
                <label>Years of study</label>
                <div className="flex">
                  <select
                    className="w-full rounded"
                    type="search"
                    placeholder="Search by language or specialty"
                  >
                    <option value="2003">2012</option>
                    <option value="2004">2013</option>
                  </select>
                  <MinusIcon className="my-auto w-4 mx-1 h-5" />
                  <select
                    className="w-full rounded"
                    type="search"
                    placeholder="Search by language or specialty"
                  >
                    <option value="2008">2014</option>
                    <option value="2009">2015</option>
                  </select>
                </div>
              </div>
            </li>
            <li className="bg-gray-100 p-5 my-3 rounded">
              <div className="flex">
                <UserIcon className="w-5 h-5 my-auto mr-2" />
                <h1>Get a "Diploma verified" badge</h1>
              </div>
              <div>
                <p className="text-sm py-2 text-gray-500">
                  Upload your diploma to boost your credibility! Our team will
                  review it.
                </p>
                <div className="flex items-center">
                  <label
                    htmlFor="badge-upload"
                    className="cursor-pointer text-gray-500 border-2 px-2 py-1 text-sm bg-white hover:bg-primary-200 hover:text-white border-gray-300"
                  >
                    Upload
                  </label>
                  <input
                    id="badge-upload"
                    name="badge-upload"
                    hidden
                    type="file"
                  />
                  <p className="ml-2 text-sm text-gray-500">
                    JPG or PNG format, maximum size of 20MB.
                  </p>
                </div>
              </div>
            </li>
          </ul>

          <button type="button" className="flex py-2 mt-3">
            <PlusCircleIcon className="h-5 w-5 my-auto fill-primary-200 text-white" />
            <span className="text-primary-300 text-sm ml-1">
              Add another education
            </span>
          </button>

          <div className="flex items-start py-3">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3  dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              for="terms"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-600"
            >
              I dont have a higher education degree
            </label>
          </div>
        </div>
      </div>
      <div className="mt-6 w-full flex gap-6">
        <button
          type="button"
          onClick={handlePrev}
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

export default Education;
