import React from "react";
import Setting from "../Setting";
import LayoutOutSide from "../../../components/Layouts/LayoutOutSide";
import Container from "../../../components/globals/Container";

const Calender = () => {
  return (
    <LayoutOutSide>
      <Container>
        <div className="sm:flex py-8">
          <div className="">
            <Setting />
          </div>
          <div className=" bg-white space-y-8 p-5 w-full">
            <h1 className="text-2xl font-semibold">Google Calendar</h1>
            <div className="flex flex-wrap gap-3">
              <div className="w-20">
                <img
                  className="w-full h-full"
                  src="https://static.preply.com/space/images/google_calendar.de55749278369aa4b752bc005e16d787.svg"
                  alt=""
                />
              </div>
              <div className="lg:w-2/3">
                <h1 className="mb-3 text-xl font-normal text-gray-500">
                  Connect your Google Calendar and synchronize all your lessons
                  with your personal schedule
                </h1>
                <button className="whitespace-nowrap bg-primary-200 hover:bg-primary-300 rounded text-white py-2 px-4 font-semibold">
                  Connect Google Calendar
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </LayoutOutSide>
  );
};

export default Calender;
