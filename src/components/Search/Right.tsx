import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import Marker from "../Marker";
import { getCenterMap } from "../../share/ultils";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { setShowmap } from "../../store/slices/searchSlice";
import Map from "../Map";

const Right = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.search.data);
  const showMap = useAppSelector((state) => state.search.showMap);

  const [center, setCenter] = useState({
    lat: 21.027763,
    lng: 105.83416,
  });

  const handleMap = () => {
    dispatch(setShowmap());
  };

  useEffect(() => {
    setCenter(getCenterMap(data));
  }, [data]);

  return (
    <div id="map" className="w-full  sticky top-[20px] right-0 ">
      <div className="relative h-[650px] w-full">
        <Map data={data} />
        <button
          className="btn top-5 left-5 bg-white absolute"
          onClick={() => handleMap()}
        >
          {showMap ? (
            <>
              <AiOutlineRight />{" "}
              <span className="ml-1 font-medium">Show list</span>
            </>
          ) : (
            <AiOutlineLeft />
          )}
        </button>
      </div>
    </div>
  );
};

export default Right;
