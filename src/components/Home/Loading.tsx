import React from "react";

const Loading = () => {
  return (
    <div className="row -m-3 animate-pulse">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((vl, idx) => {
        return (
          <div
            key={idx}
            className="p-3 lg:w-1/4 md:w-1/3 sm:w-1/2 w-full h-[360px]"
          >
            <div className="h-full loading rounded-md"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Loading;
