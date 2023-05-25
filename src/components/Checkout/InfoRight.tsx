import React from 'react'
import { CheckoutInfoAll } from '../../interfaces/global';
import { getAverageRating } from '../../share/ultils';

const InfoRight = ({info}:{info:CheckoutInfoAll|null}) => {
  if(!info) return <></>
  const {images,name,description,reviews}=info.room;
  const { totalPrice,nights,pricePerNight} = info.infoCheckout;
  const rating=getAverageRating(reviews);
  return (
    <div className="w-full sticky  top-[100px] right-0 z-20">
      <div className="p-8 rounded-md shadow-lg border border-color">
        <div className="flex items-center pb-8 border-b">
          <img
            src={images[0].publicUrl}
            alt=""
            className="w-20 h-20 rounded-md overflow-hidden"
          />
          <div className="flex flex-col justify-between ml-3">
            <div className="">
              <span>{name}</span>
            </div>
            <div className="">
              <span>{rating}</span>{" "}
              <span className="opacity-70">({reviews.length} reviews)</span>
            </div>
          </div>
        </div>
        <div className="pb-8 border-b">
          <h3>Price details</h3>
          <div className="flex justify-between items-center my-3">
            <span>
              ${pricePerNight} x {nights}nights
            </span>
            <span>${totalPrice}</span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-3 font-bold">
          <span>Total </span>
          <span>${totalPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default InfoRight