import React, { useState } from "react";
import {
  AiFillStar,
  AiOutlineDown,
  AiOutlineHeart,
  AiOutlineUp,
} from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { MyImage } from "../MyImage";
import AllImages from "./AllImages";
import Images from "./Images";

const Info = () => {
  const [imgs, setImgs] = useState([
    "https://a0.muscache.com/im/pictures/miso/Hosting-24043648/original/425c52e1-3b95-4280-a2de-fbf9a1d3ca52.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-24043648/original/3a682176-c8e2-4612-88d1-f441e01b0346.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-24043648/original/f8c7930b-2026-4b05-ac29-d4b2e1cd51bb.jpeg?im_w=320",
    "https://a0.muscache.com/im/pictures/miso/Hosting-24043648/original/147d677b-881e-4b0d-901c-e10ee634b1a2.jpeg?im_w=320",
    "https://a0.muscache.com/im/pictures/miso/Hosting-24043648/original/678960b5-7bbf-4078-bad6-af31f47d7872.jpeg?im_w=320",
    "https://a0.muscache.com/im/pictures/miso/Hosting-24043648/original/a1d7f788-f5dc-40da-b348-633825c8d6dc.jpeg?im_w=320",
  ]);
  return (
    <div>
      <h2>Lorem ipsum dolor sit amet</h2>
      <div className="flex items-center mt-2">
        <div className="flex items-center">
          <AiFillStar />
          <span className="font-bold ml-1">4.90</span>
        </div>
        <span className="mx-2">·</span>
        <button className="underline">297 reviews</button>
        <span className="mx-2">·</span> <span> Selat, Bali, Indonesia</span>
      </div>
      <Images imgs={imgs} />
      <div className="row ">
        <div className="w-4/6 p-2">
          <div className="py-4 flex justify-between items-center border-b border-color">
            <div className="">
              <h3>Entire rental unit hosted by Jacky</h3>
              <div className="flex items-center">
                <span>2 guests</span>
                <span className="mx-1">.</span>
                <span>1bedroom</span>
                <span className="mx-1">.</span>
                <span>1 bed</span>
                <span className="mx-1">.</span>
                <span>1.5 baths</span>
              </div>
            </div>
            <button className="w-[40px] h-[40px] rounded-full overflow-hidden">
              <img
                src="https://a0.muscache.com/im/pictures/miso/Hosting-24043648/original/a1d7f788-f5dc-40da-b348-633825c8d6dc.jpeg?im_w=320"
                alt=""
                className="w-full h-full object-cover"
              />
            </button>
          </div>
          <div className="py-4 border-b border-color">
            <div className="flex items-center my-3">
              <div className="w-[50px] flex justify-center items-center">
                <TbGridDots />
              </div>
              <div className="ml-3">
                <h5>Self check-in</h5>
                <span>Self check-in Check yourself in with the lockbox.</span>
              </div>
            </div>
            <div className="flex items-center my-3">
              <div className="w-[50px] flex justify-center items-center">
                <TbGridDots />
              </div>
              <div className="ml-3">
                <h5>Self check-in</h5>
                <span>Self check-in Check yourself in with the lockbox.</span>
              </div>
            </div>
          </div>
          <div className="py-4 border-b border-color">
            <h4>Where you'll sleep</h4>
          </div>
          <div className="py-4 border-b border-color">
            <h4>What this place offers</h4>
            <div className="mt-5">
              <div className="flex items-center my-2">
                <TbGridDots className="mr-2" />
                <span>Beach access – Beachfront</span>
              </div>
              <div className="flex items-center my-2">
                <TbGridDots className="mr-2" />
                <span>Beach access – Beachfront</span>
              </div>
              <div className="flex items-center my-2">
                <TbGridDots className="mr-2" />
                <span>Beach access – Beachfront</span>
              </div>
              <button className="btn btn-white btn-border rounded-lg mt-8 font-bold">
                Show all 27 amenities
              </button>
            </div>
          </div>
          <div className="py-4 border-b border-color">
            <h4>Select check-in date</h4>
            <span>Add your travel dates for exact pricing</span>
          </div>
        </div>
        <div className="w-2/6 p-2  relative">
          <div className="w-full sticky  top-[100px] right-0 ">
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
              <div className="rounded-md border border-color text-xs cursor-pointer">
                <div className="flex border-b border-color">
                  <div className="flex-1 p-4">
                    <div className="uppercase font-bold">Check-in</div>
                    <div>Add date</div>
                  </div>
                  <div className="w-[1px]  bg-gray-300"></div>
                  <div className="flex-1 p-4">
                    <div className="uppercase font-bold">Check-out</div>
                    <div>Add date</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4">
                  <div className="">
                    <div className="uppercase font-bold">Guests</div>
                    <div>Add date</div>
                  </div>
                  <AiOutlineDown />
                  <AiOutlineUp />
                </div>
              </div>
              <button className="btn btn-primary w-full mt-5">
                check availability
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5">
        <h5 className="mb-3">4.86 · 58 reviews</h5>
        <div className="row">
          <div className="p-2 w-1/2 pr-20">
            <div className="my-2 flex justify-between items-center">
              <span className="text-lg">Cleanliness</span>
              <div className="flex items-center">
                <div className="w-[150px] h-[4px] bg-gray-400 relative rounded-sm overflow-hidden">
                  <div
                    className="absolute top-0 left-0  bottom-0 bg-black rounded-sm"
                    style={{
                      width: `${(3 / 5) * 100}%`,
                    }}
                  ></div>
                </div>
                <span className="font-bold ml-2">4.9</span>
              </div>
            </div>
            <div className="my-2 flex justify-between items-center">
              <span className="text-lg">Cleanliness</span>
              <div className="flex items-center">
                <div className="w-[150px] h-[4px] bg-gray-400 relative rounded-sm overflow-hidden">
                  <div
                    className="absolute top-0 left-0  bottom-0 bg-black rounded-sm"
                    style={{
                      width: `${(3 / 5) * 100}%`,
                    }}
                  ></div>
                </div>
                <span className="font-bold ml-2">4.9</span>
              </div>
            </div>
          </div>
          <div className="p-2 w-1/2 pr-20">
            <div className="my-2 flex justify-between items-center">
              <span className="text-lg">Cleanliness</span>
              <div className="flex items-center">
                <div className="w-[150px] h-[4px] bg-gray-400 relative rounded-sm overflow-hidden">
                  <div
                    className="absolute top-0 left-0  bottom-0 bg-black rounded-sm"
                    style={{
                      width: `${(3 / 5) * 100}%`,
                    }}
                  ></div>
                </div>
                <span className="font-bold ml-2">4.9</span>
              </div>
            </div>
            <div className="my-2 flex justify-between items-center">
              <span className="text-lg">Cleanliness</span>
              <div className="flex items-center">
                <div className="w-[150px] h-[4px] bg-gray-400 relative rounded-sm overflow-hidden">
                  <div
                    className="absolute top-0 left-0  bottom-0 bg-black rounded-sm"
                    style={{
                      width: `${(3 / 5) * 100}%`,
                    }}
                  ></div>
                </div>
                <span className="font-bold ml-2">4.9</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row-big mt-10">
          <div className="w-1/2 p-5 ">
            <div className="flex items-center">
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                <img
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-24043648/original/a1d7f788-f5dc-40da-b348-633825c8d6dc.jpeg?im_w=320"
                  alt=""
                  className="w-full h-full"
                />
              </div>
              <div className="ml-3">
                <h5>Georgios</h5>
                <span>January 2023</span>
              </div>
            </div>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              ut animi debitis ea suscipit quidem tempora tenetur consectetur
              sequi in?
            </p>
          </div>
          <div className="w-1/2 p-5 ">
            <div className="flex items-center">
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                <img
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-24043648/original/a1d7f788-f5dc-40da-b348-633825c8d6dc.jpeg?im_w=320"
                  alt=""
                  className="w-full h-full"
                />
              </div>
              <div className="ml-3">
                <h5>Georgios</h5>
                <span>January 2023</span>
              </div>
            </div>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              ut animi debitis ea suscipit quidem tempora tenetur consectetur
              sequi in?
            </p>
          </div>
          <div className="w-1/2 p-5 ">
            <div className="flex items-center">
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                <img
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-24043648/original/a1d7f788-f5dc-40da-b348-633825c8d6dc.jpeg?im_w=320"
                  alt=""
                  className="w-full h-full"
                />
              </div>
              <div className="ml-3">
                <h5>Georgios</h5>
                <span>January 2023</span>
              </div>
            </div>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              ut animi debitis ea suscipit quidem tempora tenetur consectetur
              sequi in?
            </p>
          </div>
          <div className="w-1/2 p-5 ">
            <div className="flex items-center">
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                <img
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-24043648/original/a1d7f788-f5dc-40da-b348-633825c8d6dc.jpeg?im_w=320"
                  alt=""
                  className="w-full h-full"
                />
              </div>
              <div className="ml-3">
                <h5>Georgios</h5>
                <span>January 2023</span>
              </div>
            </div>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              ut animi debitis ea suscipit quidem tempora tenetur consectetur
              sequi in?
            </p>
          </div>
          <div className="w-full p-5">
            <button className="btn btn-white btn-border rounded-md font-bold ">
              Show all 50 reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
