import React from "react";
import { Staricon } from "../../../components/globals/Icons";

const Comments = () => {
  return (
    <div>
      <div className="bg-white mt-5 px-5">
        <div>
          <div className="-my-10">
            <div className="flex space-x-4 text-sm text-gray-500">
              <div className="flex-none py-10">
                <img
                  src="/images/user.png"
                  alt=""
                  className="h-20 w-20 rounded-full bg-gray-100"
                />
              </div>
              <div className="flex-1 py-10">
                <div className="flex">
                  <h3 className="font-medium text-gray-900">Tar</h3>
                  <Staricon />
                </div>
                <p>
                  <time datetime="2021-07-16">19 March 2023</time>
                </p>

                <p className="sr-only">5 out of 5 stars</p>

                <div className="prose prose-sm mt-4 max-w-none text-gray-500">
                  <p>
                    I recently started working with James as my private English
                    tutor and I couldn't be more thrilled with the progress I've
                    made! James is an exceptional teacher who is incredibly
                    knowledgeable, patient, and encouraging. He always takes the
                    time to explain difficult concepts in a way that I can
                    understand and he makes our lessons engaging and enjoyable.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 text-sm text-gray-500 mb-5">
              <div className="flex-none py-10 ">
                <img
                  src="/images/user2.png"
                  alt=""
                  className="h-20 w-20 rounded-full bg-gray-100"
                />
              </div>
              <div className="flex-1 pb-2 pt-10 border-t border-gray-200">
                <div className="flex ">
                  <h3 className="font-medium text-gray-900">Narmin</h3>
                  <Staricon />
                </div>
                <p>
                  <time datetime="2021-07-12">19 March 2023</time>
                </p>

                <p className="sr-only">5 out of 5 stars</p>

                <div className="prose prose-sm mt-4 max-w-none text-gray-500">
                  <p>
                    James has been an outstanding English tutor, exceeding my
                    expectations in helping me improve my language skills. I
                    appreciate his ability to create a positive and supportive
                    learning environment with his great sense of humor, making
                    every lesson enjoyable. His passion for the English language
                    is contagious and inspiring, motivating me to work harder
                    towards my language learning goals. Apart from his excellent
                    teaching skills, James is also highly organized and
                    reliable. He always comes well-prepared and punctual for our
                    lessons, ensuring that we make the most of our time
                    together. His feedback on my progress is clear and
                    constructive, and he provides me with useful tips and
                    resources to aid in my continued improvement. I
                    wholeheartedly recommend James to anyone seeking a dedicated
                    and skilled English tutor. He has been an invaluable
                    resource in building my confidence in my language abilities.
                    Thank you, James, for everything you do!
                  </p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 text-sm text-gray-500 ">
              <div className="flex-none py-10 mb-10">
                <img
                  src="/images/man.png"
                  alt=""
                  className="h-20 w-20 rounded-full bg-gray-100 "
                />
              </div>
              <div className="flex-1 py-10 border-t border-gray-200">
                <div className="flex">
                  <h3 className="font-medium text-gray-900">Oleksii</h3>
                  <Staricon />
                </div>
                <p>
                  <time datetime="2021-07-12">2 Feb 2023</time>
                </p>

                <p className="sr-only">5 out of 5 stars</p>

                <div className="prose prose-sm mt-4 max-w-none text-gray-500">
                  <p>
                    Aaron is an outstanding teacher, he won't let it slide into
                    a speaking club and will always keep lessons structural, he
                    will note your mistakes to work on them later, he can help
                    you find your weaknesses and concentrate on them to make
                    your English better. The same time Aaron is educated,
                    intelligent and has good sense of humor so lessons are fun
                    and useful. If you truly want to improve your English that's
                    the right page!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5">
        <button className="w-full bg-primary-400 text-white text-center mt-4 p-2 rounded-2xl hover:bg-primary-500">
          More reviews
        </button>
      </div>
    </div>
  );
};

export default Comments;
