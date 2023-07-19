import React from "react";

const Container = (props) => {
  return (
    <div
      className={`mx-auto max-w-7xl  ${
        props.paddingZero ? 0 : "px-3 sm:px-6 lg:px-8"
      }`}
    >
      {props.children}
    </div>
  );
};

export default Container;
