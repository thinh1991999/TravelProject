import React, { useEffect, useState } from "react";
import { Category, PropertyType } from "../../interfaces/global";
import httpService from "../../services/httpService";

const Structure = () => {
  const [data, setData] = useState<PropertyType[]>([]);

  useEffect(() => {
    httpService.getPropertyType().then((res) => {
      setData(res.data.properties);
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
        Which of these best describes your place?
      </h2>
      <div className="flex flex-wrap -m-2">
        {data.map((p, idx) => {
          const {
            _id,
            name,
            icon_url: { publicUrl },
          } = p;
          return (
            <div className="p-2 w-1/3">
              <div
                style={{
                  animation: `moveTop 3s forwards`,
                  animationDelay: `${idx / 3}s`,
                }}
                className={`opacity-0 cursor-pointer rounded-md border hover:border-black border-color h-[100px] p-3 flex flex-col justify-between`}
              >
                <img src={publicUrl} alt="" className="w-[30px] h-[30px]" />
                <span>{name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Structure;
