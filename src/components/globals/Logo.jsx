import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center justify-center gap-2">
      <span className="block h-16">
        <img
          className="block h-full w-full"
          src="/images/logo.png"
          alt="logo"
        />
      </span>
    </Link>
  );
};

export default Logo;
