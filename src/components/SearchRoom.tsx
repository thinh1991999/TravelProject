import React, { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import httpService from "../services/httpService";
import { RoomDetail } from "../interfaces/detail";
import { Link } from "react-router-dom";

const SearchRoom = () => {
  const [showDrop, setShowDrop] = useState(false);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<RoomDetail[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setLoading(true);
    let isApiScribed = true;
    const timeOut = setTimeout(() => {
      httpService.getRoomFilterName(value).then((res) => {
        if (isApiScribed) {
          setData(res.data.rooms);
          setLoading(false);
        }
      });
    }, 100);
    return () => {
      clearTimeout(timeOut);
      isApiScribed = false;
    };
  }, [value]);

  useEffect(() => {
    if (!showDrop) return;
    const el = wrapRef.current;
    const evClick = (e: MouseEvent) => {
      if (!el?.contains(e.target as Node)) {
        setShowDrop(false);
      }
    };
    window.addEventListener("click", evClick);
    return () => {
      window.removeEventListener("click", evClick);
    };
  }, [wrapRef, showDrop]);

  return (
    <div
      ref={wrapRef}
      className="flex justify-center py-3 px-5 shadow rounded-full hv-sd cursor-pointer relative min-w-[500px]"
    >
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Search"
        className="flex-1"
        ref={inputRef}
        onFocus={() => setShowDrop(true)}
      />
      <button className="p-0 w-[30px] h-[30px] flex justify-center items-center text-xl btn btn-primary rounded-full">
        <AiOutlineSearch />
      </button>
      {showDrop && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md py-10 px-3 rounded-md max-h-[500px] overflow-y-auto">
          {loading ? <span>Loading....</span> : <></>}
          {!loading ? (
            data.length === 0 ? (
              <span>Nothing to show</span>
            ) : (
              data.map((room, idx) => {
                const { images, name, location, _id } = room;
                return (
                  <Link
                    to={`/detail/${_id}`}
                    key={idx}
                    onClick={() => {
                      setShowDrop(false);
                    }}
                  >
                    <div className="flex items-center p-3 hover:opacity-50">
                      <img
                        src={images[0].publicUrl}
                        alt=""
                        className="w-[50px] h-[50px] rounded-sm"
                      />
                      <div className="flex flex-col ml-2">
                        <span className="font-bold">{name}</span>
                        <span>{location.address}</span>
                      </div>
                    </div>
                  </Link>
                );
              })
            )
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchRoom;
