import moment from "moment";
import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { useModal } from "../../share/customHooks";
import { useAppSelector } from "../../store/hook";
import Modal from "../Modal";
import Update from "./Update";

const Right = () => {
  const [show, handleShow] = useModal(false);
  const user = useAppSelector((state) => state.global.user);

  if (!user) return <></>;

  const { firstName, lastName, createdAt, description } = user;

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
          <p className="my-3">{description}</p>
        </div>
      </div>
      <Modal isShow={show} setShow={handleShow}>
        <Update />
      </Modal>
    </>
  );
};

export default Right;
