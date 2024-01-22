import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";
import logo from "./assets/logoo.png";
import hamburger from "../components/assets/hamburger.png";
import { MdFastfood } from "react-icons/md";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const Header = () => {
  const totalItemsCount = useSelector((store) => store.cart.totalItemsCount);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const { user } = useContext(UserContext);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const Links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Help",
      link: "/help",
    },
  ];

  return (
    <div className={` w-screen md:w-full top-0 left-0  sticky  `}>
      <div
        className={`md:flex items-center justify-between  py-2  md:px-10 px-7 z-20 bg-white`}
      >
        <div>
          <Link
            to="/"
            className="font-bold text-2xl cursor-pointer flex items-center text-gray-800 gap-2 "
          >
            <span className="text-3xl text-gray-600  pt-2">
              <img src={logo} className="w-[40px] h-[40px] object-contain" />
            </span>
            Zappy
          </Link>
          <div
            onClick={() => setToggleDropdown(!toggleDropdown)}
            className="text-3xl absolute right-8 top-6 cursor-pointer  md:hidden"
          >
            {toggleDropdown ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static $ md:z-auto -z-10 left-0 w-full md:w-auto md:pl-0 pl-9 bg-white transition-all duration-500 ease-in  ${
            toggleDropdown ? "top-12 opacity-100" : "top-[-290px]"
          } md:opacity-100`}
        >
          {Links.map((item) => (
            <li
              onClick={() => setToggleDropdown(false)}
              key={item.name}
              className="md:ml-8 md:my-0 my-7 text-xl"
            >
              <Link
                className="text-gray-800 hover:text-gray-400 duration-500"
                to={item.link}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li onClick={() => setToggleDropdown(false)} className="max-w-fit">
            <Link
              to="/cart"
              className=" flex gap-2 justify-center  py-2  hover:text-gray-500 rounded md:ml-8  duration-500 text-xl font-semibold w-[100px] md:border md:border-black md:px-2 md:gap-3 "
            >
              {totalItemsCount <= 0 ? "Cart" : totalItemsCount}
              <MdFastfood size={24} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
