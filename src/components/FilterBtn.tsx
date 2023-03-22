import React, { useEffect, useState } from "react";
import { BsFilter } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";

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
        <span className="flex justify-center items-center w-[20px] h-[20px] rounded-full bg-black text-white absolute -top-2 -right-2">
          <span className="text-sm">{count}</span>
        </span>
      )}
    </button>
  );
};

export default FilterBtn;
