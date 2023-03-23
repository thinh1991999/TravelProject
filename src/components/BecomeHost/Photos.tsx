import React from "react";

const Photos = () => {
  return (
    <div className="w-[600px] m-auto">
      <h2
        className="mb-5"
        style={{
          animation: `moveTop 3s forwards`,
        }}
      >
        Add some photos of your house
      </h2>
      <span
        className="block opacity-0 mb-5 text-xl"
        style={{
          animation: `moveTop 3s forwards`,
        }}
      >
        You'll need 5 photos to get started. You can add more or make changes
        later.
      </span>
    </div>
  );
};

export default Photos;
