import React, { useState, useRef } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";

// install Swiper modules
const Card = () => {
  const [imgs, setImgs] = useState([
    "https://a0.muscache.com/im/pictures/miso/Hosting-24043648/original/425c52e1-3b95-4280-a2de-fbf9a1d3ca52.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-24043648/original/3a682176-c8e2-4612-88d1-f441e01b0346.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-24043648/original/f8c7930b-2026-4b05-ac29-d4b2e1cd51bb.jpeg?im_w=320",
    "https://a0.muscache.com/im/pictures/miso/Hosting-24043648/original/147d677b-881e-4b0d-901c-e10ee634b1a2.jpeg?im_w=320",
    "https://a0.muscache.com/im/pictures/miso/Hosting-24043648/original/678960b5-7bbf-4078-bad6-af31f47d7872.jpeg?im_w=320",
    "https://a0.muscache.com/im/pictures/miso/Hosting-24043648/original/a1d7f788-f5dc-40da-b348-633825c8d6dc.jpeg?im_w=320",
  ]);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <div className="w-[300px]">
      <div className="w-[300px] aspect-[1/0.9] rounded-lg overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="w-full h-full"
        >
          {imgs.map((img, idx) => {
            return (
              <SwiperSlide key={idx} className="w-full">
                <img src={img} className="w-full h-full object-cover" alt="" />
              </SwiperSlide>
            );
          })}
          <button className="absolute top-[10px] right-[10px] z-[2] text-3xl text-white ">
            <AiOutlineHeart />
          </button>
        </Swiper>
      </div>
      <div className="mt-3">
        <div className="flex justify-between items-center">
          <h5 className="flex-1 one-line-max">Lorem ipsum dolor sit amet.</h5>
          <div className="w-[80px] flex justify-end items-center">
            <AiFillStar />
            <span className="font-bold">4.9</span>
          </div>
        </div>
        <div className="sub-gray my-1">Lorem, ipsum dolor.</div>
        <div className="sub-gray my-1">Lorem, ipsum dolor.</div>
        <span className="mt-2">
          <span className="font-bold">$59</span> night
        </span>
      </div>
    </div>
  );
};

export default Card;
