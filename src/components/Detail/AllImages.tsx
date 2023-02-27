import React from "react";
import { AiOutlineLeft } from "react-icons/ai";

const AllImages = ({
  show,
  setIsShowAll,
}: {
  show: boolean;
  setIsShowAll: Function;
}) => {
  return (
    <div
      className={`${
        show ? `translate-y-0` : `translate-y-full`
      } transition-all ease-linear duration-300 fixed top-0 left-0 bottom-0 right-0 z-50  bg-white`}
    >
      <div className="container m-auto h-full flex flex-col">
        <div className="py-5">
          <button
            className="btn btn-trans btn-x"
            onClick={() => setIsShowAll(false)}
          >
            <AiOutlineLeft />
          </button>
        </div>
        <div className="flex-1 bg-black"></div>
      </div>
    </div>
  );
};

export default AllImages;
