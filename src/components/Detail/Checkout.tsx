import React, { useState, useRef, useEffect } from "react";
import { AiFillStar, AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { GuestsEnum } from "../../interfaces/redux";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import {
  handleDecreaseGuests,
  handleIncreaseGuests,
} from "../../store/slices/detailSlice";
import Calendar from "../Calendar";
import Guests from "../Guests";

const Checkout = () => {
  const dispatch = useAppDispatch();
  const adults = useAppSelector((state) => state.detail.adults);
  const children = useAppSelector((state) => state.detail.children);
  const infants = useAppSelector((state) => state.detail.infants);
  const pets = useAppSelector((state) => state.detail.pets);
  const checkin = useAppSelector((state) => state.detail.checkin);
  const checkout = useAppSelector((state) => state.detail.checkout);

  const [showGuests, setShowGuests] = useState<boolean>(false);
  const [showTime, setShowTime] = useState<number | null>(null);

  const guestRef = useRef<HTMLDivElement>(null);
  const timeRef = useRef<HTMLDivElement>(null);

  const handlePlus = (hint: GuestsEnum) => {
    dispatch(handleIncreaseGuests(hint));
  };

  const handleMinus = (hint: GuestsEnum) => {
    dispatch(handleDecreaseGuests(hint));
  };

  useEffect(() => {
    if (!showGuests) return;
    const el = guestRef.current;
    const evClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (!el?.contains(target)) {
        setShowGuests(!showGuests);
      }
    };
    if (el) {
      window.addEventListener("click", evClick);
    }
    return () => {
      window.removeEventListener("click", evClick);
    };
  }, [showGuests, guestRef]);

  useEffect(() => {
    if (!showTime) return;
    const el = timeRef.current;
    const evClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (!el?.contains(target)) {
        setShowTime(null);
      }
    };
    if (el) {
      window.addEventListener("click", evClick);
    }
    return () => {
      window.removeEventListener("click", evClick);
    };
  }, [showTime, timeRef]);

  return (
    <div className="w-full sticky  top-[100px] right-0 z-20">
      <div className="p-8 rounded-md shadow-lg border border-color">
        <div className="flex justify-between items-center mb-5">
          <span>
            <span className="font-bold text-2xl">$51</span> night
          </span>
          <div className="flex items-center">
            <span className="font-bold flex items-center">
              <AiFillStar /> 4.86
            </span>
            <span className="mx-1">·</span> <span>58 reviews</span>
          </div>
        </div>
        <div className="rounded-md border border-color text-xs cursor-pointer ">
          <div className="relative z-50" ref={timeRef}>
            <div className="flex border border-color">
              <div className="flex-1 p-4" onClick={() => setShowTime(1)}>
                <div className="uppercase font-bold">Check-in</div>
                <div>Add date</div>
              </div>
              <div className="w-[1px]  bg-gray-300"></div>
              <div className="flex-1 p-4" onClick={() => setShowTime(2)}>
                <div className="uppercase font-bold">Check-out</div>
                <div>Add date</div>
              </div>
            </div>
            {showTime !== null && (
              <div className="absolute -top-10 -right-10 min-w-[650px] bg-white border border-color shadow p-5">
                <div className="flex items-center justify-between">
                  <div className="">
                    <h4>Select dates</h4>
                    <span>Add your travel dates for exact pricing</span>
                  </div>
                  <div className="flex border border-color w-[300px] rounded-md">
                    <div
                      className={`${
                        showTime === 1
                          ? "border-2 border-black rounded-md"
                          : "bg-gray-200"
                      } flex-1 p-4 `}
                    >
                      <div className="uppercase font-bold">Check-in</div>
                      <div>Add date</div>
                    </div>
                    <div className="w-[1px]  bg-gray-300"></div>
                    <div
                      className={`${
                        showTime === 2
                          ? "border-2 border-black rounded-md"
                          : "bg-gray-200"
                      } flex-1 p-4 `}
                    >
                      <div className="uppercase font-bold">Check-out</div>
                      <div>Add date</div>
                    </div>
                  </div>
                </div>
                <Calendar />
              </div>
            )}
          </div>
          <div className="relative" ref={guestRef}>
            <div
              itemType="button"
              className="flex items-center justify-between  p-4 "
              onClick={() => {
                setShowGuests(!showGuests);
              }}
            >
              <div className="">
                <div className="uppercase font-bold">Guests</div>
                <div>Add date</div>
              </div>
              {showGuests ? <AiOutlineUp /> : <AiOutlineDown />}
            </div>
            {showGuests && (
              <div className="absolute top-full left-0 right-0 bg-white px-2 py-2 rounded-lg shadow-lg border border-color">
                <Guests
                  data={{ adults, children, infants, pets }}
                  minusF={handleMinus}
                  plusF={handlePlus}
                />
              </div>
            )}
          </div>
        </div>
        <button className="btn btn-primary w-full mt-5">
          check availability
        </button>
      </div>
    </div>
  );
};

export default Checkout;
