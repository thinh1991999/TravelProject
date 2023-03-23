import { useSearchParams } from "react-router-dom";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAppSelector } from "../store/hook";

const Categories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categories = useAppSelector((state) => state.global.categories);
  const idCurrent = searchParams.get("category");
  const handleChangeCate = (id: string) => {
    searchParams.set("category", id);
    setSearchParams(searchParams, {
      replace: true,
    });
  };

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={0}
      slidesPerView={12}
      breakpoints={{
        0: {
          slidesPerView: 3,
        },
        426: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 7,
        },
        1024: {
          slidesPerView: 9,
        },
        1440: {
          slidesPerView: 12,
        },
      }}
      navigation
      className="w-full h-full"
    >
      {categories.map((category, idx) => {
        return (
          <SwiperSlide
            key={idx}
            className="w-full cursor-pointer "
            onClick={() => handleChangeCate(category._id)}
          >
            <div
              className={`${
                idCurrent === category._id ? "opacity-100" : "opacity-50"
              }  hover:opacity-100 flex flex-col justify-center items-center `}
            >
              <img
                src={category.icon_url.publicUrl}
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
