import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";
import logo from "./assets/logo.png";

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
          <Link className="border text-xl p-1 items-center " to="/">
            <li>Home</li>
          </Link>
          <Link className="border text-xl p-1 items-center" to="/About">
            <li>About</li>
          </Link>
          <Link className="border text-xl p-1 items-center" to="/contact">
            <li>Contact</li>
          </Link>
          <Link className="border text-xl p-1 items-center" to="/instamart">
            <li>Instamart</li>
          </Link>
          <Link className="text-xl p-1 items-center" to="/cart">
            <li>Cart{totalItemsCount}</li>
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
