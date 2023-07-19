import React from "react";
import LayoutOutSide from "../../components/Layouts/LayoutOutSide";
import Container from "../../components/globals/Container";
// import CourseCard from "../../components/cards/CourseCard";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";
import CourseCard from "../../components/cards/CourseCard";

const CoursesCardPage = () => {
  return (
    <div>
      <LayoutOutSide>
        <Container>
          <div className=" sm:flex gap-10">
            <div className="flex-[1] pt-10 ">
              <Link
                to="/courses"
                className="flex text-md items-center pb-5 gap-1"
              >
                <ArrowLeftIcon className="h-4 w-4 text-gray-500" />
                All courses
              </Link>
              <div className="">
                <div className="bg-white ">
                  <div className=" shadow-lg rounded-xl">
                    <img
                      className="rounded-xl "
                      src="/images/cardimg2.png"
                      alt="cardimg"
                    />
                    <h1 className=" text-4xl font-normal mx-4   pt-2 text-secondary-900">
                      Basic Conversation Topics
                    </h1>
                    <p className="text-lg  font-normal  mx-4  text-gray-500 py-2">
                      Gain confidence speaking about familiar topics Enroll with
                      a Cambly subscription, or start your free Cambly trial
                    </p>
                    <div className="mx-4 py-4">
                      <button className="w-full bg-primary-300 hover:bg-primary-400 text-white p-2">
                        START COURSE
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 my-16">
                  <div className="flex-[1]">
                    <img src="/images/conversation.png" alt="" />
                  </div>
                  <div className="flex-[5]">
                    <h1 className="font-medium text-md">
                      Our courses are two-way conversations
                    </h1>
                    <p className="text-gray-500 text-md mt-5">
                      We believe in active engagement as the most effective
                      teaching method. That's why you will have a voice in
                      shaping your course according to your own goals.
                    </p>
                    <button className="bg-primary-700 hover:bg-primary-500 w-3/5 mt-5 p-2 text-white">
                      TRY IT OUT
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* side componet */}
            <div className="flex-[2] pt-10 ">
              <p className=" text-xl  gap-1">Overview</p>
              <h1 className="text-lg font-medium mt-5">
                {" "}
                Why take this course?{" "}
              </h1>
              <p className="text-md font-normal text-gray-500">
                It can be intimidating to speak with a foreigner, no matter how
                much grammar and vocabulary you've mastered. If you have basic
                knowledge of English but have not spent much time speaking, this
                course will help you ease into your first English conversations.
              </p>
              <h1 className="text-lg font-medium mt-5">
                What will you be able to do?
              </h1>
              <p className="text-md font-normal text-gray-500">
                This course covers vocabulary at the CEFR A2 level. You will
                build confidence while learning to speak about a variety of
                common, everyday topics. In addition, you will build implicit
                grammar knowledge as your tutor models correct answers and
                corrects your mistakes.
              </p>
              <h1 className="text-lg font-medium mt-5">Experience Level</h1>
              <p className="text-md font-normal text-gray-500">Beginner</p>
              <h1 className="text-lg font-medium mt-5">Course Length</h1>
              <p className="text-md font-normal text-gray-500">10 lessons</p>
              <h1 className="text-lg font-medium mt-5">Pre-requisites</h1>
              <p className="text-md font-normal text-gray-500">
                You should be able to introduce yourself and say where you're
                from. If you are not yet comfortable with basic introductions,
                start with our course "English Conversation 101".
              </p>
              <div className="pt-5">
                <h1 className="text-xl font-normal mt-5">Syllabus</h1>
                <ul className="list-decimal space-y-6 mt-6">
                  <li className="text-lg font-normal text-gray-500 ml-5">
                    Foods You Love
                  </li>
                  <li className="text-lg font-normal text-gray-500 ml-5">
                    Your Job
                  </li>
                  <li className="text-lg font-normal text-gray-500 ml-5">
                    Playing and Watching Sports
                  </li>
                  <li className="text-lg font-normal text-gray-500 ml-5">
                    The Best Pet
                  </li>
                  <li className="text-lg font-normal text-gray-500 ml-5">
                    Having Fun in Your Free Time
                  </li>
                  <li className="text-lg font-normal text-gray-500 ml-5">
                    Your Daily Routine
                  </li>
                  <li className="text-lg font-normal text-gray-500 ml-5">
                    Childhood Memories
                  </li>
                  <li className="text-lg font-normal text-gray-500 ml-5">
                    Your Family Members
                  </li>
                  <li className="text-lg font-normal text-gray-500 ml-5">
                    Your Hometown
                  </li>

                  <li className="text-lg font-normal text-gray-500 ml-5">
                    Shopping Habits
                  </li>
                </ul>
              </div>
              <div className="flex justify-between pt-16">
                <p className=" text-xl  gap-1">Other Courses</p>
                <Link to="/courses" className="flex  items-center pb-5 gap-1">
                  <ArrowRightIcon className="h-4 w-4 text-gray-500" />
                  See More
                </Link>
              </div>
              <div className="flex gap-5 mb-10 grid-rows-1 overflow-auto">
                <div className="min-w-[170px]">
                  <CourseCard
                    title="Life in the internet Age"
                    text="INTERMEDIATE-9 LESSONS"
                    cardimg="/images/cardimg1.png"
                  />
                </div>
                <div className="min-w-[170px]">
                  <CourseCard
                    title="Basic Conversation topics"
                    text="BEGAINNER-10 LESSONS"
                    cardimg="/images/cardimg2.png"
                  />
                </div>
                <div className="min-w-[170px]">
                  <CourseCard
                    title="Intermediate Conversation Topics"
                    text="INTERMEDIATE-10 LESSONS"
                    cardimg="/images/cardimg3.png"
                  />
                </div>
                <div className="min-w-[170px]">
                  <CourseCard
                    title="Advanced Conversation Topics"
                    text="INTERMEDIATE-10 LESSONS"
                    cardimg="/images/cardimg4.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </LayoutOutSide>
    </div>
  );
};

export default CoursesCardPage;
