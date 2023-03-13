import React, { useEffect, useState } from "react";
import Left from "../components/Search/Left";
import Right from "../components/Search/Right";
import { RoomDetail } from "../interfaces/detail";
import { Room } from "../interfaces/global";
import httpService from "../services/httpService";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { setData } from "../store/slices/searchSlice";

const Search = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(true);
  const showMap = useAppSelector((state) => state.search.showMap);

  useEffect(() => {
    setLoading(true);
    httpService.searchRooms().then((res) => {
      const { results } = res.data;
      dispatch(setData(results.slice(0, 5)));
    });
  }, [dispatch]);

  return (
    <div className=" relative flex justify-between">
      <div className={`${showMap ? "w-0 h-0" : "w-3/5"}  p-2 animate`}>
        <Left />
      </div>
      <div className={`${showMap ? "w-full" : "w-2/5"} p-2  animate`}>
        <Right />
      </div>
    </div>
  );
};

export default Search;
