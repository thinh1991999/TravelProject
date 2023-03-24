import moment from "moment";
import React, { useState, useRef, useEffect } from "react";
import { AiFillStar, AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { CheckoutPrice } from "../../interfaces/global";
import { GuestsEnum } from "../../interfaces/redux";
import httpService from "../../services/httpService";
import { getGuests, getTime } from "../../share/ultils";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import {
  clearCheck,
  handleDecreaseGuests,
  handleIncreaseGuests,
} from "../../store/slices/detailSlice";
import Calendar from "../Calendar";
import Guests from "../Guests";
import CalendarInfo from "./CalenderInfo";

const Main = () => {
  const dispatch = useAppDispatch();
  const roomDetail = useAppSelector((state) => state.detail.roomDetail);
  const adults = useAppSelector((state) => state.detail.adults);
  const children = useAppSelector((state) => state.detail.children);
  const infants = useAppSelector((state) => state.detail.infants);
  const pets = useAppSelector((state) => state.detail.pets);
  const checkin = useAppSelector((state) => state.detail.checkin);
  const checkout = useAppSelector((state) => state.detail.checkout);
  const rating = useAppSelector((state) => state.detail.rating);

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
    <>
      <div className="flex justify-between items-center mb-5">
        <span>
          <span className="font-bold text-2xl">
            ${roomDetail?.room.pricePerNight}
          </span>{" "}
          night
        </span>
        <div className="flex items-center">
          <span className="font-bold flex items-center">
            <AiFillStar /> {rating}
          </span>
          <span className="mx-1">·</span>{" "}
          <span>{roomDetail?.room.reviews.length} reviews</span>
        </div>
      </div>
      <div className="rounded-md border border-color text-xs cursor-pointer ">
        <div className="relative z-50" ref={timeRef}>
          <div className="flex border border-color">
            <div className="flex-1 p-4" onClick={() => setShowTime(1)}>
              <div className="uppercase font-bold">Check-in</div>
              <div>{checkin ? getTime(checkin) : "Add date"} </div>
            </div>
            <div className="w-[1px]  bg-gray-300"></div>
            <div className="flex-1 p-4" onClick={() => setShowTime(2)}>
              <div className="uppercase font-bold">Check-out</div>
              <div>{checkout ? getTime(checkout) : "Add date"} </div>
            </div>
          </div>
          {showTime !== null && (
            <div className="absolute -top-10 -right-10 min-w-[650px] bg-white border border-color shadow p-5">
              <div className="flex items-center justify-between">
                <div className="">
                  <CalendarInfo />
                </div>
                <div className="flex border border-color w-[300px] rounded-md">
                  <div
                    className={`${
                      !checkin
                        ? "border-2 border-black rounded-md"
                        : "bg-gray-200"
                    } flex-1 p-4 `}
                  >
                    <div className="uppercase font-bold">Check-in</div>
                    <div>{checkin ? getTime(checkin) : "Add date"} </div>
                  </div>
                  <div className="w-[1px]  bg-gray-300"></div>
                  <div
                    className={`${
                      checkin
                        ? "border-2 border-black rounded-md"
                        : "bg-gray-200"
                    } flex-1 p-4 `}
                  >
                    <div className="uppercase font-bold">Check-out</div>
                    <div>{checkout ? getTime(checkout) : "Add date"} </div>
                  </div>
                </div>
              </div>
              <Calendar />
              <div className="flex justify-end">
                <button
                  className="font-semibold underline hover:opacity-70"
                  onClick={() => {
                    dispatch(clearCheck());
                  }}
                >
                  Clear dates
                </button>
              </div>
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
              <div>{getGuests(adults, children, infants, pets)}</div>
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
    </>
  );
};

const Info = () => {
  const { id } = useParams();
  const adults = useAppSelector((state) => state.detail.adults);
  const children = useAppSelector((state) => state.detail.children);
  const infants = useAppSelector((state) => state.detail.infants);
  const pets = useAppSelector((state) => state.detail.pets);
  const checkin = useAppSelector((state) => state.detail.checkin);
  const checkout = useAppSelector((state) => state.detail.checkout);
  const [data, setData] = useState<CheckoutPrice | null>(null);

  useEffect(() => {
    if (checkin && checkout) {
      httpService
        .getPrice({
          adults,
          checkin,
          checkout,
          children,
          infants,
          pets,
          id,
        })
        .then((res) => {
          setData(res.data);
        });
    }
  }, [adults, checkin, checkout, children, infants, pets, id]);

  if (checkin && checkout) {
    return (
      <>
        <button onClick={() => {}} className="btn btn-primary w-full mt-5">
          Reserve
        </button>
        <p className="mt-3 text-center">You won't be charged yet</p>
        <div className="flex justify-between items-center my-3">
          <span>
            ${data?.price} x {data?.days} nights
          </span>
          <span>$460</span>
        </div>
        <div className="flex justify-between items-center my-3">
          <span>Service fee</span>
          <span>${data?.tax}</span>
        </div>
        <div className="h-[1px] bg-gray-300"></div>
        <div className="flex justify-between items-center mt-3 font-bold">
          <span>Total before taxes</span>
          <span>${data?.total}</span>
        </div>
      </>
    );
  }
  return (
    <button onClick={() => {}} className="btn btn-primary w-full mt-5">
      Check availability
    </button>
  );
};

const Checkout = () => {
  return (
    <div className="w-full sticky  top-[100px] right-0 z-20">
      <div className="p-8 rounded-md shadow-lg border border-color">
        <Main />
        <Info />
      </div>
    </div>
  );
};

export default Checkout;
