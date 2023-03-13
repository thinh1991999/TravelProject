import React from "react";
import { useAppSelector } from "../../store/hook";
import Calendar from "../Calendar";

const InfoLeft = () => {
  const roomDetail = useAppSelector((state) => state.detail.roomDetail);
  const amenities = useAppSelector((state) => state.global.amenities);

  if (!roomDetail) return <></>;
  const { firstName, lastName, profilePic } = roomDetail.owner;
  const { propertyType, description } = roomDetail.room;
  return (
    <>
      <div className="py-4 flex justify-between items-center border-b border-color">
        <div className="">
          <h3>
            {propertyType} hosted by {lastName + " " + firstName}
          </h3>
          <div className="flex items-center mt-2">
            {/* {overview.map((ov, idx) => {
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
                })} */}
          </div>
        </div>
        <button className="w-[40px] h-[40px] rounded-full overflow-hidden">
          <img src={profilePic} alt="" className="w-full h-full object-cover" />
        </button>
      </div>
      {/* <div className="py-4 border-b border-color">
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
      </div> */}
      <div className="py-4 border-b border-color">
        <p>{description}</p>
      </div>
      <div className="py-4 border-b border-color">
        <h4>Where you'll sleep</h4>
      </div>
      <div className="py-4 border-b border-color">
        <h4>What this place offers</h4>
        <div className="mt-5">
          <div className="flex flex-wrap -m-4">
            {amenities.map((amenity, idx) => {
              const { name, icon_url } = amenity;
              return (
                <div className="flex items-center w-1/2 p-4">
                  <img
                    src={icon_url}
                    alt=""
                    className="w-[25px] h-[25px] mr-2"
                  />
                  <span>Beach access – Beachfront</span>
                </div>
              );
            })}
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
    </>
  );
};

export default InfoLeft;
