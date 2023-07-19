import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

const AboutCourse = () => {
  return (
    <div className="font-sans lg:px-10 pb-5">
      <h3 className="font-bold text-xl py-2">About this course</h3>
      <p className="line-clamp-3 text-lg">
        With a new topic in every class, practise speaking about common topics
        in groups and as an individual, and get lots of feedback on your
        pronunciation, grammar, and vocabulary. We will do relaxed exam-style
        speaking tasks, including FCE, IELTS, CAE, and CPE. At the end of each
        class, you will receive a useful document with feedback on your English
        and also all of the materials that we have studied! There is a new topic
        in every class, including the following: work and career, hobbies and
        interests, technology, health, education, family, films and TV, food and
        drink, friendship, personality, sport, traditions, travel and tourism,
        fitness… and many more! Please feel free to message me to request a
        topic for a class!
      </p>
      <button className="py-2 mb-3 text-primary-500">Read more</button>
      <div className="mb-3">
        <h3 className="font-bold py-2">What you will learn</h3>
        <ul className="">
          <li className="list-disc">
            Develop speaking skills on a variety of topics
          </li>
          <li className="list-disc ">Practise interactive speaking skills</li>
        </ul>
      </div>
      <div className=" ">
        <h3 className="font-bold py-2">Important information</h3>
        <div className="flex">
          <ExclamationCircleIcon className="h-6 w-6 my-auto text-primary-700 mr-2" />
          <p>This group class is only for adults (18+)</p>
        </div>
        <div className="border-b border-2  border-gray-300/50 my-10"></div>
      </div>
    </div>
  );
};

export default AboutCourse;
