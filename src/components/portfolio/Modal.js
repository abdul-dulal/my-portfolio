import React from "react";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../assets/img/download.jpg";
import slider2 from "../../assets/img/download (1).jpg";
import slider3 from "../../assets/img/vector.png";
import { BsCodeSlash } from "react-icons/bs";
import { FiEye } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Modal = () => {
  return (
    <div>
      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="my-modal-3"
            class="btn btn-sm btn-circle absolute right-2 top-4 z-10"
          >
            ✕
          </label>
          <div>
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <img src={slider1} className="w-full" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slider2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slider3} alt="" />
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
                <button className="cursor-pointer bg-secondary text-white px-8 font-bold py-2 hover:bg-white hover:text-secondary  duration-1000  flex items-center mt-1 ">
                  Live Site <FiEye className="ml-3 mt-1 font-bold" />
                </button>
                <button className="cursor-pointer bg-secondary text-white px-6 rounded font-bold py-2 flex items-center  duration-1000 hover:bg-white hover:text-secondary">
                  View Code <BsCodeSlash className="ml-3 mt-1 font-bold" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
