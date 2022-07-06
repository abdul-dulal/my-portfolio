import React, { useEffect, useState } from "react";
import Modal from "./Modal";
const Node = () => {
  const [nodeData, setnodeData] = useState([]);
  const [popup, setPopup] = useState();
  useEffect(() => {
    fetch("Portfolio.json")
      .then((res) => res.json())
      .then((data) => setnodeData(data.filter((e) => e.status === "node")));
  }, []);

  return (
    <div className="grid grid-cols-3 px-48 gap-5 ">
      {nodeData.map((data) => (
        <div className="parent">
          <div>
            <img src={data.img} className="h-[300px] w-full" alt="" />
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
        </div>
      ))}
      <Modal popup={popup} />
    </div>
  );
};

export default Node;
