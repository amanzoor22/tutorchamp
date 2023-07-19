import React from "react";
import { useState } from "react";
import { UserIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Keyboard } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const SearchSectiontop = () => {
  const [show, setshow] = useState(false);

  return (
    <div className="lg:flex items-center justify-center ">
      <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl my-6 lg:my-0">
        <div className="flex gap-4 mb-5">
          <a
            href=".."
            className="p-2 flex gap-1 border-2 rounded-xl border-primary-50 bg-primary-200 text-white font-medium"
          >
            <UserIcon className="h-6 w-6" /> Private lessons
          </a>
          <Link
            to="/groupClasses"
            className="p-2 flex gap-1 border-2 rounded-xl border-primary-50 bg-white text-primary-300 hover:bg-primary-200 hover:text-white font-medium"
          >
            <UserGroupIcon className="h-6 w-6" /> Group classes
          </Link>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Online English tutors & teachers for private lessons
        </h1>
        <p className="relative mt-6 text-base text-gray-500 sm:max-w-md lg:max-w-none">
          <span className={`me-1 ${show ? "" : "line-clamp-1"}`}>
            Looking for an online English tutor? Preply is the leading online
            language learning platform worldwide. You can choose from 13393
            English teachers with an average rating of 4.9 out of 5 stars given
            by 118505 customers. Book a lesson with a private English teacher
            today and start learning. Not entirely happy with your tutor? No
            worries, Preply offers free tutor replacement till you re 100%
            satisfied. Looking for a different way to learn a language? Explore
          </span>
          <span
            className="text-primary-400 cursor-pointer"
            onClick={() => setshow(!show)}
          >
            {show === true ? "Hide" : "Read more"}
          </span>
        </p>
        <h1 className="font-bold text-lg">
          Get a personalized choice of tutors{" "}
          <span className="font-light">
            {" "}
            by answering a few quick questions
          </span>
        </h1>

        <div className="mt-10 max-w-md">
          <form noValidate>
            <div className="flex">
              <select
                className="flex-1 rounded-s-lg border-0 py-1.5 text-black capitalize shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-secondary-600 sm:text-sm sm:leading-6"
                type="search"
                placeholder="Search by language or specialty"
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
                <option value="Japanese">Japanese</option>
                <option value="Arabic">Arabic</option>
              </select>
              <Link
                to="/survey"
                className="rounded-e-lg bg-primary-200 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600"
              >
                Get started
              </Link>
            </div>
          </form>
        </div>
      </div>

      <Swiper
        spaceBetween={25}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        modules={[Autoplay, Keyboard]}
        className="hidden lg:block"
      >
        <SwiperSlide>
          <img className="w-full" src="/images/heroimage.png" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img className="w-full" src="/images/browserimg3.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src="/images/browserimg4.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SearchSectiontop;
