import React from "react";
import { RoomDetail } from "../../interfaces/detail";
import { Room } from "../../interfaces/global";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { setHoverId } from "../../store/slices/searchSlice";
import Card from "../Card";

const Left = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.search.data);

  const handleHover = (id: string) => {
    dispatch(setHoverId(id));
  };

  return (
    <div className="row">
      {data.map((item) => {
        return (
          <div className="w-1/3 p-2" key={item.id}>
            <div onMouseEnter={() => handleHover(item.id)}>
              <Card data={item} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Left;
