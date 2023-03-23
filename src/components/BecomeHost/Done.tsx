import React from "react";

const Done = () => {
  return (
    <div className="w-[600px] m-auto">
      <h2
        className="mb-5"
        style={{
          animation: `moveTop 3s forwards`,
        }}
      >
        Congratulations, Đỗ Duy!
      </h2>
      <span
        className="block opacity-0 mb-5 text-xl"
        style={{
          animation: `moveTop 3s forwards`,
        }}
      >
        From one Host to another—welcome aboard. Thank you for sharing your home
        and helping to create incredible experiences for our guests.
      </span>
      <button
        style={{
          animation: `moveTop 3s forwards`,
        }}
        className="btn btn-primary"
      >
        Let's get started
      </button>
    </div>
  );
};

export default Done;
