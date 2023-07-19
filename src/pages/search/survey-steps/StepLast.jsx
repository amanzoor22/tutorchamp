import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StepLast = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/search");
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div className="max-w-[23.75rem] min-h-screen mx-auto relative flex flex-col justify-center items-center">
      <h1 className="text-2xl font-medium  text-center">You are all set</h1>
      <div className="w-1/2">
        <img src="/images/gif.gif" alt="" className="w-full" />
      </div>
      <h1 className="text-2xl font-medium text-center">
        Are you ready to see your top matches?
      </h1>
    </div>
  );
};

export default StepLast;
