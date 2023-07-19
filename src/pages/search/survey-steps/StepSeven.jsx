import Slider from "rc-slider";
import { useState } from "react";
import React from "react";

const StepSeven = () => {
  const [priceRange, setPriceRange] = useState([50, 100]);

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };
  return (
    <fieldset>
      <div>
        <h1 className="text-2xl mb-3 font-semibold">What is your budget?</h1>
      </div>
      <div className="py-20 md:py-32">
        <h1 className="text-lg font-bold mb-3">Price per hour</h1>
        <div>
          <Slider
            range={true}
            className="w-full"
            min={0}
            max={100}
            defaultValue={priceRange}
            onChange={handlePriceChange}
          />
          <h5 className="mt-3 font-medium text-xl text-center">
            {priceRange[0]} - {priceRange[1]} $
          </h5>
        </div>
      </div>
    </fieldset>
  );
};

export default StepSeven;
