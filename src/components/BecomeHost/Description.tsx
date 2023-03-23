import React from "react";

const Description = () => {
  return (
    <div className="w-[600px] m-auto">
      <h2
        className="mb-5"
        style={{
          animation: `moveTop 3s forwards`,
        }}
      >
        Create your description
      </h2>
      <span
        className="block opacity-0 mb-5 text-xl"
        style={{
          animation: `moveTop 3s forwards`,
        }}
      >
        Share what makes your place special.
      </span>
      <div
        className=""
        style={{
          animation: `moveTop 3s forwards`,
        }}
      >
        <textarea className="h-[300px] p-5 border border-color w-full rounded-md"></textarea>
        <span
          className="mt-3 opacity-70 block
          "
        >
          87/500
        </span>
      </div>
    </div>
  );
};

export default Description;
