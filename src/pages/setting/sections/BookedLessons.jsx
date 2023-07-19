import React from "react";
import LayoutOutSide from "../../../components/Layouts/LayoutOutSide";
import Container from "../../../components/globals/Container";
import Setting from "../Setting";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { eye } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const BookedLessons = () => {
  return (
    <div>
      <LayoutOutSide>
        <Container>
          <div className="sm:flex py-8">
            <div className="">
              <Setting />
            </div>
            <div className="bg-white rounded-md p-5 w-full">
              <div className="flex flex-wrap gap-4 pb-3">
                <h1 className="text-2xl font-semibold">Lessons Booked</h1>
                <Link
                  to="/privatelesson"
                  className="lg:ml-auto text-primary-200 hover:text-primary-300"
                >
                  Book New Lesson
                </Link>
              </div>
              <table className="w-full lg:text-lg my-2 text-left">
                <thead className="uppercase">
                  <tr className="border-b">
                    <th className="text-sm font-semibold py-3">
                      Date and Time
                    </th>
                    <th className="text-sm font-semibold py-3">Status</th>
                    <th className="text-sm font-semibold py-3">Hours</th>
                    <th className="text-sm font-semibold py-3">Subject</th>
                    <th className="text-sm font-semibold py-3">Teacher</th>
                    <th
                      scope="col"
                      className="text-sm font-semibold py-3 lg:block hidden text-center"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b">
                    <td className="py-2">10 May,23 10:00 PM</td>
                    <td className="py-2">
                      <span className="complete">Completed</span>
                    </td>
                    <td className="py-2">2</td>
                    <td className="py-2">English</td>
                    <td className=" py-2">Noah Mark</td>
                    <td className="py-2 lg:block hidden text-center">
                      <button type="button" className="hover:text-primary-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className=" py-2">10 May,23 10:00 PM</td>
                    <td className="py-2">
                      <span className="complete">Completed</span>
                    </td>
                    <td className=" py-2">2</td>
                    <td className=" py-2">English</td>
                    <td className=" py-2">Noah Mark</td>

                    <td className="py-2 lg:block hidden text-center">
                      <button type="button" className="hover:text-primary-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className=" py-2">10 May,23 10:00 PM</td>
                    <td className="py-2">
                      <span className="complete">Completed</span>
                    </td>
                    <td className=" py-2">2</td>
                    <td className=" py-2">English</td>
                    <td className=" py-2">Noah Mark</td>

                    <td className="py-2 lg:block hidden text-center">
                      <button type="button" className="hover:text-primary-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                  {/* <tr className="border-b text-center">
                        <td
                          className="py-2 text-gray-400 font-semibold"
                          colSpan={4}
                        >
                          Find your first tutor
                        </td>
                      </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </LayoutOutSide>
    </div>
  );
};

export default BookedLessons;
