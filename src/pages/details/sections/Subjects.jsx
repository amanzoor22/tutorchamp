import React from "react";

const Subjects = () => {
  return (
    <div className="mt-5 bg-white shadow-lg  mx-auto rounded-2xl mb-5 p-5">
      <div className="flex space-x-20 mb-5">
        <h1 className="text-gray-700 font-bold">Subjects</h1>
        <h1 className="border-b border-primary-500">English</h1>
      </div>
      <hr />
      <div className="mb-3 mt-4">
        <h1>Conversational English</h1>
        <p className="text-gray-500 text-sm">
          Conversational English is really taught by practice and learning truly
          what expressions, phrases and slang are spoken by American. I taught a
          class of 6 upper level students and asked them if any had ever heard
          the phrase "whats up?", they all replied no. It is the single most
          commonly used expression in America, more even then hello. True
          conversational English is rarely taught correctly. Also, it is very
          valuable to know that in an English greeting: "hello, how are you?"
          "Fine thanks and you" is never used, sorry!
        </p>
      </div>
      <hr />

      <div className="mb-3 mt-4">
        <h1>Business English</h1>
        <p className="text-gray-500 text-sm">
          I have an MBA degree with specialization in Finance and Economics, I
          worked as a CFA and as a consultant for one of the largest
          pharmaceutical/medical device companies in the world. I have published
          business lesson materials and I have helped dozens of students prepare
          for new careers and promotions in every business industry from supply
          chain management to corporate executive officer. I take my job as the
          person that helps people find a better life very seriously and if you
          have any doubts please check my reviews!
        </p>
      </div>

      <hr />
      <div className="mb-3 mt-4">
        <h1>English for work</h1>
        <p className="text-gray-500 text-sm">
          I have many lessons, specific vocabulary and topical articles focused
          on learning the language of a wide variety of career paths and working
          positions. I take my job as the person that helps people find a better
          life very seriously and if you have any doubts please check my
          reviews!.
        </p>
      </div>
      <hr />
      <div className="mb-3 mt-4">
        <h1>English for beginners</h1>
        <p className="text-gray-500 text-sm">
          I have taught students as young as 4 years old that have never learned
          English and students as old as 70 with no English speaking experience
          and all the students in between. Everyone learns differently so my
          first step is to find out what method works best for you.
        </p>
      </div>
      <hr />
      <div className="mb-3 mt-4">
        <h1>American English</h1>
        <p className="text-gray-500 text-sm">
          I focus on a mix of speech exercises to help students pronunciation
          sound like native American, common idioms and phrases and
          conversational English.
        </p>
      </div>
      <div className="p-5">
        <button className="w-half bg-primary-400 text-white mt-4 px-5 py-2 rounded-2xl mx-auto flex hover:bg-primary-500">
          More subjects
        </button>
      </div>
    </div>
  );
};

export default Subjects;
