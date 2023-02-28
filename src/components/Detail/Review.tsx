import React from "react";
import { Review } from "../../interfaces/detail";
import { useModal } from "../../share/customHooks";
import Modal from "../Modal";

const ReviewCPN = ({ reviews }: { reviews: Review[] }) => {
  const [show, handleShow] = useModal();

  return (
    <>
      <div className="py-5">
        <h5 className="mb-3">4.86 · {reviews.length} reviews</h5>
        <div className="row">
          <div className="p-2 w-1/2 pr-20">
            <div className="my-2 flex justify-between items-center">
              <span className="text-lg">Cleanliness</span>
              <div className="flex items-center">
                <div className="w-[150px] h-[4px] bg-gray-400 relative rounded-sm overflow-hidden">
                  <div
                    className="absolute top-0 left-0  bottom-0 bg-black rounded-sm"
                    style={{
                      width: `${(3 / 5) * 100}%`,
                    }}
                  ></div>
                </div>
                <span className="font-bold ml-2">4.9</span>
              </div>
            </div>
            <div className="my-2 flex justify-between items-center">
              <span className="text-lg">Cleanliness</span>
              <div className="flex items-center">
                <div className="w-[150px] h-[4px] bg-gray-400 relative rounded-sm overflow-hidden">
                  <div
                    className="absolute top-0 left-0  bottom-0 bg-black rounded-sm"
                    style={{
                      width: `${(3 / 5) * 100}%`,
                    }}
                  ></div>
                </div>
                <span className="font-bold ml-2">4.9</span>
              </div>
            </div>
          </div>
          <div className="p-2 w-1/2 pr-20">
            <div className="my-2 flex justify-between items-center">
              <span className="text-lg">Cleanliness</span>
              <div className="flex items-center">
                <div className="w-[150px] h-[4px] bg-gray-400 relative rounded-sm overflow-hidden">
                  <div
                    className="absolute top-0 left-0  bottom-0 bg-black rounded-sm"
                    style={{
                      width: `${(3 / 5) * 100}%`,
                    }}
                  ></div>
                </div>
                <span className="font-bold ml-2">4.9</span>
              </div>
            </div>
            <div className="my-2 flex justify-between items-center">
              <span className="text-lg">Cleanliness</span>
              <div className="flex items-center">
                <div className="w-[150px] h-[4px] bg-gray-400 relative rounded-sm overflow-hidden">
                  <div
                    className="absolute top-0 left-0  bottom-0 bg-black rounded-sm"
                    style={{
                      width: `${(3 / 5) * 100}%`,
                    }}
                  ></div>
                </div>
                <span className="font-bold ml-2">4.9</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row-big mt-10">
          {reviews.map((rv) => {
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
          })}
        </div>
      </div>
      <Modal isShow={show} setShow={handleShow}></Modal>
    </>
  );
};

export default ReviewCPN;
