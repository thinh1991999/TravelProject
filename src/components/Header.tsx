import React, { useEffect, useRef } from "react";
import { AiOutlineGlobal, AiOutlineSearch } from "react-icons/ai";
import { BsList } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { changeShowSearch, setSearchDrop } from "../store/slices/globalSlice";
import Logo from "./Logo";
import SearchDrop from "./SearchDrop";
import User from "./User";

const Header = () => {
  const dispatch = useAppDispatch();
  const isSearchHeader = useAppSelector((state) => state.global.isSearchHeader);
  const searchDrop = useAppSelector((state) => state.global.searchDrop);

  const searchRef = useRef<HTMLDivElement>(null);

  const hanldleShowSearch = () => {
    dispatch(changeShowSearch(true));
  };

  const handleShowDropSearch = (idx: number) => {
    dispatch(setSearchDrop(idx));
  };

  useEffect(() => {
    if (searchDrop === null) return;
    const el = searchRef.current;
    const eventClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (!el?.contains(target)) dispatch(setSearchDrop(null));
    };
    if (el) {
      window.addEventListener("click", eventClick);
    }
    return () => {
      window.removeEventListener("click", eventClick);
    };
  }, [searchRef, searchDrop, dispatch]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 lg:text-base text-sm">
        <div className="border-t border-b border-color bg-white">
          <div
            className={`${
              isSearchHeader ? `h-[200px]` : `h-[100px]`
            } container m-auto transition-all ease-linear duration-200 `}
          >
            <div className="flex justify-between items-center py-4">
              <div className="md:w-3/12">
                <Logo />
              </div>
              <div className="flex-1 flex justify-center">
                <div className=" flex justify-center py-3 px-5 shadow rounded-full hv-sd cursor-pointer">
                  <div
                    className="px-4 overflow-ellipsis whitespace-nowrap flex-center"
                    onClick={() => hanldleShowSearch()}
                  >
                    Anywhere
                  </div>
                  <div className="div-bd"></div>
                  <div
                    className="px-4 overflow-ellipsis whitespace-nowrap flex-center"
                    onClick={() => hanldleShowSearch()}
                  >
                    Any week
                  </div>
                  <div className="div-bd"></div>
                  <div
                    className="px-4 sub-gray overflow-ellipsis whitespace-nowrap flex-center"
                    onClick={() => hanldleShowSearch()}
                  >
                    Add guests
                  </div>
                  <button className="p-0 w-[30px] h-[30px] flex justify-center items-center text-xl btn btn-primary rounded-full">
                    <AiOutlineSearch />
                  </button>
                </div>
              </div>
              <div className="md:w-3/12 flex items-center justify-end">
                {/* <Link
                  to={"/hosting"}
                  className="btn btn-trans font-semibold whitespace-nowrap"
                >
                  Your home
                </Link> */}
                {/* <button className="whitespace-nowrap text-xl mx-5 p-0 w-[40px] h-[40px] flex justify-center items-center btn btn-trans font-semibold">
                  <AiOutlineGlobal />
                </button> */}
                <User />
              </div>
            </div>
            <div
              className={`${
                isSearchHeader ? `scale-1` : `scale-0`
              }  py-4 flex justify-center transition-all ease-linear duration-200`}
            >
              <div
                ref={searchRef}
                className={`${
                  searchDrop !== null ? "bg-gray-300" : ""
                } flex min-w-[800px] rounded-full border border-color relative`}
              >
                <div
                  className={`${
                    searchDrop === 0 ? "bg-white hover:bg-white shadow-md" : ""
                  } flex-1 flex flex-col btn-trans px-6 py-3 cursor-pointer rounded-full`}
                  onClick={() => handleShowDropSearch(0)}
                >
                  <span className="font-medium">Where</span>
                  <input type="text" placeholder="Search destinations" />
                </div>
                <div className="div-bd"></div>
                <div
                  className={`${
                    searchDrop === 1 ? "bg-white hover:bg-white shadow-md" : ""
                  } flex flex-col px-6 py-3 rounded-full btn-trans cursor-pointer`}
                  onClick={() => handleShowDropSearch(1)}
                >
                  <span className="font-medium">Check in</span>
                  <span className="sub-gray">Add dates</span>
                </div>
                <div className="div-bd"></div>
                <div
                  className={`${
                    searchDrop === 2 ? "bg-white hover:bg-white shadow-md" : ""
                  } flex flex-col px-6 py-3 rounded-full btn-trans cursor-pointer`}
                  onClick={() => handleShowDropSearch(2)}
                >
                  <span className="font-medium">Check out</span>
                  <span className="sub-gray">Add dates</span>
                </div>
                <div className="div-bd"></div>
                <div
                  className={`${
                    searchDrop === 3 ? "bg-white hover:bg-white shadow-md" : ""
                  } w-[250px] flex flex-col px-6 py-3 rounded-full btn-trans cursor-pointer`}
                  onClick={() => handleShowDropSearch(3)}
                >
                  <span className="font-medium">Who</span>
                  <span className="sub-gray">Add guests</span>
                </div>
                <button className="btn btn-primary h-auto absolute right-3 top-3 bottom-3 rounded-full ">
                  <AiOutlineSearch className="text-xl font-bold mr-1" /> Search
                </button>
                <SearchDrop />
              </div>
            </div>
          </div>
        </div>
      </header>
      {isSearchHeader && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-30 z-[49]"
          onClick={() => {
            dispatch(changeShowSearch(false));
          }}
        ></div>
      )}
    </>
  );
};

export default Header;
