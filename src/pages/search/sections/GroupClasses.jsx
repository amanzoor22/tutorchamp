import React from "react";
import GroupClassesCard from "../../../components/cards/GroupClassesCard";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard } from "swiper";

const GroupClasses = () => {
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
  ];
  return (
    <div className="">
      <h1 className="flex text-lg text-gray-500 font-medium gap-2 mb-1">
        <UserGroupIcon className="h-6 w-6 text-red-500" />
        Group classes
      </h1>
      <h1 className="text-xl font-semibold font-roboto mb-2">
        Join group classes starting tomorrow
      </h1>
      <div className="flex flex-wrap justify-between md:w-2/3">
        <h1 className="text-gray-500 mb-2">
          Practice your English and socialize in active group classes
        </h1>
        <Link
          to="/groupclasses"
          className="flex items-center gap-2 text-sm text-gray-500"
        >
          {" "}
          BROWSE ALL
          <ArrowRightIcon className="h-4 w-4 text-gray-500" />
        </Link>
      </div>
      <div className="flex lg:w-2/3 w-full items-baseline gap-4 overflow-hidden">
        <Swiper
          spaceBetween={25}
          slidesPerView={1}
          autoplay={{ delay: 8000 }}
          loop={true}
          keyboard={{
            enabled: true,
          }}
          modules={[Autoplay, Keyboard]}
          breakpoints={{
            576: {
              slidesPerView: 3,
            },
          }}
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
  );
};

export default GroupClasses;
