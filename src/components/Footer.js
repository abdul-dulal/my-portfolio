import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { RiLinkedinFill } from "react-icons/ri";
import { FiChevronsUp } from "react-icons/fi";

const Footer = () => {
  const top = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-[#111827]">
      <div className="relative mt-0">
        <span
          className="block mx-auto bg-secondary cursor-pointer text-3xl h-14 text-white  w-14"
          onClick={top}
        >
          <FiChevronsUp className="ml-3 " />
        </span>
      </div>
      <div className="  h-72 flex items-center justify-center">
        <div className="space-y-8">
          <div className="flex space-x-3 font-bold text-white ">
            <a href="https://github.com/abdul-dulal" target="blank">
              <BsGithub className=" border-2 border-gray-100 rounded-md p-1 text-4xl transform hover:scale-y-90 duration-1000 hover:bg-secondary " />
            </a>
            <a href="https://www.linkedin.com/in/abdul-dulal-islam/">
              <RiLinkedinFill className=" border-2 border-gray-100 rounded-md p-1 text-4xl transform hover:scale-y-90 duration-1000 hover:bg-secondary " />
            </a>
            <a href="https://web.facebook.com/abduldulalislam" target="blank">
              <FiFacebook className=" border-2 border-gray-100 rounded-md p-1 text-4xl transform hover:scale-y-90 duration-1000 hover:bg-secondary " />
            </a>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
              <AiOutlineMail className=" border-2 border-gray-100 rounded-md p-1 text-4xl transform hover:scale-y-90 duration-1000 hover:bg-secondary " />
            </a>
          </div>

          <div className="text-white">
            <p>
              Designed &amp; Developed by
              <span className="font-bold text-secondary text-xl">
                Abdul Dulal
              </span>
            </p>
            <span> Copyright &copy; 2022 All Rights Reserved</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
