import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

import { Fragment, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  Arrow,
  Booklesson,
  Smallcircle,
} from "../../../components/globals/Icons";
import { HeartIcon, EnvelopeIcon, StarIcon } from "@heroicons/react/24/outline";
import ScheduleCard from "../../../components/globals/ScheduleCard";

const Sidecard2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="sticky top-24">
      <div className="lg:max-w-[80%] md:max-w-[50%] sm:max-w-[50%] bg-white border border-gray-200 rounded-2xl mx-auto shadow mt-5 ">
        <a href="/">
          <div className="w-full h-auto flex justify-center">
            <img
              className="rounded-t-2xl"
              src="/images/teachercard.png"
              alt=""
            />
          </div>
        </a>
        <div className="p-5 flex flex-row justify-evenly">
          <div className="flex">
            <div className="flex flex-col items-center">
              <p className="text-xl flex flex-row ">
                <StarIcon className="w-4 h-4 my-auto mr-1 text-yellow-300 fill-yellow-400" />
                4.9
              </p>

              <p className="text-sm">
                62 <span className="text-gray-500">reviews</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xl">$ 34</div>
            <p className="text-sm text-gray-500">50-min lesson</p>
          </div>
        </div>
        {/* modalbutton*/}
        <div onClick={openModal} className="px-4 mb-2 ">
          <button
            type="button"
            className="w-full flex items-center justify-center bg-primary-200 font-bold text-white font-sans p-3 rounded-2xl hover:bg-primary-300"
          >
            <Booklesson />
            Book trial lesson
          </button>
        </div>
        {/* MODAL */}
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-40" />
            </Transition.Child>

            <div className="fixed inset-0 sm:p-3 md:p-8">
              <div className="flex items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className=" w-full max-w-lg overflow-y-auto min-h-full   transform rounded-2xl bg-white p-3 sm:p-6 text-left  shadow-xl">
                    <div className="flex mb-4">
                      <div>
                        <img
                          src="/images/modaltopimg.jpg"
                          alt=""
                          className="mr-3  h-8 w-8 rounded-full "
                        />
                      </div>

                      <Dialog.Title as="h3" className="text-lg  font-medium  ">
                        Book a 50-min trial lesson
                      </Dialog.Title>
                      <button
                        type="button"
                        className="flex justify-end ml-auto mb-auto  text-sm font-medium   "
                        onClick={closeModal}
                      >
                        <XMarkIcon className="w-5 h-5 my-auto " />
                      </button>
                    </div>

                    <hr />
                    <ScheduleCard />
                    <div className="mt-[20%]">
                      <hr />
                      <div className="flex justify-end mt-4 ">
                        <Link
                          to="/paymentdetail"
                          className="bg-gray-100 text-black hover:bg-primary-300 hover:text-white p-3 rounded-xl "
                        >
                          Confirm time
                        </Link>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        <div className="px-4 mb-2 ">
          <button className="w-full flex items-center justify-center border-solid border-2 border-primary-400 text-primary-400 font-bold font-sans p-3 rounded-2xl ">
            <EnvelopeIcon className="w-4 h-4 my-auto  mx-2 " />
            Send Message
          </button>
        </div>
        <div className="px-4 mb-2">
          <button className="w-full flex items-center justify-center border-solid border-2 border-primary-400 text-primary-400 font-bold font-sans p-3 rounded-2xl ">
            <HeartIcon className="w-4 h-4 my-auto mx-2 text-primary-500" />
            Save to my list
          </button>
        </div>
        <div className="p-2 my-3 ">
          <div className="flex px-3 py-2 mx-auto">
            <Arrow />
            <p className="text-sm text-gray-800 px-2">
              21 lessons booked in the last 48 hours
            </p>
          </div>
          <div className="flex px-3 mb-3">
            <Smallcircle />
            <p className="text-sm text-gray-500  px-2">
              Usually responds in 2 hrs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidecard2;
