import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const FloorPlan = () => {
  return (
    <div className="w-[600px] m-auto">
      <h2
        className="mb-5"
        style={{
          animation: `moveTop 3s forwards`,
        }}
      >
        Share some basics about your place
      </h2>
      <span
        className="block opacity-0 mb-5 text-xl"
        style={{
          animation: `moveTop 3s forwards`,
        }}
      >
        You'll add more details later, like bed types.
      </span>
      <div className="">
        <div
          style={{
            animation: `moveTop 3s forwards`,
          }}
          className="opacity-0 flex justify-between py-4 border-b border-color"
        >
          <span className="text-xl">Guests</span>
          <div className="flex justify-center items-center">
            <button
              className="btn btn-trans btn-x border border-color"
              // onClick={() => minusF(vl.hint)}
            >
              <AiOutlineMinus />
            </button>
            <span className="font-medium mx-3">{0}</span>
            <button
              className="btn btn-trans btn-x border border-color"
              // onClick={() => plusF(vl.hint)}
            >
              <AiOutlinePlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorPlan;
