import React from "react";

const AboutChild = ({ img, title, subTitle }) => {
  return (
    <div>
      <div className=" text-center text-primary">
        <div>
          <img src={img} className="w-48 blocl mx-auto" alt="" />
        </div>
        <div className="">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-[16px]">{subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutChild;
