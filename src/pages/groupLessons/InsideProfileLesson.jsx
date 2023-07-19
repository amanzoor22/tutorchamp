import React from "react";
import LayoutOutSide from "../../components/Layouts/LayoutOutSide";
import Container from "../../components/globals/Container";

import MainInfoTop from "./sections/MainInfoTop";
import ScehduleCard from "./sections/ScehduleCard";
import Coments from "./sections/Coments";

const InsideProfileLesson = () => {
  return (
    <div>
      <LayoutOutSide>
        <Container>
          {" "}
          <div className="lg:flex  ">
            <div className="  sm:p-4 sm:mx-4">
              <div className="">
                <div className=" items-center bg-white rounded-md shadow-md   pl-2 py-2 my-4">
                  <MainInfoTop />
                </div>
              </div>
              <Coments />
            </div>

            <div className=" lg:w-1/4 w-full ">
              <ScehduleCard />
            </div>
          </div>
        </Container>
      </LayoutOutSide>
    </div>
  );
};

export default InsideProfileLesson;
