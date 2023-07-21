import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";
import logo from "./assets/logoo.png";
import hamburger from "../components/assets/hamburger.png";
import { MdFastfood } from "react-icons/md";

export const Header = () => {
  const totalItemsCount = useSelector((store) => store.cart.totalItemsCount);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const { user } = useContext(UserContext);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link
        className="flex gap-2 justify-center items-center"
        to="/"
        onClick={() => {
          toggleDropdown(false);
        }}
      >
        <img src={logo} className="w-[50px] h-[50px] object-contain" />
        <p className="logo_text">Zappy</p>
      </Link>
      <div className="mob:hidden sm:hidden xsm:hidden">
        <div className="flex gap-3 md:gap-5">
          <Link
            className="text-xl p-2  text-black-600 font-semibold items-center  rounded hover:bg-black hover:text-white  transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 "
            to="/"
          >
            {" "}
            Home
          </Link>
          <Link
            to="/about"
            className="text-xl p-2  text-black-600 font-semibold items-center  rounded hover:bg-black hover:text-white  transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 "
          >
            About
          </Link>
          <Link
            to="/help"
            className="text-xl p-2  text-black-600 font-semibold items-center  rounded hover:bg-black hover:text-white  transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 "
          >
            Help
          </Link>
          <Link
            to="/instamart"
            className="text-xl p-2  text-black-600 font-semibold items-center  rounded hover:bg-black hover:text-white  transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 "
          >
            Instamart
          </Link>
          <Link className="text-xl p-1 items-center flex gap-2" to="/cart">
            {<MdFastfood />}
            Cart {totalItemsCount}
          </Link>
          <img
            src={hamburger}
            className="rounded-full w-[47px] h-[47px]"
            alt="profile"
          />

          {isLoggedIn ? (
            <button onClick={() => setLoggedIn(false)} className="black_btn">
              Logout
            </button>
          ) : (
            <button onClick={() => setLoggedIn(true)} className="black_btn">
              Login
            </button>
          )}
        </div>
      </div>

      <div className="md:hidden relative">
        <div className="flex">
          <img
            src={hamburger}
            className="rounded-full w-[47px] h-[47px]"
            alt="profile"
            onClick={() => setToggleDropdown(!toggleDropdown)}
          />

          {toggleDropdown && (
            <div className="dropdown">
              <Link
                onClick={() => toggleDropdown(false)}
                className="text-xl p-2  text-black-600 font-semibold items-center  rounded hover:bg-black hover:text-white  transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 w-full"
                to="/"
              >
                {" "}
                Home
              </Link>
              <Link
                onClick={() => toggleDropdown(false)}
                to="/about"
                className="text-xl p-2  text-black-600 font-semibold items-center  rounded hover:bg-black hover:text-white  transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 w-full "
              >
                About
              </Link>
              <Link
                onClick={() => toggleDropdown(false)}
                to="/help"
                className="text-xl p-2  text-black-600 font-semibold items-center  rounded hover:bg-black hover:text-white  transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 w-full "
              >
                Help
              </Link>
              <Link
                onClick={() => toggleDropdown(false)}
                to="/instamart"
                className="text-xl p-2  text-black-600 font-semibold items-center  rounded hover:bg-black hover:text-white  transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 w-full "
              >
                Instamart
              </Link>
              <Link
                onClick={() => setToggleDropdown(false)}
                className="text-xl text-black-600 font-semibold p-1 items-center flex"
                to="/cart"
              >
                {<MdFastfood className="mr-2" />}
                Your Cart {totalItemsCount <= 0 ? "is Empty" : totalItemsCount}
              </Link>
              {isLoggedIn ? (
                <button
                  onClick={() => setLoggedIn(false)}
                  className="black_btn"
                >
                  Logout
                </button>
              ) : (
                <button onClick={() => setLoggedIn(true)} className="black_btn">
                  Login
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
