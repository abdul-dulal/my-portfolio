import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineEye } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrllbar, A11y } from "swiper";
const Modal = ({ popup }) => {
  const [some, setSome] = useState([]);
  useEffect(() => {
    fetch("Portfolio.json")
      .then((res) => res.json())
      .then((data) => setSome(data.filter((e) => e.id === popup)));
  }, [popup]);

  return (
    <div>
      <input type="checkbox" id="my-modal-4" class="modal-toggle" />
      <label for="my-modal-4" class="modal cursor-pointer">
        <label class="modal-box relative" for="">
          {some.map((e) => (
            <div>
              <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => ""}
                onSlideChange={() => ""}
              >
                <SwiperSlide>
                  <img src={e.img1} className="w-[300px] h-[300px]" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={e.img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={e.img3} alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="space-y-2">
                <h1 className="text-xl text-primary font-bold">{e.web}</h1>
                <p> {e.f1}</p>
                <p> {e.f2}</p>
                <p> {e.f3}</p>
              </div>
              <div className="flex mt-5">
                <a
                  href={e.live}
                  className=" flex bg-secondary uppercase w-36 font-bold  py-3  text-white px-4 rounded"
                  target="blank"
                >
                  view site <AiOutlineEye className="text-2xl ml-2" />
                </a>
                <a
                  href={e.code}
                  className=" flex bg-secondary ml-5 uppercase w-[160px] font-bold  py-3 text-white px-4 rounded"
                  target="blank"
                >
                  view code <BsCodeSlash className="text-2xl ml-2" />
                </a>
              </div>
            </div>
          ))}
          <div></div>
        </label>
      </label>
    </div>
  );
};

export default Modal;
