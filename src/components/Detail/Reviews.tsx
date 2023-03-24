import { useState, useEffect, lazy, Suspense } from "react";
import io from "socket.io-client";
import { Comment } from "react-loader-spinner";
import { Review } from "../../interfaces/detail";
import { useModal } from "../../share/customHooks";
import { Link, useLocation, useParams } from "react-router-dom";
import httpService from "../../services/httpService";
import { useAppSelector } from "../../store/hook";
import { getAverageRating } from "../../share/ultils";
import ReviewCPN from "./Review";
import { API_URL } from "../../share/constant";

const Modal = lazy(() => import("../Modal"));
const YourReview = lazy(() => import("./YourReview"));

const ReviewsCPN = () => {
  const location = useLocation();
  const { id } = useParams();

  const user = useAppSelector((state) => state.global.user);

  const [show, handleShow] = useModal();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Review[]>([]);

  useEffect(() => {
    if (id === undefined) return;
    setLoading(true);
    httpService
      .getDetailReview(id)
      .then((res) => {
        setData(res.data.result.docs);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);

        setData([]);
        setLoading(false);
      });
    const newSocket = io(`${API_URL}reviews`);
    newSocket.emit("join_room", id);
    newSocket.on("new_review", (newReview) => {
      setData((prev) => {
        return [newReview, ...prev];
      });
    });
    newSocket.on("delete_review", (id) => {
      setData((prev) => {
        return prev.filter((rv) => rv._id !== id);
      });
    });
    newSocket.on("update_review", (values) => {
      console.log(values.vlChange);
      const { id, vlChange } = values;
      setData((prev) => {
        const idx = prev.findIndex((vl) => vl._id === id);
        prev[idx] = {
          ...prev[idx],
          ...vlChange,
        };
        return [...prev];
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
        <div className="flex flex-wrap justify-between items-center">
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
            return (
              <div className="w-full lg:w-1/2 p-5 " key={rv._id}>
                <ReviewCPN data={rv} />
              </div>
            );
          })}
        </div>
      </div>
      <Suspense>
        <Modal isShow={show} setShow={handleShow}>
          <YourReview id={id} setShow={handleShow} />
        </Modal>
      </Suspense>
    </>
  );
};

export default ReviewsCPN;
