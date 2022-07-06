import React, { useState } from "react";

import All from "./All";
import Node from "./Node";
import Reactdemo from "./Reactdemo";
import JavaScript from "./JavaScript";

const Portfolio = () => {
  const [show, setShow] = useState("all");

  return (
    <div id="portfolio" className="  bg-[#111827] mt-14">
      <div className="text-center py-14">
        <h4 className=" text-white text-4xl   relative z-0 inline-block px-1 font-semibold uppercase after:absolute after:-bottom-6 after:right-0 after:-z-10 after:h-1 after:w-16 after:mr-14 after:-translate-y-2 after:bg-white after:content-['']">
          Projects
        </h4>
      </div>
      <div className="flex lg:gap-10 uppercase text-[12px] ml-5  py-14 lg:px-48 lg:text-xl md:px-14 md:text-xl  font-bold">
        <button
          onClick={() => setShow("all")}
          className={`md:px-8 lg:px-8  t  ${
            show === "all" ? "bg-secondary py-2 text-white " : "text-white"
          }`}
        >
          ALL
        </button>
        <button
          onClick={() => setShow("node")}
          className={` px-10  ${
            show === "node" ? "bg-secondary py-2 text-white " : "text-white"
          }`}
        >
          NODE-JS
        </button>
        <button
          onClick={() => setShow("react")}
          className={` px-8 ${
            show === "react" ? "bg-secondary py-2 text-white " : "text-white"
          }`}
        >
          REACT-JS
        </button>
        <button
          onClick={() => {
            setShow("js");
          }}
          className={` px-8 ${
            show === "js" ? "bg-secondary py-2  text-white " : "text-white"
          }`}
        >
          JAVASCRIPT
        </button>
      </div>

      <div>
        {show === "all" && <All />}
        {show === "node" && <Node />}
        {show === "react" && <Reactdemo />}
        {show === "js" && <JavaScript />}
      </div>
    </div>
  );
};

export default Portfolio;
