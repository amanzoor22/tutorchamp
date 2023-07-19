import React, { useState } from "react";
import StepOne from "./survey-steps/StepOne";
import StepTwo from "./survey-steps/StepTwo";
import StepThree from "./survey-steps/StepThree";
import StepFour from "./survey-steps/StepFour";
import StepFive from "./survey-steps/StepFive";
import StepSix from "./survey-steps/StepSix";
import { LeftArrow } from "../../components/globals/Icons";
import StepSeven from "./survey-steps/StepSeven";
import StepLast from "./survey-steps/StepLast";
import { Link } from "react-router-dom";

const SurveyPage = () => {
  const [step, setSteps] = useState(1);

  const handleSurvery = () => {
    setSteps(step + 1);
  };

  return (
    <section>
      {step === 8 ? (
        <StepLast />
      ) : (
        <div className="max-w-[23.75rem] mx-auto relative p-4 md:p-6">
          <div className="flex justify-between items-center">
            {step === 1 ? (
              <Link to="/search">
                <LeftArrow className="h-6 w-6  text-primary-400" />
              </Link>
            ) : (
              <button type="button" onClick={() => setSteps(step - 1)}>
                <LeftArrow className="h-6 w-6  text-primary-400" />
              </button>
            )}
            <button
              className="text-primary-300 font-medium"
              type="button"
              onClick={() => setSteps(step + 1)}
            >
              Skip
            </button>
          </div>
          <div className="my-6">
            {step === 1 && <StepOne />}
            {step === 2 && <StepTwo />}
            {step === 3 && <StepThree />}
            {step === 4 && (
              <div className="">
                <StepFour /> <br />
                <button
                  className="text-primary-200 hover:text-primary-300 text-lg font-semibold"
                  type="button"
                  onClick={() => setSteps(step + 1)}
                >
                  I don't know yet
                </button>
              </div>
            )}
            {step === 5 && <StepFive />}
            {step === 6 && <StepSix />}
            {step === 7 && <StepSeven />}
          </div>

          <div className="pb-4 fixed bottom-0 inset-x-1/2 -translate-x-2/4 bg-white w-[18rem] sm:w-[23.75rem] mx-auto">
            <button
              type="button"
              className="px-4 py-3 w-full rounded-xl active:scale-95 hover:bg-primary-400 bg-primary-300 text-white"
              onClick={handleSurvery}
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default SurveyPage;
