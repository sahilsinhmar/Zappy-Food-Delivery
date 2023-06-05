import { useState } from "react";
import { Link } from "react-router-dom";

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
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};
