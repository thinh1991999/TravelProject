import React, { ReactNode, useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDrop } from "../share/customHooks";

const Drop = ({
  children,
  target,
  configs,
}: {
  children?: ReactNode;
  target: ReactNode;
  configs?: {
    top?: string;
    bottom?: string;
    right?: string;
    left?: string;
    width?: string;
    height?: string;
  };
}) => {
  const [show, setShow] = useState<boolean>(false);
  const targetRef = useRef<HTMLDivElement>(null);

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const targetReff = targetRef.current;
    if (!targetReff) return;
    const evClick = (e: MouseEvent) => {
      const realTarget = e.target as Node;
      const childRef = ref.current;
      if (targetReff.contains(realTarget)) {
        setShow((prev) => !prev);
        return;
      }
      if (childRef && !childRef.contains(realTarget)) {
        setShow(false);
      }
    };
    window.addEventListener("click", evClick);

    return () => {
      window.removeEventListener("click", evClick);
    };
  }, [targetRef, ref]);

  return (
    <div className="relative">
      <div ref={targetRef}>{target}</div>
      {show && (
        <div
          className="absolute py-5 bg-white shadow-box"
          style={{
            ...configs,
          }}
          ref={ref}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Drop;
