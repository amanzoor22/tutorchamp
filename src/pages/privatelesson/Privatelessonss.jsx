import React from "react";
import LayoutOutSide from "../../components/Layouts/LayoutOutSide";
import Container from "../../components/globals/Container";

import Jamecard from "./Jamecard";

const Privatelessons = () => {
  return (
    <LayoutOutSide>
      <Container>
        <div className="mx-auto max-w-2xl lg:text-center mt-8 mb-4">
          <h2 className="text-sm font-semibold leading-7 text-primary-300 uppercase">
            private classes
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Find an Online English Teacher to Help You Master in English
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Are you trying to become fluent in English? Do you need to improve
            your English skills for school, work or relocation? On Preply, you
            get access to a range of online English tutors for private lessons.
          </p>
        </div>

        <div className="md:w-[80%] sm:w-[full] w-full sm:mx-auto sm:p-4 space-y-6 mb-6">
          <Jamecard />
          <Jamecard />
          <Jamecard />
        </div>
      </Container>
    </LayoutOutSide>
  );
};

export default Privatelessons;
