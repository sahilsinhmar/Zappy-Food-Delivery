import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./utils/UserContext";

const loggedInUser = () => {
  return true;
};

const Title = () => (
  <a href="/">
    <img
      alt="logo"
      className="logo"
      src="https://cdn.dribbble.com/users/296356/screenshots/10594761/eatfit_brand_logo-02.jpg"
    />
  </a>
);

export const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const { user } = useContext(UserContext);
  return (
    <div className="header">
      {Title()}
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/About">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/instamart">
            <li>Instamart</li>
          </Link>
          <li>Cart</li>
        </ul>
      </div>
      {user.name}
      {isLoggedIn ? (
        <button onClick={() => setLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};
