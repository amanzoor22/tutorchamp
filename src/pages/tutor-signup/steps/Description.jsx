import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AppContext } from "../TutorSignupPage";
import { useContext } from "react";

const Description = () => {
  const { step, setSteps, signupTutorData, setTutorData, tutorData } =
    useContext(AppContext);
  const schema = yup.object().shape({
    description: yup.string().required("Description is required"),
    intro: yup.string().required("Introduction is required"),
    exp: yup.string().required("Experience Description is required"),
    lesson: yup.string().required("Motivational Message is required"),

    //password: yup.string().min(8).required("Password is required")
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const descriptionSubmit = (data) => {
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
      onSubmit={handleSubmit(descriptionSubmit)}
      className="bg-white p-6 lg:shadow lg:max-w-2xl mx-auto"
    >
      {/* description */}
      <div>
        <h1 className="text-xl font-semibold py-2">Profile description</h1>
        <p className="mb-1">Update or create a new profile</p>
        <h1 className="font-semibold py-1">
          Description for English-speaking students
        </h1>
        <div className="mb-1">
          <img
            src="/images/card1.png"
            alt=""
            className="rounded-full w-10 h-10 "
          />
        </div>
      </div>
      <div className="mt-4">
        <label>Akunna N.</label>
        <div>
          <input
            {...register("description")}
            type="text"
            placeholder="I have been teaching english informally fo"
            className="w-full rounded"
          />

          <span className="mt-1 text-sm text-gray-600">
            Good example:"Certified tutor with 5 years of experience"
          </span>
        </div>
        <span className="text-red-400"> {errors.description?.message}</span>
      </div>

      <div className="mt-4">
        <label className="text-sm">
          Introduce yourself and share briefly about your interest
        </label>

        <textarea
          {...register("intro")}
          rows={5}
          className="w-full rounded"
          placeholder="My name is Nancy I live in Germany. I love to teach as it has been a
            passion since forever."
        ></textarea>

        <span className="text-red-400"> {errors.intro?.message}</span>
      </div>
      <div className="mt-4">
        <label className="text-sm">
          Describe your teaching experience, certification and methadology
        </label>

        <textarea
          {...register("exp")}
          rows={5}
          className="w-full rounded"
          placeholder=" I have 10 years of teaching english language to both kids and adults"
        ></textarea>

        <span className="text-red-400"> {errors.exp?.message}</span>
      </div>
      <div className="mt-4">
        <label className="text-sm">
          Motivate students to book a trial lesson with you
        </label>

        <textarea
          {...register("lesson")}
          rows={5}
          className="w-full rounded"
          placeholder="Book your trial class so we can discuss your goals and trailor them
            to achieving great success. There is no fear in learning ,I will
            make it as easy as possible at your own pace."
        ></textarea>

        <span className="text-red-400"> </span>
        <span className="mt-1 text-sm text-gray-600">
          400 characters minimum. 410 characters currently.
        </span>
      </div>
      <span className="text-red-400">{errors.lesson?.message}</span>
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

export default Description;
