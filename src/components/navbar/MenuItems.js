import { Link } from "react-router-dom";

import { AiOutlineClose } from "react-icons/ai";

const MenuItems = ({ active }) => {
  return (
    <div>
      <nav>
        <ul
          className={`ml-5 lg:hidden  text-white text-[18px] uppercase ${
            active ? "" : "hidden"
          }`}
        >
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
    </div>
  );
};

export default MenuItems;
