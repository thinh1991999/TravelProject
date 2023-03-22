import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useModal } from "../share/customHooks";
import FilterBtn from "./FilterBtn";
import Filters from "./Filters";
import Modal from "./Modal";

const HeaderMobile = () => {
  const [show, handleShow] = useModal();

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="container m-auto h-[100px] flex items-center ">
          <div className="flex items-center px-3 py-1 rounded-full w-full border border-color shadow-box text-sm">
            <div className="text-2xl mr-2">
              <AiOutlineSearch />
            </div>
            <div className="flex-1 flex flex-col">
              <span className="text-start font-semibold">Any where</span>
              <div className="flex justify-start items-center text-gray-600">
                <span className="">Any week</span>
                <span className="mx-1">.</span>
                <span>Add guests</span>
              </div>
            </div>
            <FilterBtn handleShow={handleShow} />
          </div>
        </div>
      </div>
      <Modal isShow={show} setShow={handleShow}>
        <Filters handleShow={handleShow}></Filters>
      </Modal>
    </>
  );
};

export default HeaderMobile;
