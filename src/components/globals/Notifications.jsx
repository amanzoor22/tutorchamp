import React from "react";
import { Bell } from "react-bootstrap-icons";
import { useEffect } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogoutInitiate } from "../../redux/actions";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Notifications = () => {
  return (
    <div className="px-4">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <span className="badge">3</span>
          <Menu.Button className="flex items-center rounded-full  hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-200 focus:ring-offset-2 focus:ring-offset-gray-100">
            <span className="sr-only">Open options</span>
            <Bell />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/setting/HandleNotifications"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm notificationli"
                    )}
                  >
                    New Lesson booked
                    <p className="TimeNotifications">June, 19 10:00PM</p>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/setting/HandleNotifications"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm notificationli"
                    )}
                  >
                    New Lesson booked
                    <p className="TimeNotifications">June, 19 10:00PM</p>
                  </Link>
                )}
              </Menu.Item>
              <form method="POST" action="#">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/setting/HandleNotifications"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full px-4 py-2 text-left text-sm notificationli"
                      )}
                    >
                      New Lesson booked
                      <p className="TimeNotifications">June, 19 10:00PM</p>
                    </Link>
                  )}
                </Menu.Item>
              </form>

              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/setting/HandleNotifications"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm notificationli"
                    )}
                  >
                    New Lesson booked
                    <p className="TimeNotifications">June, 19 10:00PM</p>
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Notifications;
