import React, { useEffect, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Category } from "../interfaces/global";
import httpService from "../services/httpService";
import { useAppSelector } from "../store/hook";

const Categories = () => {
  // const [categories, setCategories] = useState<Category[]>([]);
  const categories = useAppSelector((state) => state.global.categories);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // setLoading(true);
    // httpService.getCategories().then((res) => {
    //   setCategories(res.data.data);
    //   setLoading(false);
    // });
  }, []);

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={0}
      slidesPerView={12}
      navigation
      className="w-full h-full"
    >
      {categories.map((category, idx) => {
        return (
          <SwiperSlide key={idx} className="w-full cursor-pointer ">
            <div className="opacity-50 hover:opacity-100 flex flex-col justify-center items-center ">
              <img
                src={category.icon_url}
                className="w-[30px] h-[30px] object-cover"
                alt=""
              />
              <span className="text-sm one-line-max">{category.name}</span>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Categories;
