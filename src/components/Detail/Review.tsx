import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Comment } from "react-loader-spinner";
import { Review } from "../../interfaces/detail";
import { useModal } from "../../share/customHooks";
import Modal from "../Modal";
import YourReview from "./YourReview";

const ReviewCPN = () => {
  const [show, handleShow] = useModal();
  const [loading, setLoading] = useState(true);

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
        backgroundColor="#F4442E"
      />
    </div>
  );

  return (
    <>
      <div className="py-5">
        <div className="flex justify-between items-center">
          <h5 className="mb-3">4.86 · 123 reviews</h5>
          <button className="btn btn-primary">Your review</button>
        </div>
        <div className="row-big mt-10">
          {/* {reviews.map((rv) => {
            const { id, comments, reviewer, localizedDate } = rv;
            return (
              <div className="w-1/2 p-5 " key={id}>
                <div className="flex items-center">
                  <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                    <img
                      src={reviewer?.userProfilePicture.baseUrl}
                      alt={reviewer?.firstName}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="ml-3">
                    <h5>{reviewer?.firstName || "..."}</h5>
                    <span>{localizedDate}</span>
                  </div>
                </div>
                {comments.length > 250 ? (
                  <>
                    <p className="mt-3 ">{comments.slice(0, 250)}....</p>
                    <button
                      className="underline hover:opacity-70"
                      onClick={() => handleShow(true)}
                    >
                      Show more
                    </button>
                  </>
                ) : (
                  <p className="mt-3 ">{comments}</p>
                )}
              </div>
            );
          })} */}
        </div>
      </div>
      <Modal isShow={show} setShow={handleShow}>
        <YourReview />
      </Modal>
    </>
  );
};

export default ReviewCPN;
