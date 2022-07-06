import React, { useEffect, useState } from "react";
import { FiEye } from "react-icons/fi";
import "./Card.css";
const All = () => {
  const [alldata, setAlldata] = useState([]);
  useEffect(() => {
    fetch("Portfolio.json")
      .then((res) => res.json())
      .then((data) => setAlldata(data));
  }, []);
  return (
    <div className="grid grid-cols-3 px-48 gap-5">
      {alldata.map((data) => (
        <div className="parent">
          <div className="">
            <img src={data.img} className="h-[300px] w-full" alt="" />
          </div>

          <div className="hello">
            <a
              href="https://red-onion-a5d19.web.app/"
              target="black"
              className="cursor-pointer bg-secondary text-white w-32 h-12 mt-3 rounded font-bold py-2 flex items-center  duration-1000 hover:bg-white hover:text-secondary "
            >
              Live Site <FiEye className="ml-3 mt-1 font-bold" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default All;
