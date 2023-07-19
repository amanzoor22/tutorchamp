import React from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
const Jamesreviews = () => {
  return (
    <div>
      <div className="lg:px-4 pb-16  max-w-3xl flex flex-col bg-white rounded-xl mt-10 px-2 py-4">
        <h3 className="text-xl font-semibold pb-5 mb-3 "> Top Comments</h3>

        <div className="-my-10 ">
          <div className="flex space-x-4">
            <div className="flex-none py-10">
              <img
                src="/images/detailcardimg.png"
                alt=""
                className="h-10 w-10 rounded-full bg-gray-100"
              />
            </div>
            <div className="flex-1 py-10">
              <h3 className="font-medium text-gray-900">James</h3>

              <p>
                <time datetime="2021-07-16" className="text-gray-500 text-sm">
                  21 March 2023
                </time>
              </p>

              <p className="sr-only">5 out of 5 stars</p>

              <div className=" mt-4 max-w-none text-base">
                <p>
                  Hi! I'm James. I’m an English language teacher , editor, and
                  proofreader. I have a CELTA teaching qualification, a master’s
                  degree in English Literature, and over 8 years of experience
                  in language teaching and proofreading.
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex space-x-4">
            <div className="flex-none py-10">
              <img
                src="/images/user.png"
                alt=""
                className="h-10 w-10 rounded-full bg-gray-100"
              />
            </div>
            <div className="flex-1 py-10">
              <h3 className="font-medium text-gray-900">Madhuri</h3>

              <p>
                <time datetime="2021-07-16" className="text-gray-500 text-sm">
                  21 March 2023
                </time>
              </p>

              <p className="sr-only">5 out of 5 stars</p>

              <div className=" mt-4 max-w-none text-base">
                <p>
                  James is an excellent teacher!! Besides being knowledgeable he
                  is extremely patient and understanding. Its been such a great
                  learning experience so far!!
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex space-x-4">
            <div className="flex-none py-10">
              <img
                src="/images/user.png"
                alt=""
                className="h-10 w-10 rounded-full bg-gray-100"
              />
            </div>
            <div className="flex-1 py-10">
              <h3 className="font-medium text-gray-900">Pat</h3>

              <p>
                <time datetime="2021-07-16" className="text-gray-500 text-sm">
                  21 March 2023
                </time>
              </p>

              <p className="sr-only">5 out of 5 stars</p>

              <div className=" mt-4 max-w-none text-base">
                <p className="line-clamp-3">
                  James is definitely a very good and experienced teacher. He
                  taught me, he taught my kids - and we all would highly
                  recommend taking lessons with him! We always felt relaxed and
                  comfortable with him, he had answers to every grammatical
                  problem and his explanations were clear and precise.
                </p>
                <button className="py-2 mb-3 text-primary-500">
                  Read more
                </button>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex space-x-4">
            <div className="flex-none py-10">
              <img
                src="/images/user.png"
                alt=""
                className="h-10 w-10 rounded-full bg-gray-100"
              />
            </div>
            <div className="flex-1 py-10">
              <h3 className="font-medium text-gray-900">Pietro</h3>

              <p>
                <time datetime="2021-07-16" className="text-gray-500 text-sm">
                  21 March 2023
                </time>
              </p>

              <p className="sr-only">5 out of 5 stars</p>

              <div className=" mt-4 max-w-none text-base">
                <p>
                  James is professional and has a lot of expertise in teaching!
                  Thanks to his lessons, I passed my CAE exam, and he gave me
                  many tips and suggestions to improve my English skills. I
                  strongly recommend him as a teacher!
                </p>
              </div>
            </div>
          </div>
          <button className="underline text-gray-500 p-3 rounded-xl">
            Show more comments
          </button>
          <div className="flex items-center">
            <input
              className="mt-4 min-w-full relative  focus:outline-none border-b-2 focus:border-b-4 h-10"
              type=""
              placeholder="Add a comment..."
            />
            <label htmlFor="">
              <PaperAirplaneIcon className="h-7 mt-4 z-10 right-8 text-primary-300 relative " />
            </label>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Jamesreviews;
