import React, { useState, useEffect } from "react";
import axios from "axios";
import { Room } from "../interfaces/global";
import Card from "../components/Card";
import Loading from "../components/Home/Loading";
import { BsFillMapFill } from "react-icons/bs";

const Home = () => {
  const [data, setData] = useState<Room[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://mocki.io/v1/f094f682-7578-4af3-912a-38da36ef23ec")
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      });
  }, []);
  if (loading) return <Loading />;
  return (
    <>
      <div className="row -m-3">
        {data.map((vl, idx) => {
          return (
            <div key={vl.id} className="p-3 w-1/4">
              <Card data={vl} />
            </div>
          );
        })}
      </div>
      <button className="btn btn-black fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center z-50 hover:scale-125 animate">
        Show map
        <BsFillMapFill className="ml-3" />
      </button>
    </>
  );
};

export default Home;
