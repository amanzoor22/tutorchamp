import { TrashIcon } from "@heroicons/react/24/outline";
import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AppContext, signupData } from "../TutorSignupPage";

import * as yup from "yup";

const About = () => {
  const { step, setSteps, signupTutorData, setTutorData, tutorData } =
    useContext(AppContext);
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter correct email format")
      .required("Email is required"),
    firstname: yup.string().required("First name is required"),
    lastname: yup.string().required("Last name is required"),
    password: yup.string().min(8).required("Password is required"),
    phoneNumber: yup.string(),
    //age: yup.bool(true).required("Please check that you are above 18"),

    //password: yup.string().min(8).required("Password is required")
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const registerForm = (data) => {
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
  //console.log(errors);

  /*const onSubmit = (data) => {
    console.log(data);
  };*/
  const [languageCount, setLanguageCount] = useState(1);

  const handleAddLanguage = () => {
    setLanguageCount(languageCount + 1);
  };

  const handleDeleteLanguage = (index) => {
    setLanguageCount(languageCount - 1);
  };

  const languageSections = [];

  for (let i = 0; i < languageCount; i++) {
    languageSections.push(
      <div className="py-2" key={i}>
        <div className="flex gap-3 w-full">
          <div className="flex flex-col w-[50%]">
            <label className="mb-1 line-clamp-1"> Languages spoken</label>
            <select
              disabled={i > 0 ? false : true}
              className="w-full rounded disabled:bg-gray-200"
              placeholder="Search by language or specialty"
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="Germany">Germany</option>
              <option value="Japanese">Japanese</option>
              <option value="Arabic">Arabic</option>
            </select>
          </div>
          <div className="flex flex-col w-[50%]">
            <label className="mb-1 line-clamp-1">Level</label>
            <select
              {...register("level")}
              className="w-full rounded"
              placeholder="Search by language or specialty"
            >
              <option value="Native">Native</option>
              <option value="Basic">Basic</option>
              <option value="Bilingual">Bilingual</option>
            </select>
          </div>
          {i > 0 && (
            <button
              type="button"
              className="text-red-400 hover:text-red-500 text-sm mt-5"
              onClick={() => handleDeleteLanguage(i)}
            >
              <TrashIcon className="h-6 w-6" />
            </button>
          )}
        </div>
      </div>
    );
  }

  //c

  return (
    <form
      onSubmit={handleSubmit(registerForm)}
      className="bg-white p-6 lg:shadow lg:max-w-2xl mx-auto"
    >
      <div>
        <h1 className="text-xl font-semibold py-2 flex-none">About</h1>
        <div className="py-2">
          <label className="mb-1 block"> First name</label>
          <input
            type="text"
            placeholder="Akunna"
            className="w-full rounded"
            id="firstname"
            name="firstname"
            {...register("firstname")}
          />

          <p className="text-red-400"> {errors.firstname?.message}</p>
        </div>
        <div className="py-2">
          <label className="mb-1 block">Last name</label>
          <input
            type="text"
            placeholder="Nwaturucha"
            className="w-full rounded"
            id="lastname"
            name="lastname"
            {...register("lastname")}
          />

          <p className="text-red-400"> {errors.lastname?.message}</p>
        </div>
        <div className="py-2">
          <label className="mb-1 block"> Email</label>
          <input
            type="text"
            placeholder="akunna.okoro@gmail.com"
            className="w-full rounded"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-400"> {errors.email?.message}</span>
          )}
          <span className="text-red-400"> {errors.email?.message}</span>
        </div>
        <div className="py-2" data-te-input-wrapper-init>
          <label className="mb-1 block">Password</label>
          <input
            type="password"
            className="peer block min-h-[auto] w-full rounded border-1 border-gray-400 h-14 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            placeholder="Password"
            id="password"
            name="password"
            autoComplete="current-password"
            //value={password}
            // onChange={(e) => setPassword(e.target.value)}
            {...register("password")}
          />

          <span className="text-red-400"> {errors.password?.message}</span>
        </div>
        <div className="py-2">
          <label className="mb-1 block"> Country of origin</label>
          <select
            className="w-full rounded"
            placeholder="Search by language or specialty"
            {...register("country")}
          >
            <option value="Germany">Germany</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="English">English</option>
            <option value="Japanese">Japanese</option>
            <option value="Arabic">Arabic</option>
          </select>
          {errors.countries && (
            <span className="text-red-400"> {errors.country?.message}</span>
          )}
          <span className="text-red-400"> {errors.country?.message}</span>
        </div>
        <div className="pb-2">
          {languageSections}
          <button
            type="button"
            className="text-primary-300 hover:text-primary-400 text-base"
            onClick={handleAddLanguage}
          >
            Add another language
          </button>
        </div>
        <div className="py-2">
          <label className="mb-1 block"> Subject taught</label>
          <select
            className="w-full rounded"
            type="search"
            placeholder="Search by language or specialty"
            {...register("language")}
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="Germany">Germany</option>
            <option value="Japanese">Japanese</option>
            <option value="Arabic">Arabic</option>
          </select>
          {errors.languages && (
            <span className="text-red-400"> {errors.langauge?.message}</span>
          )}
          <span className="text-red-400"> {errors.langauge?.message}</span>
        </div>
        <div className="py-2">
          <label className="mb-1 block">
            {" "}
            Describe your teaching experience
          </label>
          <select
            className="w-full rounded"
            type="search"
            placeholder="Search by language or specialty"
            {...register("teachingExperience")}
          >
            <option value="I have taught in an informal setting">
              I have taught in an informal setting
            </option>
            <option value="Spanish">Spanish</option>
          </select>
          {errors.exp && (
            <span className="text-red-400">
              {errors.teachingExperience?.message}
            </span>
          )}
          <span className="text-red-400">
            {errors.teachingExperience?.message}
          </span>
        </div>
        <div className="py-2">
          <label className="mb-1 block"> Describe your current situation</label>
          <select
            className="w-full rounded"
            type="search"
            placeholder="Search by language or specialty"
            {...register("currentSituation")}
          >
            <option value="I have other commitments">
              I have other commitments
            </option>
            <option value="Spanish">Spanish</option>
          </select>
          {errors.comm && (
            <span className="text-red-400">
              {" "}
              {errors.currentSituation?.message}
            </span>
          )}
          <span className="text-red-400">
            {" "}
            {errors.currentSituation?.message}
          </span>
        </div>
        <div className="py-2 ">
          <label className="mb-1 block">
            Phone number <span className="text-gray-500">(optional)</span>
          </label>

          <input
            className="w-full rounded"
            type="number"
            placeholder="Search by language or specialty"
            {...register("phoneNumber")}
          />
        </div>
        <div>
          <h2 className="mb-2">Age</h2>
          <div className="flex ">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                value=""
                className="rounded"
                {...register("age")}
              />
            </div>
            <label
              htmlFor="terms"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-600"
            >
              I confirm I'm over 18
            </label>
            <span className="text-red-400"> {errors.age?.message}</span>
          </div>
        </div>
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
      </div>
    </form>
  );
};

export default About;
