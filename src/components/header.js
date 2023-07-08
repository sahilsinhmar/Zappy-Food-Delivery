import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";
import logo from "./assets/logo.png";
import { MdFastfood } from "react-icons/md";

const loggedInUser = () => {
  return true;
};

const Title = () => (
  <a href="/">
    <img className="w-full h-full object-cover  " alt="logo" src={logo} />
  </a>
);

export const Header = () => {
  const totalItemsCount = useSelector((store) => store.cart.totalItemsCount);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const { user } = useContext(UserContext);

  return (
    <div className=" flex border h-20 items-center justify-between p-10  ">
      <div className="ml-20 w-40 h-20 pt-4 items-center ">{Title()}</div>
      <div className="   p-2 flex gap-10 h-20 items-center">
        <ul className="flex gap-10">
          <Link
            className="text-xl p-2  text-black-600 font-semibold items-center  rounded hover:bg-black hover:text-white  transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 "
            to="/"
          >
            <li>Home</li>
          </Link>
          <Link
            to="/about"
            className="text-xl p-2  text-black-600 font-semibold items-center  rounded hover:bg-black hover:text-white  transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 "
          >
            <li>About</li>
          </Link>
          <Link
            to="contact"
            className="text-xl p-2  text-black-600 font-semibold items-center  rounded hover:bg-black hover:text-white  transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 "
          >
            <li>Contact</li>
          </Link>
          <Link
            to="/instamart"
            className="text-xl p-2  text-black-600 font-semibold items-center  rounded hover:bg-black hover:text-white  transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 "
          >
            <li>Instamart</li>
          </Link>
          <Link className="text-xl p-1 items-center" to="/cart">
            <li className="flex items-center gap-2">
              {<MdFastfood />}
              {totalItemsCount} Cart
            </li>
          </Link>
        </ul>
        {user.name}
        {isLoggedIn ? (
          <button onClick={() => setLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setLoggedIn(true)}>Login</button>
        )}
      </div>
    </div>
  );
};
