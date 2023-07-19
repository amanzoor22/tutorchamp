import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";
import { Autoplay, Keyboard } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import GroupClassesCard from "../../components/cards/GroupClassesCard";
import { Link } from "react-router-dom";
const GroupClassPage = () => {
  const groupClasses = [
    {
      thumbnail: "/images/thumbnail1.png",
      tag1: "B1-B2",
      tag2: "Likely to sell out",
      title: "Everyday Conversation: let's talk",
      verifiedWith: "Caroline A.",
      rating: "4.98",
      classesTeach: "1,121",
      time: "Thu, 22:30 – 23:25",
      price: "3.00",
    },

    {
      thumbnail: "/images/thumbnail2.png",
      tag1: "B1-B2",
      tag2: "Likely to sell out",
      title: "Let's Chit-Chat",
      verifiedWith: "Nokuphila N.",
      rating: "5",
      classesTeach: "805",
      time: "Thu, 18:00 – 19:00",
      price: "5.00",
    },
    {
      thumbnail: "/images/thumbnail3.jpg",
      tag1: "B1-B2",
      tag2: "Likely to sell out",
      title: "Let's Chit-Chat",
      verifiedWith: "Nokuphila N.",
      rating: "5",
      classesTeach: "805",
      time: "Thu, 18:00 – 19:00",
      price: "5.00",
    },
    {
      thumbnail: "/images/thumbnail4.jpg",
      tag1: "B1-B2",
      tag2: "Likely to sell out",
      title: "Let's Chit-Chat",
      verifiedWith: "Nokuphila N.",
      rating: "5",
      classesTeach: "805",
      time: "Thu, 18:00 – 19:00",
      price: "5.00",
    },
    {
      thumbnail: "/images/thumbnail5.jpg",
      tag1: "B1-B2",
      tag2: "Likely to sell out",
      title: "Let's Chit-Chat",
      verifiedWith: "Nokuphila N.",
      rating: "5",
      classesTeach: "805",
      time: "Thu, 18:00 – 19:00",
      price: "5.00",
    },
    {
      thumbnail: "/images/thumbnail6.png",
      tag1: "B1-B2",
      tag2: "Likely to sell out",
      title: "Let's Chit-Chat",
      verifiedWith: "Nokuphila N.",
      rating: "5",
      classesTeach: "805",
      time: "Thu, 18:00 – 19:00",
      price: "5.00",
    },
    {
      thumbnail: "/images/thumbnail1.png",
      tag1: "B1-B2",
      tag2: "Likely to sell out",
      title: "Everyday Conversation: let's talk",
      verifiedWith: "Caroline A.",
      rating: "4.98",
      classesTeach: "1,121",
      time: "Thu, 22:30 – 23:25",
      price: "3.00",
    },

    {
      thumbnail: "/images/thumbnail2.png",
      tag1: "B1-B2",
      tag2: "Likely to sell out",
      title: "Let's Chit-Chat",
      verifiedWith: "Nokuphila N.",
      rating: "5",
      classesTeach: "805",
      time: "Thu, 18:00 – 19:00",
      price: "5.00",
    },
    {
      thumbnail: "/images/thumbnail3.jpg",
      tag1: "B1-B2",
      tag2: "Likely to sell out",
      title: "Let's Chit-Chat",
      verifiedWith: "Nokuphila N.",
      rating: "5",
      classesTeach: "805",
      time: "Thu, 18:00 – 19:00",
      price: "5.00",
    },
    {
      thumbnail: "/images/thumbnail4.jpg",
      tag1: "B1-B2",
      tag2: "Likely to sell out",
      title: "Let's Chit-Chat",
      verifiedWith: "Nokuphila N.",
      rating: "5",
      classesTeach: "805",
      time: "Thu, 18:00 – 19:00",
      price: "5.00",
    },
    {
      thumbnail: "/images/thumbnail5.jpg",
      tag1: "B1-B2",
      tag2: "Likely to sell out",
      title: "Let's Chit-Chat",
      verifiedWith: "Nokuphila N.",
      rating: "5",
      classesTeach: "805",
      time: "Thu, 18:00 – 19:00",
      price: "5.00",
    },
    {
      thumbnail: "/images/thumbnail6.png",
      tag1: "B1-B2",
      tag2: "Likely to sell out",
      title: "Let's Chit-Chat",
      verifiedWith: "Nokuphila N.",
      rating: "5",
      classesTeach: "805",
      time: "Thu, 18:00 – 19:00",
      price: "5.00",
    },
    {
      thumbnail: "/images/thumbnail1.png",
      tag1: "B1-B2",
      tag2: "Likely to sell out",
      title: "Everyday Conversation: let's talk",
      verifiedWith: "Caroline A.",
      rating: "4.98",
      classesTeach: "1,121",
      time: "Thu, 22:30 – 23:25",
      price: "3.00",
    },

    {
      thumbnail: "/images/thumbnail2.png",
      tag1: "B1-B2",
      tag2: "Likely to sell out",
      title: "Let's Chit-Chat",
      verifiedWith: "Nokuphila N.",
      rating: "5",
      classesTeach: "805",
      time: "Thu, 18:00 – 19:00",
      price: "5.00",
    },
    {
      thumbnail: "/images/thumbnail3.jpg",
      tag1: "B1-B2",
      tag2: "Likely to sell out",
      title: "Let's Chit-Chat",
      verifiedWith: "Nokuphila N.",
      rating: "5",
      classesTeach: "805",
      time: "Thu, 18:00 – 19:00",
      price: "5.00",
    },
    {
      thumbnail: "/images/thumbnail4.jpg",
      tag1: "B1-B2",
      tag2: "Likely to sell out",
      title: "Let's Chit-Chat",
      verifiedWith: "Nokuphila N.",
      rating: "5",
      classesTeach: "805",
      time: "Thu, 18:00 – 19:00",
      price: "5.00",
    },
    {
      thumbnail: "/images/thumbnail5.jpg",
      tag1: "B1-B2",
      tag2: "Likely to sell out",
      title: "Let's Chit-Chat",
      verifiedWith: "Nokuphila N.",
      rating: "5",
      classesTeach: "805",
      time: "Thu, 18:00 – 19:00",
      price: "5.00",
    },
    {
      thumbnail: "/images/thumbnail6.png",
      tag1: "B1-B2",
      tag2: "Likely to sell out",
      title: "Let's Chit-Chat",
      verifiedWith: "Nokuphila N.",
      rating: "5",
      classesTeach: "805",
      time: "Thu, 18:00 – 19:00",
      price: "5.00",
    },
  ];
  return (
    <div>
      <div className="">
        <h1 className="text-2xl font-semibold">Starting Tomorrow</h1>
        <div className="">
          <Swiper
            spaceBetween={25}
            slidesPerView={1}
            autoplay={{ delay: 8000 }}
            loop={false}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1000: {
                slidesPerView: 3,
              },
              1350: {
                slidesPerView: 4,
              },
            }}
            modules={[Autoplay, Keyboard]}
            className="py-4"
          >
            {groupClasses.map((groupClasses, index) => (
              <SwiperSlide key={`groupClasses-${index}`}>
                <GroupClassesCard
                  thumbnail={groupClasses.thumbnail}
                  tag1={groupClasses.tag1}
                  tag2={groupClasses.tag2}
                  title={groupClasses.title}
                  verifiedWith={groupClasses.verifiedWith}
                  rating={groupClasses.rating}
                  classesTeach={groupClasses.classesTeach}
                  time={groupClasses.time}
                  price={groupClasses.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="my-4">
        <h1 className="text-2xl font-semibold">
          Get more for less: save on top tutors with group classes
        </h1>
        <div className="">
          <Swiper
            spaceBetween={25}
            slidesPerView={1}
            autoplay={{ delay: 8000 }}
            loop={false}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1000: {
                slidesPerView: 3,
              },
              1350: {
                slidesPerView: 4,
              },
            }}
            modules={[Autoplay, Keyboard]}
            className="py-4"
          >
            {groupClasses.map((groupClasses, index) => (
              <SwiperSlide key={`groupClasses-${index}`}>
                <GroupClassesCard
                  thumbnail={groupClasses.thumbnail}
                  tag1={groupClasses.tag1}
                  tag2={groupClasses.tag2}
                  title={groupClasses.title}
                  verifiedWith={groupClasses.verifiedWith}
                  rating={groupClasses.rating}
                  classesTeach={groupClasses.classesTeach}
                  time={groupClasses.time}
                  price={groupClasses.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="flex items-center border-4 h-[40vh] overflow-hidden rounded-lg shadow-lg my-10">
        <div className="p-5 space-y-6">
          <h1 className="text-4xl font-semibold ">Need a private tutor?</h1>
          <p className="font-medium text-lg">
            We help thousands of learners weekly to easily find their tutor for
            private lessons. Let’s find yours!
          </p>{" "}
          <br />
          <Link className="p-3  gap-1 text-white  border-2 rounded-xl border-primary-50 bg-primary-200  hover:bg-white hover:text-black font-medium">
            Explore private tutors
          </Link>
        </div>
        <div className="h-[40vh] overflow-hidden hidden lg:block">
          <img src="/images/privatetutor.png" alt="" />
        </div>
      </div>
      <div className="my-4">
        <h1 className="text-2xl font-semibold">All group classes</h1>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 my-4 gap-x-4 gap-y-8">
          {groupClasses.map((groupClasses, index) => (
            <GroupClassesCard
              thumbnail={groupClasses.thumbnail}
              tag1={groupClasses.tag1}
              tag2={groupClasses.tag2}
              title={groupClasses.title}
              verifiedWith={groupClasses.verifiedWith}
              rating={groupClasses.rating}
              classesTeach={groupClasses.classesTeach}
              time={groupClasses.time}
              price={groupClasses.price}
            />
          ))}
        </div>
        <nav className="flex items-center justify-center gap-5 my-10 border-t border-gray-200 px-4 sm:px-0">
          <div className="-mt-px flex   ">
            <a
              href="//"
              className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-xl font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              <ArrowLongLeftIcon
                className="mr-3 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              Previous
            </a>
          </div>
          <div className="hidden  md:flex">
            <a
              href="//"
              className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-xl font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              1
            </a>
            {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
            <a
              href="//"
              className="inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-xl font-medium text-indigo-600"
              aria-current="page"
            >
              2
            </a>
            <a
              href="//"
              className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-xl font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              3
            </a>

            <a
              href="//"
              className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-xl font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              4
            </a>
          </div>
          <div className="-mt-px flex   justify-end">
            <a
              href="//"
              className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-xl font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              Next
              <ArrowLongRightIcon
                className="ml-3 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default GroupClassPage;
