import React from "react";
import {
  ShieldCheckIcon,
  StarIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/24/outline";
import { Classes } from "../../../components/globals/Icons";

const TaughtJoel = () => {
  return (
    <div className=" font-sans lg:px-10 pb-5">
      <div className="flex ">
        <img
          className="w-12 h-12 my-auto rounded-full"
          src="/images/Joelsmall.png"
          alt=".."
        />
        <div className="pl-3">
          <h3 className="text-xl font-bold pb-1">
            Taught by Joel Edward Ian W.
          </h3>
          <p className="text-gray-500">On Preply since 2019</p>
        </div>
      </div>
      <div className="lg:flex mt-5 lg:flex-row lg:space-x-10 my-auto flex-wrap sm:flex-col pb-3">
        <div className="flex text-gray-500 my-auto">
          <ShieldCheckIcon className="w-6 h-6  mr-1 text-gray-500" />
          Verified tutor
        </div>
        <div className="flex text-gray-500 my-auto">
          <StarIcon className="w-5 h-5 mr-1 text-gray-500" />
          4.98 (25 reviews)
        </div>
        <div className="flex text-gray-500 my-auto">
          <Classes />
          2,957 lessons taught
        </div>
      </div>
      <p className="line-clamp-3 text-lg  mt-3">
        <span className="font-bold">
          8+ years' experience CELTA qualified English Language teacher{" "}
        </span>{" "}
        Hi! I'm Joel. I’m an English language teacher , editor, and proofreader.
        I have a CELTA teaching qualification, a master’s degree in English
        Literature, and over 8 years of experience in language teaching and
        proofreading. I offer fully personalised English lessons, conversation
        classes, exam preparation, proofreading, and editing services. I am
        experienced with the Cambridge and IELTS from beginner to
        advanced/proficiency. I am particularly experienced with B2/C1/C2
        students who want to improve their fluency and vocabulary, and students
        who want to develop their English language skill in a particular area,
        such as their work or studies. I take notes during a lesson and provide
        students with a useful feedback document at the end of a class, a
        document which includes feedback on pronunciation, the vocabulary that
        we’ve studied during the class, as well as corrections of your mistakes
        and explanations of these corrections (you can see an example of this on
        the introduction video on my profile!). My teaching method: I have a
        unique method of teaching that involves firstly finding out what you
        know, from your speaking or writing, and then developing your
        understanding with lessons designed specifically for you. In this way,
        the learning experience is completely designed for your specific needs
        and preferences. This means that you will not receive any pointless
        lessons on the present simple which you have had many of times before!
        Instead, the knowledge that you currently have will be developed and
        added to. This involves firstly doing a speaking task in order that I
        can see what you know and what you don’t know, and then secondly doing a
        mixture of vocabulary/grammar presentations and tasks in order to
        practise new language points or any language points that you’re having
        difficulty with. At the end of a class, you will receive a document with
        lots of feedback on your English, an example of which you can see in the
        introduction video here on my profile. Alongside feedback on your
        pronunciation and vocabulary, on this document you will see lists of 1)
        mistakes you’ve made and their corrections, 2) good things you have said
        which use difficult aspects of English in the correct way, 3) aspects of
        the language which you might want to discuss. You will receive this as a
        PDF document. Many students choose to print this document, annotate it,
        and then bring it to the next class in order to ask any questions that
        they have. My aims: My aim is to make English language learning
        enjoyable and realistic, to give you a good, functional, and applicable
        understanding of the English language. I aim to give higher-level
        students the personalised advice which they need to achieve proficiency.
        I aim to give lower-level students lessons which develop their language
        skills and don’t make them feel stressed about language learning! I aim
        to give my young students a positive experience of education in order
        that they develop a positive attitude to their studies in general As
        mentioned above, each lesson is designed to suit an individual learner,
        however there are common types of lesson with which students like to
        develop their language skills: - Conversation classes with feedback and
        error correction - Exam preparation (IELTS, TOEFL, FCE, CAE, CPE) -
        Writing improvement – cohesion and coherence - Vocabulary focus -
        Coursebook guidance with supplementary materials - English for work (job
        interviews, meetings, emails) Many students want lessons on things that
        they are interested in week-to-week, or problem areas that come up in
        class – this approach is also very productive! The classes are fully
        adapted to you and your interests!
      </p>
      <button className="py-2 mb-3 text-primary-500">Read more</button>

      <iframe
        width="100%"
        height="415"
        className="rounded-xl m-auto"
        src="https://www.youtube.com/embed/7epAL9M2p54"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="py-5">
        <button className="flex w-full p-3 rounded-xl  bg-primary-200/100 hover:bg-primary-300  justify-center text-white">
          <ChatBubbleOvalLeftIcon className="w-5 h-5 my-auto mr-2 text-white" />
          Contact tutor
        </button>
      </div>
      <div className="border-b border-2  border-gray-300/50 my-5"></div>
    </div>
  );
};

export default TaughtJoel;
