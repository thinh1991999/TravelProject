import React, { ReactElement, useEffect, useMemo, useState } from "react";
import { useAppSelector } from "../store/hook";
import Calendar from "./Calendar";
import Destinations from "./Destinations";
import Guests from "./Guests";

const SearchDrop = () => {
  const searchDrop = useAppSelector((state) => state.global.searchDrop);
  const [positions, setPositions] = useState<{
    left: string;
    right: string;
  }>({ left: "0px", right: "0px" });

  const [element, setElement] = useState<ReactElement>();

  useEffect(() => {
    switch (searchDrop) {
      case null:
        break;
      case 0:
        setPositions({
          left: "0px",
          right: "unset",
        });
        setElement(<Destinations size="350px" />);
        break;
      case 1:
        setPositions({
          left: "0px",
          right: "0px",
        });
        setElement(<Calendar />);
        break;
      case 2:
        setPositions({
          left: "0px",
          right: "0px",
        });
        setElement(<Calendar />);
        break;
      case 3:
        setPositions({
          left: "unset",
          right: "0px",
        });
        setElement(<Guests size="350px" />);
        break;
      default:
        break;
    }
  }, [searchDrop]);

  return (
    <>
      {searchDrop !== null ? (
        <div
          className="absolute top-[calc(100%_+_10px)] p-5 bg-white shadow-md rounded-[30px] border border-color"
          style={{
            ...positions,
          }}
        >
          {element}
        </div>
      ) : null}
    </>
  );
};

export default SearchDrop;
