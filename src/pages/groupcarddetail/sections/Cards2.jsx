import React from "react";
import GroupClassesCard from "../../../components/cards/GroupClassesCard";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Keyboard } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Cards2 = () => {
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
    <div className="mt-10 py-10">
      <h1 className="text-xl font-semibold font-roboto mb-2 ">
        More classes by
        <span className="text-primary-600"> Joel Edward Ian W.</span>
      </h1>

      <div className="flex lg:w-2/3 w-full items-baseline gap-4 overflow-hidden">
        <Swiper
          spaceBetween={25}
          slidesPerView={3}
          autoplay={{ delay: 2500 }}
          loop={true}
          keyboard={{
            enabled: true,
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
  );
};

export default Cards2;
