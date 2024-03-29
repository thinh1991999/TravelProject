import React, { useState, lazy } from "react";
import { TbGridDots } from "react-icons/tb";
import { useAppSelector } from "../../store/hook";
import Cube from "../Cube";
import { MyImage } from "../MyImage";
const AllImages = lazy(() => import("./AllImages"));

const Images = () => {
  const [isShowAll, setIsShowAll] = useState<boolean>(false);
  const roomDetail = useAppSelector((state) => state.detail.roomDetail);
  
  if (!roomDetail) return <></>;
  const { images } = roomDetail;
  return (
    <>
      <div className="my-3 rounded-xl overflow-hidden flex relative h-[300px] lg:h-[calc(60vh_-_64px)]">
        <div className="w-full md:w-2/4 h-full ">
          <div
            className=" cursor-pointer h-full"
            onClick={() => setIsShowAll(true)}
          >
            <MyImage
              image={{
                alt: "",
                src: images[0].publicUrl,
              }}
            />
          </div>
        </div>
        {/* <div className="w-2/4 flex justify-center items-center">
          <Cube size={300} imgs={imgs} />
        </div> */}
        <div className="md:block hidden w-1/4 h-full pl-4">
          {images.slice(1, 3).map((img, idx) => {
            return (
              <div className={`h-1/2 ${idx === 1 ? "pt-4" : ""}`} key={idx}>
                <div
                  className="h-full cursor-pointer"
                  onClick={() => setIsShowAll(true)}
                >
                  <MyImage
                    image={{
                      alt: "",
                      src: img.publicUrl,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="md:block hidden w-1/4 h-full pl-4">
          {images.slice(3, 5).map((img, idx) => {
            return (
              <div className={`h-1/2 ${idx === 1 ? "pt-4" : ""}`} key={idx}>
                <div
                  className="h-full cursor-pointer"
                  onClick={() => setIsShowAll(true)}
                >
                  <MyImage
                    image={{
                      alt: "",
                      src: img.publicUrl,
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
      <AllImages show={isShowAll} setIsShowAll={setIsShowAll} imgs={images} />
    </>
  );
};

export default Images;
