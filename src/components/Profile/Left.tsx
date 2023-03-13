import React from "react";

const Left = () => {
  return (
    <div className="pr-10">
      <div className="py-10 shadow-box flex justify-center flex-col items-center">
        <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <button className="btn mt-3">Update photo</button>
      </div>
    </div>
  );
};

export default Left;
