import React, { useRef, useEffect } from "react";
import about from "../../assets/stand.mp4";

const AboutPlace = () => {
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
          <span>Step 1</span>
          <h2 className="mt-6 mb-10 ">Tell us about your place</h2>
          <p>
            In this step, we'll ask you which type of property you have and if
            guests will book the entire place or just a room. Then let us know
            the location and how many guests can stay.
          </p>
        </div>
      </div>
      <div className="w-1/2 p-2">
        <div className="w-full">
          <video ref={videoR} width="750" height="500" muted={true}>
            <source src={about} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default AboutPlace;
