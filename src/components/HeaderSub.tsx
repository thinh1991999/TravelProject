import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";
import { useModal } from "../share/customHooks";
import Categories from "./Categories";
import Filters from "./Filters";
import Modal from "./Modal";

const FilterBtn = ({ handleShow }: { handleShow: Function }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [count, setCount] = useState(0);
  useEffect(() => {
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");
    const beds = searchParams.get("beds");
    const bedRooms = searchParams.get("bedRooms");
    const bathRooms = searchParams.get("bathRooms");
    const amenities = searchParams.getAll("amenities");
    const properties = searchParams.getAll("properties");
    const places = searchParams.getAll("places");
    let begin = 0;
    if (minPrice) begin++;
    if (maxPrice) begin++;
    if (beds) begin++;
    if (bedRooms) begin++;
    if (bathRooms) begin++;
    begin += amenities.length;
    begin += properties.length;
    begin += places.length;
    setCount(begin);
  }, [searchParams]);

  return (
    <button
      className={`${
        count > 0 ? "border-black border-2 " : ""
      } btn btn-border font-medium  relative`}
      onClick={() => handleShow(true)}
    >
      <BsFilter /> <span className="ml-1">Filters</span>
      {count > 0 && (
        <div className="flex justify-center items-center w-[20px] h-[20px] rounded-full bg-black text-white absolute -top-2 -right-2">
          <span className="text-sm">{count}</span>
        </div>
      )}
    </button>
  );
};

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

export default HeaderSub;
