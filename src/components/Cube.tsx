import React, { useRef } from "react";

const Cube = ({ size, imgs }: { size: number; imgs: string[] }) => {
  const mainSize = size / 2;
  const settings = useRef([
    {
      transform: `translateZ(
        ${mainSize}px)`,
    },
    {
      transform: `rotateX(90deg) translateZ(${mainSize}px)`,
    },
    {
      transform: `rotateY(90deg) translateZ(${mainSize}px)`,
    },
    {
      transform: `rotateY(-90deg) translateZ(${mainSize}px)`,
    },
    {
      transform: `rotateX(-90deg) translateZ(${mainSize}px)`,
    },
    {
      transform: `rotateY(-180deg) translateZ(${mainSize}px)`,
    },
  ]);
  return (
    <div
      style={{
        perspective: `${size * 3}px`,
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <div
        className="w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          animation: " rotate 50s infinite cubic-bezier(1, -0.75, 0.5, 1.2)",
        }}
      >
        {settings.current.map((setting, idx) => {
          return (
            <div
              className="w-full h-full absolute"
              style={{
                ...setting,
                background: `url(${imgs[idx]})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Cube;
