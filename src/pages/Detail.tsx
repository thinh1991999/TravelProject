import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import Images from "../components/Detail/Images";
import Info from "../components/Detail/Info";
import Loading from "../components/Detail/Loading";
import ReviewCpn from "../components/Detail/Review";
import { Review, RoomDetail } from "../interfaces/detail";
import httpService from "../services/httpService";

const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<RoomDetail>();
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    setLoading(true);
    const call1 = httpService.getDetail(1);
    const call2 = httpService.getReview(1);
    Promise.all([call1, call2]).then((res) => {
      setData(res[0].data.data);
      setReviews(res[1].data.data);
      setLoading(false);
    });
  }, [id]);

  if (loading || !data) {
    return <Loading />;
  }

  return (
    <div>
      <h2>{data.title}</h2>
      <div className="flex items-center mt-2">
        <div className="flex items-center">
          <AiFillStar />
          <span className="font-bold ml-1">{data.reviewsRating}</span>
        </div>
        <span className="mx-2">·</span>
        <button className="underline">{data.reviewsCount} reviews</button>
        <span className="mx-2">·</span> <span> Selat, Bali, Indonesia</span>
      </div>
      <Images imgs={data.images} />
      <Info data={data} />
      <ReviewCpn reviews={reviews} />
    </div>
  );
};

export default Detail;
