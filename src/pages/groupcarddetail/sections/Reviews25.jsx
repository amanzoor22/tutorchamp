import { StarIcon } from "@heroicons/react/24/outline";

import React from "react";

const Reviews25 = () => {
  return (
    <div className="font-sans lg:px-10 pb-16">
      <div className="flex mb-8">
        <StarIcon className="w-5 h-5 mr-2 text-yellow-500 fill-yellow-500 my-auto" />
        <h3 className="text-xl font-bold">4.98 (25 reviews)</h3>
      </div>
      <div className="-my-10 ">
        <div className="flex space-x-4">
          <div className="flex-none py-10">
            <img
              src="/images/user.png"
              alt=""
              className="h-10 w-10 rounded-full bg-gray-100"
            />
          </div>
          <div className="flex-1 py-10">
            <div className="flex">
              <h3 className="font-medium text-gray-900">Madhuri</h3>
              <StarIcon className="w-5 h-4 mr-2 text-yellow-500 fill-yellow-500 my-auto" />
            </div>
            <p>
              <time datetime="2021-07-16" className="text-gray-500 text-sm">
                21 March 2023
              </time>
            </p>

            <p className="sr-only">5 out of 5 stars</p>

            <div className=" mt-4 max-w-none text-base">
              <p>
                Joel is an excellent teacher!! Besides being knowledgeable he is
                extremely patient and understanding. Its been such a great
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
            <div className="flex">
              <h3 className="font-medium text-gray-900">Pat</h3>
              <StarIcon className="w-5 h-4 mr-2 text-yellow-500 fill-yellow-500 my-auto" />
            </div>
            <p>
              <time datetime="2021-07-16" className="text-gray-500 text-sm">
                21 March 2023
              </time>
            </p>

            <p className="sr-only">5 out of 5 stars</p>

            <div className=" mt-4 max-w-none text-base">
              <p className="line-clamp-3">
                Joel is definitely a very good and experienced teacher. He
                taught me, he taught my kids - and we all would highly recommend
                taking lessons with him! We always felt relaxed and comfortable
                with him, he had answers to every grammatical problem and his
                explanations were clear and precise.
              </p>
              <button className="py-2 mb-3 text-primary-500">Read more</button>
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
            <div className="flex">
              <h3 className="font-medium text-gray-900">Pietro</h3>
              <StarIcon className="w-5 h-4 mr-2 text-yellow-500 fill-yellow-500 my-auto" />
            </div>
            <p>
              <time datetime="2021-07-16" className="text-gray-500 text-sm">
                21 March 2023
              </time>
            </p>

            <p className="sr-only">5 out of 5 stars</p>

            <div className=" mt-4 max-w-none text-base">
              <p>
                Joel is professional and has a lot of expertise in teaching!
                Thanks to his lessons, I passed my CAE exam, and he gave me many
                tips and suggestions to improve my English skills. I strongly
                recommend him as a teacher!
              </p>
            </div>
          </div>
        </div>
        <button className="w-full bg-gray-300 hover:bg-gray-400 p-3 rounded-xl">
          Show more reviews
        </button>
      </div>
    </div>
  );
};

export default Reviews25;
