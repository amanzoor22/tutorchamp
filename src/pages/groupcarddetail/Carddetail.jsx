import React from "react";
import LayoutOutSide from "../../components/Layouts/LayoutOutSide";
import Container from "../../components/globals/Container";
import Justspeak from "./sections/Justspeak";
import Sidecard3 from "./sections/Sidecard3";
import TaughtJoel from "./sections/TaughtJoel";
import AboutCourse from "./sections/AboutCourse";
import Reviews25 from "./sections/Reviews25";
import Cards2 from "./sections/Cards2";

const Carddetail = () => {
  return (
    <div>
      <LayoutOutSide>
        <Container>
          <div className="lg:flex">
            <div className="lg:flex-[2]">
              <Justspeak />
              <TaughtJoel />
              <AboutCourse />
              <Reviews25 />
            </div>
            <div className="lg:flex-1">
              <Sidecard3 />
            </div>
          </div>
          <Cards2 />
        </Container>
      </LayoutOutSide>
    </div>
  );
};

export default Carddetail;
