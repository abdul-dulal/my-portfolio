import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import { HiOutlineMenu } from "react-icons/hi";
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const show = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className=" bg-[#1B242F] sticky top-0 z-10 ">
        <nav>
          <div>
            <HiOutlineMenu
              onClick={show}
              className="text-white text-5xl block ml-auto  lg:hidden"
            />
          </div>
          <ul className="hidden lg:flex gap-8 lg:h-14 items-center lg:px-48 text-white text-[18px] uppercase">
            <li className=" ">
              <Link activeClass="active" smooth spy to="about">
                Home
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="portfolio">
                Protfolio
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="about">
                About
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="blog">
                BLOG
              </Link>
            </li>

            <li>
              <Link activeClass="active" smooth spy to="contact">
                CONTACT ME
              </Link>
            </li>
          </ul>
        </nav>

        <MenuItems active={isActive} />
      </div>
    </>
  );
};

export default Navbar;
