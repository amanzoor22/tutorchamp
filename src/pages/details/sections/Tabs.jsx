import React from "react";

const Tabs = () => {
  return (
    <div className="sticky top-20 bg-gray-50">
      {/* tabs */}

      <div className="mt-5 ml-4">
        <ul className="flex flex-wrap text-sm font-medium text-center">
          <li className="mr-2" role="presentation">
            <a
              href="#About"
              className="inline-block p-4 border-b-2 rounded-t-lg border-primary-400"
            >
              About
            </a>
          </li>
          <li className="mr-2" role="presentation">
            <a
              href="#Schedule"
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-primary-400 "
            >
              Schedule
            </a>
          </li>
          <li className="mr-2" role="presentation">
            <a
              href="#Reviews"
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-primary-400 "
            >
              Reviews (62)
            </a>
          </li>
          {/* <li role="presentation">
            <a
              href="#Resume"
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-primary-400 "
            >
              Resume
            </a>
          </li> */}
          <li role="presentation">
            <a
              href="#Subjects"
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-primary-400 "
            >
              Subjects
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tabs;
