import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { GuestsITF } from "../interfaces/global";
import { GuestsEnum } from "../interfaces/redux";
import { guestSearch } from "../share/data";

const Guests = ({
  size,
  data,
  plusF,
  minusF,
}: {
  size?: string;
  data: GuestsITF;
  plusF: Function;
  minusF: Function;
}) => {
  return (
    <div>
      {guestSearch.map((vl, idx) => {
        return (
          <div
            className={`${
              idx < guestSearch.length - 1 ? "border-b border-color" : ""
            } flex justify-between items-center py-5 `}
            style={{
              width: `${size}`,
            }}
            key={idx}
          >
            <div className="">
              <h6 className="text-base">{vl.title}</h6>
              <span>{vl.sub}</span>
            </div>
            <div className="flex justify-center items-center">
              <button
                className="btn btn-trans btn-x border border-color"
                onClick={() => minusF(vl.hint)}
              >
                <AiOutlineMinus />
              </button>
              <span className="font-medium mx-3">{data[vl.tail]}</span>
              <button
                className="btn btn-trans btn-x border border-color"
                onClick={() => plusF(vl.hint)}
              >
                <AiOutlinePlus />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Guests;
