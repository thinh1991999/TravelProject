import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import HeadDetail from "../components/Detail/HeadDetail";
import Images from "../components/Detail/Images";
import Info from "../components/Detail/Info";
import Loading from "../components/Detail/Loading";
import ReviewsCpn from "../components/Detail/Reviews";
import { Review, RoomDetail } from "../interfaces/detail";
import httpService from "../services/httpService";
import { useAppDispatch } from "../store/hook";
import { setRoomDetail } from "../store/slices/detailSlice";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<RoomDetail>();
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    // setLoading(true);
    // const call1 = httpService.getDetail(id || "");
    // const call2 = httpService.getReview(1);
    // Promise.all([call1, call2]).then((res) => {
    //   setData(res[0].data.data);
    //   setReviews(res[1].data.data);
    //   setLoading(false);
    // });
    setLoading(true);
    httpService.getDetail(id || "").then((res) => {
      dispatch(setRoomDetail(res.data.room));
      setLoading(false);
    });
  }, [id, dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <HeadDetail />
      <Images />
      <Info />
      <ReviewsCpn />
    </div>
  );
};

export default Detail;
