import React, { useState } from "react";
import LayoutOutSide from "../../components/Layouts/LayoutOutSide";
// steps
import About from "./steps/About";
import Description from "./steps/Description";
import Certification from "./steps/Certification";
import Education from "./steps/Education";
import Container from "../../components/globals/Container";
import Panels from "./Panels";
import Availability from "./steps/Availability";
import Pricing from "./steps/Pricing";
import PhoneAndVideo from "./steps/PhoneAndVideo";
import { Link } from "react-router-dom";
import { createContext } from "react";
export const AppContext = createContext();
export const signupData = {};
const steps = [
  { id: 1, name: "About" },
  { id: 2, name: "Description" },
  { id: 3, name: "Certification" },
  { id: 4, name: "Phone & Video" },
  { id: 5, name: "Education" },
  { id: 6, name: "Availability" },
  { id: 7, name: "Pricing" },
];

const TutorSignupPage = () => {
  const [step, setSteps] = useState(1);
  const [tutorData, setTutorData] = useState({});
  const [profileImage, setProfileImage] = useState(null);

  const handleNext = (data) => {
    setSteps(step + 1);
  };

  const handlePrev = () => {
    setSteps(step - 1);
  };
  let signupTutorData = {};
  return (
    <AppContext.Provider
      value={{ step, setSteps, signupTutorData, setTutorData, tutorData }}
    >
      <LayoutOutSide>
        <section className="bg-gray-50">
          <div className="bg-white">
            <Container>
              <Panels steps={steps} step={step} />
            </Container>
          </div>
          <Container>
            <div className="py-12">
              {step === 1 && (
                <About
                  handlePrev={handlePrev}
                  handleNext={handleNext}
                  step={step}
                />
              )}
              {step === 2 && <Description />}
              {step === 3 && <Certification />}
              {step === 4 && (
                <PhoneAndVideo setProfileImage={setProfileImage} />
              )}
              {step === 5 && <Education />}
              {step === 6 && <Availability />}
              {step === 7 && <Pricing profileImage={profileImage} />}
            </div>
          </Container>
        </section>
      </LayoutOutSide>
    </AppContext.Provider>
  );
};

export default TutorSignupPage;
