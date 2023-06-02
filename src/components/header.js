import { useState } from "react";

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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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
