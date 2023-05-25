import moment from "moment";
import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { useModal } from "../../share/customHooks";
import { useAppSelector } from "../../store/hook";
import Modal from "../Modal";
import Update from "./Update";
import { User } from "../../interfaces/global";

const Right = ({ data, setIsReset }: { data?: User; setIsReset: Function }) => {
  const [show, handleShow] = useModal(false);

  if (!data) return <></>;

  const { firstName, lastName, createdAt, description, email, phoneNumber,gender,address } =
    data;
  
  return (
    <>
      <div>
        <h2>
          Hi, I'm {firstName} {lastName}
        </h2>
        <span>Join in {moment(createdAt).calendar()}</span>
        <button
          className="flex items-center font-semibold hover:opacity-70"
          onClick={() => handleShow(true)}
        >
          <AiFillEdit className="mr-1" />
          Edit profile
        </button>
        <div className="mt-5">
          <h3>About</h3>
          <div className="my-5 flex items-center">
            <span className="font-bold mr-3 w-[150px]">Email:</span>
            <span>{email}</span>
          </div>
          <div className="my-5 flex items-center">
            <span className="font-bold mr-3 w-[150px]">First Name:</span>
            <span>{firstName}</span>
          </div>
          <div className="my-5 flex items-center">
            <span className="font-bold mr-3 w-[150px]">Last Name:</span>
            <span>{lastName}</span>
          </div>
          <div className="my-5 flex items-center">
            <span className="font-bold mr-3 w-[150px]">Description:</span>
            <span>{description}</span>
          </div>
          <div className="my-5 flex items-center">
            <span className="font-bold mr-3 w-[150px]">Phone:</span>
            <span>{phoneNumber}</span>
          </div>
          <div className="my-5 flex items-center">
            <span className="font-bold mr-3 w-[150px]">Gender:</span>
            <span>{gender}</span>
          </div>
          <div className="my-5 flex items-center">
            <span className="font-bold mr-3 w-[150px]">Address:</span>
            <span>{address}</span>
          </div>
        </div>
      </div>
      <Modal isShow={show} setShow={handleShow}>
        <Update data={data} setIsReset={setIsReset} handleShow={handleShow} />
      </Modal>
    </>
  );
};

export default Right;
