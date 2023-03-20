import React from "react";
import { useAppSelector } from "../../store/hook";
import Calendar from "../Calendar";
import Amenities from "./Amenities";

const InfoLeft = () => {
  const roomDetail = useAppSelector((state) => state.detail.roomDetail);

  if (!roomDetail) return <></>;
  const { firstName, lastName, profilePic } = roomDetail.owner;
  const { propertyType, description } = roomDetail.room;
  return (
    <>
      <div className="py-4 flex justify-between items-center border-b border-color">
        <div className="flex-1">
          <h4>Private room in villa hosted by {lastName + " " + firstName}</h4>
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
        <button className="w-[40px] h-[40px] rounded-full overflow-hidden shadow-md">
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
        <p className="text_lines ">{description}</p>
      </div>
      <div className="py-4 border-b border-color">
        <h4>Where you'll sleep</h4>
      </div>
      <div className="py-4 border-b border-color">
        <Amenities />
      </div>
      <div className="py-4 border-b border-color">
        <h4>Select check-in date</h4>
        <span>Add your travel dates for exact pricing</span>
        <div className="mt-5">
          <div className="lg:block hidden">
            <Calendar showDouble={true} />
          </div>
          <div className="lg:hidden block">
            <Calendar showDouble={false} />
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoLeft;
