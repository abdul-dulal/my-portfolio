import React, { useState } from "react";
import Card from "./Card";
import bagdomFont from "../../assets/img/bagdom-font.jpg";
import img2 from "../../assets/img/web3.png";
import node1 from "../../assets/img/download (1).jpg";
import node2 from "../../assets/img/vector.png";
const Portfolio = () => {
  const [show, setShow] = useState("all");

  const node = () => {
    setShow("node");
  };

  return (
    <div id="portfolio" className="bg-[#F5F5F5] mt-14">
      <div className="text-center py-14">
        <h4 className=" text-primary text-4xl  relative z-10 inline-block px-1 font-semibold uppercase after:absolute after:-bottom-6 after:right-0 after:-z-10 after:h-1 after:w-16 after:mr-14 after:-translate-y-2 after:bg-primary after:content-['']">
          Projects
        </h4>
      </div>
      <div className="flex lg:gap-10 uppercase text-[12px] ml-5  py-14 lg:px-48 lg:text-xl md:px-14 md:text-xl font-bold">
        <button
          onClick={() => setShow("all")}
          className={`md:px-8 lg:px-8 ${
            show === "all" ? "bg-secondary py-2 text-white " : "text-primary"
          }`}
        >
          ALL
        </button>
        <button
          onClick={node}
          className={` px-8 ${
            show === "node" ? "bg-secondary py-2 text-white " : "text-primary"
          }`}
        >
          NODE-JS
        </button>
        <button
          onClick={() => setShow("react")}
          className={` px-8 ${
            show === "react" ? "bg-secondary py-2 text-white " : "text-primary"
          }`}
        >
          REACT-JS
        </button>
        <button
          onClick={() => {
            setShow("js");
          }}
          className={` px-8 ${
            show === "js" ? "bg-secondary py-2  text-white " : "text-primary"
          }`}
        >
          JAVASCRIPT
        </button>
      </div>

      {/* invidual card */}
      {/* all er jnno alada akta route krte hbe */}
      {show === "all"}
      <div className=" grid grid-cols-3 gap-9 lg:px-48">
        {/* node card-start */}
        {show === "node" && (
          <Card title="nodejs" img={bagdomFont} tech="Node Js || React Js" />
        )}
        {show === "node" && (
          <Card title="nodejs" img={img2} tech="Node Js || React Js" />
        )}
        {/* node card-end */}
        {show === "react" && (
          <Card
            title="react"
            img={node1}
            des="ChowNow Discover is a platform that lets customers discover new local restaurants and provides business owners with tools to convert first time orders into lifelong diners."
          />
        )}
        {show === "react" && (
          <Card
            title="react"
            img={node2}
            des="ChowNow Discover is a platform that lets customers discover new local restaurants and provides business owners with tools to convert first time orders into lifelong diners."
          />
        )}
        {show === "js" && <Card title="javascript" />}
      </div>
    </div>
  );
};

export default Portfolio;
