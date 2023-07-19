import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AppContext } from "../TutorSignupPage";
import { useContext } from "react";
import {
  TrashIcon,
  MinusIcon,
  ClipboardIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";

const Certification = () => {
  const { step, setSteps, setTutorData, tutorData, signupTutorData } =
    useContext(AppContext);
  const schema = yup.object().shape({
    subject: yup.string().required("Subject is required"),
    Certification: yup.string().required("Certification is required"),
    desc: yup.string().required("Description is required"),
    text: yup.string().required("Issued by  is required"),

    //password: yup.string().min(8).required("Password is required")
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitCertification = (data) => {
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
      onSubmit={handleSubmit(submitCertification)}
      className="bg-white p-6 lg:shadow lg:max-w-2xl mx-auto"
    >
      <div>
        {/* Certificate */}
        <div className="py-2">
          <h1 className="text-xl font-semibold py-2">Teaching certification</h1>
          <p className="text-gray-500 text-sm">
            Do you have teaching certificates?
          </p>
          <div className="py-2">
            <label className=""> Subject</label>
            <div className="flex   min-w-full ">
              <select
                {...register("subject")}
                className="w-full rounded"
                type="text"
                placeholder="Search by language or specialty"
              >
                <option value="English">English</option>
                <option value="Germany">Germany</option>
              </select>
              <TrashIcon className="h-5 w-5 my-auto pl-1" />

              <span className="text-red-400"> {errors.subject?.message}</span>
            </div>
          </div>
          <div className="py-2">
            <label className=""> Certificate</label>

            <select
              {...register("Certification")}
              className="w-full rounded"
              type="text"
              placeholder="Search by language or specialty"
            >
              <option value="Certificate 1">Certificate 1</option>
              <option value="Certificate 1">Certificate </option>
            </select>
            <span className="text-red-400">
              {" "}
              {errors.Certification?.message}
            </span>
          </div>
          <div className="py-2">
            <label className=""> Description</label>

            <input
              type="text"
              className="w-full rounded"
              {...register("desc")}
            />
            <span className="text-red-400"> {errors.desc?.message}</span>
          </div>
          <div className="py-2">
            <label className=""> Issued by</label>

            <input
              type="text"
              className="w-full rounded"
              {...register("text")}
            />
            <span className="text-red-400"> {errors.text?.message}</span>
          </div>

          <div className="py-2 w-full">
            <label className="">Years of study</label>
            <div className="flex">
              <select
                className="w-full rounded"
                type="search"
                placeholder="Search by language or specialty"
              >
                <option value="Select..">Select..</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
              </select>
              <MinusIcon className="my-auto w-4 mx-2 h-5" />
              <select
                className="w-full rounded"
                type="search"
                placeholder="Search by language or specialty"
              >
                <option value="Select..">Select..</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
              </select>
            </div>
          </div>
          <div className=" bg-gray-100  min-w-full p-5 my-3 rounded">
            <div className="flex">
              <ClipboardIcon className="w-5 h-5 my-auto mr-2" />
              <h1>Get a "Certificate verified" badge</h1>
            </div>
            <div>
              <p className="text-sm py-2 text-gray-500">
                Upload your certificate to increase credibility of your profile
              </p>
              <div className="flex items-center">
                <label
                  htmlFor="certificate-upload"
                  className="cursor-pointer text-gray-500 border-2 px-2 py-1 text-sm bg-white hover:bg-primary-200 hover:text-white border-gray-300"
                >
                  Upload
                </label>
                <input
                  id="certificate-upload"
                  name="certificate-upload"
                  hidden
                  type="file"
                />
                <p className="ml-2 text-sm text-gray-500">
                  JPG or PNG format, maximum size of 20MB.
                </p>
              </div>
            </div>
          </div>
          <button type="button" className="flex py-2 mt-3">
            <PlusCircleIcon className="h-5 w-5 my-auto fill-primary-200 text-white" />
            <span className="text-primary-300 text-sm ml-1">
              Add another education
            </span>
          </button>
          <div className="flex items-start py-3">
            <div className="flex items-center h-5">
              <input id="terms" type="checkbox" className="rounded" required />
            </div>
            <label
              for="terms"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-600"
            >
              I dont have any teaching certificate yet
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

export default Certification;
