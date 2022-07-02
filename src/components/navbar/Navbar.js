import React, { useState } from "react";
import MenuItems from "./MenuItems";
import { HiOutlineMenu } from "react-icons/hi";
import Scrollspy from "react-scrollspy";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
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
              <Link
                to="/"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer"
              >
                Protfolio
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                smooth
                spy
                to="blog"
                className="cursor-pointer"
              >
                BLOG
              </Link>
            </li>

            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer"
              >
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
