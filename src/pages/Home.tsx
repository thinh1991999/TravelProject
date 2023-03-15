import React, { useState, useEffect } from "react";
import axios from "axios";
import { Room } from "../interfaces/global";
import Card from "../components/Card";
import Loading from "../components/Home/Loading";
import { BsFillMapFill } from "react-icons/bs";
import { useModal } from "../share/customHooks";
import Modal from "../components/Modal";
import { AiOutlineClose, AiOutlineUnorderedList } from "react-icons/ai";
import Map from "../components/Map";
import Cube from "../components/Cube";
import httpService from "../services/httpService";

const Home = () => {
  const [data, setData] = useState<Room[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showMap, setShowmap] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    httpService
      .getRoomAll()
      .then((res) => {
        setData(res.data.result.docs);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (loading) return <Loading />;
  return (
    <>
      <div className={`w-full ${showMap ? "h-[600px]" : "h-0"}`}>
        <Map data={data} />
      </div>
      <div className={`row -m-3 ${showMap ? "h-0 overflow-hidden" : ""}`}>
        {data.map((vl) => {
          return (
            <div key={vl._id} className="p-3 lg:w-1/4 md:w-1/3 sm:w-1/2 w-full">
              <Card data={vl} />
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          setShowmap(!showMap);
        }}
        className="btn btn-black fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center z-50 hover:scale-125 animate"
      >
        {showMap ? (
          <>
            Show list <AiOutlineUnorderedList className="ml-3" />
          </>
        ) : (
          <>
            Show map
            <BsFillMapFill className="ml-3" />
          </>
        )}
      </button>
    </>
  );
};

export default Home;
