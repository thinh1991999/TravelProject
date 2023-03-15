import moment from "moment";
import React, { useState, useEffect, useRef } from "react";
import { AiFillDislike, AiFillLike, AiFillStar } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { toast } from "react-toastify";
import { Review } from "../../interfaces/detail";
import httpService from "../../services/httpService";
import { useModal } from "../../share/customHooks";
import { useAppSelector } from "../../store/hook";
import Modal from "../Modal";
import Warning from "../Warning";
import YourReview from "./YourReview";

const ReviewCPN = ({ data }: { data: Review }) => {
  const [show, handleShow] = useModal();
  const [showDel, handleShowDel] = useModal();
  const user = useAppSelector((state) => state.global.user);
  const token = useAppSelector((state) => state.global.token);
  const [loading, setLoading] = useState(false);

  const [showSetting, setShowSetting] = useState<boolean>(false);

  const {
    description,
    rating,
    createdAt,
    owner: { _id, firstName, lastName, profilePic },
  } = data;
  const time = moment(createdAt).calendar();
  const btnRef = useRef<HTMLButtonElement>(null);
  const settingRef = useRef<HTMLDivElement>(null);

  const handleDelete = () => {
    if (!token) return;
    setLoading(true);
    httpService
      .deleteReview(data._id, token)
      .then((res) => {
        toast.success("Delete review successful");
      })
      .catch((err) => {
        toast.error("Something error");
      });
  };

  const hanldeLike = () => {
    console.log(1);
  };

  useEffect(() => {
    const settingEl = settingRef.current;
    const btnEl = btnRef.current;
    if (!showSetting || !settingEl || !btnEl) return;
    const clickEv = (e: MouseEvent) => {
      const target = e.target as ChildNode;
      if (!btnEl.contains(target) && !settingEl.contains(target))
        setShowSetting(false);
    };
    window.addEventListener("click", clickEv);
    return () => {
      window.removeEventListener("click", clickEv);
    };
  }, [showSetting, settingRef]);

  return (
    <>
      <div
        className={`${
          loading ? "opacity-40" : ""
        } flex items-center w-full group `}
      >
        <div className="flex-1">
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
                      key={vl}
                    />
                  );
                })}
              </div>
              <h5>{`${lastName} ${firstName}`}</h5>
              <span className="text-sm">{time}</span>
              <div className="flex items-center text-xl">
                <button
                  onClick={() => hanldeLike()}
                  className="hover:text-primary animate"
                >
                  <AiFillLike />
                </button>
                <span className="text-sm">0</span>
                <button className="hover:text-primary animate ml-3">
                  <AiFillDislike />
                </button>
                <span className="text-sm">0</span>
              </div>
            </div>
          </div>
          {description.length > 250 ? (
            <>
              <p className="mt-3 ">{description.slice(0, 250)}....</p>
              <button
                className="underline hover:opacity-70"
                //   onClick={() => handleShow(true)}
              >
                Show more
              </button>
            </>
          ) : (
            <p className="mt-3 ">{description}</p>
          )}
        </div>
        <div className="relative ">
          <button
            ref={btnRef}
            onClick={() => setShowSetting(!showSetting)}
            className="group-hover:visible btn invisible btn-icon "
          >
            <BsThreeDots />
          </button>
          {user?._id === _id && !loading && showSetting && (
            <div
              ref={settingRef}
              className="absolute right-0 top-full shadow-box py-2 min-w-[200px] bg-white"
            >
              <ul>
                <li
                  className="py-2 px-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleShow(true)}
                >
                  Edit
                </li>
                <li
                  className="py-2 px-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleShowDel(true)}
                >
                  Delete
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <Modal isShow={show} setShow={handleShow}>
        <YourReview setShow={handleShow} isUpdate={true} review={data} />
      </Modal>
      <Modal isShow={showDel} setShow={handleShowDel}>
        <Warning
          title="Delete review"
          sub="Are you sure to delete this review ?"
          close={() => {
            handleShowDel(false);
          }}
          accept={handleDelete}
        />
      </Modal>
    </>
  );
};

export default ReviewCPN;
