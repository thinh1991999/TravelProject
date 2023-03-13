import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const YourReview = () => {
  const [rating, setRating] = useState<number>(1);
  return (
    <div className="p-5 min-w-[700px]">
      <button>Click</button>
      <form action="">
        <div className="my-5">
          <h5 className="text-center mb-2">How was your stay at ABC's place</h5>
          <div className="flex justify-center">
            {[
              { id: 1, title: "Terrible" },
              { id: 2, title: "Bad" },
              { id: 3, title: "Okay" },
              { id: 4, title: "Good" },
              { id: 5, title: "Great" },
            ].map((vl) => {
              return (
                <div className="flex flex-col justify-center items-center cursor-pointer mx-2">
                  <input
                    type="radio"
                    key={vl.id}
                    name="rate"
                    id={vl.id.toString()}
                    className="hidden"
                    checked={rating === vl.id}
                    onChange={() => {
                      setRating(vl.id);
                    }}
                  ></input>
                  <label htmlFor={vl.id.toString()} className="cursor-pointer">
                    <AiFillStar
                      className={` text-5xl ${
                        vl.id <= rating ? "text-primary" : ""
                      }`}
                    />
                  </label>
                  <span
                    className={` ${
                      vl.id === rating ? "text-primary" : "text-gray-500"
                    } font-semibold`}
                  >
                    {vl.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="my-5">
          <h5 className="text-center mb-2">Describe your experience</h5>
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            className="w-full border border-color p-2 rounded-md"
            placeholder="Say a few words about ABC's place"
          ></textarea>
        </div>
        <button className="btn btn-primary w-full">Submit</button>
      </form>
    </div>
  );
};
export default YourReview;
