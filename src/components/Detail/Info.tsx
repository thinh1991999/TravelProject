import React, { useState } from "react";
import {
  AiFillStar,
  AiOutlineDown,
  AiOutlineHeart,
  AiOutlineUp,
} from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { RoomDetail } from "../../interfaces/detail";
import Calendar from "../Calendar";
import { MyImage } from "../MyImage";
import AllImages from "./AllImages";
import Checkout from "./Checkout";
import Images from "./Images";

const Info = ({ data }: { data: RoomDetail }) => {
  const {
    hostName,
    hostProfilePhotoUrl,
    details,
    roomAndPropertyType,
    overview,
  } = data;

  const detail = details.filter((vl) => vl.title)[0];
  if (!detail) return <></>;
  const { descriptionItems } = detail;
  return (
    <div>
      <div className="row ">
        <div className="w-4/6 p-2">
          <div className="py-4 flex justify-between items-center border-b border-color">
            <div className="">
              <h3>
                {roomAndPropertyType} hosted by {hostName}
              </h3>
              <div className="flex items-center mt-2">
                {overview.map((ov, idx) => {
                  return (
                    <>
                      <span>
                        <span key={idx}>{ov}</span>
                        {idx < overview.length - 1 && (
                          <span className="mx-1">.</span>
                        )}
                      </span>
                    </>
                  );
                })}
              </div>
            </div>
            <button className="w-[40px] h-[40px] rounded-full overflow-hidden">
              <img
                src={hostProfilePhotoUrl}
                alt=""
                className="w-full h-full object-cover"
              />
            </button>
          </div>
          <div className="py-4 border-b border-color">
            <div className="flex items-center my-3">
              <div className="w-[50px] flex justify-center items-center">
                <TbGridDots />
              </div>
              <div className="ml-3">
                <h5>Self check-in</h5>
                <span>Self check-in Check yourself in with the lockbox.</span>
              </div>
            </div>
            <div className="flex items-center my-3">
              <div className="w-[50px] flex justify-center items-center">
                <TbGridDots />
              </div>
              <div className="ml-3">
                <h5>Self check-in</h5>
                <span>Self check-in Check yourself in with the lockbox.</span>
              </div>
            </div>
          </div>
          <div className="py-4 border-b border-color">
            <h4>Where you'll sleep</h4>
          </div>
          <div className="py-4 border-b border-color">
            <h4>What this place offers</h4>
            <div className="mt-5">
              <div className="flex items-center my-2">
                <TbGridDots className="mr-2" />
                <span>Beach access – Beachfront</span>
              </div>
              <div className="flex items-center my-2">
                <TbGridDots className="mr-2" />
                <span>Beach access – Beachfront</span>
              </div>
              <div className="flex items-center my-2">
                <TbGridDots className="mr-2" />
                <span>Beach access – Beachfront</span>
              </div>
              <button className="btn btn-white btn-border rounded-lg mt-8 font-bold">
                Show all 27 amenities
              </button>
            </div>
          </div>
          <div className="py-4 border-b border-color">
            <h4>Select check-in date</h4>
            <span>Add your travel dates for exact pricing</span>
            <div className="mt-5">
              <Calendar />
            </div>
          </div>
        </div>
        <div className="w-2/6 p-2  relative">
          <Checkout />
        </div>
      </div>
    </div>
  );
};

export default Info;
