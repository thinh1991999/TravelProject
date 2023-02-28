import React, { useState, useRef } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { Room } from "../interfaces/global";
import { Link } from "react-router-dom";

// install Swiper modules
const Card = ({ data }: { data: Room }) => {
  const { id, images, price, hostThumbnail, name, address, rating } = data;

  return (
    <Link
      to={`/detail/${id}`}
      className="w-full border border-color block rounded-md overflow-hidden hover:opacity-90"
    >
      <div className="w-full aspect-[1/0.9] ">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 4,
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="w-full h-full"
        >
          {images.map((img, idx) => {
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
      <div className=" p-4">
        <div className="flex justify-between items-center">
          <h5 className="flex-1 one-line-max">{name}</h5>
          {rating && (
            <div className="w-[80px] flex justify-end items-center">
              <AiFillStar />
              <span className="font-bold">{rating}</span>
            </div>
          )}
        </div>
        <div className="sub-gray my-1 one-line-max">{address}</div>
        <div className="sub-gray my-1">Lorem, ipsum dolor.</div>
        <span className="mt-2">
          <span className="font-bold">${price.rate}</span> night
        </span>
      </div>
    </Link>
  );
};

export default Card;
