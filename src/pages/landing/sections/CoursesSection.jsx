import React from "react";
import Container from "../../../components/globals/Container";
import CourseCard from "../../../components/cards/CourseCard";

//  Swiper
import { Autoplay, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// courses array
const courses = [
  {
    title: "Life in the internet Age",
    text: "INTERMEDIATE-9 LESSONS",
    rotate: -10,
    cardimg: "/images/cardimg1.png",
  },
  {
    title: "Basic Conversation topics",
    text: "BEGAINNER-10 LESSONS",
    rotate: -10,
    cardimg: "/images/cardimg2.png",
  },
  {
    title: "Intermediate Conversation Topics",
    text: "INTERMEDIATE-10 LESSONS",
    rotate: 5,
    cardimg: "/images/cardimg3.png",
  },
  {
    title: "Advanced Conversation Topics",
    text: "INTERMEDIATE-10 LESSONS",
    rotate: -5,
    cardimg: "/images/cardimg4.png",
  },
  {
    title: "Caring for Our Planet",
    text: "INTERMEDIATE-7 LESSONS",
    rotate: -10,
    cardimg: "/images/cardimg5.png",
  },
  {
    title: "Healthy Mind, Healthy Body",
    text: "INTERMEDIATE-6 LESSONS",
    rotate: 5,
    cardimg: "/images/cardimg6.png",
  },
  {
    title: "Business English",
    text: "INTERMEDIATE - 9LESSONS",
    rotate: -10,
    cardimg: "/images/cardimg7.png",
  },
];

const CoursesSection = () => {
  return (
    <section className="relative py-16 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="lg:text-4xl text-3xl font-bold lg:word-space text-gray-800 my-2">
            Courses for every skill level and interest
          </h1>
          <p className="leading-loose text-base lg:text-lg font-normal text-gray-500">
            Focus on your specific goals with our guided courses, including
            academic test prep, business English, conversation practice, and
            more.
          </p>
        </div>
        <Swiper
          spaceBetween={25}
          slidesPerView={2}
          autoplay={{ delay: 2500 }}
          loop={true}
          keyboard={{
            enabled: true,
          }}
          modules={[Autoplay, Keyboard]}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
            1100: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1350: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="py-16"
        >
          {courses.map((course, index) => (
            <SwiperSlide key={`course-${index}`}>
              <CourseCard
                title={course.title}
                text={course.text}
                rotate={course.rotate}
                cardimg={course.cardimg}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className="mt-5 text-center">
          <Link
            to="/courses"
            className="bg-primary-300 text-white rounded-xl font-normal hover:bg-primary-400  text-center inline-flex items-center justify-center p-3"
          >
            Explore all courses
          </Link>
        </div> */}
      </Container>
    </section>
  );
};

export default CoursesSection;
