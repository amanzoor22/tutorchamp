import React from "react";
import LayoutOutSide from "../../../components/Layouts/LayoutOutSide";
import Container from "../../../components/globals/Container";
import Setting from "../Setting";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const PayHistory = () => {
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
                <h1 className="text-2xl font-semibold">Payment history</h1>
                <Link
                  to
                  className="lg:ml-auto text-primary-200 hover:text-primary-300"
                >
                  Update billing info
                </Link>
              </div>
              <table className="w-full lg:text-lg my-2 text-left">
                <thead className="uppercase">
                  <tr className="border-b">
                    <th className="text-sm font-semibold py-3">Date</th>
                    <th className="text-sm font-semibold py-3">Hours</th>
                    <th className="text-sm font-semibold py-3">Subject</th>
                    <th
                      scope="col"
                      className="text-sm font-semibold py-3 lg:block hidden text-center"
                    >
                      Download all
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b">
                    <td className="py-2">10 May,23</td>
                    <td className="py-2">2</td>
                    <td className="py-2">English</td>
                    <td className="py-2 lg:block hidden text-center">
                      <button type="button" className="hover:text-primary-200">
                        <ArrowDownTrayIcon className="w-5 h-5 m-auto" />
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className=" py-2">10 May,23</td>
                    <td className=" py-2">2</td>
                    <td className=" py-2">English</td>

                    <td className="py-2 lg:block hidden text-center">
                      <button type="button" className="hover:text-primary-200">
                        <ArrowDownTrayIcon className="w-5 h-5 m-auto" />
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className=" py-2">10 May,23</td>
                    <td className=" py-2">2</td>
                    <td className=" py-2">English</td>

                    <td className="py-2 lg:block hidden text-center">
                      <button type="button" className="hover:text-primary-200">
                        <ArrowDownTrayIcon className="w-5 h-5 m-auto" />
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

export default PayHistory;
