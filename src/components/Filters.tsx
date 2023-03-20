import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Oval } from "react-loader-spinner";
import { useSearchParams } from "react-router-dom";
import {
  Amenity,
  EachRoomType,
  FiltersITF,
  PropertyType,
  TypePlace,
} from "../interfaces/global";
import httpService from "../services/httpService";
import { filtersNB, filtersRoom } from "../share/data";

const Filters = ({ handleShow }: { handleShow: Function }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [values, setValues] = useState<FiltersITF>({
    minPrice: 0,
    maxPrice: 100000,
    bathRooms: "ALL",
    bedRooms: "ALL",
    beds: "ALL",
  });
  const [pro, setPro] = useState<string[]>([]);
  const [placeVl, setPlaceVl] = useState<string[]>([]);
  const [amenitiesVl, setAmenitiesVl] = useState<string[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [allAmen, setAllAmen] = useState<boolean>(false);
  const [amenities, setAmenities] = useState<Amenity[]>([]);
  const [properties, setProperties] = useState<PropertyType[]>([]);
  const [types, setTypes] = useState<TypePlace[]>([]);
  const [count, setCount] = useState<number>(0);

  const handleChooseProperty = (id: string) => {
    const clone = [...pro];
    const idx = clone.findIndex((vl) => vl === id);
    if (idx !== -1) {
      clone.splice(idx, 1);
      setPro(clone);
    } else {
      clone.push(id);
      setPro(clone);
    }
  };

  const handleChooseTypePlace = (e: React.FormEvent, id: string) => {
    const clone = [...placeVl];
    const idx = clone.findIndex((vl) => vl === id);
    if (idx !== -1) {
      clone.splice(idx, 1);
      setPlaceVl(clone);
    } else {
      clone.push(id);
      setPlaceVl(clone);
    }
  };

  const handleChooseAmenity = (e: React.FormEvent, id: string) => {
    const clone = [...amenitiesVl];
    const idx = clone.findIndex((vl) => vl === id);
    if (idx !== -1) {
      clone.splice(idx, 1);
      setAmenitiesVl(clone);
    } else {
      clone.push(id);
      setAmenitiesVl(clone);
    }
  };

  const handleClearAll = () => {
    setValues({
      minPrice: 0,
      maxPrice: 100000,
      bathRooms: "ALL",
      bedRooms: "ALL",
      beds: "ALL",
    });
    setPro([]);
    setAmenitiesVl([]);
    setPlaceVl([]);
  };

  const handleShowAll = () => {
    for (let [key, vl] of Object.entries(values)) {
      searchParams.set(key, vl);
    }
    if (amenitiesVl.length > 0) {
      for (let vl of amenitiesVl) {
        searchParams.append("amenities", vl);
      }
    } else {
      searchParams.delete("amenities");
    }
    if (placeVl.length > 0) {
      for (let vl of placeVl) {
        searchParams.append("places", vl);
      }
    } else {
      searchParams.delete("places");
    }
    if (pro.length > 0) {
      for (let vl of pro) {
        searchParams.append("properties", vl);
      }
    } else {
      searchParams.delete("properties");
    }
    setSearchParams(searchParams, {
      replace: true,
    });
    handleShow(false);
  };

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      const call1 = await httpService.getAmenities();
      const call2 = await httpService.getPropertyType();
      const call3 = await httpService.getTypePlaces();
      Promise.all([call1, call2, call3]).then((res) => {
        const { amenities } = res[0].data;
        const { properties } = res[1].data;
        const { typePlaces } = res[2].data;
        setAmenities(amenities);
        setProperties(properties);
        setTypes(typePlaces);
        setLoading(false);
      });
    };
    fetchAll();
  }, []);

  useEffect(() => {
    if (loading) return;
    let isApiSubcribed = true;
    const timeout = setTimeout(() => {
      httpService
        .getFiltersCount({
          ...values,
          amenities: amenitiesVl,
          properties: pro,
          places: placeVl,
        })
        .then((res) => {
          if (isApiSubcribed) {
            setCount(res.data.rooms);
          }
        });
    }, 500);
    return () => {
      clearTimeout(timeout);
      isApiSubcribed = false;
    };
  }, [loading, values, amenitiesVl, pro, placeVl]);

  useEffect(() => {
    const minPrice = Number(searchParams.get("minPrice")) || 0;
    const maxPrice = Number(searchParams.get("maxPrice")) || 1000;
    const beds = (searchParams.get("beds") as EachRoomType) || "ALL";
    const bedRooms = (searchParams.get("bedRooms") as EachRoomType) || "ALL";
    const bathRooms = (searchParams.get("bathRooms") as EachRoomType) || "ALL";
    const amenities = searchParams.getAll("amenities") || [];
    const properties = searchParams.getAll("properties") || [];
    const places = searchParams.getAll("places") || [];
    setValues({
      minPrice,
      maxPrice,
      beds,
      bathRooms,
      bedRooms,
    });
    setAmenitiesVl(amenities);
    setPro(properties);
    setPlaceVl(places);
  }, [searchParams]);

  return (
    <>
      <div className="min-w-[320px] lg:w-[800px] h-[700px] flex flex-col">
        <div className="flex  items-center justify-between px-4 py-3 border-b border-color">
          <button
            className="btn btn-trans btn-x text-xl font-bold w-[50px] h-[50px]"
            onClick={() => handleShow(false)}
          >
            <AiOutlineClose />
          </button>
          <h4>Filter</h4>
          <div className="w-[50px]"></div>
        </div>
        {loading ? (
          <div className="flex-1 flex justify-center items-center">
            <Oval
              height={80}
              width={80}
              color="#ccc"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#eee"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-auto">
              <form
                action=""
                className="px-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="py-5 border-b border-color">
                  <h5 className="font-medium">Price range</h5>
                  <span className="text-gray-500 mt-1">
                    The average nightly price is $4,010
                  </span>
                </div>
                <div className="py-5 border-b border-color">
                  <h5 className="font-medium">Type of place</h5>
                  <div className="mt-5">
                    <div className="flex flex-wrap -m-2">
                      {types.map((t) => {
                        const isCheck = placeVl.includes(t._id);
                        return (
                          <div key={t._id} className="w-full md:w-1/2 p-2">
                            <div className="flex">
                              <div className="w-[50px]">
                                <input
                                  type="checkbox"
                                  name=""
                                  id={t._id}
                                  checked={isCheck}
                                  onChange={(e) => {
                                    handleChooseTypePlace(e, t._id);
                                  }}
                                />
                              </div>
                              <label
                                htmlFor={t._id}
                                className="flex-1 block cursor-pointer"
                              >
                                <div className="font-medium">{t.name}</div>
                                <span>{t.description}</span>
                              </label>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="py-5 border-b border-color">
                  <h5 className="font-medium">Rooms and beds</h5>
                  {filtersRoom.map((item) => {
                    return (
                      <div className="my-5">
                        <span className="font-medium">{item.title}</span>
                        <div className="mt-3">
                          {filtersNB.map((vl, idx) => {
                            return (
                              <button
                                key={idx}
                                className={`${
                                  values[item.hint] === vl.hint
                                    ? "bg-black text-white"
                                    : ""
                                }  px-5 py-2 m-2 rounded-full border border-color hover:border-black`}
                                onClick={() => {
                                  setValues({
                                    ...values,
                                    [item.hint]: vl.hint,
                                  });
                                }}
                              >
                                {vl.title}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="py-5 border-b border-color">
                  <h5 className="font-medium mb-5">Property type</h5>
                  <div className="flex flex-wrap -m-2">
                    {properties.map((p) => {
                      const {
                        _id,
                        name,
                        icon_url: { publicUrl },
                      } = p;
                      return (
                        <div className="p-2 md:w-1/4 sm:w-1/2 w-full">
                          <div
                            onClick={() => handleChooseProperty(_id)}
                            className={`${
                              pro.includes(_id) ? "border-black" : ""
                            } cursor-pointer rounded-md border hover:border-black border-color h-[100px] p-3 flex flex-col justify-between`}
                          >
                            <img
                              src={publicUrl}
                              alt=""
                              className="w-[30px] h-[30px]"
                            />
                            <span>{name}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="py-5 border-b border-color">
                  <h5 className="font-medium mb-5">Amenities</h5>
                  <div className="row text-xl">
                    {amenities.map((amen, idx) => {
                      if (!allAmen && idx > 5) return <></>;
                      const isCheck = amenitiesVl.includes(amen._id);
                      return (
                        <div className="w-full sm:w-1/2 p-2" key={amen._id}>
                          <input
                            type="checkbox"
                            name="amenities"
                            id={amen._id}
                            value={amen._id}
                            checked={isCheck}
                            onChange={(e) => {
                              handleChooseAmenity(e, amen._id);
                            }}
                          />
                          <label
                            htmlFor={amen._id}
                            className="text-gray-700 ml-3 cursor-pointer"
                          >
                            {amen.name}
                          </label>
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
            </div>
            <div className="flex  items-center justify-between px-4 py-3 border-b border-color">
              <button
                onClick={() => handleClearAll()}
                className="underline font-bold"
              >
                Clear all
              </button>
              <button
                onClick={() => handleShowAll()}
                className="btn text-base px-5 py-2 md:text-lg font-bold md:px-8 md:py-3 rounded-md bg-black text-white"
              >
                {count > 0 ? (
                  <span>Show {count} stays</span>
                ) : (
                  <span>No exact matches</span>
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Filters;
