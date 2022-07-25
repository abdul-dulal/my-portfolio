import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import "./Card.css";
import { motion } from "framer-motion";
const Reactdemo = () => {
  const [reactData, setReactData] = useState([]);
  const [popup, setPopup] = useState();

  useEffect(() => {
    fetch(`Portfolio.json`)
      .then((res) => res.json())
      .then((data) => setReactData(data.filter((e) => e.status === "front")));
  }, []);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 md:px-10 gap-5 lg:px-48">
      {reactData.map((data, i) => (
        <motion.div
          className="parent"
          initial={{ opacity: 0, translateX: i % 2 === 0 ? -50 : 50 }}
          animate={{ opacity: 1, translateX: 0, translateY: 0 }}
          transition={{ duration: 0.3, delay: i * 0.8 }}
        >
          <div>
            <img src={data.img} className="h-[320px] w-full" alt="" />
          </div>
          <div className=" text-center hello">
            <h1 className=" font-bold text-2xl text-black  mt-8">{data.web}</h1>
            <h2 className="text-xl text-secondary pb-10">{data.tech}</h2>
            <label
              for="my-modal-4"
              onClick={() => setPopup(data.id)}
              className=" modal-button cursor-pointer text-black text-xl uppercase  border-2 border-secondary px-10 py-3"
            >
              Learn More
            </label>
          </div>
        </motion.div>
      ))}
      <Modal popup={popup} />
    </div>
  );
};

export default Reactdemo;
