import React from "react";

const Loading = () => {
  return (
    <div className="row -m-3 animate-pulse">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((vl, idx) => {
        return (
          <div key={idx} className="p-3 w-1/4 h-[360px]">
            <div className="h-full loading rounded-md"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Loading;
