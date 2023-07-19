import React from "react";
import LayoutOutSide from "../../../components/Layouts/LayoutOutSide";
import Container from "../../../components/globals/Container";
import Setting from "../Setting";
import {
  Bluecard,
  Circle3,
  Dbcover,
  Visa,
} from "../../../components/globals/Icons";

const PayMethod = () => {
  return (
    <div>
      <LayoutOutSide>
        <Container>
          <div className="sm:flex  py-8 ">
            <div className="">
              <Setting />
            </div>
            <div className=" bg-white rounded-xl p-5 w-full h-2/3">
              <h1 className="text-2xl font-bold">Payment methods</h1>
              <p>Save a payment method for fast and easy lesson payments.</p>
              <p>
                {" "}
                Preply uses industry-standard encryption to protect your
                information.
              </p>

              <h2 className="text-xl font-semibold mt-5">
                Credit or debit card
              </h2>
              <div className="flex my-2">
                <Visa />
                <Circle3 />
                <Bluecard />
                <Dbcover />
                <div className="ml-auto">
                  <button className="bg-primary-100 py-2 px-4 font-semibold hover:bg-primary-300 rounded text-white">
                    Add card
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </LayoutOutSide>
    </div>
  );
};

export default PayMethod;
