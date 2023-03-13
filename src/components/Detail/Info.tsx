import React, { useState, useEffect } from "react";
import {
  AiFillStar,
  AiOutlineDown,
  AiOutlineHeart,
  AiOutlineUp,
} from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { RoomDetail } from "../../interfaces/detail";
import { useAppSelector } from "../../store/hook";
import Calendar from "../Calendar";
import { MyImage } from "../MyImage";
import AllImages from "./AllImages";
import Checkout from "./Checkout";
import Images from "./Images";
import InfoLeft from "./InfoLeft";

const Info = () => {
  // const amenities = useAppSelector((state) => state.global.amenities);

  // const { firstName, lastName, profilePic } = data.owner;
  // const { propertyType } = data.room;

  return (
    <div>
      <div className="row ">
        <div className="w-4/6 p-2">
          <InfoLeft />
        </div>
        <div className="w-2/6 p-2  relative">
          <Checkout />
        </div>
      </div>
    </div>
  );
};

export default Info;
