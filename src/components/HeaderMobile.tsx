import React, { useEffect } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { useModal } from "../share/customHooks";
import FilterBtn from "./FilterBtn";
import Filters from "./Filters";
import Modal from "./Modal";
import SideBar from "./SideBar";
import { useLocation } from "react-router-dom";

const HeaderMobile = () => {
  const location = useLocation();
  const [show, handleShow] = useModal();
  const [show2, handleShow2] = useModal();

  useEffect(() => {
    console.log(location);
  }, [location, show2, handleShow2]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="container m-auto ">
          <div className="h-[100px] flex items-center ">
            <button className="mr-3" onClick={() => handleShow2(true)}>
              <AiOutlineMenu />
            </button>
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
      </div>
      <Modal isShow={show} setShow={handleShow}>
        <Filters handleShow={handleShow}></Filters>
      </Modal>
      <SideBar isShow={show2} setShow={handleShow2} />
    </>
  );
};

export default HeaderMobile;
