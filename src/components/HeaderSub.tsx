import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";
import { useModal } from "../share/customHooks";
import Categories from "./Categories";
import Filters from "./Filters";
import Modal from "./Modal";

const HeaderSub = () => {
  const [show, handleShow] = useModal();

  return (
    <>
      <div className="fixed top-[100px] left-0 right-0  z-40 bg-white shadow-sm">
        <div className="container m-auto py-5 flex flex-wrap">
          <div className="w-[calc(100%_-_100px)]">
            <Categories />
          </div>
          <div className="w-[100px] flex justify-center">
            <button
              className="btn btn-border font-medium"
              onClick={() => handleShow(true)}
            >
              <BsFilter /> <span className="ml-1">Filters</span>
            </button>
          </div>
        </div>
      </div>
      <Modal isShow={show} setShow={handleShow}>
        <div className="w-[800px] h-[700px] flex flex-col">
          <div className="flex  items-center justify-between px-4 py-3 border-b border-color">
            <button
              className="btn btn-trans btn-x text-xl font-bold w-[50px] h-[50px]"
              onClick={() => handleShow(false)}
            >
              <AiOutlineClose />
            </button>
            <h4>Filter</h4>
            <div className="w-[50px]"></div>
          </div>
          <div className="flex-1 overflow-auto">
            <Filters />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default HeaderSub;
