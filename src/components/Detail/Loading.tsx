import React from "react";

const Loading = () => {
  return (
    <div className="animate-pulse">
      <div className="w-[250px] md:w-[400px] h-[30px] loading"></div>
      <div className="mt-2 w-[150px] md:w-[300px] h-[20px] loading"></div>
      <div className="my-3 h-[400px] row rounded-[50px] overflow-hidden relative">
        <div className="w-full md:w-2/4 p-2 ">
          <div className="h-full w-full loading"></div>
        </div>
        <div className="md:block hidden w-1/4 h-full p-2 ">
          <div className="h-1/2 ">
            <div className="w-full h-full loading"></div>
          </div>
          <div className="h-1/2 pt-4">
            <div className="w-full h-full loading"></div>
          </div>
        </div>
        <div className="md:block hidden w-1/4 h-full p-2 ">
          <div className="h-1/2 ">
            <div className="w-full h-full loading"></div>
          </div>
          <div className="h-1/2 pt-4">
            <div className="w-full h-full loading"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
