import React from "react";
import "./Card.css";
import Modal from "./Modal";
const Card = ({ img, tech }) => {
  return (
    <div className=" parent">
      <div className="">
        <img src={img} width="100%" height="600px" alt="" />
      </div>

      <div className="hello">
        <h1 className="text-2xl font-bold text-primary">Ecommerce</h1>
        <p className="text-secondary text-xl pb-11">{tech}</p>

        <label
          for="my-modal-3"
          className="  modal-button border-2 cursor-pointer border-secondary uppercase mt-5 px-6 py-1 text-xl text-primary"
        >
          Learn More
        </label>
      </div>
      <Modal />
    </div>
  );
};

export default Card;
