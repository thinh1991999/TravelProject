import React, { useState, useRef } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { Room } from "../interfaces/global";
import { Link } from "react-router-dom";
import { MyImage } from "./MyImage";
import { getAverageRating } from "../share/ultils";

// install Swiper modules
const Card = ({ data }: { data: Room }) => {
  const {
    _id,
    images,
    pricePerNight,
    description,
    name,
    location: { address },
    reviews,
  } = data;
  const avgRating = getAverageRating(reviews);
  return (
    <Link
      to={`/detail/${_id}`}
      className="w-full border border-color block rounded-md overflow-hidden animate"
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
          className="w-full h-full"
        >
          {images.map((img, idx) => {
            return (
              <SwiperSlide key={idx} className="w-full">
                <MyImage
                  image={{
                    alt: "",
                    src: img.publicUrl,
                  }}
                />
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
          {avgRating ? (
            <div className="w-[80px] flex justify-end items-center">
              <AiFillStar />
              <span className="font-normal ml-1">{avgRating}</span>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="sub-gray my-1 one-line-max">{address}</div>
        <div className="sub-gray my-1 one-line-max">{description}</div>
        <span className="mt-2">
          <span className="font-bold">${pricePerNight}</span> night
        </span>
      </div>
    </Link>
  );
};

export default Card;
