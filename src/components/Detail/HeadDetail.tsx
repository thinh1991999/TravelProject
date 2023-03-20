import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useAppSelector } from "../../store/hook";

const HeadDetail = () => {
  const roomDetail = useAppSelector((state) => state.detail.roomDetail);
  if (!roomDetail) return <></>;
  return (
    <div>
      <h2 className="lg:text-4xl text-3xl">{roomDetail.room.name}</h2>
      <div className="flex items-center mt-2">
        <div className="flex items-center">
          <AiFillStar />
          {/* <span className="font-bold ml-1">{data.reviewsRating}</span> */}
        </div>
        <span className="mx-2">·</span>
        {/* <button className="underline">{data.reviewsCount} reviews</button> */}
        <span className="mx-2">·</span> <span> Selat, Bali, Indonesia</span>
      </div>
    </div>
  );
};

export default HeadDetail;
