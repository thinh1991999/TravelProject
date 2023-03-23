import React, { useEffect, useRef } from "react";
import finish from "../../assets/finish.mp4";

const FinishSetup = () => {
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
          <span>Step 3</span>
          <h2 className="mt-6 mb-10 ">Finish up and publish</h2>
          <p>
            Finally, you’ll choose if you'd like to start with an experienced
            guest, then you'll set your nightly price. Answer a few quick
            questions and publish when you're ready.
          </p>
        </div>
      </div>
      <div className="w-1/2 p-2">
        <div className="w-full">
          <video ref={videoR} width="750" height="500" muted={true}>
            <source src={finish} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default FinishSetup;
