import React from "react";

const Oleksicard = () => {
  return (
    <div>
      {/* oleksi card */}
      <div className="flex mt-5 p-4">
        <img className="rounded-full w-10 h-10" src="/images/man.png" alt="" />

        <div className="lg:px-4 px-2">
          <p className="flex items-center justify-between">
            <span className="text-sm ">Oleksii</span>
            <h3 className="text-gray-500 text-sm mr-5">Recent review</h3>
          </p>

          <p className="text-xs mt-2">
            Aaron is an outstanding teacher, he won't let it slide into a
            speaking club and will always keep lessons structural, he will note
            your mistakes to work on them later, he can help you find your
            weaknesses and concentrate on them to make your English better. The
            same time Aaron is educated, intelligent and has good sense of humor
            so lessons are fun and useful. If you truly want to improve your
            English that's the right page!
          </p>
          <a className="text-primary-400 text-sm" href="/">
            View all reviews
          </a>
        </div>
      </div>
    </div>
  );
};

export default Oleksicard;
