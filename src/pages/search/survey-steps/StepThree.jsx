import React from "react";
import { useState } from "react";

const popularOptions = [
  { label: "Bussiness English" },
  { label: "Conversational English" },
  { label: "Intensive English" },
  { label: "English for beginners" },
  { label: "English for traveling" },
  { label: "For studying abroad" },
  { label: "English Literature" },
];

const kidsOptions = [{ label: "English for kids" }];

const regionalAccentsOptions = [
  { label: "American English" },
  { label: "British English" },
  { label: "Canadian English" },
  { label: "Australian English" },
];

const testPreparationOptions = [
  { label: "IELTS" },
  { label: "TOEFL" },
  { label: "CAE" },
  { label: "FCE" },
  { label: "ESOL" },
  { label: "ACT English" },
  { label: "SAT Writing" },
  { label: "AP English" },
  { label: "GMAT" },
  { label: "Ap english language & composition" },
  { label: "TOEIC" },
  { label: "BEC" },
  { label: "OET" },
  { label: "PTE" },
  { label: "CAEL" },
  { label: "ICAS English" },
];

const learningDisabilitiesOptions = [
  { label: "English for ADHD students" },
  { label: "English for dyslexic students" },
  { label: "English for students with Asperger's syndrome" },
];

const StepThree = () => {
  const [show, setshow] = useState(false);

  return (
    <fieldset>
      <div>
        <div>
          <h1 className="text-2xl mb-3 font-semibold">
            Anything you’d like to focus on?
          </h1>
        </div>
        <h1 className="text-lg font-medium ">Popular</h1>
        {/* Popular */}
        <div className="space-y-2">
          {popularOptions.map((option) => (
            <div key={`popular-${option.id}`}>
              <input
                id={`popular${option.label}`}
                type="checkbox"
                value=""
                className="w-4 h-4 border-gray-300 text-primary-300 hover:border-gray-500 mx-2 dark:focus:ring-primary-300 focus:ring-0"
              />
              <label
                className="text-gray-500 font-normal"
                htmlFor={`popular${option.label}`}
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
        {/* on show button click */}
        <button
          type="button"
          onClick={() => setshow(!show)}
          className=" font-bold mt-2"
        >
          {" "}
          {show === true ? "" : "Show all"}
        </button>
        {show && (
          <div className="space-y-2 overflow-auto pb-20">
            {/* kids */}
            <div className="kids">
              <h1 className="text-lg font-medium ">Kids</h1>
              <div className="space-y-2">
                {kidsOptions.map((option) => (
                  <div key={`kids-${option.id}`}>
                    <input
                      id={`kids${option.label}`}
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border-gray-300 text-primary-300 hover:border-gray-500 mx-2 dark:focus:ring-primary-300 focus:ring-0"
                    />
                    <label
                      className="text-gray-500 font-normal"
                      htmlFor={`kids${option.label}`}
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            {/* Regional accents */}
            <div className="regional-accents">
              <h1 className="text-lg font-medium">Regional accents</h1>
              <div className="space-y-2">
                {regionalAccentsOptions.map((option) => (
                  <div key={`regional-accents-${option.id}`}>
                    <input
                      id={`regional-accents-${option.label}`}
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border-gray-300 text-primary-300 hover:border-gray-500 mx-2 dark:focus:ring-primary-300 focus:ring-0"
                    />
                    <label
                      className="text-gray-500 font-normal"
                      htmlFor={`regional-accents-${option.label}`}
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            {/* Test Preparation */}
            <div className="test-preparation">
              <h1 className="text-lg font-medium ">Test preparation</h1>
              <div className="space-y-2">
                {testPreparationOptions.map((option) => (
                  <div key={`test-preparation-${option.id}`}>
                    <input
                      id={`test-preparation${option.label}`}
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border-gray-300 text-primary-300 hover:border-gray-500 mx-2 dark:focus:ring-primary-300 focus:ring-0"
                    />
                    <label
                      className="text-gray-500 font-normal"
                      htmlFor={`test-preparation${option.label}`}
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            {/* Learning disabilities */}
            <div className="learning-disabilities">
              <h1 className="text-lg font-medium ">Learning disabilities</h1>
              <div className="space-y-2">
                {learningDisabilitiesOptions.map((option) => (
                  <div key={`learning-disabilities-${option.id}`}>
                    <input
                      id={`learning-disabilities${option.label}`}
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border-gray-300 text-primary-300 hover:border-gray-500 mx-2 dark:focus:ring-primary-300 focus:ring-0"
                    />
                    <label
                      className="text-gray-500 font-normal"
                      htmlFor={`learning-disabilities${option.label}`}
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </fieldset>
  );
};

export default StepThree;
