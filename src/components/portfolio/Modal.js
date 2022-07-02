import React from "react";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsCodeSlash } from "react-icons/bs";
import { FiEye } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Modal = ({ img1, img2, img3, show }) => {
  return (
    <div className="">
      <div>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
        >
          <SwiperSlide>
            <img src={img1} className="w-full h-[350px]" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} className="w-full h-[350px]" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} className="w-full h-[350px]" alt="" />
          </SwiperSlide>
        </Swiper>
        <div>
          <h1 className="text-2xl font-bold text-primary">
            ChowNow Ordering Web
          </h1>
          <p className="text-primary">
            ChowNow is a commission-free online ordering system and food
            ordering app helping restaurants feed their hungry customers.
          </p>
          <div className="flex gap-6 my-4 ">
            <button className="cursor-pointer bg-secondary text-white px-6 rounded font-bold py-2 flex items-center  duration-1000 hover:bg-white hover:text-secondary ">
              Live Site <FiEye className="ml-3 mt-1 font-bold" />
            </button>
            <button className="cursor-pointer bg-secondary text-white px-6 rounded font-bold py-2 flex items-center  duration-1000 hover:bg-white hover:text-secondary">
              View Code <BsCodeSlash className="ml-3 mt-1 font-bold" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
