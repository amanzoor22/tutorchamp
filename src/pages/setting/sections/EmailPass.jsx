import React from "react";
import Setting from "../Setting";
import LayoutOutSide from "../../../components/Layouts/LayoutOutSide";
import Container from "../../../components/globals/Container";
import { useSelector } from "react-redux";

const EmailPass = () => {
  const currentuser = useSelector((state) => state.firebase.auth);
  const userProfile = useSelector((state) => state.firebase.profile);
  return (
    <LayoutOutSide>
      <Container>
        <div className="sm:flex py-8">
          <div className="">
            <Setting />
          </div>
          <div className=" bg-white space-y-4 p-5 w-full">
            <h1 className="text-2xl font-semibold">Email & Password</h1>
            <hr />
            <div className="space-y-8 mx-5">
              <div className="sm:flex items-center gap-5">
                <label className="w-32 " htmlFor="email">
                  Email
                </label>
                <input
                  disabled
                  className=" border-1 border-gray-400  sm:w-1/2 lg:w-1/3 w-full  rounded text-sm text-gray-700  focus:border-primary-300 relative shadow-sm"
                  type="email"
                  placeholder="Enter your email"
                  value={userProfile.email}
                  id="email"
                />
              </div>
              <div className="sm:flex  items-center gap-5">
                <label className="w-32 " htmlFor="Old password">
                  Old password
                </label>
                <input
                  className=" border-1 border-gray-400  sm:w-1/2 lg:w-1/3 w-full  rounded text-sm text-gray-700  focus:border-primary-300 relative shadow-sm"
                  type="password"
                  placeholder="Old password"
                  id="Old password"
                />
              </div>
              <div className="sm:flex  items-center gap-5">
                <label className="w-32 " htmlFor="New password">
                  New password
                </label>
                <input
                  className=" border-1 border-gray-400  sm:w-1/2 lg:w-1/3 w-full  rounded text-sm text-gray-700  focus:border-primary-300 relative shadow-sm"
                  type="password"
                  placeholder="New password"
                  id="New password"
                />
              </div>

              <div className="sm:flex  items-center gap-5">
                <label className="w-32 " htmlFor="Verfiy password">
                  Verfiy password
                </label>
                <input
                  className=" border-1 border-gray-400  sm:w-1/2 lg:w-1/3 w-full  rounded text-sm text-gray-700  focus:border-primary-300 relative shadow-sm"
                  type="password"
                  placeholder="Verfiy password"
                  id="Verfiy password"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </LayoutOutSide>
  );
};

export default EmailPass;
