import React, { memo, useRef, useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Room } from "../interfaces/global";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { setActiveId } from "../store/slices/searchSlice";

const Marker = ({
  lat,
  lng,
  data,
}: {
  lat: number;
  lng: number;
  data: Room;
}) => {
  const dispatch = useAppDispatch();
  const hoverId = useAppSelector((state) => state.search.hoverId);
  const activeId = useAppSelector((state) => state.search.activeId);
  const [active, setActive] = useState(false);

  const itemRef = useRef<HTMLDivElement>(null);
  const {
    _id,
    pricePerNight,
    images,
    name,
    location: { address },
  } = data;

  useEffect(() => {
    const eventClick = (e: MouseEvent) => {
      // const {
      //   left: leftMap,
      //   top: topMap,
      //   bottom: bottomMap,
      //   right: rightMap,
      // } = mapSize;
      // const { left, bottom, top, right } =
      //   itemRef.current.getBoundingClientRect();

      // const realBottom = bottomMap - bottom;
      // const realTop = top - topMap;
      // const realLeft = left - leftMap;
      // const realRight = rightMap - right;
      // const pos = {};
      // if (realBottom >= realTop) {
      //   pos.top = true;
      // } else {
      //   pos.top = false;
      // }
      // if (realLeft >= realRight) {
      //   pos.left = true;
      // } else {
      //   pos.left = false;
      // }
      // setPositionSub(pos);
      if (itemRef.current === null) return;
      const target = e.target as Node;
      if (!itemRef.current.contains(target)) {
        setActive(false);
      } else {
        setActive(true);
      }
    };
    window.addEventListener("click", eventClick);
    return () => {
      window.removeEventListener("click", eventClick);
    };
  }, [itemRef]);

  return (
    <div
      ref={itemRef}
      onClick={() => dispatch(setActiveId(_id))}
      className={`${
        _id === hoverId || active
          ? "bg-black text-white "
          : "bg-white text-black "
      } relative py-4 border px-2 border-gray-600 transition-all duration-300 ease-linear rounded-2xl min-w-[80px] h-2  text-base font-bold flex justify-center items-center`}
    >
      <span>${pricePerNight}</span>
      {active && (
        <Link to={`/detail/${_id}`}>
          <div
            className={`top-0 absolute min-w-[250px] rounded-md overflow-hidden bg-white text-black   z-10`}
          >
            <div className="w-full">
              <img
                src={images[0].publicUrl}
                alt=""
                className="w-full h-[150px] object-cover"
              />
            </div>
            <div className="px-4 py-2">
              <p className="flex items-center">
                <span className="text-pink-500 mr-1">
                  <AiFillStar />
                </span>
                {/* {rating / 2 || 5}
                <span className="font-thin ml-1">({rating || 10})</span> */}
              </p>
              <p className="font-semibold one-line-max text-gray-700">{name}</p>
              <p className="font-thin  one-line-max">{address}</p>
              <p className="mt-2">
                {pricePerNight} <span className="font-thin">/đêm</span>
              </p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default memo(Marker);
