import React, { useEffect, useRef } from "react";
import stand from "../../assets/stand.mp4";

const StandOut = () => {
  const videoR = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoR.current;
    if (!el) return;
    el.play();
  }, [videoR]);

  return (
    <div className="flex flex-wrap -m-2">
      <div className="w-1/2 p-2 ">
        <div className="">
          <span>Step 2</span>
          <h2 className="mt-6 mb-10 ">Make your place stand out</h2>
          <p>
            In this step, you’ll add some of the amenities your place offers,
            plus 5 or more photos. Then, you’ll create a title and description.
          </p>
        </div>
      </div>
      <div className="w-1/2 p-2">
        <div className="w-full">
          <video ref={videoR} width="750" height="500" muted={true}>
            <source src={stand} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default StandOut;
