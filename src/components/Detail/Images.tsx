import React, { useState } from "react";
import { TbGridDots } from "react-icons/tb";
import { MyImage } from "../MyImage";
import AllImages from "./AllImages";

const Images = ({ imgs }: { imgs: string[] }) => {
  const [isShowAll, setIsShowAll] = useState<boolean>(false);
  return (
    <>
      <div className="my-3 row rounded-[50px] overflow-hidden relative">
        <div className="w-1/2 p-2 ">
          <div
            className="h-full cursor-pointer"
            onClick={() => setIsShowAll(true)}
          >
            <MyImage
              image={{
                alt: "",
                src: imgs[0],
              }}
            />
          </div>
        </div>
        <div className="w-1/2 p-2">
          <div className="row ">
            {imgs.slice(1, 5).map((img, idx) => {
              return (
                <div className="w-1/2 p-2">
                  <div
                    className="h-full cursor-pointer"
                    onClick={() => setIsShowAll(true)}
                  >
                    <MyImage
                      image={{
                        alt: "",
                        src: img,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <button
          className="btn btn-white btn-border absolute bottom-[20px] right-[20px] rounded-lg "
          onClick={() => setIsShowAll(true)}
        >
          <TbGridDots className="mr-2" /> show all photos
        </button>
      </div>
      <AllImages show={isShowAll} setIsShowAll={setIsShowAll} />
    </>
  );
};

export default Images;
