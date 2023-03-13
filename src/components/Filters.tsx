import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";
import { Amenity, FiltersITF } from "../interfaces/global";
import httpService from "../services/httpService";
import { useModal } from "../share/customHooks";
import Modal from "./Modal";

const data = ["Any", 1, 2, 3, 4, 5, 6, 7, "8+"];

const Filters = () => {
  const [values, setValues] = useState<FiltersITF>({
    minPrice: 0,
    maxPrice: 100000,
    amenities: [],
    bathRooms: 1,
    bedRooms: 1,
    beds: 1,
    propertyType: [],
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [allAmen, setAllAmen] = useState<boolean>(false);
  const [amenities, setAmenities] = useState<Amenity[]>([]);
  const [show, handleShow] = useModal();

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      const call1 = await httpService.getAmenities();
      Promise.all([call1]).then((res) => {
        const { data } = res[0].data;
        setAmenities(data);
      });
    };
    fetchAll();
  }, []);

  return (
    <>
      <form action="" className="px-8" onSubmit={(e) => e.preventDefault()}>
        <div className="py-5 border-b border-color">
          <h5 className="font-medium">Price range</h5>
          <span className="text-gray-500 mt-1">
            The average nightly price is $4,010
          </span>
        </div>
        <div className="py-5 border-b border-color">
          <h5 className="font-medium">Type of place</h5>
          <span className="text-gray-500 mt-1">
            The average nightly price is $4,010
          </span>
        </div>
        <div className="py-5 border-b border-color">
          <h5 className="font-medium">Rooms and beds</h5>
          {[
            {
              title: "Bedrooms",
              id: 1,
            },
            {
              title: "Beds",
              id: 2,
            },
            {
              title: "Bathrooms",
              id: 3,
            },
          ].map((item) => {
            return (
              <div className="my-5" key={item.id}>
                <span>{item.title}</span>
                <div className="mt-3">
                  {data.map((vl, idx) => {
                    return (
                      <button
                        key={idx}
                        className="px-5 py-2 mx-2 rounded-full border border-color"
                      >
                        {vl}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="py-5 border-b border-color">
          <h5 className="font-medium mb-5">Amenities</h5>
          <div className="row text-xl">
            {amenities.map((amen, idx) => {
              if (!allAmen && idx > 5) return <></>;
              return (
                <div className="w-1/2 p-2" key={amen.id}>
                  <input
                    type="checkbox"
                    name="amenities"
                    id=""
                    value={amen.id}
                  />
                  <span className="text-gray-700 ml-3">{amen.title}</span>
                </div>
              );
            })}
            <button
              onClick={() => setAllAmen(!allAmen)}
              className="font-bold underline text-base mt-3 hover:opacity-50"
            >
              Show {allAmen ? "less" : "more"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Filters;
