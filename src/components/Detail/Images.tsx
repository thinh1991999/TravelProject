import React, { useState, lazy } from "react";
import { TbGridDots } from "react-icons/tb";
import { MyImage } from "../MyImage";
const AllImages = lazy(() => import("./AllImages"));

const Images = ({ imgs }: { imgs: string[] }) => {
  const [isShowAll, setIsShowAll] = useState<boolean>(false);
  return (
    <>
      <div className="my-3 rounded-xl overflow-hidden flex relative h-[calc(60vh_-_64px)]">
        <div className="w-2/4 h-full ">
          <div
            className=" cursor-pointer h-full"
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
        <div className="w-1/4 h-full pl-4">
          {imgs.slice(1, 3).map((img, idx) => {
            return (
              <div className={`h-1/2 ${idx === 1 ? "pt-4" : ""}`} key={idx}>
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
        <div className="w-1/4 h-full pl-4">
          {imgs.slice(3, 5).map((img, idx) => {
            return (
              <div className={`h-1/2 ${idx === 1 ? "pt-4" : ""}`} key={idx}>
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
        <button
          className="btn btn-white btn-border absolute bottom-[20px] right-[20px] rounded-lg "
          onClick={() => setIsShowAll(true)}
        >
          <TbGridDots className="mr-2" /> show all photos
        </button>
      </div>
      <AllImages show={isShowAll} setIsShowAll={setIsShowAll} imgs={imgs} />
    </>
  );
};

export default Images;
