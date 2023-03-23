import React, { useEffect, useState } from "react";
import { TypePlace } from "../../interfaces/global";
import httpService from "../../services/httpService";

const PrivacyType = () => {
  const [data, setData] = useState<TypePlace[]>([]);

  useEffect(() => {
    httpService.getTypePlaces().then((res) => {
      setData(res.data.typePlaces);
    });
  }, []);
  return (
    <div className="w-[600px] m-auto">
      <h2
        className="mb-10"
        style={{
          animation: `moveTop 3s forwards`,
        }}
      >
        What type of place will guests have?
      </h2>
      <div className="flex flex-wrap -m-2">
        {data.map((t, idx) => {
          //   const isCheck = placeVl.includes(t._id);
          return (
            <div key={t._id} className="w-full p-2">
              <div
                className="flex border border-color rounded-md px-5 py-5 opacity-0"
                style={{
                  animation: `moveTop 3s forwards`,
                  animationDelay: `${idx / 3}s`,
                }}
              >
                {/* <div className="w-[50px]">
                  <input type="checkbox" name="" id={t._id} />
                </div> */}
                <label htmlFor={t._id} className="flex-1 block cursor-pointer">
                  <div className="font-medium">{t.name}</div>
                  <span>{t.description}</span>
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PrivacyType;
