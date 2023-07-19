import React from "react";
import Container from "../../components/globals/Container";
import LeftSide1 from "./sections/LeftSide1";
import RightSide from "./sections/RightSide";

import Navbar from "../../components/globals/Navbar";

const Paymentsdetail = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Container>
        <div className="lg:flex mx-auto max-w-4xl gap-5">
          <div className="">
            <LeftSide1 />
          </div>
          <div className="lg:flex-[2]">
            <RightSide />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Paymentsdetail;
