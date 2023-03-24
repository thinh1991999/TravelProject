import moment from "moment";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useModal } from "../../share/customHooks";
import { useAppSelector } from "../../store/hook";
import Calendar from "../Calendar";
import Modal from "../Modal";
import Amenities from "./Amenities";
import CalenderDetail from "./CalenderDetail";

const InfoLeft = () => {
  const roomDetail = useAppSelector((state) => state.detail.roomDetail);
  const [show, handleShow] = useModal();

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
        <h4>About this place</h4>
        <div className="text_lines ">
          {description.length > 400 ? (
            <>
              <p>{`${description.slice(0, 400)}...`}</p>
              <div className="mt-3">
                <button
                  onClick={() => handleShow(true)}
                  className="underline font-bold hover:opacity-70"
                >
                  Show more
                </button>
              </div>
            </>
          ) : (
            <p>{description}</p>
          )}
        </div>
      </div>
      <div className="py-4 border-b border-color">
        <h4>Where you'll sleep</h4>
      </div>
      <div className="py-4 border-b border-color">
        <Amenities />
      </div>
      <div className="py-4 border-b border-color">
        <CalenderDetail />
      </div>
      <Modal isShow={show} setShow={handleShow}>
        <div className="lg:w-[700px] max-h-[700px] p-5 flex flex-col">
          <div className="">
            <button
              className="btn btn-x btn-trans"
              onClick={() => handleShow(false)}
            >
              <AiOutlineClose />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto text_lines mt-3">
            <h3>About this space</h3>
            <div className="mt-3">{description}</div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default InfoLeft;
