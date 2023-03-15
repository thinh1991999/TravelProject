import React, { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { TailSpin } from "react-loader-spinner";
import { Review } from "../../interfaces/detail";
import httpService from "../../services/httpService";
import { useAppSelector } from "../../store/hook";
import Mess from "../Mess";

const YourReview = ({
  id,
  setShow,
  isUpdate = false,
  review,
}: {
  id?: string | undefined;
  setShow: Function;
  isUpdate?: boolean;
  review?: Review;
}) => {
  const token = useAppSelector((state) => state.global.token);
  const [rating, setRating] = useState<number>(3);
  const [des, setDes] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [mess, setMess] = useState({
    type: true,
    value: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (id === undefined || token === null) return;
    setLoading(true);
    httpService
      .createReview(
        {
          room: id,
          rating,
          description: des,
        },
        token
      )
      .then((res) => {
        setLoading(false);
        setRating(3);
        setDes("");
        setShow(false);
      })
      .catch((err) => {
        setMess({
          type: false,
          value: err.response?.data.error || "Something error",
        });
        setLoading(false);
      });
  };

  const handleUpdate = (e: any) => {
    e.preventDefault();
    if (review === undefined || token === null) return;
    setLoading(true);
    httpService
      .updateReview(
        {
          rating,
          description: des,
        },
        review._id,
        token
      )
      .then((res) => {
        setMess({
          type: true,
          value: res.data.message || "Something error",
        });
        setLoading(false);
        // setShow(false);
      })
      .catch((err) => {
        setMess({
          type: false,
          value: err.response?.data.error || "Something error",
        });
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!isUpdate || !review) return;
    setRating(review.rating);
    setDes(review.description);
  }, [isUpdate, review]);

  return (
    <div className="p-5 min-w-[700px]">
      <button>Click</button>
      <form
        action=""
        onSubmit={(e) => (isUpdate ? handleUpdate(e) : handleSubmit(e))}
      >
        <div className="my-5">
          <h5 className="text-center mb-2">How was your stay at ABC's place</h5>
          <div className="flex justify-center">
            {[
              { id: 1, title: "Terrible" },
              { id: 2, title: "Bad" },
              { id: 3, title: "Okay" },
              { id: 4, title: "Good" },
              { id: 5, title: "Great" },
            ].map((vl) => {
              return (
                <div
                  key={vl.id}
                  className="flex flex-col justify-center items-center cursor-pointer mx-2"
                >
                  <input
                    type="radio"
                    key={vl.id}
                    name="rate"
                    id={vl.id.toString()}
                    className="hidden"
                    checked={rating === vl.id}
                    onChange={() => {
                      setRating(vl.id);
                    }}
                  ></input>
                  <label htmlFor={vl.id.toString()} className="cursor-pointer">
                    <AiFillStar
                      className={` text-5xl ${
                        vl.id <= rating ? "text-primary" : ""
                      }`}
                    />
                  </label>
                  <span
                    className={` ${
                      vl.id === rating ? "text-primary" : "text-gray-500"
                    } font-semibold`}
                  >
                    {vl.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="my-5">
          <h5 className="text-center mb-2">Describe your experience</h5>
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            className="w-full border border-color p-2 rounded-md"
            placeholder="Say a few words about ABC's place"
            value={des}
            onChange={(e) => setDes(e.target.value)}
          ></textarea>
        </div>
        <div className="w-full">
          <Mess type={mess.type} value={mess.value} />
          {loading ? (
            <button
              type="button"
              className="btn btn-primary btn-loading w-full"
            >
              <TailSpin height={30} width={30} color="#ccc" />
            </button>
          ) : (
            <button className="btn btn-primary w-full">
              {isUpdate ? "Update" : "Submit"}{" "}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
export default YourReview;
