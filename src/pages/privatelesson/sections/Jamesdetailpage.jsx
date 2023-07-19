import React from "react";

import Jamesdetail from "./Jamesdetail";
import Jamesreviews from "./Jamesreviews";
import Container from "../../../components/globals/Container";
import Scehdulecard from "./Scehdulecard";
import LayoutOutSide from "../../../components/Layouts/LayoutOutSide";
import Aboutjames from "./Aboutjames";

const Jamesdetailpage = () => {
  return (
    <div>
      <LayoutOutSide>
        <Container>
          <div className="lg:flex  ">
            <div className="  sm:p-4">
              <div className=" items-center bg-white rounded-2xl shadow-md py-1 my-4">
                <Jamesdetail />
              </div>
              <div>
                <Aboutjames />
                <Jamesreviews />
              </div>
            </div>

            <div className=" lg:w-1/4 w-full mx-auto ">
              <Scehdulecard />
            </div>
          </div>
        </Container>
      </LayoutOutSide>
    </div>
  );
};

export default Jamesdetailpage;
