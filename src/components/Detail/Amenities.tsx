import React, { useState, useEffect } from "react";
import { useAppSelector } from "../../store/hook";
import { Amenity } from "../../interfaces/global";
import { useModal } from "../../share/customHooks";
import Modal from "../Modal";
import { AiOutlineClose } from "react-icons/ai";

const Amenities = () => {
  const [show, handleShow] = useModal();
  const amenities = useAppSelector((state) => state.global.amenities);
  const roomDetail = useAppSelector((state) => state.detail.roomDetail);

  const [data, setData] = useState<Amenity[]>([]);
  const [none, setNone] = useState<Amenity[]>([]);

  useEffect(() => {
    if (!roomDetail) return;
    const rAmenities = roomDetail.room.amenities;
    setData(amenities.filter((vl) => rAmenities.includes(vl._id)));
    setNone(amenities.filter((vl) => !rAmenities.includes(vl._id)));
  }, [amenities, roomDetail]);

  return (
    <>
      <h4>What this place offers</h4>
      <div className="mt-5">
        <div className="flex flex-wrap -m-4">
          {data.map((amenity, idx) => {
            const { name, icon_url } = amenity;
            return (
              <div className="flex items-center w-1/2 p-4" key={idx}>
                <img src={icon_url} alt="" className="w-[25px] h-[25px] mr-2" />
                <span>Beach access – Beachfront</span>
              </div>
            );
          })}
        </div>
        <button
          onClick={() => handleShow(true)}
          className="btn btn-white btn-border rounded-lg mt-8 font-bold"
        >
          Show all {amenities.length} amenities
        </button>
      </div>
      <Modal isShow={show} setShow={handleShow}>
        <div className="p-5 min-w-[800px] h-[500px] flex flex-col">
          <button onClick={() => handleShow(false)}>
            <AiOutlineClose />
          </button>
          <div className="flex-1 overflow-y-auto">
            <div className="mt-5 ">
              <h3>What this place offers</h3>
              <div className="">
                {data.map((amenity, idx) => {
                  const { name, icon_url, description } = amenity;
                  return (
                    <div
                      className="flex items-center py-10 border-b border-color"
                      key={idx}
                    >
                      <img
                        src={icon_url}
                        alt=""
                        className="w-[25px] h-[25px] mr-2"
                      />
                      <div className="flex flex-col">
                        <span>{name}</span>
                        <span className="line-through opacity-50">
                          {description}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mt-5">
              <h3>Not included</h3>
              <div className="">
                {none.map((amenity, idx) => {
                  const { name, icon_url, description } = amenity;
                  return (
                    <div
                      className="flex items-center py-10 border-b border-color"
                      key={idx}
                    >
                      <div className="w-[25px] h-[25px] mr-2 relative">
                        <img src={icon_url} alt="" className="w-full h-full" />
                        <div className="absolute w-[30px] h-[2px] bg-black rotate-45 bottom-1/2"></div>
                      </div>
                      <div className="flex flex-col">
                        <span>{name}</span>
                        <span>{description}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Amenities;
