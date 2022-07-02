import React, { useState } from "react";
import "./Card.css";
import { FiEye } from "react-icons/fi";
import { BsCodeSlash } from "react-icons/bs";
const Card = ({ img, tech, webTitle, button }) => {
  return (
    <div className=" parent">
      <div className="">
        <img src={img} className="h-[300px] w-[450px]" alt="" />
      </div>

      <div className=" hello ">
        <h1 className="text-2xl font-bold text-primary mt-3">{webTitle}</h1>
        <p className="text-secondary text-xl pb-11">{tech}</p>

        {button === "node1" ? (
          <div className="flex gap-4">
            <a
              href="https://bagdom-132e6.web.app/"
              target="blank"
              className="cursor-pointer bg-secondary text-white px-6 rounded font-bold py-2 flex items-center  duration-1000 hover:bg-white hover:text-secondary "
            >
              Live Site <FiEye className="ml-3 mt-1 font-bold" />
            </a>
            <a
              href="https://github.com/abdul-dulal/Manufacture-Tools-Shop-Client"
              target="blank"
              className="cursor-pointer bg-secondary text-white px-6 rounded font-bold py-2 flex items-center  duration-1000 hover:bg-white hover:text-secondary"
            >
              View Code <BsCodeSlash className="ml-3 mt-1 font-bold" />
            </a>
          </div>
        ) : (
          ""
        )}
        {button === "node2" ? (
          <div className="flex gap-4">
            <a
              href="https://red-onion-a5d19.web.app/"
              target="black"
              className="cursor-pointer bg-secondary text-white px-6 rounded font-bold py-2 flex items-center  duration-1000 hover:bg-white hover:text-secondary "
            >
              Live Site <FiEye className="ml-3 mt-1 font-bold" />
            </a>
            <a
              href="https://github.com/abdul-dulal/red-onion"
              target="blank"
              className="cursor-pointer bg-secondary text-white px-6 rounded font-bold py-2 flex items-center  duration-1000 hover:bg-white hover:text-secondary"
            >
              View Code <BsCodeSlash className="ml-3 mt-1 font-bold" />
            </a>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Card;
