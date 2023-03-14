import React, { useState, useEffect } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import io from "socket.io-client";
import { Comment } from "react-loader-spinner";
import moment from "moment";
import { Review } from "../../interfaces/detail";
import { useModal } from "../../share/customHooks";
import Modal from "../Modal";
import YourReview from "./YourReview";
import { Link, useLocation, useParams, useRoutes } from "react-router-dom";
import httpService from "../../services/httpService";

import { useAppSelector } from "../../store/hook";
import { getAverageRating } from "../../share/ultils";

const ReviewCPN = () => {
  const location = useLocation();
  const { id } = useParams();

  const user = useAppSelector((state) => state.global.user);

  const [show, handleShow] = useModal();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Review[]>([]);

  useEffect(() => {
    if (id === undefined) return;
    setLoading(true);
    httpService.getDetailReview(id).then((res) => {
      setData(res.data.result.docs);
      setLoading(false);
    });
    const newSocket = io("http://localhost:8000/reviews");
    newSocket.emit("join_room", id);
    newSocket.on("new_review", (newReview) => {
      setData((prev) => {
        return [newReview, ...prev];
      });
    });
    return () => {
      newSocket.close();
    };
  }, [id]);

  if (loading)
    return (
      <div className="py-10 flex justify-center items-center">
        <Comment
          visible={true}
          height="80"
          width="80"
          ariaLabel="comment-loading"
          wrapperStyle={{}}
          wrapperClass="comment-wrapper"
          color="#fff"
          backgroundColor="#d70466"
        />
      </div>
    );

  return (
    <>
      <div className="py-5">
        <div className="flex justify-between items-center">
          <h5 className="mb-3">
            {getAverageRating(data)} · {data.length} reviews
          </h5>
          {user ? (
            <button
              className="btn btn-primary"
              onClick={() => handleShow(true)}
            >
              Your review
            </button>
          ) : (
            <div className="">
              You need to{" "}
              <Link
                to={"/authen/signin"}
                state={{ from: location.pathname }}
                className="font-bold text-primary hover:opacity-75"
              >
                sign in
              </Link>{" "}
              to create your review
            </div>
          )}
        </div>
        <div className="row-big mt-10">
          {data.map((rv) => {
            const {
              _id,
              description,
              rating,
              createdAt,
              owner: { firstName, lastName, profilePic },
            } = rv;
            const time = moment(createdAt).calendar();
            return (
              <div className="w-1/2 p-5 " key={_id}>
                <div className="flex items-center">
                  <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                    <img src={profilePic} alt={""} className="w-full h-full" />
                  </div>
                  <div className="ml-3">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((vl) => {
                        return (
                          <AiFillStar
                            className={` text-sm ${
                              vl <= rating ? "text-primary" : ""
                            }`}
                          />
                        );
                      })}
                    </div>
                    <h5>{`${lastName} ${firstName}`}</h5>
                    <span className="text-sm">{time}</span>
                  </div>
                </div>
                {description.length > 250 ? (
                  <>
                    <p className="mt-3 ">{description.slice(0, 250)}....</p>
                    <button
                      className="underline hover:opacity-70"
                      onClick={() => handleShow(true)}
                    >
                      Show more
                    </button>
                  </>
                ) : (
                  <p className="mt-3 ">{description}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <Modal isShow={show} setShow={handleShow}>
        <YourReview id={id} setShow={handleShow} />
      </Modal>
    </>
  );
};

export default ReviewCPN;
